<script lang="ts">
    import './class.css';

    export let data;
    let player_class = data.player_class;
</script>

<div class='class-section'>
    <div>
        <h1>{player_class.name}</h1>
        <p>{player_class.description}</p>
        {#if player_class.rules || player_class.alignment}
            {#if player_class.rules}
                <p><strong>Rules:</strong> {player_class.rules}</p>
            {/if}
            {#if player_class.alignment}
                <p><strong>Alignment:</strong> {player_class.alignment}</p>
            {/if}
        {/if}
    </div>
    <div class='character-wrapper'>
        <img src={`/images/dnd/characters/${data.image}`} alt='Class character' class='character-image'/>
    </div>
</div>

<div class='bottom-section'>
    <div>
        <h2>Starting Stats</h2>
        <p><span class='stat'>THAC0:</span> {player_class.thac0[0]}</p>
        <p><span class='stat'>AC:</span> {player_class.ac[0]}</p>
        <p><span class='stat'>Health:</span> {player_class.health}</p>
        {#if player_class.mana}
            <p><span class='stat'>Mana:</span> {player_class.mana}</p>
        {/if}
    </div>

    <div>
        <h2>On Level Up</h2>
        <p>Gain or improve <strong>{player_class.skills}</strong> new skills or spells</p> 
        <p>Gain <strong>{player_class.health}</strong> health</p>
        <p>
            {#if player_class.ac[1] === 1}
                Reduce AC by 1 each level
            {:else}
                Every <strong>{player_class.ac[1]}</strong> levels, reduce AC by 1
            {/if}
        </p>
        <p>
            {#if player_class.thac0[1] === 1}
                Reduce THAC0 by 1 each level
            {:else}
                Every <strong>{player_class.thac0[1]}</strong> levels, reduce THAC0 by 1
            {/if}
        </p>
        {#if player_class.mana}
            <p>Increase mana by <strong>{player_class.mana}</strong></p>
        {/if}
    </div>

    <div>
        <h2>Skill Sheets</h2>
        {#each data.skill_sheets as skill_sheet}
            <a href={`${player_class.url}/${skill_sheet.url}`}>
                <p class='skill-sheet'>{skill_sheet.name}</p>
            </a>
        {/each}
    </div>
</div>
