<script>

    import {
        Grid,
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
        TextInput,
        ClickableTile
    } from 'carbon-components-svelte';

    import {writable} from 'svelte/store';
    export let data;

    const search = writable('');

</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/characters'>Characters</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>Classes</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>Classes</h1></Column></Row>
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
                <ClickableTile href='/dnd/characters/classes/{item.id}' style='margin:10px;'>
                    <h2>{item.name}</h2>
                </ClickableTile>
            {/if}
        {/each}
    </Row>
</Grid>