import type {PageServerLoad} from './$types';
import {error} from '@sveltejs/kit';
import {supabase} from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ params }) => {
    // skill sheets
    let {data: sheetData} = await supabase.from("skill_sheets").select().eq("id", params.uuid);
    //skills
    let {data: skillData} = await supabase.from("skills").select();
    let skills: {[key: string]: {
        name: string,
    }} = {};
    skillData?.forEach((skill) => {
        skills[skill.id] = {
            name: skill.name, 
        };
    });

    // spells
    let {data: spellData} = await supabase.from("spells").select();
    let spells: {[key: string]: {
        name: string, 
        cost: string,
    }} = {};
    spellData?.forEach((spell) => {
        spells[spell.id] = {
            name: spell.name, 
            cost: spell.cost,
        };
    });

    // checking for nullity
    if (!sheetData || !skillData || !spellData) {
        error(404, 'Not found');
    };

    const oldSheet = sheetData[0];
    let sheetSkills: string[][] = [];
    let sheetSpells: string[][] = [];

    // convert database sheet to array type
    for (let i = 0; i <= 20; i++) {
        const skillKey = 'skills' + i as keyof typeof oldSheet;
        const spellKey = 'spells' + i as keyof typeof oldSheet;

        if (oldSheet[skillKey]) {
            sheetSkills.push(oldSheet[skillKey] as string[]);
        } else {
            sheetSkills.push([] as string[]);
        };
        if (oldSheet[spellKey]) {
            sheetSpells.push(oldSheet[spellKey] as string[]);
        } else {
            sheetSpells.push([] as string[]);
        };
    };

    return {
        skill_sheet: {
            id: oldSheet.id,
            name: oldSheet.name,
            description: oldSheet.description,
            skills: sheetSkills,
            spells: sheetSpells
        },
        skills: skills,
        spells: spells
    };
};

export const actions = {
    'save': async({request}) => {
        // get data for sheet
        const form = await request.formData();
        const sheetData = form.get('sheet') as string;
        if (!sheetData) {
            error(404, 'Not found');
        }
        const oldSheet = JSON.parse(sheetData);

        // upload data to server
        let newSheet = {
            id: oldSheet.id,
            name: oldSheet.name,
            description: oldSheet.description
        };
        for (let i = 1; i <= 20; i++) {
            const skillKey = 'skills' + i as keyof typeof newSheet;
            const spellKey = 'spells' + i as keyof typeof newSheet;

            newSheet[skillKey] = oldSheet.skills[i];
            newSheet[spellKey] = oldSheet.spells[i];
        };

        const {error: databaseError} = await supabase.from('skill_sheets').update(newSheet).eq('id', newSheet.id);
    }
};