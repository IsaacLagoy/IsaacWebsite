<script lang='ts'>
    import basilisk from '$lib/images/basilisk/basilisk_square_white.png';
    import dice_decks from '$lib/images/projects/dicey_decks.png';
    import independance_day from '$lib/images/projects/independance_day.png';
    import emulsion from '$lib/images/projects/emulsion.png';
    import selva from '$lib/images/projects/selva.png';

    import '$lib/styles/project.css';
</script>

<div class='project-header dark-div'>
    <div class='content-row'>
        <div class='project-image-wrapper'>
            <img src={basilisk} alt='Basilisk Engine' />
        </div>
        <div class='header-text'>
            <h1>Basilisk Engine</h1>
            <p>Basilisk Engine is a 3D game engine built with Python and GLSL.</p>
            <div class='button-group'>
                <a href='https://github.com/BasiliskGroup/BasiliskEngine' class='glow-button' target='_blank'>GitHub</a>
                <a href='https://pypi.org/project/basilisk-engine/' class='glow-button' target='_blank'>PyPI</a>
            </div>
        </div>
    </div>
</div>

<div class='project-body dark-div'>
    <h1>A Brief History</h1>

    <div class='content-row'>
        <p>
            In the spring of 2024, my good friend and Basilisk developer, Jonah Coffelt, invited me to the Texas Aggie Game Developers (TAGD), where we competed in their semester-long game jam. Under the pressure of <a href='https://engineering.tamu.edu/academics/undergraduate/entry-to-a-major/index.html' class='hyperlink' target='_blank'>ETAM</a>, I convinced him to create a 3D game in Python. We developed <a href='/projects/diceyDecks' class='hyperlink'>Dicey Decks</a>, the first of many Python games and the proof of concept for a full Python-based game engine.
        </p>
        <div class='project-image-wrapper'>
            <img src={dice_decks} alt='Dicey Decks' />
        </div>
    </div>

    <div class='content-row'>
        <div class='project-image-wrapper'>
            <img src={independance_day} alt='IndepenDance Day' />
        </div>
        <p>
            That summer, we began working on the first version of Basilisk Engine, aiming to create multiple 3D games without needing to rewrite the codebase each time. Unfortunately, we only made one game with this version: <a href='/projects/independance_day' class='hyperlink' target='_blank'>IndepenDance Day</a>.
        </p>
    </div>

    <div class='content-row'>
        <p>
            This early version had a major limitation, a fixed file structure. Users had to download the Basilisk Engine from our <a href='https://github.com/BasiliskGroup/BasiliskEngine' class='hyperlink' target='_blank'>GitHub</a> and place all their scripts in a specific folder. We knew that if we wanted others to use our engine, it had to be as convenient as possible. So, we converted Basilisk into a Python package installable via <code>pip install basilisk-engine</code>. This new version powered <a href='/projects/emulsion' class='hyperlink'>Emulsion</a>, which won 2nd place at <a href='https://chillennium.com' class='hyperlink' target='_blank'>Chillennium</a>, and <a href='/projects/selva' class='hyperlink'>Selva</a>, our most recent game.
        </p>
        <div class='project-image-wrapper combined-image'>
            <img src={emulsion} alt='Emulsion' />
            <img src={selva} alt='Selva' />
        </div>
    </div>
</div>