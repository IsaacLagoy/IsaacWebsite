import classes_data from '$lib/data/dnd/classes.json';
import skill_sheet_data from '$lib/data/dnd/skill_sheets.json';
import characters from '$lib/data/dnd/character_images.json';
import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({ params }) => {
    let player_class = classes_data.find(c => c.url.includes(params.class));
    let skill_sheets = skill_sheet_data
        .filter(skill_sheet => player_class?.skill_sheets.some(name => skill_sheet.name === name))
        .map(skill_sheet => ({name: skill_sheet.name, url: skill_sheet.url}));

    const filtered = characters
        .filter(ch => ch.classes.includes(params.class))
        .map(ch => ch.image);

    const image = filtered.length === 0 ? 'blank.png' : filtered[Math.floor(Math.random() * filtered.length)];

    if (player_class && skill_sheets) return { 
        image,
        player_class,
        skill_sheets
    };

    error(404, 'class not found');
}