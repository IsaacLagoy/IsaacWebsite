<script lang='ts'>
    import './elements.css';
    import type { DndElement } from '$lib/util/types';

    export let data;
    const elements = data.elements;

    let selected : DndElement | null = null;
</script>

<div class='element-container'>
    {#each elements as e, i}
    <div 
        class='element-box' 
        style='--i: {i}; --r: {300};'
        on:mouseenter={() => selected = e}
        on:mouseleave={() => selected = null}
        role="presentation"
    >
        <div 
            class='element-bubble' 
            style='background-color: {e.color}; animation-delay: {-i}s; {
                !selected ? '' :
                selected.weak_against.some(w => w === e.name) && selected.effective_against.some(ef => ef === e.name) ? 'box-shadow: 0 0 20px 10px purple;' :
                selected.weak_against.some(w => w === e.name) ? 'box-shadow: 0 0 20px 10px red;' :
                selected.effective_against.some(ef => ef === e.name) ? 'box-shadow: 0 0 20px 10px green;' : ''
            }'
        >
            {#if e.text == "dark"}
                <p style='color: #111;'>{e.name}</p>
            {:else}
                <p style='color: #eee;'>{e.name}</p>
            {/if}
        </div>
    </div>
    {/each}
</div>