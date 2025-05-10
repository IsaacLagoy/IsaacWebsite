<script lang='ts'>
    import potion_icon from '$lib/images/dnd/icons/potion.png';
    import '$lib/styles/dnd-form.css';
    import type { DndElement, Potion, Statistic } from '$lib/util/types';

    export let data;
    const potions = data.potions;
    const elements = data.elements;
    const stats = data.stats;

    let effect: Potion = potions[0];
    let duration = 1;
    let level = 1;
    let element: DndElement | null = elements[0];
    let stat: Statistic | null = stats[0];

    $: exp = effect.exponential;
    $: linear = effect.linear;
    $: cost = duration * ((exp ? effect.base * exp ** (level - 1): effect.base) + (linear ? linear * level : 0))
    $: description = effect.description
        .replace('%c', `${level}`)
        .replace('%e', `${element ? element.name : ''}`)
        .replace('%s', `${stat ? stat.nick : ''}`)
</script>

<div class='display'>
    <h1>Potion of {effect.name}</h1>
    <img src={potion_icon} alt='Potion' style={`filter: hue-rotate(${effect.hue}deg) saturate(${effect.saturation / 100}) brightness(0.9);`}/>
    <p>${cost}</p>
    <p>{description}</p>
    <p>Lasts for {duration} {duration === 1 ? effect.iterval : effect.iterval + 's'}</p>
</div>

<form class='dnd-form dark-div'>
    <label class='dnd-label'>
        Effect
        <select bind:value={effect} class='text-entry'>
            {#each potions as potion}
                <option value={potion}>{potion.name}</option>
            {/each}
        </select>
    </label>

    <label class='dnd-label'>
        Duration
        <input bind:value={duration} min=1 required class='text-entry' type='number'/>
    </label>

    {#if effect.form.length !== 0}
        <div>
            {#if effect.form.find(f => f === 'element')}
                <label class='dnd-label'>
                    Element
                    <select bind:value={element} class='text-entry'>
                        {#each elements as element}
                            <option value={element}>{element.name}</option>
                        {/each}
                    </select>
                </label>
            {/if}
            {#if effect.form.find(f => f === 'level')}
                <label class='dnd-label'>
                    Level
                    <input type='number' min=1 bind:value={level} class='text-entry'/>
                </label>
            {/if}
            {#if effect.form.find(f => f === 'stat')}
                <label class='dnd-label'>
                    Stat
                    <select bind:value={stat} class='text-entry'>
                        {#each stats as stat}
                            <option value={stat}>{stat.nick}</option>
                        {/each}
                    </select>
                </label>
            {/if}
        </div>
    {/if}
</form>

<style>
    .display {
        text-align: center;
    }
</style>