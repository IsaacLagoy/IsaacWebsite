<script>

    import { 
        Breadcrumb,
        BreadcrumbItem,
        Column, 
        Grid, 
        Row,
        ClickableTile
    } from "carbon-components-svelte";

</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>Characters</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>Characters</h1></Column></Row>
    <Row>
        <Column>
            <ClickableTile href='/dnd/characters/classes'>
                <h2>Classes</h2>
            </ClickableTile>
        </Column>
        <Column>
            <ClickableTile href='/dnd/characters/races'>
                <h2>Races</h2>
            </ClickableTile>
        </Column>
    </Row>
</Grid>