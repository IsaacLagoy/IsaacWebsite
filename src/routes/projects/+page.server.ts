// import python project thumbnails
import diceyDecks from '$lib/images/dicey_decks.png';
import basilisk from '$lib/images/basilisk_black_thumb.png';
import adder from '$lib/images/adder.jpeg';
import quick_sort from '$lib/images/quick_sort.png';
import tetris_ML from '$lib/images/tetris_ML.png';
import dnd_shop from '$lib/images/dnd_shop.png';
import indepenDanceDay from '$lib/images/indepenDanceDay.png';

// import web dev thumbnails
import isaaclagoyFavicon from '$lib/images/favicon.png';

// import other thumbnails
import powerAutomate from '$lib/images/power_automate.png';

export async function load() {
    const python_projects: {
        title: string,
        thumb: string,
        href: string
    }[] = [
        {title:'Dicey Decks', thumb:diceyDecks, href:'/projects/diceyDecks'},
        {title:'Tetris ML', thumb:tetris_ML, href:'/projects/tetrisML'},
        {title:'Visual Sorters', thumb:quick_sort, href:'/projects/visualSorters'},
        {title:'IndepenDance Day', thumb:indepenDanceDay, href:'/projects/indepenDanceDay'},
        {title:'Bitwise Calculator', thumb:adder, href:'/projects/bitwiseCalc'},
    ];

    const web_dev_projects: {
        title: string,
        thumb: string,
        href: string
    }[] = [
        {title:'isaaclagoy.com', thumb:isaaclagoyFavicon, href:'/projects/isaaclagoy'},
        {title:'D&D Database', thumb:dnd_shop, href:'/dnd'}
    ];

    const other_projects: {
        title: string,
        thumb: string,
        href: string
    }[] = [
        {title:'Power Automate', thumb:powerAutomate, href:'/projects/powerAutomate'}
    ];

    return {
        projects: {
            python: python_projects,
            web_dev: web_dev_projects,
            other: other_projects
        }
    };
}