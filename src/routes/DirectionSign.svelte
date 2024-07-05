<script>
    export let destinations;
    export let location; // left, right
</script>

<div class='direction-sign-{location}'>
    {#each Object.entries(destinations) as [name, link]}
        <p><a href={link}>{name}</a></p>
    {/each}
</div>
