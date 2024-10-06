<script>
    import bitwise from '$lib/images/adder.jpeg';

    import {
        Grid,
        Row,
        Column,
        Tile,
        ImageLoader,
        Button,
        UnorderedList,
        ListItem
    } from 'carbon-components-svelte';
    import { List } from 'carbon-icons-svelte';
</script>

<Grid padding class='page'>
    <Row><Column><h1 class='page-title'>Bitwise Calculator</h1></Column></Row>
    <Row>
        <Column>
            <ImageLoader src={bitwise}/>
        </Column>
        <Column>
            <Tile>
                <p>
                    Infinitely expandable calculator using a minimal amount of keywords and symbols. This calculator follows the processes of circuit math but in Python functions. 
                </p>
            </Tile>
            <Button kind='secondary' style='margin-top:30px;'>Get it on GitHub</Button>
        </Column>
    </Row>
    <Row>
        <Column>
            <UnorderedList expressive>
                <h2>Functions</h2>
                <ListItem>Add</ListItem>
                <ListItem>Subtract</ListItem>
                <ListItem>Multiply</ListItem>
                <ListItem>Integer Divide</ListItem>
                <ListItem>Modulus</ListItem>
                <ListItem>Exponential</ListItem>
                <ListItem>Factorial</ListItem>
            </UnorderedList>
        </Column>
        <Column>
            <UnorderedList expressive>
                <h2>Allowed Symbols</h2>
                <ListItem>Bitwise Operators</ListItem>
                <ListItem>True & False</ListItem>
                <ListItem>def</ListItem>
                <ListItem>return</ListItem>
                <ListItem>if</ListItem>
                <ListItem>not</ListItem>
            </UnorderedList>
        </Column>
    </Row>
</Grid>