<script lang='ts'>
    import {
        Row,
        Column,
        Button
    } from 'carbon-components-svelte';

    import resume from '$lib/Resume.pdf'
</script>

<Row><Column><h1 class='page-title'>Resume</h1></Column></Row>

<Row>
    <Column>
        <img src={resume} alt='resume' class='resume'/>
    </Column>
</Row>

<Row>
    <Column class='content-right'>
        <Button kind='tertiary' href={resume} download='IsaacLagoyResume.pdf'>Download</Button>
    </Column>
</Row>

<style>
    .resume {
        width: 100%;
        height: auto;
        background-color: rgba(150, 150, 150, 0);
    }
</style>