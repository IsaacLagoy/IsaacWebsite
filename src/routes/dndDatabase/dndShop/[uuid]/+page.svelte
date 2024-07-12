<script>
    export let data;
</script>

<a href='/dndDatabase/dndShop' class='corner-feature-left backarrow'>
    <i class='bx bx-arrow-back'></i>
</a>

<h1 class='item-title'><span class='wooden-sign'>{data.name}</span></h1>

<div class='container-row'>
    <div class='column-left'>
        <div class='wooden-sign text-center'>
            <h1>Cost:</h1>
            <p>${data.cost}</p>
        </div>
        <form class='wooden-sign' method='POST' action='?/add-to-cart'>
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
        <div class='wooden-sign text-center'>
            <h1>Description</h1>
            <p>{data.description}</p>
        </div>
    </div>
</div>