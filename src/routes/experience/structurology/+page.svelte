<script>
    import structurologyLogo from '$lib/images/structurology_logo.png';

    import {
        Grid,
        Row,
        Column,
        ImageLoader,
        Tile,
        Button
    } from 'carbon-components-svelte';
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <ImageLoader 
                src={structurologyLogo}
                ratio={'2x1'}
                />
        </Column>
        <Column>
            <Tile>
                <h2>Skills learned</h2>
                <p>
                    I primarily learned how to work with Microsoft's Power Automate. Unfortunately I didn't have anyone to teach me, so I had to learn to use it on my own. More importantly, I learned how to interpret the needs of people who did not know how to program and convert it to a product that I could code. 
                </p>
            </Tile>
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
        <Column>
            <Tile>
                <h2>Time Worked</h2>
                <p>
                    Summer 2024
                </p>
            </Tile>
            <Button
                style='margin-top:20px;'
                kind='secondary'
                href='https://www.structurology.com'
            >
                Structurology
            </Button>
        </Column>
    </Row>
</Grid>