<script>
    import dicey_decks from '$lib/images/dicey_decks.png';
    import spring_2024 from '$lib/images/spring_best_programming_2024.jpeg'

    import {
        Row,
        Column,
        Tile,
        ImageLoader,
        Button
    } from 'carbon-components-svelte';
</script>

<Row><Column><h1 class='page-title'>Dicey Decks</h1></Column></Row>
<Row>
    <Column>
        <ImageLoader src={dicey_decks}/>
    </Column>
    <Column>
        <Tile>
            <p>
                In Dicey Decks, you play as a dice traveling through dungeons in search of spell cards. Defeat your enemies and collect money to become more powerful and delve further into the dungeon. 
            </p>
        </Tile>
        <Button style='margin-top:30px;' href='https://gizmo-0918.itch.io/dicey-decks' kind='secondary'>Play it on itch.io</Button>
    </Column>
</Row>
<Row>
    <Column>
        <Tile>
            <p>
                Written completely in Python and GLSL without the assistance of another engine, Dicey Decks won the Spring 2024 TAGD Programming Award. Even though Dicey Decks was greatly flawed, it served as the proof of concept for our better Basilisk Engine. 
            </p>
        </Tile>
        <div class='content-right'>
            <Button style='margin-top:30px;' kind='secondary' href='https://github.com/JonahCoffelt/Real-Engine-Python'>Get it on GitHub</Button>
        </div>
    </Column>
    <Column>
        <ImageLoader src={spring_2024}/>
    </Column>
</Row>