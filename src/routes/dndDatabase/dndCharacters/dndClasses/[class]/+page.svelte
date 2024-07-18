<script>
    import BackArrow from '$lib/BackArrow.svelte';
    export let data;
</script>

<BackArrow 
    destination='/dndDatabase/dndCharacters/dndClasses'
/>

<h1 class='item-title'><span class='wooden-sign'>{data.class.name}</span></h1>
<div class='wooden-sign text-center margin-ten'>
    <p>{data.class.description}</p>
</div>
<div class='spacer-five'></div>
{#if (data.class.rules)}
    <div class='wooden-sign text-center margin-ten'>
        <h1>Rules</h1>
        <p>{data.class.rules}</p>
    </div>
{/if}

<div class='container-row-wrap'>
    <span>
        <div class='spacer-five'></div>
        <div class='wooden-sign text-center'>
            <h1>Stats</h1>
            <p>Health: {data.class.health} per level</p>
            <p>
                Thac0: {data.class.initial_thac0} (-1 every {data.class.thac0_interval}
                {#if (data.class.thac0_interval > 1)}levels{:else}level{/if})
            </p>
            <p>
                Ac: {data.class.initial_ac} (-1 every {data.class.ac_interval}
                {#if (data.class.ac_interval > 1)}levels{:else}level{/if})
            </p>
            {#if (data.class.mana)}
                <p>Mana: {data.class.mana} per level</p>
            {/if}
        </div>
    </span>
    <span>
        <div class='spacer-five'></div>
        <div class='wooden-sign text-center'>
            <h1>Skills</h1>
            <p>{data.class.skills} skills per level</p>
            <h1>Sheets</h1>
            {#each data.sheets as sheet}
                <a href='/dndDatabase/dndCharacters/dndClasses/{data.paramsClass}/{sheet.id}' class='black'>
                    <p>{sheet.name}</p>
                </a>
            {/each}
        </div>
    </span>
    {#if (data.class.alignment)}
        <span>
            <div class='spacer-five'></div>
            <div class='wooden-sign text-center'>
                <h1>Alignment</h1>
                <p>{data.class.alignment}</p>
            </div>
        </span>
    {/if}
</div>
<div class='spacer-five'></div>