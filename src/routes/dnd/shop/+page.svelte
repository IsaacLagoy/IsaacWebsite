<script lang='ts'>
        import {
        Grid,
        Row,
        Column,
        Tile,
        Breadcrumb,
        BreadcrumbItem,
        Button,
        Form,
        MultiSelect,
        NumberInput,
        DataTable
    } from 'carbon-components-svelte';

    import {
        ShoppingCart
    } from 'carbon-icons-svelte';

    import {goto} from '$app/navigation';
    import {writable} from 'svelte/store';
    export let data;

    // stores for filter categories and cost range
    let filterCategories = writable(data.categories.categories);
    let less = writable(data.categories.less);
    let greater = writable(data.categories.greater);

    // function to apply filters by updating the URL parameters
    function applyFilters() {
        const params = new URLSearchParams(window.location.search);
        params.set('categories', 'animal');
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
</script>

<p>{$filterCategories.join(',')}</p>
<p>{$less}</p>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>Shop</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row>
        <Column>
            <h1 class='page-title'>D&D Shop</h1>
        </Column>
        <Column class='content-right'>
            <Button kind='secondary' icon={ShoppingCart} href='/dnd/shop/cart' iconDescription='Cart'/>
        </Column>
    </Row>
    <Row>
        <Column>
            <Tile>
                <Form on:submit={applyFilters}>
                    <Row><Column><h2>Filter</h2></Column></Row>
                    <Row>
                        <Column>
                            <NumberInput
                                light
                                helperText='Less Than'
                                bind:value={$less}
                                bind:min={$greater}
                            />
                            <NumberInput
                                light
                                helperText='Greater Than'
                                bind:value={$greater}
                                bind:max={$less}
                            />
                        </Column>
                        <Column>
                            <MultiSelect
                                spellcheck='false'
                                filterable
                                light
                                helperText='Categories'
                                placeholder='Filter Categories...'
                                bind:selectedIds={$filterCategories}
                                items={[
                                    {id:'armor', text:'Armor'},
                                    {id:'animal', text:'Animal'},
                                    {id:'clothing', text:'Clothing'},
                                    {id:'enchantment', text:'Enchantment'},
                                    {id:'food', text:'Food'},
                                    {id:'jewelry', text:'Jewelry'},
                                    {id:'plant', text:'Plant'},
                                    {id:'potion', text:'Potion'},
                                    {id:'scroll', text:'Scroll'},
                                    {id:'spell', text:'Spell'},
                                    {id:'stick', text:'Stick Like'},
                                    {id:'supplies', text:'Supplie'},
                                    {id:'weapon', text:'Weapon'}
                                ]}
                            /> 
                            <div class='content-right'>
                                <Button type='submit' kind='secondary'>Filter</Button>
                            </div>
                        </Column>
                    </Row>
                </Form>
            </Tile>
        </Column>
    </Row>
    <Row>
        <Column>
            <DataTable
                headers={[
                    {key:'name', value:'Name'},
                    {key:'cost', value:'Cost'}
                ]}
                rows={data.items.map((item) => ({
                    id:item.id,
                    name:item.name,
                    cost:item.cost
                }))}
                size='short'
            >
                <svelte:fragment slot='cell' let:row let:cell>
                    {#if cell.key === 'name'}
                        <a href='/dnd/shop/{row.id}'>{cell.value}</a>
                    {:else}
                        {cell.value}
                    {/if}
                </svelte:fragment>
            </DataTable>
        </Column>
    </Row>
    <Row>
        <Column class='content-right'>
            <Button on:click={() => changePage(data.currentPage - 1)} disabled={data.currentPage <= 1} kind='secondary' style='margin-right:10px;'>Previous</Button>
            <Button on:click={() => changePage(data.currentPage + 1)} disabled={data.currentPage >= data.pages} kind='secondary'>Next</Button>
        </Column>
    </Row>
</Grid>