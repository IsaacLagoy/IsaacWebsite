import skills from '$lib/data/dnd/skills.json';
import spells from '$lib/data/dnd/spells.json';
import type { Skill, Spell } from '$lib/util/types';

export async function load(){

    const skillspells: (Skill | Spell)[] = [...skills, ...spells].sort((a, b) => a.name.localeCompare(b.name));

    return {
        skillspells
    }
}