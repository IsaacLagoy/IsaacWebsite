<script lang="ts">
    import Popup from '$lib/components/Popup.svelte';
    import './skill_sheet.css';
    import { type Skill, isSkill, isSpell, type Spell } from '$lib/util/types';

    export let data;
    let skill_sheet = data.skill_sheet;
    let skillspells = data.skillspells;

    // control popup window
    let selected: Skill | Spell | null | any = null;

    function open_popup(item: Skill | Spell | any) {
        selected = item;
    }

    function close_popup() {
        selected = null;
    }
</script>

<div class="skill-sheet-container">
    <div class='skill-sheet-header'>
        <h1>{skill_sheet.name}</h1>
        <a href={`/dnd/classes/${data.class_name}`}>
            <h1>Go Back</h1>
        </a>
    </div>

    {#each skillspells as level, i}
        {#if level.skills.length !== 0 || level.spells.length !== 0}
            <div class="level">
                {#if i === 0}
                    <h2>Starting Skills</h2>
                {:else}
                    <h2>Level {i}</h2>
                {/if}
                

                {#if level.skills.length}
                    <div class="skills">
                        <strong>Skills:</strong>
                        <div class="skill-grid">
                            {#each level.skills as skill}
                                <button on:click={() => open_popup(skill)}>{skill?.name}</button>
                            {/each}
                        </div>
                    </div>
                {/if}

                {#if level.spells.length}
                    <div class="spells">
                        <strong>Spells:</strong>
                        <div class="spell-grid">
                            {#each level.spells as spell}
                                <button on:click={() => open_popup(spell)}>{spell?.name}</button>
                            {/each}
                        </div>
                    </div>
                {/if}
            </div>
        {/if}
    {/each}
</div>

<Popup visible={!!selected} on_close={close_popup}>
    <div>
        {#if selected && isSkill(selected)}
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
            {#if selected.rolls.length !== 0}
                <p>Rolls:
                    {#each selected.rolls as roll}
                        <span>{roll + " "}</span>
                    {/each}
                </p>
            {/if}
        {:else if selected && isSpell(selected)}
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
            {#if selected.cost}
                <p>Cost: {selected.cost}</p>
            {/if}
            {#if selected.damage_roll && selected.damage_count}
                <p>Damage: {selected.damage_count} {selected.damage_roll}</p>
            {/if}
        {/if}
    </div>
</Popup>