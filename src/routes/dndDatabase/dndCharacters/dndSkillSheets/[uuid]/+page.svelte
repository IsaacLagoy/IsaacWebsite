<script lang='ts'>
    import {writable} from 'svelte/store';
    export let data;

    type sheetType = {
        id: string,
        name: string,
        description: string,
        skills: string[][],
        spells: string[][],
    }

    const sheet = writable<sheetType>(data.skill_sheet);

    function addSkill(event : Event, id : string) {
        event.preventDefault();
        const form = new FormData(event.target as HTMLFormElement);
        const level = Number(form.get('level'));
        sheet.update(s => {
            s.skills[level].push(id);
            return s;
        });
    };

    function moveSkill(event : Event, id : string, current : number) {
        event.preventDefault();
        const form = new FormData(event.target as HTMLFormElement);
        const destination = Number(form.get('end'));

        sheet.update(s => {
            s.skills[current].splice($sheet.skills[current].indexOf(id), 1);
            s.skills[destination].push(id);
            return s;
        });
    };

    function addSpell(event : Event, id : string) {
        event.preventDefault();
        const form = new FormData(event.target as HTMLFormElement);
        const level = Number(form.get('level'));
        sheet.update(s => {
            s.spells[level].push(id);
            return s;
        });
    };

    function removeSkill(event : Event, id : string, current : number) {
        event.preventDefault();
        sheet.update(s => {
            s.skills[current].splice($sheet.skills[current].indexOf(id), 1);
            return s;
        });
    };

    function moveSpell(event : Event, id : string, current : number) {
        event.preventDefault();
        const form = new FormData(event.target as HTMLFormElement);
        const destination = Number(form.get('end'));

        sheet.update(s => {
            s.spells[current].splice($sheet.spells[current].indexOf(id), 1);
            s.spells[destination].push(id);
            return s;
        });
    };

    function removeSpell(event : Event, id : string, current : number) {
        event.preventDefault();
        sheet.update(s => {
            s.spells[current].splice($sheet.spells[current].indexOf(id), 1);
            return s;
        });
    };

    $: serializedSheet = JSON.stringify($sheet);
    $: learnedSkills = $sheet.skills.flat();
    $: learnedSpells = $sheet.spells.flat();

    const spellSearch = writable('');
    const skillSearch = writable('');
    const addLevel = writable(1);
</script>

<h1 class='page-title'><span class='wooden-sign'>{$sheet.name}</span></h1>

<form method='POST' action='?/save'>
    <input
        name='sheet'
        type='hidden'
        bind:value={serializedSheet}
    />
    <button class='wooden-sign' type='submit'>Save</button>
</form>

<div class='wooden-sign'>
    <h1 class='text-center'>Add Skill</h1>
    <input
        type='string'
        placeholder='Search'
        bind:value={$skillSearch}
    />
    {#each Object.entries(data.skills) as [id, skill]}
    {#if (skill.name.startsWith($skillSearch) && learnedSkills.indexOf(id) === -1)}
        <div class='container-row'>
            {skill.name}
            <form on:submit={(event) => addSkill(event, id)}>
                Level
                <input
                    name='level'
                    type='number'
                    bind:value={$addLevel}
                    min=1
                    max=20
                    required
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
        {/if}
    {/each}
</div>
<div class='wooden-sign'>
    <h1 class='text-center'>Add Spell</h1>
    <input
        type='string'
        placeholder='Search'
        bind:value={$spellSearch}
    />
    {#each Object.entries(data.spells) as [id, spell]}
        {#if (spell.name.startsWith($spellSearch) && learnedSpells.indexOf(id) === -1)}
        <div class='container-row'>
            {spell.name}
            <form on:submit={(event) => addSpell(event, id)}>
                Level
                <input
                    name='level'
                    type='number'
                    bind:value={$addLevel}
                    min=1
                    max=20
                    required
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
        {/if}
    {/each}
</div>
{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] as i}
    <div class='wooden-sign'>
        <h1 class='text-center'>Level {i}</h1>
        <div>
            <p class='text-center'>Skills</p>
            {#each $sheet.skills[i] as skill}
                <div>
                    <form on:submit={(event) => moveSkill(event, skill, i)}>
                        {data.skills[skill].name}
                        <input
                            name='end'
                            type='number'
                            value={i}
                        />
                        <button type='submit'>Move</button>
                    </form>
                    <form on:submit={(event) => removeSkill(event, skill, i)}>
                        <button type='submit'>Remove</button>
                    </form>
                </div>
            {/each}
        </div>
        <div>
            <p class='text-center'>Spells</p>
            {#each $sheet.spells[i] as spell}
                <div>
                    <form on:submit={(event) => moveSpell(event, spell, i)}>
                        {data.spells[spell].name}
                        <input
                            name='end'
                            type='number'
                            value={i}
                        />
                        <button type='submit'>Move</button>
                    </form>
                    <form on:submit={(event) => removeSpell(event, spell, i)}>
                        <button type='submit'>Remove</button>
                    </form>
                </div>
            {/each}
        </div>
    </div>
{/each}
