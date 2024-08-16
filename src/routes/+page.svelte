<script lang='ts'>
    import {readable} from 'svelte/store';
    import best_programming_award from '$lib/images/spring_best_programming_2024.jpeg';
    import green_wave from '$lib/graphics/green_wave.svg';
    import red_wave from '$lib/graphics/red_wave.svg';
    import blue_wave from '$lib/graphics/blue_wave.svg';

    function get_word_time(hour : number) {
        if (hour < 12) {return 'morning';} 
        else if (hour < 17) {return 'afternoon';}
        else if (hour < 20 ) {return 'evening';}
        else {return 'night';};
    };

    let scroll : number;
    const date_time = readable(new Date());
</script>

<svelte:window bind:scrollY={scroll}/>

<!-- Front Page -->
<div class='inline-page'>   
    <div class='page'>
        <h1 class='page-title'>Welcome</h1>
        <p class='text-center'>
            Welcome to my website! My name is Isaac and I hope you're having a great {get_word_time($date_time.getHours())}. Feel free to look around and check out any cool projects that may interest you. Scroll down to learn more about me!
        </p>
        <div class='spacer-five'></div>
        <div class='container-row'>
            <a href='/projects'>Projects</a>
            <a href='/dndDatabase'>D&D</a>
        </div>
    </div>
</div>
<div class='wave'>
    <img src={green_wave} alt='green wave' style="transform: translate3d(calc(-{Math.floor(scroll/10)}vw - 1vw), 0px, 0px);" class='wave-image'/>
</div>
<!-- Experience -->
<div class='inline-page background-green'>
    <div class='page'>
        <h1 class='page-title'>Experience</h1>
        <p class='text-center'>I'm currently attending the computer science program at Texas A&M, looking to graduate in 2027. I love participating in school clubs and coding competitions.</p>
        <div class='spacer-five'></div>
        <div class='container-row'>
            <a href='/projects/diceyDecks' class='text-center black'>
                <img src={best_programming_award} alt='programAward' width='150'/>
                <p>TAGD Game Jam Spring 2024 Best Programming Award</p>
            </a>
            <div class='container-column text-center column-right'>
                <h1>Jobs</h1>
                <a href='/jobs/iStar'>iStar</a>
                <a href='/jobs/structurology'>Structurology</a>
            </div>
        </div>
    </div>
</div>
<div class='wave'>
    <img src={red_wave} alt='red wave' style="transform: translate3d(calc({Math.floor(scroll/10)}vw - 220vw), 0px, 0px);" class='wave-image'/>
</div>
<!-- Skills -->
<div class='inline-page background-red'>
    <div class='page'>
        <h1 class='page-title'>Skills</h1>
        <p class='text-center'>Here are a few of the skills I've learned during my computer science journey. I'm still exploring what I want to do so expect to see a lot more here soon!</p>
        <div class='spacer-five'></div>
        <div class='container-row text-center'>
            <div class='container-column'>
                <a href='/siteInfo'>
                    <div>
                        <p>Web Dev</p>
                        <i class='bx bxl-html5 ' ></i>
                        <i class='bx bxl-css3' ></i>
                        <i class='bx bxl-typescript' ></i>
                    </div>
                </a>
                <div class='spacer-five'></div>
                <a href='/projects'>
                    <div>
                        <p>Python</p>
                        <i class='bx bxl-python'></i>
                    </div>
                </a>
            </div>
            <div class='contained-column'>
                <a href='/iStar'>
                    <div>
                        <p>Docker</p>
                        <i class='bx bxl-docker' ></i>
                    </div>
                </a>
                <div class='spacer-five'></div>
                <a href='/structurology'>
                    <div>
                        <p>Power Automate</p>
                        <i class='bx bxl-microsoft' ></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
<div class='wave'>
    <img src={blue_wave} alt='red wave' style="transform: translate3d(calc(-{Math.floor(scroll/10)}vw + 120vw), 0px, 0px);" class='wave-image'/>
</div>
<!-- Contact -->
<div class='inline-page background-blue'>
    <div class='page'>
        <h1 class='page-title'>Contact Me</h1>
        <p class='text-center'>I'm always looking for jobs and interships so if you're interested in me, please reach out!</p>
        <div class='spacer-five'></div>
        <div class='container-row text-center'>
            <div class='container-column'>
                <h1>Contact Info</h1>
                <div>
                    isaacblagoy@gmail.com
                </div>
                <div>
                    <p class='black no-decoration'>+1 (713) 498-5947</p>
                    <p>Please Text!</p>
                </div>
            </div>
            <div>
                <h1>Socials</h1>
                <a href='https://github.com/IsaacLagoy'><i class='bx bxl-github'></i></a>
                <a href='/'><i class='bx bxl-linkedin'></i></a>
            </div>
        </div>
    </div>
    <div class='spacer-five'></div>
</div>