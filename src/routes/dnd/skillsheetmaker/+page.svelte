<script lang="ts">
    import Search from '$lib/components/Search.svelte';
    import { type Skill, type Spell, isSkill, isSpell, type SkillSheet } from '$lib/util/types';
    import { download_json } from '$lib/util/json';
    import './skillsheetmaker.css';
    import Popup from '$lib/components/Popup.svelte';

    export let data;

    const skills: (Skill | Spell)[] = data.skillspells;
    let dragged_skill: Skill | Spell | null = null;
    let source_zone: number | null = null;
    let selected_skills: (Skill | Spell)[][] = Array.from({ length: 21 }, () => []);

    // dragging functions
    let levelsHeight = 0;

    function handleDragStart(skill: Skill | Spell, from: number) {
        dragged_skill = skill;
        source_zone = from;
    }

    function handleDragOver(event: DragEvent) {
        event.preventDefault(); // Needed to allow drop
    }

    function handleDrop(target: number) {
        if (!dragged_skill) return;

        // Prevent duplicates in the target
        const alreadyExists = selected_skills[target].some(s => s.url === dragged_skill!.url);
        if (alreadyExists) return;

        // Add to target
        selected_skills[target] = [...selected_skills[target], dragged_skill];

        // Remove from source (if it came from another level)
        if (source_zone !== null && source_zone >= 0 && source_zone !== target) {
            selected_skills[source_zone] = selected_skills[source_zone].filter(s => s.url !== dragged_skill!.url);
        }

        // Reset drag state
        dragged_skill = null;
        source_zone = null;
    }

    function removeSkill(from: number, skill: Skill | Spell) {
        selected_skills[from] = selected_skills[from].filter(s => s.url !== skill.url);
    }

    // skill/spell searching
    let search_term = '';
    $: filtered_skillspells = skills.filter(skill => skill.name.toLowerCase().includes(search_term.toLowerCase()));
    let name = '';

    // loading a file
    function handleFileLoad(event: Event) {
        const fileInput = event.target as HTMLInputElement;
        const file = fileInput.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const dat: SkillSheet = JSON.parse(e.target?.result as string);
                name = dat.name;

                selected_skills = dat.skills.map((skill_list, i) => [
                    ...skill_list
                        .map((skill_name: string) => data.skills.find((skill: Skill) => skill.name.includes(skill_name)))
                        .filter(Boolean) as Skill[],
                    ...dat.spells[i]
                        .map((spell_name: string) => data.spells.find((spell: Spell) => spell.name.includes(spell_name)))
                        .filter(Boolean) as Spell[]
                ]);
            } catch (err) {
                console.error("Failed to load JSON:", err);
            }
        };
        reader.readAsText(file);
    }

    // download sheet
    $: url = name.replace(/\s+/g, '').toLowerCase();

    function download_sheet(event: Event) {
        event.preventDefault();

        const only_skills = selected_skills
            .map(list => list
                .filter(skill => isSkill(skill))
                .map(skill => skill.name)
            );
        const only_spells = selected_skills
            .map(list => list
                .filter(skill => isSpell(skill))
                .map(spell => spell.name)
            );

        const spell = {
            url,
            name,
            skills: only_skills,
            spells: only_spells
        };

        download_json(spell, `${name || 'skill_sheet'}.json`);
    }

    // control popup
    let selected: Skill | Spell | null = null;

    function open_popup(item: Skill | Spell) {
        selected = item;
    }

    function close_popup() {
        selected = null;
    }
</script>

<div class="form-header">
    <input
        type="text"
        bind:value={name}
        placeholder="Skill Sheet Name"
        class="sheet-name-input"
    />

    <button on:click={download_sheet} class="glow-button">Download</button>

    <label class="upload-button glow-button">
        Load JSON
        <input type="file" accept=".json" on:change={handleFileLoad} hidden />
    </label>
</div>

<div class="container">
    <div class="list" style={`height: ${levelsHeight}px; overflow-y: auto;`}>
        <h2>Available Skills</h2>
        <Search bind:search_term={search_term}/>
        {#each filtered_skillspells as skill}
            <div
                class="skill"
                role="button"
                tabindex="0"
                draggable="true"
                on:dragstart={() => handleDragStart(skill, 0)}
            >   
                <button on:click={() => open_popup(skill)} class='skill-spell'>{skill.name}</button>
            </div>
        {/each}
    </div>

    <div class="levels-wrapper" bind:offsetHeight={levelsHeight}>
        <div class='dropzones'>
            {#each selected_skills as level_skills, i}
                <div 
                    class='dropzone'
                    on:dragover={handleDragOver}
                    on:drop={() => handleDrop(i)}
                    role="button"
                    tabindex="0"
                >
                    {#if i === 0}
                        <h2>Starting Skills</h2>
                    {:else}
                        <h2>Level {i}</h2>
                    {/if}
                    
                    {#each level_skills as skill}
                        <div
                            class="skill"
                            role="button"
                            tabindex="0"
                            draggable="true"
                            on:dragstart={() => handleDragStart(skill, i)}
                        >
                            <button on:click={() => open_popup(skill)} class='skill-spell'>{skill.name}</button>
                            <button on:click={() => removeSkill(i, skill)} class='glow-button'>✕</button>
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</div>

<Popup visible={!!selected} on_close={close_popup}>
    <div>
        {#if selected && isSkill(selected)}
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
            {#if selected.rolls.length !== 0}
                <p>Rolls:
                    {#each selected.rolls as roll}
                        <span>{roll + " "}</span>
                    {/each}
                </p>
            {/if}
        {:else if selected && isSpell(selected)}
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
            {#if selected.cost}
                <p>Cost: {selected.cost}</p>
            {/if}
            {#if selected.damage_roll && selected.damage_count}
                <p>Damage: {selected.damage_count} {selected.damage_roll}</p>
            {/if}
        {/if}
    </div>
</Popup>