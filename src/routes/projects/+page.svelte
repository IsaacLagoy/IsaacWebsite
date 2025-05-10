<script lang='ts'>
    import './projects.css';
    import '$lib/styles/tile-grid.css';
    import '$lib/styles/project.css';

    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
    import Multiselect from '$lib/components/Multiselect.svelte';

    export let data; // import project data

    // set up projects
    let projects = data.project_data; // change name
    let skills = data.skills_data;
    let selected_skills: string[] = [];

    $: filtered_projects = selected_skills.length === 0
        ? projects
        : projects.filter(project => selected_skills.every(skill => project.skills.includes(skill)));

    // load skills from url
    onMount(() => {
        const url = get(page).url;
        const skills_param = url.searchParams.get('skills');

        if (skills_param) {
            const keys_from_url = skills_param.split(',')
                .map(key => key.trim())
                .filter(key => skills.map(skill => skill.key).includes(key)); // filter out non-existent keys
            selected_skills = skills
                .filter(skill => keys_from_url.includes(skill.key)) // get skills that have keys
                .map(skill => skill.name); // get names of those skills
        }
    })
</script>

<div class='project-body'>
    <h1>Projects</h1>
    <Multiselect
        options={skills.map(skill => skill.name)}
        bind:selected={selected_skills}
        placeholder='Filter by skills'
    />

    <div class='tile-grid'>
        {#each filtered_projects as project}
            <div class='project tile'>
                <a href={project.href}>
                    <div class='project thumbnail-wrapper'>
                        <img src={`/${project.thumb}`} alt={project.name} />
                    </div>
                    <div class='project title'>{project.name}</div>
                </a>

            </div>
        {/each}
        {#if filtered_projects.length === 0}
            <div style='padding-bottom: 200px;'></div>
        {/if}
    </div>
</div>
