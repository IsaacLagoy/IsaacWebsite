import skill_data from '$lib/data/dnd/skills.json';
import spell_data from '$lib/data/dnd/spells.json';
import type { Skill, Spell } from '$lib/util/types';

export async function load() {
    const skillspells: (Skill | Spell)[] = [...skill_data, ...spell_data].sort((a, b) => a.name.localeCompare(b.name));
    const skills = skill_data;
    const spells = spell_data;

    return {
        skills,
        spells,
        skillspells
    }
}