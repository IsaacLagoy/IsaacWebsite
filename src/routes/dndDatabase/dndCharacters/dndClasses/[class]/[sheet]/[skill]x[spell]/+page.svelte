<script>
    import BackArrow from '$lib/BackArrow.svelte';
    export let data;
</script>

<BackArrow
    destination={data.exit}
/>

<h1 class='item-title'><span class='wooden-sign'>{data.ability.name}</span></h1>
<div class='wooden-sign text-center'>
    <p>{data.ability.description}</p>
</div>
<div class='spacer-five'></div>
{#if (data.pageType === 'spell')}
    <div class='container-row'>
        {#if (data.ability.cost !== null)}
            <div class='wooden-sign contained'>
                <h1>Cost</h1>
                <p class='text-center'>{data.ability.cost}</p>
            </div>
        {/if}
        {#if (data.ability.damage_count !== null)}
        <div class='wooden-sign contained'>
            <h1>Damage</h1>
            <p class='text-center'>{data.ability.damage_count} {data.ability.damage_roll}</p>
        </div>
        {/if}
    </div>
{:else if (data.ability.rolls !== null)}
    <div class='wooden-sign'>
        <h1 class='text-center'>Rolls</h1>
        <p class='text-center'>
            {#each data.ability.rolls as roll}
                <span>{roll}</span>
            {/each}
        </p>
    </div>
{/if}