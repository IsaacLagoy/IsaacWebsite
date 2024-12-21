<script lang='ts'>
    import indepenDanceDay from '$lib/images/indepenDanceDay.png';
    import fall_2024 from '$lib/images/design_award_fall_2024.png';

    import {
        Row,
        Column,
        Tile,
        ImageLoader,
        Button
    } from 'carbon-components-svelte';
</script>

<Row><Column><h1 class='page-title'>IndepenDance Day</h1></Column></Row>
<Row>
    <Column>
        <ImageLoader src={indepenDanceDay}/>
    </Column>
    <Column>
        <Tile>
            <p>
                John Bitcock, a robot who dreams of becoming a professional dancer, lives in his worst nightmare, an alternate version of America where it's illegal for robots to dance. Determined to make his dream a reality, John sets out on a daring mission to rewrite history. Help John infiltrate the White House, solve physics-based puzzles using his precision cutting laser, and rewrite the Declaration of Independence so robots can dance.
            </p>
        </Tile>
        <Button style='margin-top:30px;' href='https://isaaclagoy.itch.io/independance-day' kind='secondary'>Play it on itch.io</Button>
    </Column>
</Row>
<Row>
    <Column>
        <Tile>
            <p>
                IndepenDance Day was the first game we created using our engine-focused paradigm for designing a game with Basilisk Engine. We made sure to keep our game's code 100% separate from Basilisk's so that we could package Basilisk after the semester. 
            </p>
        </Tile>
        <div class='content-right'>
            <Button style='margin-top:30px;' kind='secondary' href='https://github.com/Loffelt/BasiliskEngine/tree/IndepenDance-Day'>Get it on GitHub</Button>
        </div>
    </Column>
    <Column>
        <ImageLoader src={fall_2024}/>
    </Column>
</Row>