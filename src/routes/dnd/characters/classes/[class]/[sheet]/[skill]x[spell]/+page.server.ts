import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {supabase} from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ params }) => {

    let {data: sheetData} = await supabase.from("skill_sheets").select().eq("id", params.sheet);
    if (!sheetData) {
        error(404, 'Not found');
    }

    let {data: classData} = await supabase.from("classes").select().eq("id", params.class);
    if (!classData) {
        error(404, 'Not found');
    }

    if (params.skill !== '0') {
        const {data} = await supabase.from("skills").select().eq("id", params.skill);
        if (!data) {
            error(404, 'Not found');
        };
        const skill = data[0];
        return {
            pageType: 'skill',
            ability: skill,
            class: classData[0],
            sheet: sheetData[0]
        }

    } else if (params.spell !== '0') {
        const {data} = await supabase.from("spells").select().eq("id", params.spell);
        if (!data) {
            error(404, 'Not found');
        };
        const spell = data[0];
        return {
            pageType: 'spell',
            ability: spell,
            class: classData[0],
            sheet: sheetData[0]
        }
    };
    error(404, 'Not found');
};