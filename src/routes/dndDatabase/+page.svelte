<script>
    import DirectionSign from "../DirectionSign.svelte";
</script>

<h1 class='page-title'><span class='wooden-sign'>D&D</span></h1>

<div class='wooden-sign margin-ten'>
    <p>Welcome to the D&D database!!! Most of the data here is homebrew so appologies if it doesn't make sense. Check out the info pages and functioning shop powered by Supabase.</p>
</div>

<DirectionSign
    location={'left'}
    destinations={{
        'Shop' : '/dndDatabase/dndShop',
        'Characters' : '/dndDatabase/dndCharacters',
        'Rules' : '/dndDatabase/dndRules'
    }}
    title={'Where to?'}
/>