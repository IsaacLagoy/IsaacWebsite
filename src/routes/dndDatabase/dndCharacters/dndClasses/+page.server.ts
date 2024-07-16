import {supabase} from "$lib/supabaseClient";

// pulls data from database
export async function load() {
    const {data} = await supabase.from("classes").select();
    return {
        items: data ?? [],
    };
};