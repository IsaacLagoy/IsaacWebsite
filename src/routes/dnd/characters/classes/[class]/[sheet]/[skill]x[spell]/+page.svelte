<script>
    export let data;

    import {
        Grid,
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
        Tile
    } from 'carbon-components-svelte';
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters'>Characters</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters/classes'>Classes</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters/classes/{data.class.id}'>{data.class.name}</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters/classes/{data.class.id}/{data.sheet.id}'>{data.sheet.name}</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>{data.ability.name}</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>{data.ability.name}</h1></Column></Row>
    <Row>
        <Column>
            <Tile class='text-center'>
                <p>{data.ability.description}</p>
            </Tile>
        </Column>
    </Row>
    {#if data.pageType === 'spell'}
        <Row>
            <Column>
                {#if data.ability.cost !== null}
                    <Tile>
                        <h2>Cost</h2>
                        <p>{data.ability.cost}</p>
                    </Tile>
                {/if}
            </Column>
            <Column>
                {#if data.ability.damage_count !== null}
                    <Tile>
                        <h2>Damage</h2>
                        <p>{data.ability.damage_count} {data.ability.damage_roll}</p>
                    </Tile>
                {/if}
            </Column>
        </Row>
    {:else if data.ability.rolls !== null}
        <Row>
            <Column>
                <Tile>
                    <h2>Rolls</h2>
                    <p>
                        {#each data.ability.rolls as roll}
                            <span>{roll} </span>
                        {/each}
                    </p>
                </Tile>
            </Column>
        </Row>
    {/if}
</Grid>
