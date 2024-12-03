<script>
    import basilisk from '$lib/images/basilisk_white_thumb.png';

    import {
        Grid,
        Row,
        Column,
        Button,
        ImageLoader,
        Tile,
        ButtonSet
    } from 'carbon-components-svelte';

    import {
        LogoYoutube
    } from 'carbon-icons-svelte';
</script>

<Grid padding class='page'>
    <Row><Column><h1 class='page-title'>Basilisk Engine</h1></Column></Row>
    <Row>
        <Column>
            <ImageLoader src={basilisk}/>
        </Column>
        <Column>
            <Tile>
                <p>
                    Basilisk Engine is a game engine written in Python and GLSL. I primarily work on physics and data structures for our engine design. 
                </p>
            </Tile>
            <div style='display:flex; flex-direction:column;'>
                
            </div>
            <ButtonSet stacked>
                <Button
                    style='margin-top:20px;'
                    href='https://basilisk-website.vercel.app'
                    kind='secondary'
                >
                    Basilisk Website (work in progress)
                </Button>
                <Button 
                    style='margin-top:20px;'
                    href='https://github.com/Loffelt/BasiliskEngine'
                    kind='secondary'
                >
                    Get it on GitHub
                </Button>
            </ButtonSet>
        </Column>
    </Row>
</Grid>