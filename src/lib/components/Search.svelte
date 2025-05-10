<script lang='ts'>
    export let placeholder: string = 'Search...';
    export let search_term = '';
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

<style>
    .search-box-wrapper {
        position: relative;
        width: 100%;
    }

    .search-box {
        position: absolute;
        width: 100%;
        background: white;
        z-index: 1;
        overflow-y: auto;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        z-index: 10;
        max-height: 200px;
        overflow-y: auto;
        box-shadow: 0 0 10px rgba(0, 200, 255, 0.15);
        border-radius: 0.5rem;
        margin-top: 0.25rem;
        backdrop-filter: blur(6px);
    }

    .search-box input {
        width: 100%;
        padding: 6px;
        box-sizing: border-box;
        color: #ededed;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(15, 20, 40, 0.95);
    }

    
</style>