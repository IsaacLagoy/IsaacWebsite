import items from '$lib/data/dnd/equipment.json';
import enchantments from '$lib/data/dnd/enchantments.json';
import dice from '$lib/data/dnd/dice.json';
import elements from '$lib/data/dnd/elements.json';
import materials from '$lib/data/dnd/materials.json';

export async function load() {
    return {
        items,
        enchantments,
        dice,
        elements,
        materials
    }
}