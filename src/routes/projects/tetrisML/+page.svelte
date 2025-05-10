<script lang="ts">
    import tetris from '$lib/images/projects/tetris_ml.png';
    import award from '$lib/images/projects/design_award_fall_2024.png';
    import '$lib/styles/project.css';
</script>

<div class='project-body dark-div'>
    <div class='content-row'>
        <div class="project-image-wrapper">
            <img src={tetris} alt="IndepenDance Day" />
        </div>
        <div class='header-text'>
            <h1>Tetris ML</h1>
            <p>This program, written in Python with pygame for the visuals, trains a bot to play Tetris. The tetris clone includes all the mechanics of the original game besides storing blocks. The highest score it has achieved during the training passed 700 lines cleared.</p>
            <div class='button-group'>
                <a href='https://github.com/IsaacLagoy/TetrisML' class='glow-button' target='_blank'>GitHub</a>
            </div>
        </div>
    </div>
    <div class='content-row'>
        <p>The bot works by calculating the results of its actions weighed by the variables on the right. The bot learns by randomly adjusting the weights from a parent bot. The most successful child bot will then compete against the parent to determine who will become the next parent bot.</p>
        <ul class='project-ul'>
            <li>covered - Avoids covering unfilled tiles with another block.</li>
            <li>height - Minimizes the height of the blocks placed.</li>
            <li>twospace - Tries to leave space for 2-wide blocks to fit in.</li>
            <li>edgespace - Attempts to fill in the sides to avoid reliance on lines.</li>
        </ul>
    </div>
</div>