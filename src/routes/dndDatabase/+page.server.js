import {supabase} from "$lib/supabaseClient";
import {filterCategoriesStore} from "$lib/index";

// pulls data from database
export async function load() {

    /**
     * @type {string | readonly any[] | Record<string, unknown>}
     */
    const filterCategories = filterCategoriesStore.get();
    // @ts-ignore
    const {data} = await supabase.from("items").select().contains('category', filterCategories.categories).gte("cost", 1000);

    return {
        categories: filterCategories ?? [],
        items: data ?? [],
    };
}

export const actions = {
    'set-filter-categories': async({request}) => {
        // gets muliselect form data
        const form = await request.formData();
        const filterString = form.get('filter');
        // @ts-ignore
        const filter = JSON.parse(filterString);
        filterCategoriesStore.set({
            categories: filter.categories,
            less: null,
            greater: 1000
        });
    }
};
