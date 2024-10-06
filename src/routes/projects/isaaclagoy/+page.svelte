<script>
    import favicon from '$lib/images/favicon.png';

    import {
        Grid,
        Row,
        Column,
        Tile,
        ImageLoader,
        Button
    } from 'carbon-components-svelte';
</script>

<Grid padding class='page'>
    <Row><Column><h1 class='page-title'>isaaclagoy.com</h1></Column></Row>
    <Row>
        <Column>
            <ImageLoader src={favicon}/>
        </Column>
        <Column>
            <Tile>
                <p>
                    This website uses SvelteKit for managing the server and routes, and Carbon Design for formatting design elements. 
                </p>
            </Tile>
            <Button kind='secondary' style='margin-top:30px;'>Get it on GitHub</Button>
        </Column>
    </Row>
    <Row>

    </Row>
</Grid>