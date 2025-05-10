<script lang='ts'>
    import { download_json } from '$lib/util/json';
    import '$lib/styles/dnd-form.css';
    import './spellmaker.css';

    export let data;

    // input variables
    let name = '';
    let description = '';
    let cost: string | null = null;
    let damage_roll: string | null = null;
    let damage_count: number | null = null;
    let roll_types = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'];

    // derived variables
    $: url = name.replace(/\s+/g, '').toLowerCase();

    function handleDownload(event: Event) {
        event.preventDefault();

        const spell = {
            url,
            name,
            description,
            cost,
            damage_roll,
            damage_count
        };

        download_json(spell, `${name || 'spell'}.json`);
    }
</script>

<form on:submit|preventDefault={handleDownload} class='dnd-form dark-div'>
    <label class='dnd-label'>
        Name: {#if data.spells.find(spell => spell.name.toLowerCase() === name.toLowerCase())}WARNING spell already exsists{/if}
        <input type='text' bind:value={name} required class='text-entry'/>
    </label>
    <label class='dnd-label'>
        Description:
        <textarea bind:value={description} required class='text-entry'></textarea>
    </label>
    <label class='dnd-label'>
        Cost:
        <input type='text' bind:value={cost} placeholder='ex. 9 Mana' class='text-entry'/>
    </label>
    <div class='damage'>
        Damage
        <div>
            <label class='dnd-label'>
                <input type='number' bind:value={damage_count} class='text-entry' min={1}/>
            </label>
            <label class='dnd-label'>
                <select bind:value={damage_roll} class='text-entry'>
                    {#each roll_types as roll}
                        <option value={roll}>{roll}</option>
                    {/each}
                </select>
            </label>
        </div>
    </div>
    <button type='submit' class='glow-button'>Download Spell</button>
</form>