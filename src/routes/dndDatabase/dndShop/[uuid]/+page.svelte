<script>
    export let data;
</script>

<a href='/dndDatabase/dndShop' class='corner-feature-left backarrow'>
    <i class='bx bx-arrow-back'></i>
</a>

<h1 class='page-title'>{data.name}</h1>

<div class='container-row'>
    <div class='column-left'>
        <div class='round-box border-red'>
            <h1>Cost:</h1>
            <p class='text-center'>${data.cost}</p>
        </div>
        <form class='round-box border-green' method='POST' action='?/add-to-cart'>
            <label>
                Quantity
                <input
                    type='number'
                    placeholder='Quantity'
                    value=1
                    min=1
                    name='quantity'
                />
            </label>
            <button>Add to Cart</button>
        </form>
    </div>
    <div class='column-right'>
        <div class='round-box border-purple'>
            <h1>Description</h1>
            <p>{data.description}</p>
        </div>
    </div>
</div>