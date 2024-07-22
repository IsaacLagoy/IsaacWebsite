<script>
    import RuleBlock from "$lib/RuleBlock.svelte";
    import BackArrow from "$lib/BackArrow.svelte";
</script>

<BackArrow
    destination='/dndDatabase'
/>

<h1 class='page-title'><span class='wooden-sign'>Rules</span></h1>

<RuleBlock
    title='Resistances'
    words='If you have resistance, divide damage by 2. If you have weakness, multiply damage by 2. If you have Immunity, take no damage.'
/>
<RuleBlock
    title='Advantage'
    words='If you have advantage, roll twice and take the best roll. If you have disadvantage, roll twice and pick the worst roll.'
/>
<RuleBlock
    title='Initiative'
    words='Roll the d20 whenever rolling for initiative. Improved initiative only activates when rolling in combat. Whoever goes rolls the highest goes first.'
/>
<RuleBlock
    title='Attack Rolls'
    words='You need to roll these stats to make the associated attack: melee - thac0, ranged - thac0 and dex, magic - wis. To hit a melee attack you need to roll your thac0 minus your targets ac.'
/>
<RuleBlock
    title='Stat Rolls'
    words='When rolling either strength, dexterity, constitution, intelligence, wisdom, or charisma, you need to role on or under your ability in that stat.'
/>
<RuleBlock
    title='Melee Combat'
    words='Roll the following dice when doing a melee attack for damage: 1-4 d4, 5-6 d6, 7-8 d8, 9-10 d10, 11-15 d12, 16-20 d20. If you are unarmed, divide your strength by 2 when determining your damage dice.'
/>
<RuleBlock 
    title='Rogue Skills' 
    words='Rogue Skills start at a 3% chance and increase by 5% each level if used, 3% if not. All rogue skills cap out at 100% by default.'
/>
<RuleBlock 
    title='Mana Limits' 
    words='You may use 5 times your maximum mana capacity in one day. Exceeding this limit has a cumulative 25% chance for you to pass out for every maximum amount of mana used.'
/>