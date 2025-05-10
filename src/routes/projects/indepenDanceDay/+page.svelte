<script lang="ts">
    import independance_day from '$lib/images/projects/independance_day.png';
    import award from '$lib/images/projects/design_award_fall_2024.png';
    import '$lib/styles/project.css';
</script>

<div class='project-body dark-div'>
    <div class='content-row'>
        <div class="project-image-wrapper">
            <img src={independance_day} alt="IndepenDance Day" />
        </div>
        <div class='header-text'>
            <h1>IndepenDance Day</h1>
            <p>John Bitcock, a robot who dreams of becoming a professional dancer, lives in his worst nightmare, an alternate version of America where it's illegal for robots to dance. Determined to make his dream a reality, John sets out on a daring mission to rewrite history. Help John infiltrate the White House, solve physics-based puzzles using his precision cutting laser, and rewrite the Declaration of Independence so robots can dance.</p>
            <div class='button-group'>
                <a href='https://github.com/BasiliskGroup/BasiliskEngine/tree/IndepenDance-Day' class='glow-button' target='_blank'>GitHub</a>
                <a href='https://isaaclagoy.itch.io/independance-day' class='glow-button' target='_blank'>Download on itch.io</a>
            </div>
        </div>
    </div>
    <div class='content-row'>
        <p>IndepenDance Day was the first game we created using our engine-focused paradigm for designing a game with Basilisk Engine. We made sure to keep our game's code 100% separate from Basilisk's so that we could package Basilisk after the semester.</p>
        <div class="project-image-wrapper">
            <img src={award} alt="Fall 2024 Best in Game Design"/>
        </div>
    </div>
</div>