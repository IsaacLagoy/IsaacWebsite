import class_data from '$lib/data/dnd/classes.json';
import characters from '$lib/data/dnd/character_images.json';

export async function load() {

    const images = class_data.map(c => {
        const filtered = characters
            .filter(ch => ch.classes.includes(c.url))
            .map(ch => ch.image);
        
        if (filtered.length === 0) return 'blank.png';
        return filtered[Math.floor(Math.random() * filtered.length)];
    });

    const classes = class_data.map((c, i) => ({class: c, image: images[i], flip: Math.random() < 0.5}));

    return {
        classes
    };
}