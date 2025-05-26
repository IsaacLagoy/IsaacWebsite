<script lang="ts">
    import { onClickOutside } from '$lib/util/click';
    import '$lib/components/Multiselect.css';

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