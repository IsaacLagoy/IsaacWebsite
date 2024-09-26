<script lang='ts'>
    // images
    import iSTARLogo from '$lib/images/iSTAR_logo.png';
    import structurologyLogo from '$lib/images/structurology_logo.png';
    import gameDevSpring2024 from '$lib/images/spring_best_programming_2024.jpeg';

    import {
        Grid,
        Row,
        Column,
        ClickableTile,
        ImageLoader
    } from 'carbon-components-svelte';

</script>

<Grid padding class='page'>
    <Row><Column><h1 class='page-title'>Jobs & Internships</h1></Column></Row>
    <Row class='text-center'>
        <Column sm={2} md={3} lg={5}>
            <ClickableTile
                href='/experience/iSTAR'
            >
                <ImageLoader 
                    src={iSTARLogo}
                />
            </ClickableTile>
        </Column>
        <Column sm={2} md={3} lg={5}>
            <ClickableTile
                href='/experience/structurology'
            >
                <ImageLoader
                    src={structurologyLogo}
                />
            </ClickableTile>
        </Column>
    </Row>
    <Row><Column><h1>Awards & Competitions</h1></Column></Row>
    <Row class='text-center'>
        <Column sm={2} md={3} lg={5}>
            <ClickableTile
                href='/experience/gameDev'
            >
                <ImageLoader
                    src={gameDevSpring2024}
                />
            </ClickableTile>
        </Column>
    </Row>
</Grid>