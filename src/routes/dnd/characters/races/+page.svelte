<script>
    import {writable} from 'svelte/store';
    export let data;

    import { 
        Breadcrumb,
        BreadcrumbItem,
        Column, 
        Grid, 
        Row,
        ClickableTile,
        TextInput
    } from "carbon-components-svelte";

    const search = writable('');
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters'>Characters</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>Races</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>Races</h1></Column></Row>
    <Row>
        <Column>
            <TextInput
                bind:value={$search}
                placeholder='Search...'
            />
        </Column>
    </Row>
    <Row class='content-center text-center'>
        {#each data.items as item}
            {#if (item.name.startsWith($search) && !item.hidden) || (item.name === $search && item.hidden)}
                <ClickableTile style='margin:10px;' href='/dnd/characters/races/{item.id}'>
                    <h2>{item.name}</h2>
                </ClickableTile>
            {/if}
        {/each}
    </Row>
</Grid>