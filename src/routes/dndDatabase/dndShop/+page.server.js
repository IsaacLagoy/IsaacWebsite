import {supabase} from "$lib/supabaseClient";
import {filterCategoriesStore} from "$lib/index";

// pulls data from database
export async function load() {
    const filterCategories = filterCategoriesStore.get();
    const {data} = await supabase.from("items").select().contains('category', filterCategories.categories).gte("cost", filterCategories.greater).lte("cost", filterCategories.less);

    return {
        categories: filterCategories ?? [],
        items: data ?? [],
    };
}

export const actions = {
    'set-filter-categories': async({request}) => {
        // gets muliselect form data
        const form = await request.formData();
        // @ts-ignore
        const filter = JSON.parse(form.get('filter'));
        // check numericals
        // @ts-ignore
        const less = form.get('less') !== '' ?  parseInt(form.get('less')) : 1000000000;
        // @ts-ignore
        const greater = form.get('greater') !== '' ?  parseInt(form.get('greater')) : 0;
        
        filterCategoriesStore.set({
            categories: filter,
            less: less,
            greater: greater
        });
    }
};
