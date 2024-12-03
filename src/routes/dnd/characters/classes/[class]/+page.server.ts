import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {supabase} from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ params }) => {
    // classes
    const {data: classDataArray} = await supabase.from("classes").select().eq("id", params.class);
    if (!classDataArray) {
        error(404, 'Not found');
    };
    const classData = classDataArray[0];

    // skill sheets
    const {data: sheetData} = await supabase.from("skill_sheets").select().in("id", classData.skill_sheets);

    return {
        class : classData,
        sheets: sheetData ?? [],
        paramsClass: params.class
    };
};