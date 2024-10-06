import {supabase} from "$lib/supabaseClient";

export async function load({ url }) {
    // load parameters
    const page = Number(url.searchParams.get('page')) || 1;
    const categories = url.searchParams.get('categories')?.split(',') || [];
    const less = Number(url.searchParams.get('less')) || 100000000;
    const greater = Number(url.searchParams.get('greater')) || 1;

    const { count } = await supabase.from("items")
        .select('*', { count: 'exact', head: true })
        .contains('category', categories)
        .gte("cost", greater)
        .lte("cost", less);

    // returns nothing if count is zero
    if (!count || count === 0) {
        return {
            categories: { categories, less, greater },
            items: [],
            pages: 1,
            currentPage: page
        };
    };

    const { data } = await supabase.from("items")
        .select()
        .contains('category', categories)
        .gte("cost", greater)
        .lte("cost", less)
        .range(50 * (page - 1), Math.min(50 * page, count) - 1);

    return {
        categories: { categories, less, greater },
        items: data ?? [],
        pages: Math.ceil(count / 50),
        currentPage: page
    };
}


