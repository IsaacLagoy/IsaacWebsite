<script>
    import BackArrow from '$lib/BackArrow.svelte';
    import {writable} from 'svelte/store';
    export let data;

    const search = writable('');
</script>

<BackArrow
    destination='/dndDatabase/dndCharacters'
/>

<h1 class='page-title'><span class='wooden-sign'>Races</span></h1>
<div class='wooden-sign text-center margin-ten'>
    <h1>Search</h1>
    <input
        type='string'
        bind:value={$search}
    />
</div>
<div class='spacer-five'></div>
<div>
    {#each data.items as item}
        {#if (item.name.startsWith($search) && !item.hidden) || (item.name === $search && item.hidden)}
            <a href='/dndDatabase/dndCharacters/dndRaces/{item.id}' class='no-decoration'>
                <div class='wooden-sign text-center margin-ten'>
                    {item.name}
                </div>
            </a>
            <div class='spacer-five'></div>
        {/if}
    {/each}
</div>