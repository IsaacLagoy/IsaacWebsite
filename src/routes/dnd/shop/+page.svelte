<script lang='ts'>
    import Multiselect from '$lib/components/Multiselect.svelte';
    import '$lib/styles/tile-grid.css';
    import type { Item } from '$lib/util/types.js';
    import Popup from '$lib/components/Popup.svelte';
    import './shop.css';

    export let data;
    let items = data.items;
    let categories = data.categories;

    let selected_names: string[] = []
    let selected_item: Item | null = null;
    
    // filter
    $: selected_keys = categories
        .filter(category => selected_names.includes(category.name))
        .map(category => category.key)

    $: filtered_items = selected_keys.length === 0
        ? items
        : items.filter(item => selected_keys.every(key => item.category.includes(key)));
    
    // control popup
    function open_popup(item: Item) {
        selected_item = item;
    }

    function close_popup() {
        selected_item = null;
    }
</script>

<h1>Shop</h1>

<div>
    <Multiselect
        options={categories.map(category => category.name)}
        bind:selected={selected_names}
        placeholder='Filter by Categories'
    />
</div>

<div class='tile-grid'>
    {#each filtered_items as item}
        <button class='tile shop-tile' on:click={() => open_popup(item)}>
            <div class='title'>{item.name} - ${item.cost}</div>
        </button>
    {/each}
</div>

<Popup visible={!!selected_item} on_close={close_popup}>
    {#if selected_item} <!-- selected_item may be null so this prevents errors -->
        <div class='info-card'>
            <div class='item-header'>
                <h2>{selected_item.name}</h2>
                <p>${selected_item.cost}</p>
            </div>
            <p>{selected_item.description}</p>
        </div>
    {/if}
</Popup>

{#if filtered_items.length === 0}
    <div style='padding-bottom: 200px;'></div>
{/if}