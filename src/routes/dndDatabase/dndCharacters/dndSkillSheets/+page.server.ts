import {supabase} from "$lib/supabaseClient";
import {filterCategoriesStore} from "$lib/index";

// pulls data from database
export async function load() {
    const {data} = await supabase.from("skill_sheets").select();
    return {
        items: data ?? [],
    };
}

export const actions = {
    
};
