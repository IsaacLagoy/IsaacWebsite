<script lang="ts">
    import '$lib/styles/tile-grid.css';
    import '$lib/styles/project.css';
    import './experience.css';
    import structurology from '$lib/images/work/structurology_logo.png'
    import iSTAR from '$lib/images/work/iSTAR_logo.png';

    export let data;
</script>


<div class='project-body'>

    <h1>Jobs and Research</h1>
    <div class='content-row'>
        <div class='project-image-wrapper'>
            <img src={structurology} class='' alt='Structurology'/>
        </div>
        <div class='header-text'>
            <p>I worked at Structurology during Summer 2024. I primarily made Microsoft Flows to automate processes for the engineers working at Structurology but I also worked on some tools to make accessing online data faster.</p>
            <div class='button-group'>
                <a href='https://www.structurology.com' class='glow-button' target='_blank'>Structurology</a>
            </div>
        </div>
    </div>
    <div class='content-row'>
        <div class='header-text'>
            <p>I started working with iSTAR, under Dr. Eman Hammad, during the spring 2024 semester doing a combination of IT and web development. I worked on the Cyber Expert Project Team where we designed a website to host virtual labs for students and monitor their engagement. I'm currently researching the viability of implementing trust based network architecture with DAG based blockchains in a project called Trust DAG.</p>
        </div>
        <div class='project-image-wrapper'>
            <img src={iSTAR} class='' alt='Structurology'/>
        </div>
    </div>

    <h1>Game Awards</h1>
    <div class='tile-grid'>
        {#each data.game_awards as award}
            <a href={`/projects/${award.href}`} class='tile'>
                <div class='thumbnail-wrapper'>
                    <img src={`/src/lib/images/projects/${award.image}`} alt={award.name}/>
                </div>
                <div class='title'>{award.name}</div>
            </a>
        {/each}
    </div>

    <h1>Notable Classwork</h1>
    <div class='masonry-grid'>
        {#each data.classwork as classwork}
            <div class='masonry-tile'>
                <p>{classwork.name}</p>
                <p>Grade: A</p>
                <p>{classwork.description}</p>
            </div>
        {/each}
    </div>

</div>