import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {supabase} from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ params }) => {
    const exit = '/dndDatabase/dndCharacters/dndClasses/'+params.class+'/'+params.sheet
    if (params.skill !== '0') {
        const {data} = await supabase.from("skills").select().eq("id", params.skill);
        if (!data) {
            error(404, 'Not found');
        };
        const skill = data[0];
        return {
            pageType: 'skill',
            ability: skill,
            exit: exit
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
            exit: exit
        }
    };
    error(404, 'Not found');
};