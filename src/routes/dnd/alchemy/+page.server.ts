import stats from '$lib/data/dnd/statistics.json';
import elements from '$lib/data/dnd/elements.json';
import potions from '$lib/data/dnd/potions.json';

export async function load() {
    return {
        elements,
        potions,
        stats
    }
}