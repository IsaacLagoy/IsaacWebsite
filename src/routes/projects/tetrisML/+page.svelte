<script>
    import tetris from '$lib/images/tetris_ML.png';

    import {
        Grid,
        Row,
        Column,
        ImageLoader,
        Tile,
        Button,
        StructuredList,
        StructuredListBody,
        StructuredListCell,
        StructuredListHead,
        StructuredListRow
    } from 'carbon-components-svelte';
</script>

<Grid padding class='page'>
    <Row><Column><h1 class='page-title'>Tetris ML</h1></Column></Row>
    <Row>
        <Column>
            <ImageLoader src={tetris}/>
        </Column>
        <Column>
            <Tile>
                <p>
                    This program, written in Python with pygame for the visuals, trains a bot to play Tetris. The tetris clone includes all the mechanics of the original game besides storing blocks. The highest score it has achieved during the training passed 700 lines cleared. 
                </p>
            </Tile>
            <Button kind='secondary' href='https://github.com/IsaacLagoy/TetrisML' style='margin-top:30px;'>Get it on GitHub</Button>
        </Column>
    </Row>
    <Row>
        <Column>
            <h2>How it works</h2>
            <Tile>
                <p>
                    The bot works by calculating the results of its actions weighed by the variables on the right. The bot learns by randomly adjusting the weights from a parent bot. The most successful child bot will then compete against the parent to determine who will become the next parent bot.
                </p>
            </Tile>
        </Column>
        <Column>
            <StructuredList condensed>
                <StructuredListHead>
                    <StructuredListRow head>
                        <StructuredListCell head>Variable</StructuredListCell>
                        <StructuredListCell head>Explaination</StructuredListCell>
                    </StructuredListRow>
                </StructuredListHead>
                <StructuredListBody>
                    <StructuredListRow>
                        <StructuredListCell>covered</StructuredListCell>
                        <StructuredListCell>Avoids covering unfilled tiles with another block.</StructuredListCell>
                    </StructuredListRow>
                    <StructuredListRow>
                        <StructuredListCell>height</StructuredListCell>
                        <StructuredListCell>Minimizes the height of the blocks placed.</StructuredListCell>
                    </StructuredListRow>
                    <StructuredListRow>
                        <StructuredListCell>twospace</StructuredListCell>
                        <StructuredListCell>Tries to leave space for 2-wide blocks to fit in.</StructuredListCell>
                    </StructuredListRow>
                    <StructuredListRow>
                        <StructuredListCell>edgespace</StructuredListCell>
                        <StructuredListCell>Attempts to fill in the sides to avoid reliance on lines.</StructuredListCell>
                    </StructuredListRow>
                </StructuredListBody>
            </StructuredList>
        </Column>
    </Row>
</Grid>