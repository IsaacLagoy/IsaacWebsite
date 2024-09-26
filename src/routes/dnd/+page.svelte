<script lang='ts'>

import {
    Grid,
    Row,
    Column,
    Tile,
    ClickableTile,
    TooltipIcon
} from 'carbon-components-svelte';

import {
    ShoppingCart,
    ShoppingBag,
    ToolBox,
    ToolKit,
    Rule,
    RuleFilled,
    User
} from 'carbon-icons-svelte';

</script>

<Grid padding class='page'>
    <Row><Column><h1 class='page-title'>D&D Database</h1></Column></Row>
    <Row>
        <Column>
            <Tile>
                <p>Welcome to the D&D database!!! Most of the data here is homebrew so appologies if it doesn't make sense. Check out the info pages and functioning shop powered by Supabase.</p>
            </Tile>
        </Column>
    </Row>
    <Row>
        <Column>
            <ClickableTile href='/dnd/shop'>
                <h1>Shop</h1>
            </ClickableTile>
        </Column>
        <Column>
            <ClickableTile href='/dnd/characters'>
                <h1>Characters</h1>
            </ClickableTile>
        </Column>
    </Row>
    <Row>
        <Column>
            <ClickableTile href='/dnd/rules'>
                <h1>Rules</h1>
            </ClickableTile>
        </Column>
        <Column>
            <ClickableTile href='/dnd/tools'>
                <h1>Tools</h1>
            </ClickableTile>
        </Column>
    </Row>
</Grid>