<script>

    import iSTARLogo from '$lib/images/iSTAR_logo.png';

    import {
        Grid,
        Row,
        Column,
        ImageLoader,
        Tile,
        UnorderedList,
        ListItem
    } from 'carbon-components-svelte';

</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <ImageLoader src={iSTARLogo}/>
        </Column>
    </Row>
    <Row>
        <Column>
            <Tile>
                <p>I started working with iSTAR, under <a href='https://engineering.tamu.edu/etid/profiles/hammad-eman.html' class='underline hover-blue'>Dr. Eman Hammad</a>, during the spring 2024 semester doing a combination of IT and web development. I worked on the Cyber Expert Project Team where we designed a website to host virtual labs for students and monitor their engagement.</p>
            </Tile>
        </Column>
    </Row>
    <Row>
        <Column>
            <Tile>
                <h2>Time Working</h2>
                <p>
                    Spring 2024 - Fall 2024
                </p>
            </Tile>
        </Column>
        <Column>
            <Tile>
                <h2>Skills learned</h2>
                <UnorderedList expressive>
                    <ListItem>TypeScript</ListItem>
                    <ListItem>HTML</ListItem>
                    <ListItem>CSS</ListItem>
                    <ListItem>Svelte</ListItem>
                    <ListItem>Carbon Design</ListItem>
                    <ListItem>A little bit of networking with Cisco systems</ListItem>
                </UnorderedList>
            </Tile>
        </Column>
    </Row>
</Grid>