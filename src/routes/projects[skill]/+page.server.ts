import dicey_decks from '$lib/images/dicey_decks.png';
import basilisk_bowl from '$lib/images/basilisk_bowl.png';
import google_maps_site from '$lib/images/google_maps_site.png';
import power_automate from '$lib/images/power_automate.png';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    // lists of projects
    const projects: {
        title: string, 
        thumb: string,
        skills: string[],
        description: string,
        link: string
    }[] = [
        {
            title:'Dicey Decks',
            thumb:dicey_decks,
            skills:['Python'],
            description:'Winner of the Spring 2024 TAGD Game Jam Programming Award',
            link:'diceyDecks'
        },
        {
            title:'isaaclagoy.com',
            thumb:dicey_decks,
            skills:['HTML', 'TypeScript', 'CSS', 'Svelte'],
            description:'Learn about how I made this website!',
            link:'website'
        },
        {
            title:'Basilisk Engine',
            thumb:basilisk_bowl,
            skills:['Python'],
            description:'A game engine I\'ve been working on with a friend for upcoming game jams',
            link:'basilisk'
        },
        {
            title:'Google Maps Finder',
            thumb:google_maps_site,
            skills:['HTML', 'TypeScript', 'Svelte'],
            description:'A simple project using the Google Maps API',
            link:'jarvis'
        },
        {
            title:'Structurology Flows',
            thumb:power_automate,
            skills:['Power Automate'],
            description:'These are a few flows I created during my time at Structurology',
            link:'flows'
        },
    ];
    
    // load in params
    if (params.skill) {
        return {
            projects: projects,
            skill: params.skill
        };
    } else {
        return {
            projects: projects,
            skill: 'None'
        };
    };
};