<script lang='ts'>
    import Multiselect from 'svelte-multiselect';
    import {writable} from 'svelte/store';
    export let data;

    const search = writable<string[]>([]);

    function contains_all(array:string[], contained:string[]){
        contained.forEach((str) => {
            if (array.indexOf(str) == -1){
                return false;
            };
        });
        return true;
    };

</script>

<h1 class='page-title'>Projects</h1>

<p>{$search}</p>

<div class='page'>
    <div class='text-center'>
        <h1>Skill Search</h1>
        <Multiselect 
            options={['Python', 'CSS']}
            bind:value={$search}
        />
    </div>

    <div class='spacer-five'></div>
    {#each data.projects as project}
        {#if contains_all(project.skills, $search)}
            <a href='/projects/{project.link}' class='black no-decoration'>
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