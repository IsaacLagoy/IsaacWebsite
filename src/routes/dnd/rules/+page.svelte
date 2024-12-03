<script lang='ts'>

    import {
        Grid,
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
        Tile,
    } from 'carbon-components-svelte';

    const rules = [
        {title:'Resistances', words:'If you have resistance, divide damage by 2. If you have weakness, multiply damage by 2. If you have Immunity, take no damage.'},
        {title:'Advantage', words:'If you have advantage, roll twice and take the best roll. If you have disadvantage, roll twice and pick the worst roll.'},
        {title:'Initiative', words:'Roll the d20 whenever rolling for initiative. Improved initiative only activates when rolling in combat. Whoever goes rolls the highest goes first.'},
        {title:'Attack Rolls', words:'You need to roll these stats to make the associated attack: melee - thac0, ranged - thac0 and dex, magic - wis. To hit a melee attack you need to roll your thac0 minus your targets ac.'},
        {title:'Stat Rolls', words:'When rolling either strength, dexterity, constitution, intelligence, wisdom, or charisma, you need to role on or under your ability in that stat.'},
        {title:'Melee Combat', words:'Roll the following dice when doing a melee attack for damage: 1-4 d4, 5-6 d6, 7-8 d8, 9-10 d10, 11-15 d12, 16-20 d20. If you are unarmed, divide your strength by 2 when determining your damage dice.'},
        {title:'Rogue Skills', words:'Rogue Skills start at a 3% chance and increase by 5% each level if used, 3% if not. All rogue skills cap out at 100% by default.'},
        {title:'Mana Limits', words:'You may use 5 times your maximum mana capacity in one day. Exceeding this limit has a cumulative 25% chance for you to pass out for every maximum amount of mana used.'}
    ]

</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>Rules</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>Rules</h1></Column></Row>
    {#each rules as rule}
        <Row>
            <Column>
                <Tile>
                    <h2>{rule.title}</h2>
                    <p>{rule.words}</p>
                </Tile>
            </Column>
        </Row>
    {/each}
</Grid>