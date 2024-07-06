<script lang='ts'>
    import {readable} from 'svelte/store';
    import vine_green from '$lib/images/vine_green.png';
    import vine_darkgreen from '$lib/images/vine_darkgreen.png';
    import vine_purple from '$lib/images/vine_purple.png';
    import flower from '$lib/images/flower_red.png';
    import jungle_one from '$lib/images/jungle_one.png';
    import jungle_two from '$lib/images/jungle_two.png';
    import cave_one from '$lib/images/cave_one.png';
    import cave_two from '$lib/images/cave_two.png';
    import DirectionSign from './DirectionSign.svelte';
    import best_programming_award from '$lib/images/spring_best_programming_2024.jpeg';
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


<!-- Top Background -->
<div class='background-dark_green page-top'></div>

<!-- Vines Covering Screen -->
{#each data.vines as pos}
    <img style="transform: translate3d(calc(-50% + {get_scroll_pos(pos, scroll)}vw), {pos[1] - 50}vh, {pos[3]}px);" src={vines[pos[3]]} alt='vine1' class='front-vine'/>
    <img style="transform: translate3d(calc(-50% + {get_scroll_pos(pos, scroll)}vw), calc(-50% + {pos[4]}vw), {pos[3]}px);" src={flower} alt='vine1' class='front-flower'/>
{/each}
{#each data.flowers as pos}
    <img style="transform: translate3d(calc(-50% + {get_scroll_pos(pos, scroll)}vw), {pos[1] - pos[4] - 50}vh, {pos[3]}px);" src={vines[pos[3]]} alt='vine1' class='front-vine'/>
    <img style="transform: translate3d(calc(-50% + {get_scroll_pos(pos, scroll)}vw), calc(-50% + {pos[1]}vw), {pos[3]}px);" src={flower} alt='vine1' class='front-flower'/>
{/each}

<!-- Front Page -->
<div class='page-section' style='background-image: url({jungle_one})'>
    <h1 class='page-title'><span class='wooden-sign'>About Me</span></h1>
    <p class='wooden-sign text-center'>
        Welcome to my website! My name is Isaac and I hope your having a great {get_word_time($date_time.getHours())}. Feel free to look around and check out any cool projects that may interest you. Scroll down to learn more about me!
    </p>
    <DirectionSign
        title={'Where to?'}
        destinations={{
            'Projects' : '/projects',
            'D&D' : '/dndDatabase'
        }}
        location={'left'}
    />
</div>
<!-- Experience -->
<div class='page-section' style='background-image: url({jungle_two})'>
    <h1 class='page-title'><span class='wooden-sign'>Experience</span></h1>
    <p class='text-center wooden-sign'>I'm currently attending the computer science program at Texas A&M, looking to graduate in 2027. I participate in the Texas A&M Game Developers Club where I won the Spring 2024 Best Programming Award.</p>
    <div class='container-row'>
        <a href='/' class='contained-column wooden-sign tilt-right'>
            <img src={best_programming_award} alt='programAward' width=150vw/>
        </a>
        <div class='contained-column'></div>
    </div>
    <DirectionSign
        title={'Jobs'}
        destinations={{
            'iStar' : '/iStar',
            'Structurology' : '/structurology'
        }}
        location={'right'}
    />
</div>
<!-- Skills -->
<div class='page-section' style='background-image: url({cave_one});'>
    <h1 class='page-title'><span class='wooden-sign'>Skills</span></h1>
    <div class='spacer-ten'></div>
    <div class='container-row text-center'>
        <div class='container-column'>
            <a href='/siteInfo' class='no-decoration'>
                <div class='wooden-sign tilt-left'>
                    <p>Web Dev</p>
                    <p>
                        <i class='bx bxl-html5' ></i>
                        <i class='bx bxl-css3' ></i>
                        <i class='bx bxl-typescript' ></i>
                    </p>
                </div>
            </a>
            <div class='spacer-ten'></div>
            <!-- needs to be changed to python projects later -->
            <a href='/projects' class='no-decoration'>
                <div class='wooden-sign tilt-right'>
                    <i class='bx bxl-python'></i>
                </div>
            </a>
        </div>
        <div class='contained-column'>
            <a href='/iStar' class='no-decoration'>
                <div class='wooden-sign'>
                    <i class='bx bxl-docker' ></i>
                </div>
            </a>
            <div class='spacer-ten'></div>
            <a href='/structurology' class='no-decoration'>
                <div class='wooden-sign tilt-right'>
                    <p>Power Automate</p>
                    <i class='bx bxl-microsoft' ></i>
                </div>
            </a>
        </div>
    </div>
</div>
<!-- Contact -->
<div class='page-section' style='background-image: url({cave_two});'>
    <h1 class='page-title'><span class='wooden-sign'>Contact Me</span></h1>
    <div class='spacer-ten'></div>
    <div class='container-row text-center'>
        <div class='container-column'>
            <div class='spacer-ten'></div>
            <!-- needs to be changed to python projects later -->
            <div class='wooden-sign tilt-right'>
                isaacblagoy@gmail.com
            </div>
        </div>
        <div class='contained-column'>
            <div class='wooden-sign tilt-left'>
                <p>+1 (713) 498-5947</p>
                <p>Please Text!</p>
            </div>
            <div class='spacer-ten'></div>
        </div>
    </div>
    <DirectionSign
        title={'Socials'}
        destinations={{
            'GitHub' : 'https://github.com/IsaacLagoy',
            'LinkedIn' : 'none'
        }}
        location={'left'}
    />
</div>