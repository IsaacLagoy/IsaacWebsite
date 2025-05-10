<script lang="ts">
    import dicey_decks from '$lib/images/projects/dicey_decks.png';
    import award from '$lib/images/projects/spring_best_programming_2024.jpeg';
    import '$lib/styles/project.css';
</script>

<div class='project-body dark-div'>
    <div class='content-row'>
        <div class="project-image-wrapper">
            <img src={dicey_decks} alt="Dicey Decks" />
        </div>
        <div class='header-text'>
            <h1>Dicey Decks</h1>
            <p>In Dicey Decks, you play as a dice traveling through dungeons in search of spell cards. Defeat your enemies and collect money to become more powerful and delve further into the dungeon.</p>
            <div class='button-group'>
                <a href='https://github.com/JonahCoffelt/Real-Engine-Python' class='glow-button' target='_blank'>GitHub</a>
                <a href='https://gizmo-0918.itch.io/dicey-decks' class='glow-button' target='_blank'>Download on itch.io</a>
            </div>
        </div>
    </div>
    <div class='content-row'>
        <p>Written completely in Python and GLSL without the assistance of another engine, Dicey Decks won the Spring 2024 TAGD Programming Award. Even though Dicey Decks was greatly flawed, it served as the proof of concept for our better Basilisk Engine.</p>
        <div class="project-image-wrapper">
            <img src={award} alt="Spring 2024 Best in Programming"/>
        </div>
    </div>
</div>