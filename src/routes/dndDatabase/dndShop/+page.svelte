<script lang='ts'>
    import Multiselect from 'svelte-multiselect';
    export let data
</script>

<a href='/dndDatabase' class='corner-feature-left backarrow'>
    <i class='bx bx-arrow-back'></i>
</a>

<div>
    <a class='corner-feature-right' href='/dndDatabase/dndShop/cart'>
        <i class='bx bx-cart checkout'></i>
    </a>
    <h1 class='page-title'>D&D Shop</h1>
</div>

<div class='round-box border-green'>
    <h1>Filter</h1>
    <form method="POST" action="?/set-filter-categories">
        <div class='container-row'>
            <div class='contained'>
                <Multiselect
                    options = {["armor", "animal", "clothing", 'enchantment', 'food', 'jewelry', 'plant', "potion", 'scroll', 'spell', 'stick', 'supplies', 'weapon']}
                    placeholder = 'Filter categories'
                    name = 'filter'
                />
            </div>
            <div class='contained text-center'>
                <p>Cost:</p>
                <div>
                    <label>
                        <input
                        name='less'
                        type='number'
                        placeholder='Less Than'
                        min=1
                    />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                        name='greater'
                        type='number'
                        placeholder='More Than'
                        min=1
                    />
                    </label>
                </div>
            </div>
        </div>
        <button>Submit</button>
    </form>
</div>

<ul class="items-list">
    {#each data.items as item}
    <li>
        <span>
            <a href='/dndDatabase/dndShop/{item.id}'>{item.name}</a>
            <span class='cost'>Cost: {item.cost}</span>
        </span>
        
        <hr>
    </li>
    {/each}
</ul>