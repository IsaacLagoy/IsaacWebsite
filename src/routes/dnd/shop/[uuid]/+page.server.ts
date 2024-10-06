import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {supabase} from "$lib/supabaseClient";
import type {ItemData} from '$lib/index';
import {cartStore} from '$lib/index';

let item_data: ItemData;

export const load: PageServerLoad = async ({ params }) => {
    const {data} = await supabase.from("items").select("*").eq("id", params.uuid);
    
    if (data) {
        item_data = data![0];
        return item_data;
    }

	error(404, 'Not found');
};

export const actions = {
    'add-to-cart': async({request}) => {
        // gets form data and cart items
        const form = await request.formData();
        const dict : {[key: string]: number} = cartStore.get();

        if (!dict.hasOwnProperty(item_data.id)){
            dict[item_data.id] = Number(form.get('quantity'));
        } else {
            dict[item_data.id] = dict[item_data.id] + Number(form.get('quantity'));
        };
        
        cartStore.set(dict);
    },
};