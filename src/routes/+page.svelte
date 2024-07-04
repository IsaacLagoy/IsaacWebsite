<script lang='ts'>
    import vine_green from '$lib/images/vine_green.png';
    import vine_darkgreen from '$lib/images/vine_darkgreen.png';
    import vine_purple from '$lib/images/vine_purple.png';
    import flower from '$lib/images/flower_red.png';
    import jungle_one from '$lib/images/jungle_one.png';
    export let data;
    
    let scroll : number;

    function get_scroll_pos(data : any[], scroll : number) {
        return scroll * (data[2] - data[0]) / 100 + data[0];
    };

    let vines = [vine_purple, vine_purple, vine_darkgreen, vine_green, vine_green]
</script>

<svelte:window bind:scrollY={scroll}/>

<!-- Background -->
<div class='background-dark_green page-top'>
    <img src={jungle_one} style="transform: translateY(11vh)" alt='jungle1' class='background'/>
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
    <h1 class='page-title'>About Me</h1>
    <div class='round-box'>
        intro
        <!-- Hi,  my name is Isaac and I hope your having a nice {time store switch}! -->
    </div>
</div>

<div class='round-box border-yellow'>
    TAMU
</div>
<div class='round-box border-green'>
    Experience
</div>
<div class='round-box border-blue'>
    awards
</div>
<div class='round-box border-purple'>
    skills
</div>