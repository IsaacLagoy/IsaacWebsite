import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {supabase} from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ params }) => {
    // classes
    const {data: raceDataArray} = await supabase.from("races").select().eq("id", params.race);
    if (!raceDataArray) {
        error(404, 'Not found');
    };
    const raceData = raceDataArray[0];

    // skill sheets
    const {data: skills} = await supabase.from("skills").select().in("id", raceData.skills);

    return {
        race : raceData,
        paramsRace: params.race,
        skills : skills ?? []
    };
};