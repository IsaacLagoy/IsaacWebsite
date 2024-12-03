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
                <BreadcrumbItem href='/dnd/characters/classes/{data.class.id}'>{data.class.name}</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>{data.sheet.name}</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>{data.sheet.name}</h1></Column></Row>
    {#if (data.sheet.starting_skills.length > 0)}
        <Row>
            <Column>
                <Tile>
                    <h1>Starting Skills</h1>
                    <div class='content-center' style='margin-top:10px;'>
                        {#each data.sheet.starting_skills as id}
                            <a href='/dnd/characters/classes/{data.class.id}/{data.sheet.id}/{id}x0' style='margin:10px;'>{data.skills[id].name}</a>
                        {/each}
                    </div>
                </Tile>
            </Column>
        </Row>
    {/if}
    {#if (data.sheet.starting_spells.length > 0)}
        <Row>
            <Column>
                <Tile>
                    <h1>Starting Skills</h1>
                    <div class='content-center' style='margin-top:10px;'>
                        {#each data.sheet.starting_spells as id}
                            <a href='/dnd/characters/classes/{data.class.id}/{data.sheet.id}/0x{id}' style='margin:10px;'>{data.spells[id].name}</a>
                        {/each}
                    </div>
                </Tile>
            </Column>
        </Row>
    {/if}
    {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] as i}
        {#if (data.sheet.skills[i].length + data.sheet.spells[i].length !== 0)}
            <Row>
                <Column class='text-center'>
                    <Tile>
                        {#if (data.sheet.skills[i].length !== 0)}
                            <h2>Level {i} Skills</h2>
                            <div class='content-center'>
                                {#each data.sheet.skills[i] as id}
                                    <a href='/dnd/characters/classes/{data.class.id}/{data.sheet.id}/{id}x0' style='margin:10px;'>{data.skills[id].name}</a>
                                {/each}
                            </div>
                        {/if}
                        {#if (data.sheet.spells[i].length !== 0)}
                        <h2>Level {i} Spells</h2>
                        <div class='content-center'>
                            {#each data.sheet.spells[i] as id}
                                <a href='/dnd/characters/classes/{data.class.id}/{data.sheet.id}/0x{id}' style='margin:10px;'>{data.spells[id].name}</a>
                            {/each}
                        </div>
                        {/if}
                    </Tile>
                </Column>
            </Row>
        {/if}
    {/each}
</Grid>