<script lang='ts'>
    import {writable, derived} from 'svelte/store';
    import {beforeNavigate} from '$app/navigation';
    export let data;

    // stores
    const cart = writable(data.items);
    const discount = writable(data.discount);
    const extra = writable(data.extra);
    const total = derived([cart, extra, discount], ([$cart, $extra, $discount]) => 
        (Object.values($cart).reduce((a, b) => a + b.quantity * b.cost, 0) + $extra) * (1 - $discount * 0.01)
    );

    // saving data to server
    async function postToServerAsync() {
        const res = await fetch('?/update-stores', {
            method: 'POST',
            body: JSON.stringify({
                cart: $cart,
                discount: $discount,
                extra: $extra
            })
        });
    };

    // handle navigating away from cart
    beforeNavigate(() => {
        postToServerAsync();
    });

</script>

<a href='/dndDatabase/dndShop' class='corner-feature-left backarrow'>
    <i class='bx bx-arrow-back'></i>
</a>
<h1 class='item-title'><span class='wooden-sign'>Shopping Cart</span></h1>

<div style='margin:5vh;'>
    {#each $cart as item}
        <div style='margin:1vh;'>
            <div class='container-row'>
                <div class='item-box'>
                    <p class='contained'>{item.name}</p>
                </div>
                <input
                    type='number'
                    min=1
                    bind:value={item.quantity}
                />
                <form method='POST' action='?/remove-from-cart'>
                    <input
                        type='hidden'
                        name='id'
                        value={item.id}
                        required
                    />
                    <button type='submit'>
                        <i class='bx bx-x'></i>
                    </button>
                </form>
            </div>
            <div class='spacer-one background-light_wood'></div>
        </div>
    {/each}
</div>


<div class='wooden-sign container-row'>
    <label>
        Extra Spendings $
        <input 
        name='extra'
        type='number'
        required
        bind:value={$extra}
        min=0
        max=100
        />
    </label>

    <label>
        Discount %
        <input
        name='discount'
        type='number'
        required
        bind:value={$discount}
        min=0
        />
    </label>
</div>

<h1><span class='wooden-sign'>Total: ${Math.ceil($total)}</span></h1>