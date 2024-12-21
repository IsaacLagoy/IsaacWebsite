<script lang='ts'>
    import 'carbon-components-svelte/css/g90.css';
    import '$lib/style.css';

    import {
        Header,
        HeaderUtilities,
        HeaderGlobalAction,
        HeaderNav,
        HeaderNavItem,
        Content,
        Grid
    } from 'carbon-components-svelte';
    import { 
        LogoGithub,
        LogoLinkedin,
        LogoYoutube,
    } from 'carbon-icons-svelte';

    let stars: {
        x: number,
        y: number,
        size: number,
        color: string
    }[] = []

    for (let i = 0; i < 50; i++) {

        const color = Math.floor(Math.random() * 100 + 50);
        const hex   = color.toString(16);

        stars.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 0.2 + 0.1,
            color: `#${hex}${hex}${hex}`
        })
    }
</script>

<Header 
    platformName='Isaac Lagoy'
    href='/'
>
    <HeaderNav>
        <HeaderNavItem href='/projects' text='Projects'/>
        <HeaderNavItem href='/experience' text='Experience'/>
        <HeaderNavItem href='/resume' text='Resume'/>
    </HeaderNav>
    <HeaderUtilities>
        <HeaderGlobalAction
            iconDescription='GitHub'
            tooltipAlignment='start'
            icon={LogoGithub}
            href='https://github.com/IsaacLagoy'
        />
        <HeaderGlobalAction 
            iconDescription='YouTube'
            icon={LogoYoutube}
            href='https://www.youtube.com/@Ob1Wan-J3di'
        />
        <HeaderGlobalAction
            iconDescription='LinkedIn'
            tooltipAlignment='end'
            icon={LogoLinkedin}
        />
    </HeaderUtilities>
</Header>

<svg
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid meet'
>
    {#each stars as star}
        <circle
            cx={star.x}
            cy={star.y}
            r={star.size}
            fill={star.color}
        />
    {/each}

</svg>



<Content style='padding-top:0px; padding-bottom:0px;'>
    <div class='page'>
        <Grid padding>
            <slot/>
        </Grid>
    </div>
</Content>

<style>
    svg {
        /* background: linear-gradient(to bottom, #f0f8ff, #e0f7fa); */
        position: fixed; 
        top: 0; 
        left: 0; 
        z-index: -2; 
        width: 100vw;
        overflow: hidden;
    }

    /* path {
        stroke-linecap: round;
    } */
</style>