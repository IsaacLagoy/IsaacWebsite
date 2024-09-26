// import python project thumbnails
import diceyDecks from '$lib/images/dicey_decks.png';
import basilisk from '$lib/images/basilisk_black_thumb.png';

// import web dev thumbnails
import mapsFinder from '$lib/images/google_maps_site.png';
import isaaclagoyFavicon from '$lib/images/favicon.png';

// import other thumbnails
import powerAutomate from '$lib/images/power_automate.png';

export async function load() {
    const python_projects: {
        title: string,
        thumb: string,
        href: string
    }[] = [
        {title:'Dicey Decks', thumb:diceyDecks, href:'diceyDecks'},
        {title:"Basilisk Engine", thumb:basilisk, href:'basilisk'}
    ];

    const web_dev_projects: {
        title: string,
        thumb: string,
        href: string
    }[] = [
        {title:'isaaclagoy.com', thumb:isaaclagoyFavicon, href:'isaaclagoy'},
        {title:'D&D Database', thumb:isaaclagoyFavicon, href:'dndDatabase'},
        {title:'Maps Finder', thumb:mapsFinder, href:'mapsFinder'},
    ];

    const other_projects: {
        title: string,
        thumb: string,
        href: string
    }[] = [
        {title:'Power Automate', thumb:powerAutomate, href:'powerAutomate'}
    ];

    return {
        projects: {
            python: python_projects,
            web_dev: web_dev_projects,
            other: other_projects
        }
    };
}