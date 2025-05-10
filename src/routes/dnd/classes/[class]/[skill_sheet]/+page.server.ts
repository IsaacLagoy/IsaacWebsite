import skill_sheet_data from '$lib/data/dnd/skill_sheets.json';
import skill_data from '$lib/data/dnd/skills.json';
import spells_data from '$lib/data/dnd/spells.json';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { notNull } from '$lib/util/types';

export const load: PageServerLoad = async ({ params }) => {
    const skill_sheet = skill_sheet_data.find(ss => ss.url.includes(params.skill_sheet));

    if (!skill_sheet) {
        throw error(404, 'Skill sheet not found');
    }

    const skills = skill_sheet.skills.map(skillList =>
        skillList
        .map(skillName => skill_data.find(skill => skill.name.toLowerCase() === skillName.toLowerCase()))
        .filter(notNull)
    );

    const spells = skill_sheet.spells.map(spellList =>
    spellList.map(spellName => spells_data.find(spell => spell.name.toLowerCase() === spellName.toLowerCase()))
    .filter(notNull)
    );
      

    const skillspells = skills.map((val, i) => ({skills: val, spells: spells[i]}));
    const class_name = params.class;

    return {
        skill_sheet,
        skillspells,
        class_name
    };
};
