<script lang='ts'>
    // images
    import iSTARLogo from '$lib/images/iSTAR_logo.png';
    import structurologyLogo from '$lib/images/structurology_logo.png';

    import {
        Button,
        Row,
        Column,
        ImageLoader,
        UnorderedList,
        ListItem
    } from 'carbon-components-svelte';

</script>

<Row><Column><h1 class='page-title'>Experience</h1></Column></Row>

<Row>
    <Column>
        <ImageLoader 
            src={structurologyLogo}
            ratio={'2x1'}
            />
    </Column>
    <Column>
        <h2>Skills learned</h2>
        <p>
            I primarily learned how to work with Microsoft's Power Automate. Unfortunately I didn't have anyone to teach me, so I had to learn to use it on my own. More importantly, I learned how to interpret the needs of people who did not know how to program and convert it to a product that I could code. 
        </p>
    </Column>
</Row>
<Row>
    <Column>
        <p>
            I worked at Structurology during Summer 2024. I primarily made Microsoft Flows to automate processes for the engineers working at Structurology but I also worked on some tools to make accessing online data faster.
        </p>
    </Column>
    <Column>
        <h2>Time Worked</h2>
        <p>
            Summer 2024
        </p>
        <Button
            style='margin-top:20px;'
            kind='secondary'
            href='https://www.structurology.com'
        >
            Structurology
        </Button>
    </Column>
</Row>

<Row>
    <Column>
        <ImageLoader src={iSTARLogo}/>
    </Column>
</Row>
<Row>
    <Column>
        <p>I started working with iSTAR, under <a href='https://engineering.tamu.edu/etid/profiles/hammad-eman.html' class='underline hover-blue'>Dr. Eman Hammad</a>, during the spring 2024 semester doing a combination of IT and web development. I worked on the Cyber Expert Project Team where we designed a website to host virtual labs for students and monitor their engagement.</p>
    </Column>
</Row>
<Row>
    <Column>
        <h2>Time Working</h2>
        <p>
            Spring 2024 - Fall 2024
        </p>
    </Column>
    <Column>
        <h2>Skills learned</h2>
        <UnorderedList expressive>
            <ListItem>TypeScript</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Svelte</ListItem>
            <ListItem>Carbon Design</ListItem>
            <ListItem>A little bit of networking with Cisco systems</ListItem>
        </UnorderedList>
    </Column>
</Row>