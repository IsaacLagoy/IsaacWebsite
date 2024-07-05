<script lang='ts'>
    import {readable} from 'svelte/store';
    import vine_green from '$lib/images/vine_green.png';
    import vine_darkgreen from '$lib/images/vine_darkgreen.png';
    import vine_purple from '$lib/images/vine_purple.png';
    import flower from '$lib/images/flower_red.png';
    import jungle_one from '$lib/images/jungle_one.png';
    import jungle_two from '$lib/images/jungle_two.png';
    import DirectionSign from './DirectionSign.svelte';
    export let data;

    function get_scroll_pos(data : any[], scroll : number) {
        return scroll * (data[2] - data[0]) / 100 + data[0];
    };
    function get_word_time(hour : number) {
        if (hour < 12) {return 'morning';} 
        else if (hour < 17) {return 'afternoon';}
        else {return 'night';};
    };

    let scroll : number;
    let vines = [vine_purple, vine_purple, vine_darkgreen, vine_green, vine_green]
    const date_time = readable(new Date());
</script>

<svelte:window bind:scrollY={scroll}/>

<!-- Background -->
<div class='background-dark_green page-top'>
    <img src={jungle_one} style="transform: translateY(11vh)" alt='jungle1' class='background'/>
    <img src={jungle_two} style="transform: translateY(calc(11vh + max(100vw, 100vh)))" alt='jungle2' class='background'/>
</div>

<!-- Vines Covering Screen -->
{#each data.vines as pos}
    <img style="transform: translate3d(calc(-50% + {get_scroll_pos(pos, scroll)}vw), {pos[1] - 50}vh, {pos[3]}px);" src={vines[pos[3]]} alt='vine1' class='front-vine'/>
    <img style="transform: translate3d(calc(-50% + {get_scroll_pos(pos, scroll)}vw), calc(-50% + {pos[4]}vw), {pos[3]}px);" src={flower} alt='vine1' class='front-flower'/>
{/each}

{#each data.flowers as pos}
    <img style="transform: translate3d(calc(-50% + {get_scroll_pos(pos, scroll)}vw), {pos[1] - pos[4] - 50}vh, {pos[3]}px);" src={vines[pos[3]]} alt='vine1' class='front-vine'/>
    <img style="transform: translate3d(calc(-50% + {get_scroll_pos(pos, scroll)}vw), calc(-50% + {pos[1]}vw), {pos[3]}px);" src={flower} alt='vine1' class='front-flower'/>
{/each}

<!-- Start of main page -->
<div class='page-section'>
    <h1 class='page-title'><span class='wooden-sign'>About Me</span></h1>
    <p class='wooden-sign text-center'>
        Welcome to my website! My name is Isaac and I hope your having a great {get_word_time($date_time.getHours())}. Feel free to look around and check out any cool projects that may interest you. Scroll down to learn more about me!
    </p>
    <div class='bottom-up'>
        <div>
            <a href='/projects' class='contained wooden-sign'>Projects</a>
        </div>
        <div>
            <a href='/dndDatabase' class='contained wooden-sign'>D&D</a>
        </div>
    </div>
</div>
<div class='page-section'>
    <h1 class='page-title'><span class='wooden-sign'>Experience</span></h1>
    <p class='text-center wooden-sign'>I'm a loud and proud member of the fighting Texas Aggie class of 2027! I attend Texas A&M College Station</p>
    <p class='text-center'>iStar, Structurology</p>
    <DirectionSign
        destinations={{
            'iStar' : '/iStar',
            'Structurology' : '/structurology'
        }}
        location={'right'}
    />
</div>
<div class='page-section'>
    <h1 class='page-title'>Skills</h1>
    <ul>
        <li>WebDev: HTML, CSS, TS, SvelteKit</li>
        <li>Docker: Docker Tutorial</li>
        <li>Power Automate: Structurology</li>
        <li>Python</li>
        <li>Maybe Java</li>
    </ul>
</div>
<div class='page-section'>
    <h1 class='page-title'>Contact Me</h1>
    <ul>
        <li>Email: isaacblagoy@gmail.com</li>
        <li>Phone: +1 (713)-498-5947 <span class='red'>Please text!</span></li>
        <li>GitHub: <a href='https://github.com/IsaacLagoy'>IsaacLagoy</li>
        <li>LinkedIn: None yet</li>
    </ul>
</div>