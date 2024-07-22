<script>
    import BackArrow from '$lib/BackArrow.svelte';
    export let data;
</script>

<BackArrow
    destination='/dndDatabase/dndCharacters/dndRaces/{data.paramsRace}'
/>

<h1 class='item-title'><span class='wooden-sign'>{data.skill.name}</span></h1>
<div class='wooden-sign text-center margin-ten'>
    <p>{data.skill.description}</p>
</div>
<div class='spacer-five'></div>
{#if (data.skill.rolls !== null)}
    <div class='wooden-sign margin-ten'>
        <h1 class='text-center'>Rolls</h1>
        <p class='text-center'>
            {#each data.skill.rolls as roll}
                <span>{roll} </span>
            {/each}
        </p>
    </div>
{/if}
