import race_data from '$lib/data/dnd/races.json';
import characters from '$lib/data/dnd/character_images.json';

export async function load(){

    const images = race_data.map(r => {
        const filtered = characters
            .filter(ch => ch.race === r.url)
            .map(ch => ch.image);
        
        if (filtered.length === 0) return 'blank.png';
        return filtered[Math.floor(Math.random() * filtered.length)];
    });

    const races = race_data.map((r, i) => ({race: r, image: images[i], flip: Math.random() < 0.5}));

    return {
        races
    };
}