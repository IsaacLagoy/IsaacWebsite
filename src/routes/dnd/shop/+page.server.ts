import items from '$lib/data/dnd/items.json';

export async function load() {
    let categories = [
        {name: 'Clothing', key: 'clothing'},
        {name: 'Food', key: 'food'},
        {name: 'Jewelry', key: 'jewelry'},
        {name: 'Plant', key: 'plant'},
        {name: 'Potion', key: 'potion'},
        {name: 'Spell', key: 'spell'},
        {name: 'Supplies', key: 'supplies'},
        {name: 'Weapon', key: 'weapon'},
    ];
    
    return {
        items,
        categories
    };
}