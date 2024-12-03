<script>
    export let data;

    import { 
        Breadcrumb,
        BreadcrumbItem,
        Column, 
        Grid, 
        Row,
        Tile
    } from "carbon-components-svelte";
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters'>Characters</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters/races'>Races</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters/races/{data.race.id}'>{data.race.name}</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>{data.skill.name}</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>{data.skill.name}</h1></Column></Row>
    <Row>
        <Column>
            <Tile>
                <p>{data.skill.description}</p>
            </Tile>
        </Column>
        {#if (data.skill.rolls !== null)}
            <Column>
                <Tile>
                    <h2>Rolls</h2>
                    <p>
                        {#each data.skill.rolls as roll}
                            <span>{roll} </span>
                        {/each}
                    </p>
                </Tile>
            </Column>
        {/if}
    </Row>
</Grid>