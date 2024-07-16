import type {PageServerLoad} from './$types';
import {error} from '@sveltejs/kit';
import {supabase} from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ params }) => {
    // skill sheets
    let {data: sheetData} = await supabase.from("skill_sheets").select().eq("id", params.sheet);
    if (!sheetData) {
        error(404, 'Not found');
    }
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
    const newSheet = {
        id: oldSheet.id,
        name: oldSheet.name,
        description: oldSheet.description,
        skills: sheetSkills,
        spells: sheetSpells,
        starting_skills: oldSheet.starting_skills ?? [],
        starting_spells: oldSheet.starting_spells ?? []
    };
    //skills
    let allSkills = newSheet.skills.flat().concat(newSheet.starting_skills);
    let {data: skillData} = await supabase.from("skills").select().in("id", allSkills);
    // adds skills to id dictionary
    let skills: {[key: string]: {
        name: string,
    }} = {};
    skillData?.forEach((skill) => {
        skills[skill.id] = {
            name: skill.name, 
        };
    });

    // spells
    let allSpells = newSheet.spells.flat().concat(newSheet.starting_spells);
    let {data: spellData} = await supabase.from("spells").select().in("id", allSpells);
    // adds skills to id dictionary
    let spells: {[key: string]: {
        name: string,
        cost: string
    }} = {};
    spellData?.forEach((spell) => {
        spells[spell.id] = {
            name: spell.name, 
            cost: spell.cost
        };
    });

    const exit = '/dndDatabase/dndCharacters/dndClasses/'+params.class

    return {
        sheet: newSheet,
        skills: skills,
        spells: spells,
        exit: exit,
        paramsClass: params.class,
        paramsSheet: params.sheet
    };
};