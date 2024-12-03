<script>
    import {
        Grid,
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
        Tile
    } from 'carbon-components-svelte';

    export let data;
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters'>Characters</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters/classes'>Classes</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>{data.class.name}</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>{data.class.name}</h1></Column></Row>
    <Row>
        <Column class='text-center'>
            <Tile>
                <p>{data.class.description}</p>
            </Tile>
        </Column>
    </Row>
    {#if data.class.rules || data.class.alignment}
        <Row>
            {#if data.class.rules}
                <Column>
                    <Tile>
                        <h2>Rules</h2>
                        <p>{data.class.rules}</p>
                    </Tile>
                </Column>
            {/if}
            {#if data.class.alignment}
                <Column>
                    <Tile>
                        <h2>Alignment</h2>
                        <p>{data.class.alignment}</p>
                    </Tile>
                </Column>
            {/if}
        </Row>
    {/if}
    <Row>
        <Column>
            <Tile>
                <h2>Stats</h2>
                <p>Health: {data.class.health} per level</p>
                <p>
                    Thac0: {data.class.initial_thac0} (-1 every {data.class.thac0_interval}
                    {#if (data.class.thac0_interval > 1)}levels{:else}level{/if})
                </p>
                <p>
                    Ac: {data.class.initial_ac} (-1 every {data.class.ac_interval}
                    {#if (data.class.ac_interval > 1)}levels{:else}level{/if})
                </p>
                {#if (data.class.mana)}
                    <p>Mana: {data.class.mana} per level</p>
                {/if}
            </Tile>
        </Column>
        <Column>
            <Tile>
                <h1>Skills</h1>
                <p>{data.class.skills} skills per level</p>
                <h1>Sheets</h1>
                {#each data.sheets as sheet}
                    <a href='/dnd/characters/classes/{data.paramsClass}/{sheet.id}' class='black'>
                        <p>{sheet.name}</p>
                    </a>
                {/each}
            </Tile>
        </Column>
    </Row>
</Grid>