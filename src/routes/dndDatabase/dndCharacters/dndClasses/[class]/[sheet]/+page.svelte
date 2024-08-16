<script>
    import BackArrow from "$lib/BackArrow.svelte";
    export let data;
</script>

<BackArrow
    destination={data.exit}
/>

<h1 class='item-title'><span class='wooden-sign'>{data.sheet.name}</span></h1>

{#if (data.sheet.starting_skills.length > 0)}
    <div class='wooden-sign margin-ten'>
        <h1 class='text-center'>Starting Skills</h1>
        <div class='container-row-wrap'>
            {#each data.sheet.starting_skills as id}
                <a href='/dndDatabase/dndCharacters/dndClasses/{data.paramsClass}/{data.paramsSheet}/{id}x0' class='black margin-one-around'>{data.skills[id].name}</a>
            {/each}
        </div>
    </div>
{/if}
{#if (data.sheet.starting_spells.length > 0)}
    <div class='wooden-sign margin-ten'>
        <h1 class='text-center'>Starting Spells</h1>
        <div class='container-row-wrap'>
            {#each data.sheet.starting_spells as id}
                <a href='/dndDatabase/dndCharacters/dndClasses/{data.paramsClass}/{data.paramsSheet}/0x{id}' class='black margin-one-around'>{data.spells[id].name}</a>
            {/each}
        </div>
    </div>
{/if}
{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] as i}
    {#if (data.sheet.skills[i].length + data.sheet.spells[i].length !== 0)}
        <div class='wooden-sign margin-ten'>
            {#if (data.sheet.skills[i].length !== 0)}
                <h1 class='text-center'>Level {i} Skills</h1>
                <div class='container-row-wrap'>
                    {#each data.sheet.skills[i] as id}
                        <a href='/dndDatabase/dndCharacters/dndClasses/{data.paramsClass}/{data.paramsSheet}/{id}x0' class='black margin-one-around'>{data.skills[id].name}</a>
                    {/each}
                </div>
            {/if}
            {#if (data.sheet.spells[i].length !== 0)}
                <h1 class='text-center'>Level {i} Spells</h1>
                <div class='container-row-wrap'>
                    {#each data.sheet.spells[i] as id}
                        <a href='/dndDatabase/dndCharacters/dndClasses/{data.paramsClass}/{data.paramsSheet}/0x{id}' class='black margin-one-around'>{data.spells[id].name}</a>
                    {/each}
                </div>
            {/if}
        </div>
        <div class='spacer-five'></div>
    {/if}
{/each}