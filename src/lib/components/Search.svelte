<script lang='ts'>
    export let placeholder: string = 'Search...';
    export let search_term = '';

    import '$lib/components/search.css';
</script>


<div class="search-box-wrapper">
    <div class='search-box'>
        <input
            type='text'
            placeholder={placeholder}
            bind:value={search_term}
        />
    </div>
</div>