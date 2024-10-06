<script lang='ts'>
    import {writable} from 'svelte/store';

    import {
        Grid,
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
        Tile,
        Form,
        NumberInput,
        Button
    } from 'carbon-components-svelte';

    export let data;

    const quantity = writable(1);
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/shop'>Shop</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>{data.name}</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>{data.name}</h1></Column></Row>
    <Row>
        <Column>
            <h2>Cost</h2>
            <Tile>
                <p>${data.cost} per {data.name}</p>
            </Tile>
        </Column>
        <Column>
            <h2>Description</h2>
            <Tile>
                <p>{data.description}</p>
            </Tile>
        </Column>
    </Row>
    <Row>
        <Column>
            <Form method='POST' action='?/add-to-cart'>
                <Row>
                    <Column>
                        <NumberInput
                            helperText='Quantity'
                            bind:value={$quantity}
                            min={1}
                            name='quantity'
                            required
                        />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <p>Total: ${$quantity * data.cost}</p>
                    </Column>
                    <Column class='content-right'>
                        <Button type='submit' kind='secondary'>Add to Cart</Button>
                    </Column>
                </Row>
            </Form>
        </Column>
    </Row>
</Grid>