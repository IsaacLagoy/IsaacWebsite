<script>
    import structurologyLogo from '$lib/images/structurology_logo.png';

    import {
        Grid,
        Row,
        Column,
        ImageLoader,
        Tile,
        UnorderedList,
        ListItem
    } from 'carbon-components-svelte';
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <ImageLoader src={structurologyLogo}/>
        </Column>
    </Row>
    <Row>
        <Column>
            <Tile>
                <p>
                    I worked at Structurology during Summer 2024. I primarily made Microsoft Flows to automate processes for the engineers working at Structurology but I also worked on some tools to make accessing online data faster.
                </p>
            </Tile>
        </Column>
    </Row>
    <Row>
        <Column>
           
            <Tile>
                <h2>Time Worked</h2>
                <p>
                    Summer 2024
                </p>
            </Tile>
        </Column>
        <Column>
            <Tile>
                <h2>Skills learned</h2>
                <UnorderedList expressive>
                    <ListItem>Power Automate</ListItem>
                </UnorderedList>
            </Tile>
        </Column>
    </Row>
</Grid>