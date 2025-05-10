<script lang='ts'>
    import Search from '$lib/components/Search.svelte';
    import '$lib/styles/tile-grid.css';

    export let data;
    let classes = data.classes;

    // searching for a class
    let search: string = "";
    $: filtered_classes = classes.filter(c => c.class.name.toLowerCase().includes(search.toLowerCase()))
</script>

<h1>Classes</h1>

<Search bind:search_term={search}/>

<div class='tile-grid'>
    {#each filtered_classes as c, i}
        <a href={`classes/${c.class.url}`} class='tile'>
            <div class='thumbnail-wrapper'>
                {#if c.flip}
                    <img src={`/src/lib/images/dnd/characters/${c.image}`} alt={c.class.name}/>
                {:else}
                    <img src={`/src/lib/images/dnd/characters/${c.image}`} alt={c.class.name} style='transform: scaleX(-1);'/>
                {/if}
            </div>
            <div class='title'>{c.class.name}</div>
        </a>
    {/each}
</div>