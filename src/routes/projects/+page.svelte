<script lang='ts'>
    export let data;

    import {
        Grid,
        Row,
        Column,
        Tile,
        Button,
        ButtonSet,
        ClickableTile
    } from 'carbon-components-svelte';

    // scrolling from top buttons
    function scrollToTarget(id : string) {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<Grid padding class='page'>
    <Row><Column><h1 class='page-title'>Projects</h1></Column></Row>
    <Row>
        <Column>
            <Tile>
                <p>
                    Welcome to my projects page! If you're looking for a specific skill or language, you can skip to it on the right. Feel free to browse and check out the GitHub repos if you're interested in the code.
                </p>
            </Tile>
        </Column>
        <Column class='min-width'>
            <ButtonSet stacked>
                <Button 
                    on:click={() => scrollToTarget('Python')}
                    kind='secondary'
                >Python</Button>
                <Button 
                    on:click={() => scrollToTarget('Web Development')}
                    kind='secondary'
                >Web Development</Button>
                <Button 
                    on:click={() => scrollToTarget('Other')}
                    kind='secondary'
                >Other Projects</Button>
            </ButtonSet>
        </Column>
    </Row>
    <Row><Column><h1>Featured</h1></Column></Row>
    <Row>
        <Column class='background-basilisk min-width' style='aspect-ratio:450/770; width:20%;'></Column>
        <Column>
            <Tile>
                <h2>Basilisk Engine</h2>
                <p>
                    Basilisk is an open source 3D game engine primarily coded in Python. We're constantly working on improving it and hope to release it for public use in the near future. 
                </p>
            </Tile>
            <Button 
                kind="secondary" 
                href='/projects/basilisk'
            >Learn More</Button>
        </Column>
    </Row>
    <Row><Column><h1 id='Python'>Python</h1></Column></Row>
    <Row class='text-center'>
        {#each data.projects.python as project}
          <Column sm={2} md={3} lg={5}>
            <ClickableTile href='/projects/{project.href}'>
              <h2>{project.title}</h2>
              <img src={project.thumb} alt={project.title}/>
            </ClickableTile>
          </Column>
        {/each}
    </Row>
    <Row><Column><h1 id='Web Development'>Web Development</h1></Column></Row>
    <Row class='text-center'>
        {#each data.projects.web_dev as project}
          <Column sm={2} md={3} lg={5}>
            <ClickableTile href='/projects/{project.href}'>
              <h2>{project.title}</h2>
              <img src={project.thumb} alt={project.title}/>
            </ClickableTile>
          </Column>
        {/each}
    </Row>
    <Row><Column><h1 id='Other'>Other</h1></Column></Row>
    <Row class='text-center'>
        {#each data.projects.other as project}
          <Column sm={2} md={3} lg={5}>
            <ClickableTile href='/projects/{project.href}'>
              <h2>{project.title}</h2>
              <img src={project.thumb} alt={project.title}/>
            </ClickableTile>
          </Column>
        {/each}
    </Row>
</Grid>