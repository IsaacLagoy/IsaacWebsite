<script lang='ts'>
    import {writable} from 'svelte/store';
    export let data;

    const search = writable<string>(data.skill);
</script>

<h1 class='page-title'>Projects</h1>

<div class='page'>
    <div class='text-center'>
        <h1>Skill Search</h1>
        <select
            bind:value={$search}
        >
            <option value='None'> </option>
            <option value='Python'>Python</option>
            <option value='HTML'>HTML</option>
            <option value='TypeScript'>TypeScript</option>
            <option value='CSS'>CSS</option>
            <option value='Svelte'>Svelte</option>
            <option value='Power Automate'>Power Automate</option>
        </select>
    </div>

    <div class='spacer-five'></div>
    {#each data.projects as project}
        {#if project.skills.indexOf($search) > -1 || $search === 'None'}
            <a href='/projectsNone/{project.link}' class='black no-decoration'>
                <div class='project-box'>
                    <div class='project-thumbnail'>
                        <img src={project.thumb} alt='{project.title} Thumbnail' height='150px' width='150px'/>
                    </div>
                    <div class='project-words'>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <p>
                            {#each project.skills as skill}
                                <span>{skill +' '}</span>
                            {/each}
                        </p>
                    </div>
                </div>
            </a>
            <hr/>
        {/if}
    {/each}
</div>