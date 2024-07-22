import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {supabase} from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ params }) => {
    // skill
    const {data: skillDataArray} = await supabase.from("skills").select().eq("id", params.skill);
    if (!skillDataArray) {
        error(404, 'Not found');
    };
    const skillData = skillDataArray[0];

    return {
        skill : skillData,
        paramsRace: params.race
    };
};