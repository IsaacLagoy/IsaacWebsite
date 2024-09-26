<script>
    import {
        Breadcrumb,
        BreadcrumbItem,
        Grid,
        Row,
        Column,
        Tile,

        ClickableTile

    } from 'carbon-components-svelte';

    const links = [
        {text: 'Melee Roller', href:'meleeRoller'}
    ]
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/tools' isCurrentPage>Tools</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>Tools</h1></Column></Row>
    <Row>
        <Column>
            <Tile>
                <p>Welcome to the D&D tools page! Currently there's not much here but I'll be sure to add more in the future.</p>
            </Tile>
        </Column>
    </Row>
    <Row class='text-center'>
        {#each links as link}
            <Column sm={2} md={3} lg={5}>
                <ClickableTile href='/dnd/tools/{link.href}'>
                    <h1>{link.text}</h1>
                </ClickableTile>
            </Column>
        {/each}
    </Row>
</Grid>