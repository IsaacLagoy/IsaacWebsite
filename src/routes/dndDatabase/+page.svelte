<script>
    import DirectionSign from "../DirectionSign.svelte";

</script>
<h1 class='page-title'><span class='wooden-sign'>D&D</span></h1>

<div class='wooden-sign'>
    <p>Welcome to the D&D database!!! Most of the data here is homebrew so appologies if it doesn't make sense. Check out the semi-functioning shop powerered by Supabase and the completely barren classes page.</p>
</div>

<DirectionSign
    location={'left'}
    destinations={{
        'Shop' : '/dndDatabase/dndShop',
        'Classes' : '/dndDatabase/dndClasses'
    }}
    title={'Where to?'}
/>