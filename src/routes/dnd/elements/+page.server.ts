import elements from '$lib/data/dnd/elements.json';
import type { DndElement } from '$lib/util/types';

export async function load() {

    // create transpose graph
    let elements_graph: DndElement[] = elements.map(e => ({
        name: e.name,
        description: e.description,
        effective_against: e.effective_against,
        weak_against: elements
            .filter(el => el.effective_against.some(name => name === e.name))
            .map(el => el.name),
        color: e.color,
        text: e.text
    }));

    return {
        elements: elements_graph
    }
}