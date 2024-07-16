<script lang='ts'>
    import {onMount} from 'svelte';
    import {goto} from '$app/navigation';
    import {writable} from 'svelte/store';
    import Multiselect from 'svelte-multiselect';
    import DisplayShelf from '../../DisplayShelf.svelte';
    export let data;

    // stores for filter categories and cost range
    let filterCategories = writable(data.categories.categories);
    let less = writable(data.categories.less);
    let greater = writable(data.categories.greater);

    // function to apply filters by updating the URL parameters
    function applyFilters() {
        const params = new URLSearchParams();
        params.set('categories', $filterCategories.join(','));
        params.set('less', $less.toString());
        params.set('greater', $greater.toString());
        params.set('page', '1');
        goto(`?${params.toString()}`);
    }

    // function to change the page number by updating the URL parameters
    function changePage(page: number) {
        const params = new URLSearchParams(window.location.search);
        params.set('categories', $filterCategories.join(','));
        params.set('less', $less.toString());
        params.set('greater', $greater.toString());
        params.set('page', page.toString());
        goto(`?${params.toString()}`);
    }

    // on component mount, initialize the URL parameters if they are missing
    onMount(() => {
        const url = new URL(window.location.href);
        if (!url.searchParams.has('categories') && !url.searchParams.has('less') && !url.searchParams.has('greater') && !url.searchParams.has('page')) {
            applyFilters();
        }
    });
</script>

<a href='/dndDatabase' class='corner-feature-left backarrow'>
    <i class='bx bx-arrow-back'></i>
</a>

<div>
    <a class='corner-feature-right' href='/dndDatabase/dndShop/cart'>
        <i class='bx bx-cart checkout'></i>
    </a>
    <h1 class='page-title'><span class='wooden-sign'>D&D Shop</span></h1>
</div>

<div class='wooden-sign margin-ten'>
    <h1 class='text-center'>Filter</h1>
    <form on:submit|preventDefault={applyFilters}>
        <div class='container-row'>
            <div class='contained'>
                <Multiselect
                    options={["armor", "animal", "clothing", 'enchantment', 'food', 'jewelry', 'plant', "potion", 'scroll', 'spell', 'stick', 'supplies', 'weapon']}
                    placeholder='Filter categories'
                    bind:selected={$filterCategories}
                />
            </div>
            <div class='contained text-center'>
                <p>Cost:</p>
                <div>
                    <label>
                        &lt
                        <input
                            type='number'
                            placeholder='Less Than'
                            bind:value={$less}
                            min=1
                        />
                    </label>
                </div>
                <div>
                    <label>
                        &gt
                        <input
                            type='number'
                            placeholder='More Than'
                            bind:value={$greater}
                            min=1
                        />
                    </label>
                </div>
            </div>
        </div>
        <button type="submit">Submit</button>
    </form>
</div>

<div class='container-row-wrap'>
    {#each data.items as item}
        <DisplayShelf
            name={item.name}
            id={item.id}
            cost={item.cost}
        />
    {/each}
</div>

<div class='wooden-sign margin-ten'>
    <button on:click={() => changePage(data.currentPage - 1)} disabled={data.currentPage <= 1}>Previous</button>
    <button on:click={() => changePage(data.currentPage + 1)} disabled={data.currentPage >= data.pages}>Next</button>
    <p>Page {data.currentPage} of {data.pages}</p>
</div>
<div class='spacer-five'></div>

