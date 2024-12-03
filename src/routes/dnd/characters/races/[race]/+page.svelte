<script>
    import { 
        Breadcrumb,
        BreadcrumbItem,
        Column, 
        Grid, 
        Row,
        Tile
    } from "carbon-components-svelte";

    export let data;
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters'>Characters</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters/races'>Races</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>{data.race.name}</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>{data.race.name}</h1></Column></Row>
    <Row>
        <Column>
            <Tile class='text-center'>
                <p>{data.race.description}</p>
            </Tile>
        </Column>
    </Row>
    {#if data.race.rules}
        <Row>
            <Column>
                <Tile>
                    <h2>Rules</h2>
                    <p>{data.race.rules}</p>
                </Tile>
            </Column>
        </Row>
    {/if}
    <Row>
        {#if data.race.str || data.race.con || data.race.dex || data.race.int || data.race.wis || data.race.cha}
            <Column>
                <Tile>
                    <h2>Stat Adjustments</h2>
                    {#if (data.race.str)}
                        <p>Strength {data.race.str}</p>
                    {/if}
                    {#if (data.race.con)}
                        <p>Constitution {data.race.con}</p>
                    {/if}
                    {#if (data.race.dex)}
                        <p>Dexterity {data.race.dex}</p>
                    {/if}
                    {#if (data.race.int)}
                        <p>Intelligence {data.race.int}</p>
                    {/if}
                    {#if (data.race.wis)}
                        <p>Wisdom {data.race.wis}</p>
                    {/if}
                    {#if (data.race.cha)}
                        <p>Charisma {data.race.cha}</p>
                    {/if}
                </Tile>
            </Column>
        {/if}
        {#if (data.skills.length > 0)}
            <Column>
                <Tile>
                    <h2>Skills</h2>
                    {#each data.skills as skill}
                        <a href='/dnd/characters/races/{data.race.id}/{skill.id}'>{skill.name}</a>
                    {/each}
                </Tile>
            </Column>
        {/if}
    </Row>
</Grid>