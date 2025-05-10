<script lang="ts">
    import logisim from '$lib/images/projects/logisim.png';
    import '$lib/styles/project.css';
</script>

<div class='project-body dark-div'>
    <div class='content-row'>
        <div class="project-image-wrapper">
            <img src={logisim} alt="IndepenDance Day" />
        </div>
        <div class='header-text'>
            <h1>x86-Like CPU</h1>
            <p>The final project for my computer organization class was to create a y86 CPU, which is a reduced version of x86. </p>
        </div>
    </div>
    <div class='content-row'>
        <ul class='project-ul'>
            <l1>halt - Ends the program.</l1>
            <li>nop - Bubbles for a single cycle.</li>
            <li>irmovq - Moves a constant to a register.</li>
            <li>rrmovq - Moves the values of one register to another.</li>
            <li>rmmovq - Moves a value from memory to a register.</li>
            <li>mrmovq - Moves a value from a register to memory.</li>
            <li>pushq - Push a register to the stack.</li>
            <li>popq - Pop the top of the stack to a register.</li>
            <li>OPq - Perform an operation between two registers.</li>
            <li>jXX - Jump with or without a condition.</li>
        </ul>
    </div>
</div>