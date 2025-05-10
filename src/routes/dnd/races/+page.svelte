<script lang='ts'>
    import type { Race } from '$lib/util/types';
    import Popup from '$lib/components/Popup.svelte';
    import '$lib/styles/tile-grid.css';

    export let data;
    const races = data.races;

    let selected: Race | null = null;
    function open_popup(item: Race) {
        selected = item;
    }

    function close_popup() {
        selected = null;
    }
</script>

<div class='tile-grid'>
    {#each races as race}
        <button on:click={() => open_popup(race.race)} class='race tile'>
            <div class='thumbnail-wrapper'>
                <img src={`/src/lib/images/dnd/characters/${race.image}`} alt={race.race.name}/>
            </div>
            <div class='title'>{race.race.name}</div>
        </button>
        
    {/each}
</div>

<Popup visible={!!selected} on_close={close_popup}>
    {#if selected}
        <div>
            <h1>{selected.name}</h1>
            <p>{selected.description}</p>
            {#if selected.rules}
                <p>{selected.rules}</p>
            {/if}
            {#if selected.skills.length !== 0}
                <h1>Inate Skills</h1>
                {#each selected.skills as skill}
                    <p>{skill}</p>
                {/each}
            {/if}
            {#if selected.str || selected.dex || selected.con || selected.int || selected.wis || selected.cha}
                <h1>Stat Adjustments</h1>
                {#if selected.str}
                    <p>str: {selected.str}</p>
                {/if}
                {#if selected.dex}
                    <p>dex: {selected.dex}</p>
                {/if}
                {#if selected.con}
                    <p>con: {selected.con}</p>
                {/if}
                {#if selected.int}
                    <p>int: {selected.int}</p>
                {/if}
                {#if selected.wis}
                    <p>wis: {selected.wis}</p>
                {/if}
                {#if selected.cha}
                    <p>cha: {selected.cha}</p>
                {/if}
            {/if}
            <div>

            </div>
        </div>
    {/if}
</Popup>

<style>
    .race {
        background: none;
        border: none;
        display: block;
    }
</style>