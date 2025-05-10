import project_data from '$lib/data/projects.json';
import skills_data from '$lib/data/skills.json';

export async function load() {
    return {
        project_data,
        skills_data
    };
}