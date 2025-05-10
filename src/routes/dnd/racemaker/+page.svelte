<script lang='ts'>
    import Multiselect from '$lib/components/Multiselect.svelte';
    import { download_json } from '$lib/util/json';
    import '$lib/styles/dnd-form.css';

    // input variables
    let name = '';
    let description = '';
    let stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    let rules = '';

    // derived variables
    $: url = name.replace(/\s+/g, '').toLowerCase();;

    function handleDownload(event: Event) {
        event.preventDefault();

        const race = {
            url,
            name,
            description
        };

        download_json(race, `${name || 'race'}.json`);
    }
</script>

<form on:submit|preventDefault={handleDownload} class='dnd-form dark-div'>
    <label class='dnd-label'>
        Name:
        <input type='text' bind:value={name} required class='text-entry'/>
    </label>
    <label class='dnd-label'>
        Description:
        <textarea bind:value={description} required class='text-entry'></textarea>
    </label>
    <div class='stats'>

    </div>
    <button type='submit' class='glow-button'>Download Race</button>
</form>

<style>

</style>
