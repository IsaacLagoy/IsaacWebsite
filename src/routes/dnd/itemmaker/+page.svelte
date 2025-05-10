<script lang='ts'>
    import '$lib/styles/dnd-form.css';
    import type { Enchantment, Dice, DndElement } from '$lib/util/types.js';

    // import json from page load
    export let data;
    const items = data.items;
    const materials = data.materials;
    const elements = data.elements;
    const diceList = data.dice;

    // default values
    let item = items[0];
    let material = materials[0];
    let enchantments: {
        enchantment: Enchantment,
        count: number,
        dice: Dice,
        element: DndElement
    }[] = [];

    // filter enchantments that match current item type
    $: valid_enchantments = data.enchantments.filter(e => e.type === item.type);

    // Remove enchantments not matching item type when item changes
    $: if (item) {
        enchantments = enchantments.filter(e => e.enchantment.type === item.type);
    }

    // Calculate total cost
    $: enchantment_cost = enchantments.reduce((sum, e) => {
        const base = e.enchantment.base;
        const mult = e.enchantment.linear;
        const exp  = e.enchantment.exponential;
        let countVal = e.count;

        if (e.enchantment.form.find(f => f === 'dice')) {
            countVal = e.dice.avg * e.count;
        }

        return sum + (exp ? base * exp ** (countVal - 1) : base) + (mult ? mult * countVal : 0);
    }, 0);

    $: baseCost = 100 + (material.modifier === 0 ? 0 : 500 * 10 ** (material.modifier - 1));
    $: cost = baseCost + enchantment_cost * (1 + (enchantments.length === 0 ? 0 : 0.25 * (enchantments.length - 1)));

    $: stat_enchantment = enchantments.find(e => ['THAC0', 'AC'].includes(e.enchantment.name));
    $: stat = material.modifier + (stat_enchantment ? stat_enchantment.count : 0);

    // Function to add a new enchantment slot
    function addEnchantment() {
        if (valid_enchantments.length > 0) {
            const new_enchantment = {
                enchantment: valid_enchantments[0],
                count: 1,
                dice: diceList[0],
                element: elements[0]
            };
            enchantments = [...enchantments, new_enchantment];
        }
    }
    // Function to remove an enchantment by index
    function removeEnchantment(index: number) {
        enchantments = enchantments.filter((_, i) => i !== index);
    }

    $: stat_title = stat === 0 || (item.type === 'armor' && item.name !== 'Armor') ? '' : `+${stat}`;
    $: item_name = `${material.name} ${item.name} ${stat_title}`

    $: enchantment_descriptions = enchantments
        .map(e => e.enchantment.description
            .replace('%c', `${e.count}`)
            .replace('%e', `${e.element.name}`)
            .replace('%d', `${e.dice.name}`)
        )
</script>

<div class='display'>
    <h1>{item_name}</h1>
    <p>${cost}</p>
    <p>{item.description}</p>
    {#each enchantment_descriptions as description}
        <p>{description}</p>
    {/each}
</div>

<form class='dnd-form dark-div'>
    <label class='dnd-label'>
        Item Type
        <select bind:value={item} class='text-entry'>
            {#each items as itm}
                <option value={itm}>{itm.name}</option>
            {/each}
        </select>
    </label>

    <label class='dnd-label'>
        Material
        <select bind:value={material} class='text-entry'>
            {#each materials as mat}
                <option value={mat}>{mat.name}</option>
            {/each}
        </select>
    </label>

    <div class='enchantments'>
        <h3>Enchantments</h3>
        {#each enchantments as e, i}
            <div class='enchantment'>
                <label class='dnd-label'>
                    <select bind:value={e.enchantment} class='text-entry'>
                        {#each valid_enchantments as ench}
                            <option value={ench}>{ench.name}</option>
                        {/each}
                    </select>
                </label>

                {#if e.enchantment.form.length !== 0}
                    <div>
                        {#if e.enchantment.form.find(f => f === 'dice')}
                            <label class='dnd-label'>
                                Dice Count
                                <input type='number' min=1 bind:value={e.count} class='text-entry'/>
                            </label>
                            <label class='dnd-label'>
                                Dice Amount
                                <select bind:value={e.dice} class='text-entry'>
                                    {#each diceList as die}
                                        <option value={die}>{die.name}</option>
                                    {/each}
                                </select>
                            </label>
                        {:else if e.enchantment.form.find(f => f === 'element')}
                            <label class='dnd-label'>
                                Element
                                <select bind:value={e.element} class='text-entry'>
                                    {#each elements as el}
                                        <option value={el}>{el.name}</option>
                                    {/each}
                                </select>
                            </label>
                        {:else if e.enchantment.form.find(f => f === 'level')}
                            <label class='dnd-label'>
                                Level
                                <input type='number' min=1 bind:value={e.count} class='text-entry'/>
                            </label>
                        {/if}
                    </div>
                {/if}

                <button type='button' on:click={() => removeEnchantment(i)} class='glow-button'>Remove</button>
                <hr/>
            </div>
        {/each}
        
        <button type='button' on:click={addEnchantment} class='glow-button'>Add Enchantment</button>
    </div>
</form>

<style>
    .glow-button {
        padding: 0.5rem;
    }

    .display {
        text-align: center;
    }
</style>