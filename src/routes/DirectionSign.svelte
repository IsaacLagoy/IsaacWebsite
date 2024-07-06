<script>
    export let destinations;
    export let location; // left, right
    export let title;
</script>

<div class='direction-post-{location}'>
    <div class='direction-title'>{title}</div>
    {#each Object.entries(destinations) as [name, link]}
        {#if link !== 'none'}
            <div class='direction-sign-{location}'>
                <a href={link} class='no-decoration black'>{name}</a>
            </div>
        {:else}
            <p class='direction-sign-{location}'>{name}</p>
        {/if}
    {/each}
    <div class='direction-post'></div>
</div>
