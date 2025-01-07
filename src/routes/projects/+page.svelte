<script lang='ts'>
    export let data;

    import {
        Row,
        Column,
        Button,
        ButtonSet,
        ClickableTile,
        ImageLoader
    } from 'carbon-components-svelte';

    import basilisk from '$lib/graphics/basilisk_white.svg';

    // scrolling from top buttons
    function scrollToTarget(id : string) {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<Row><Column><h1 class='page-title'>Projects</h1></Column></Row>
<Row>
    <Column>
        <p>
            Welcome to my projects page! If you're looking for a specific skill or language, you can skip to it on the right. Feel free to browse and check out the GitHub repos if you're interested in the code.
        </p>
    </Column>
    <Column class='min-width'>
        <ButtonSet stacked>
            <Button 
                on:click={() => scrollToTarget('Python')}
                kind='tertiary'
            >Python</Button>
            <Button 
                on:click={() => scrollToTarget('Web Development')}
                kind='tertiary'
            >Web Development</Button>
            <Button 
                on:click={() => scrollToTarget('Other')}
                kind='tertiary'
            >Other Projects</Button>
        </ButtonSet>
    </Column>
</Row>
<Row><Column><h1>Featured</h1></Column></Row>
<Row>
    <Column class='content-center'>
        <div class='basilisk-container' style='height:20vh;' >
            <img src={basilisk} alt='Basilisk Engine' class='basilisk'/>
        </div>
    </Column>
    <Column>
        <h2>Basilisk Engine</h2>
        <p>
            Basilisk Engine is an open source 3D game engine primarily coded in Python. We're constantly working on improving it and hope to release it for public use in the near future. 
        </p>
        <Button 
            kind='tertiary'
            href='https://basilisk-website.vercel.app'
            style='margin-top:20px;'
        >Learn More</Button>
    </Column>
</Row>
<Row><Column><h1 id='Python'>Python</h1></Column></Row>
<Row class='content-center text-center'>
    {#each data.projects.python as project}
        <Column sm={2} md={3} lg={5}>
            <a href={`${project.href}`} style='text-decoration:none; color:white;'>
                <div class='project'>
                    <div style='aspect-ratio:1; position:relative;'>
                        <img src={project.thumb} alt={project.title} class='thumbnail'/>
                    </div>
                    <h3>{project.title}</h3>
                </div>
            </a>
        </Column>
    {/each}
</Row>
<Row><Column><h1 id='Web Development'>Web Development</h1></Column></Row>
<Row class='content-center text-center'>
    {#each data.projects.web_dev as project}
        <Column sm={2} md={3} lg={5}>
            <a href={`${project.href}`} style='text-decoration:none; color:white;'>
                <div class='project'>
                    <div style='aspect-ratio:1; position:relative;'>
                        <img src={project.thumb} alt={project.title} class='thumbnail'/>
                    </div>
                    <h3>{project.title}</h3>
                </div>
            </a>
        </Column>
    {/each}
</Row>
<Row><Column><h1 id='Other'>Other</h1></Column></Row>
<Row class='content-center text-center'>
    {#each data.projects.other as project}
        <Column sm={2} md={3} lg={5}>
            <a href={`${project.href}`} style='text-decoration:none; color:white;'>
                <div class='project'>
                    <div style='aspect-ratio:1; position:relative;'>
                        <img src={project.thumb} alt={project.title} class='thumbnail'/>
                    </div>
                    <h3>{project.title}</h3>
                </div>
            </a>
        </Column>
    {/each}
</Row>

<style>
    .basilisk-container {
        aspect-ratio: 1;
        position: absolute;
    }

    .basilisk {
        width: auto;
        object-fit: cover;
    }

    .thumbnail {
        top: 0px;
        left: 0px;
        width: auto;
        object-fit: cover;
        position: absolute;
    }

    .project {
        padding: 1vh;
        display: inline-block;
        width: 25vh;
        overflow: hidden;
        background-color: rgba(57, 57, 57, 0.5);
    }

    .project:hover {
        background-color: rgba(120, 120, 120, 0.5);
    }
</style>