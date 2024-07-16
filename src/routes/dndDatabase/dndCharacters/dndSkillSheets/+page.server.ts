import {supabase} from "$lib/supabaseClient";

// pulls data from database
export async function load() {
    const {data} = await supabase.from("skill_sheets").select();
    return {
        items: data ?? [],
    };
};
