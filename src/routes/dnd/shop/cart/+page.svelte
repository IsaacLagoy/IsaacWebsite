<script lang='ts'>
    import {writable, derived} from 'svelte/store';
    import {beforeNavigate} from '$app/navigation';
    export let data;

    import {
        Grid,
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
        DataTable,
        Button,
        Form,
        TextInput,
        Tile,
        NumberInput
    } from 'carbon-components-svelte';

    import {
        TrashCan
    } from 'carbon-icons-svelte';

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

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/shop'>Shop</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/shop/cart' isCurrentPage>Cart</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>Shopping Cart</h1></Column></Row>
    <Row>
        <Column>
            <DataTable
                headers={[
                    {key:'name', value:'Name'},
                    {key:'quantity', value:'Quantity'},
                    {key:'actions', value:'Remove'}
                ]}
                rows={data.items.map((item) => ({
                    id:item.id,
                    name:item.name,
                    quantity:item.quantity,
                    actions:null
                }))}
            >
            <svelte:fragment slot='cell' let:cell let:row>
                {#if cell.key === 'actions'}
                    <Form method='POST' action='?/remove-from-cart'>
                        <TextInput
                            type='hidden'
                            name='id'
                            value={row.id}
                            required
                        />
                        <div class='content-right'>
                            <Button icon={TrashCan} iconDescription='Remove' size='small' kind='secondary' type='submit'></Button>
                        </div>
                    </Form>
                {:else}
                    {cell.value}
                {/if}
            </svelte:fragment>
            </DataTable>
        </Column>
    </Row>
    <Row>
        <Column>
            <NumberInput
                name='extra'
                required
                bind:value={$extra}
                min={0}
                helperText='Extra Sending'
            />
            <NumberInput
                name='extra'
                required
                bind:value={$discount}
                min={0}
                helperText='Discount'
                max={100}
            />
        </Column>
        <Column>
            <Tile>
                <h2>Total</h2>
                <p>${Math.ceil($total)}</p>
            </Tile>
        </Column>
    </Row>
</Grid>