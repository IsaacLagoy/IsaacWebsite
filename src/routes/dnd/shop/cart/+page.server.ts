import type {ItemData} from '$lib/index';
import {cartStore, extraStore, discountStore} from '$lib/index';
import {supabase} from "$lib/supabaseClient";

export type CartData = {
    id: string;
    name: string;
    cost: number;
    quantity: number;
};

// pulls data from database
export async function load() {
    const cartData = cartStore.get();
    const cartIds = Object.keys(cartData);
    const {data} = await supabase.from("items").select().in('id', cartIds);

    const cart : CartData[] = [];

    data?.forEach((item : ItemData) => {
        cart.push({id: item.id, name: item.name, cost: item.cost, quantity: cartData[item.id]});
    });

    return {
        items: cart,
        extra: extraStore.get(),
        discount: discountStore.get()
    };
};

export const actions = {
    'remove-from-cart' : async({request}) => {
        const form = await request.formData();
        const id= form.get('id');

        let cart = cartStore.get();
        if (typeof id === 'string') {delete cart[id]};
        cartStore.set(cart);
    },
    'update-stores' : async({request}) => {
        // get the data
        const data = await request.json();
        // save the data
        extraStore.set(data.extra);
        discountStore.set(data.discount);
        
        const cart : {[key : string]: number} = {};
        data.cart?.forEach((item : CartData) => {
            cart[item.id] = item.quantity;
        });
        cartStore.set(cart);
        
        // return a success
        return {
            status: 200,
            body: {
                message: 'Data recieved sucessfully',
                data: data
            }
        };
    }
};