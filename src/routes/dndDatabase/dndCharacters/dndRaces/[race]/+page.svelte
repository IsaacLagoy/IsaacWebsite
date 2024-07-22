<script>
    import BackArrow from '$lib/BackArrow.svelte';
    import RuleBlock from '$lib/RuleBlock.svelte';
    export let data;
</script>

<BackArrow
    destination='/dndDatabase/dndCharacters/dndRaces'
/>

<h1 class='item-title'><span class='wooden-sign'>{data.race.name}</span></h1>
<RuleBlock
    title = "Description"
    words = {data.race.description}
/>
{#if (data.race.rules)}
    <RuleBlock
        title = "Rules"
        words = {data.race.rules}
    />
{/if}
<div class='wooden-sign margin-ten text-center'>
    <h1>Stat Adjustments</h1>
    {#if (data.race.str)}
        <p>Strength {data.race.str}</p>
    {/if}
    {#if (data.race.con)}
        <p>Constitution {data.race.con}</p>
    {/if}
    {#if (data.race.dex)}
        <p>Dexterity {data.race.dex}</p>
    {/if}
    {#if (data.race.int)}
        <p>Intelligence {data.race.int}</p>
    {/if}
    {#if (data.race.wis)}
        <p>Wisdom {data.race.wis}</p>
    {/if}
    {#if (data.race.cha)}
        <p>Charisma {data.race.cha}</p>
    {/if}
</div>
<div class='spacer-five'></div>
{#if (data.skills.length > 0)}
    <div class='wooden-sign margin-ten text-center'>
        <h1>Skills</h1>
        {#each data.skills as skill}
            <a href='/dndDatabase/dndCharacters/dndRaces/{data.paramsRace}/{skill.id}' class='black'>{skill.name}</a>
        {/each}
    </div>
    <div class='spacer-five'></div>
{/if}