<script>
    export let data;
</script>

<h1 class='page-title'><span class='wooden-sign'>Skill Sheets</span></h1>
<ul>
    {#each data.items as item}
        <li>
            <a href='/dndDatabase/dndCharacters/dndSkillSheets/{item.id}'>{item.name}</a>
        </li>
    {/each}
</ul>

