<script lang="ts">
    import selva from '$lib/images/projects/selva.png';
    import award from '$lib/images/projects/trophy.png';
    import '$lib/styles/project.css';
</script>

<div class='project-body dark-div'>
    <div class='content-row'>
        <div class="project-image-wrapper">
            <img src={selva} alt="IndepenDance Day" />
        </div>
        <div class='header-text'>
            <h1>Selva</h1>
            <p>Remember who you are and open portals to your memories using picture frames. Solve puzzles in each memory to reach the end of the game! Each memory has its own shader with puzzles requiring you to weave in and out of each visual effect.</p>
            <div class='button-group'>
                <a href='https://github.com/BasiliskGroup/Selva' class='glow-button' target='_blank'>GitHub</a>
                <a href='https://isaaclagoy.itch.io/selva' class='glow-button' target='_blank'>Download on itch.io</a>
            </div>
        </div>
    </div>
    <div class='content-row'>
        <p>As always, Selva was created using Basilisk Engine. Selva won the Spring 2025 TAGD Best in Programming Award and by far has the most mechanics and shaders present in a Basilisk Engine game to date.</p>
        <div class="project-image-wrapper">
            <img src={award} alt="Fall 2024 Best in Game Design"/>
        </div>
    </div>
</div>