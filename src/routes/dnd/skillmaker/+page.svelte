<script lang='ts'>
    import Multiselect from '$lib/components/Multiselect.svelte';
    import { download_json } from '$lib/util/json';
    import '$lib/styles/dnd-form.css';

    export let data;

    // input variables
    let name = '';
    let description = '';
    let rolls: string[] = [];

    // derived variables
    $: url = name.replace(/\s+/g, '').toLowerCase();;

    function handleDownload(event: Event) {
        event.preventDefault();

        const skill = {
            url,
            name,
            description,
            rolls
        };

        download_json(skill, `${name || 'skill'}.json`);
    }
</script>

<form on:submit|preventDefault={handleDownload} class='dnd-form dark-div'>
    <label class='dnd-label'>
        Name: {#if data.skills.find(skill => skill.name.toLowerCase() === name.toLowerCase())}WARNING skill already exsists{/if}
        <input type='text' bind:value={name} required class='text-entry'/>
    </label>
    <label class='dnd-label'>
        Description:
        <textarea bind:value={description} required class='text-entry'></textarea>
    </label>
    <label class='dnd-label'>
        <Multiselect options={['str', 'dex', 'con', 'int', 'wis', 'cha']} bind:selected={rolls} placeholder='Rolls...'/>
    </label>
    <label>
        <button type='submit' class='glow-button'>Download Skill</button>
    </label>
    
</form>

