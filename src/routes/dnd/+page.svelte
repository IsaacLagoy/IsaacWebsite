<script lang='ts'>
    import '$lib/styles/tile-grid.css';

    let tiles = [
        {title: 'Rules (Progress)', thumb: 'paper', href: 'https://docs.google.com/document/d/1Nl7M05CE57KXw6QNjNrDS-5E6uKVaryZsamc3JPRMuA/edit?usp=sharing'},
        {title: 'Classes', thumb: 'paper', href: 'classes'},
        {title: 'Skills/Spells', thumb: 'fire', href: 'skillspells'},
        {title: 'Item Creator', thumb: 'hammer_anvil', href: 'itemmaker'},
        {title: 'Alchemy', thumb: 'potion', href: 'alchemy'},
        {title: 'Elements', thumb: 'paper', href: 'elements'},
        {title: 'Shop', thumb: 'balance', href: 'shop'},
        {title: 'Races', thumb: 'fist', href: 'races'},
        {title: 'Attack Roller', thumb: 'knife_dice', href: 'attackroller'},
        {title: 'Rules', thumb: 'no_paper', href: 'rules'},
        {title: 'Skill Sheet Builder', thumb: 'paper_anvil', href: 'skillsheetmaker'},
        {title: 'Skill Maker', thumb: 'skill_anvil', href: 'skillmaker'},
        {title: 'Spell Maker', thumb: 'spell_anvil', href: 'spellmaker'},
        
    ]
</script>

<h1>D&D Database</h1>

<div class='dnd tile-grid'>
    {#each tiles as tile}
        <a href={tile.href.includes('https') ? tile.href : `dnd/${tile.href}`} class='tile'>
            <div class='thumbnail-wrapper'>
                <img src={`/images/dnd/icons/${tile.thumb}.png`} alt={tile.title}/>
            </div>
            <div class='title'>{tile.title}</div>
        </a>
    {/each}
</div>