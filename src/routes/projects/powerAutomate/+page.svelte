<script>
    import automate from '$lib/images/power_automate.png';

    import {
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

<Row><Column><h1 class='page-title'>Power Automate</h1></Column></Row>
<Row>
    <Column>
        <ImageLoader src={automate}/>
    </Column>
    <Column>
        <Tile>
            <p>
                I worked with Power Automate during my time at Structurology. I mostly made automations for filling out reports for the engineers. I've uploaded brief explainations of how my flows work to YouTube if you want to check them out. Sorry if I sound unenthusiastic, I was a little sick while recording. 
            </p>
        </Tile>
        <div style='display:flex; flex-direction:column;'>
            
        </div>
        <ButtonSet stacked>
            <Button
                style='margin-top:20px;'
                href='/experience/structurology'
            >
                Structurology
            </Button>
            <Button 
                style='margin-top:20px;'
                icon={LogoYoutube} 
                iconDescription='YouTube'
                href='https://www.youtube.com/playlist?list=PLX3kAW5Csai2ih9kL-K_7lc2QqvT3pwFh'
            >
                YouTube
            </Button>
        </ButtonSet>
    </Column>
</Row>