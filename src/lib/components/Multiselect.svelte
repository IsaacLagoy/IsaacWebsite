<script lang="ts">
    import { onClickOutside } from '$lib/util/click';

    export let options: string[] = [];
    export let selected: string[] = [];
    export let placeholder: string = 'Select...';

    let dropdownOpen = false;
    let searchTerm = '';

    $: filteredOptions = options.filter(option => option.toLowerCase().includes(searchTerm.toLowerCase()));
    $: selectedOptions = filteredOptions.filter(option => selected.includes(option));
    $: unselectedOptions = filteredOptions.filter(option => !selected.includes(option));

    function toggleSelection(option: string) {
        if (selected.includes(option)) selected = selected.filter(o => o !== option);
        else selected = [...selected, option];
    }
</script>


<div class="multiselect-wrapper" use:onClickOutside={() => dropdownOpen = false}>
    <button class="multiselect-toggle" on:click={() => dropdownOpen = !dropdownOpen} type="button">
        {selected.length ? selected.join(', ') : placeholder}
    </button>

    {#if dropdownOpen}
        <div class="multiselect-dropdown">
            <input
                type="text"
                placeholder="Search..."
                bind:value={searchTerm}
            />
            {#each selectedOptions as option}
                    <button on:click={() => toggleSelection(option)} class='option selected' type="button">{option}</button>
            {/each}
            {#each unselectedOptions as option}
                    <button on:click={() => toggleSelection(option)} class='option unselected' type="button">{option}</button>
            {/each}
        </div>
    {/if}
</div>

<style>
    .multiselect-wrapper {
        position: relative;
        width: 100%;
        font-size: 0.95rem;
        color: #cfd9ff;
    }

    .multiselect-toggle {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background-color: rgba(255, 255, 255, 0.05);
        color: #fff;
        padding: 0.6rem 0.8rem;
        width: 100%;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: border-color 0.3s, background-color 0.3s;
        text-align: left;
    }

    .multiselect-toggle:hover,
    .multiselect-toggle:focus {
        border-color: #72d0ff;
        background-color: rgba(255, 255, 255, 0.08);
        outline: none;
    }

    .multiselect-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(15, 20, 40, 0.95);
        z-index: 10;
        max-height: 200px;
        overflow-y: auto;
        box-shadow: 0 0 10px rgba(0, 200, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.5rem;
        margin-top: 0.25rem;
        backdrop-filter: blur(6px);
    }

    .multiselect-dropdown input {
        width: 100%;
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.05);
        border: none;
        color: #fff;
        font-size: 0.95rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
    }

    .multiselect-dropdown input:focus {
        outline: none;
        border-bottom: 1px solid #72d0ff;
        background-color: rgba(255, 255, 255, 0.08);
    }

    .option {
        padding: 0.5rem 0.75rem;
        width: 100%;
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
        color: #cfd9ff;
        transition: background 0.2s;
    }

    .selected {
        background-color: rgba(90, 180, 255, 0.3);
    }

    .selected:hover {
        background-color: rgba(90, 180, 255, 0.4);
    }

    .unselected:hover {
        background-color: rgba(255, 255, 255, 0.08);
    }
</style>
