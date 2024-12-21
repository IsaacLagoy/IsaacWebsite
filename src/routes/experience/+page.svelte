<script lang='ts'>
    // images
    import iSTARLogo from '$lib/images/iSTAR_logo.png';
    import structurologyLogo from '$lib/images/structurology_logo.png';

    import {
        Grid,
        Row,
        Column,
        ClickableTile,
        ImageLoader
    } from 'carbon-components-svelte';

</script>

<Grid padding class='page'>
    <Row><Column><h1 class='page-title'>Experience</h1></Column></Row>
    <Row class='text-center'>
        <Column>
            <ClickableTile
                href='/experience/iSTAR'
            >
                <ImageLoader 
                    src={iSTARLogo}
                />
            </ClickableTile>
        </Column>
        <Column>
            <ClickableTile
                href='/experience/structurology'
            >
                <ImageLoader
                    src={structurologyLogo}
                />
            </ClickableTile>
        </Column>
    </Row>
</Grid>