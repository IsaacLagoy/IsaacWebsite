<script>
    import DirectionSign from "../../DirectionSign.svelte";
</script>

<a href='/dndDatabase' class='corner-feature-left backarrow'>
    <i class='bx bx-arrow-back'></i>
</a>

<h1 class='page-title'>Characters</h1>

<DirectionSign
    location={'right'}
    destinations={{
        'Classes' : '/dndDatabase/dndCharacters/dndClasses',
        'Skill Sheets' : '/dndDatabase/dndCharacters/dndSkillSheets'
    }}
    title={'erm what the sigma?'}
/>