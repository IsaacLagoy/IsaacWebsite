<script lang='ts'>
    import { isSkill, isSpell, type Skill, type Spell } from '$lib/util/types';
    import Popup from '$lib/components/Popup.svelte';
    import '$lib/styles/tile-grid.css';

    export let data;
    const skillspells = data.skillspells;

    let selected: Skill | Spell | null = null;

    function open_popup(item: Skill | Spell) {
        selected = item;
    }

    function close_popup() {
        selected = null;
    }
</script>

<div class='tile-grid'>
    {#each skillspells as skillspell}
        <div class='tile'>
            <button on:click={() => open_popup(skillspell)} class="skill-spell">
                {skillspell.name}
            </button>
        </div>
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
            <p>Price: ${selected.price}</p>
            {#if selected.cost}
                <p>Cost: {selected.cost}</p>
            {/if}
            {#if selected.damage_roll && selected.damage_count}
                <p>Damage: {selected.damage_count} {selected.damage_roll}</p>
            {/if}
        {/if}
    </div>
</Popup>

<style>
    .skill-spell {
        background-color: #333;
        border: none;
        border-radius: 4px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        font-size: 1rem;
        padding: 0.5rem;
        background: none;
    }

    .skill-spell:hover {
        transform: scale(1.01);
        background-color: #444;
        border-radius: 4px;
    }
</style>