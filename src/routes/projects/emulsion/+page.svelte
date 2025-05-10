<script lang="ts">
    import emulsion from '$lib/images/projects/emulsion.png';
    import award from '$lib/images/projects/trophy.png';
    import '$lib/styles/project.css';
</script>

<div class='project-body dark-div'>
    <div class='content-row'>
        <div class="project-image-wrapper">
            <img src={emulsion} alt="IndepenDance Day" />
        </div>
        <div class='header-text'>
            <h1>Emulsion</h1>
            <p>You are trapped between two dimensions: The Plain, a completely barren world void of color,
                and The Sight, a brighter dimension that is also filled with demons. With your trusty gun, you
                must vanquish the monsters to escape this interdimensional peril.</p>
            <div class='button-group'>
                <a href='https://github.com/BasiliskGroup/Emulsion' class='glow-button' target='_blank'>GitHub</a>
                <a href='https://gizmo-0918.itch.io/emulsion' class='glow-button' target='_blank'>Download on itch.io</a>
            </div>
        </div>
    </div>
    <div class='content-row'>
        <p>Emulsion won 2nd place at Chillennium 2025, a competition with over 50 teams. Futhermore, Emulsion was made using Basilisk Engine, outperforming teams using Godot, Unreal, and Unity. This was the first Basilisk project showing its viability as an engine.</p>
        <div class="project-image-wrapper">
            <img src={award} alt="Fall 2024 Best in Game Design"/>
        </div>
    </div>
</div>