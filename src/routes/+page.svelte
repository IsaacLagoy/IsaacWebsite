<script lang='ts'>
    import {readable} from 'svelte/store';

    import {
        Accordion,
        AccordionItem,
        Grid,
        Row,
        Column,
        UnorderedList,
        ListItem

    } from 'carbon-components-svelte';

    function get_word_time(hour : number) {
        if (hour < 12) {return 'morning';} 
        else if (hour < 17) {return 'afternoon';}
        else if (hour < 20 ) {return 'evening';}
        else {return 'night';};
    };

    const date_time = readable(new Date());
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <h1 class='page-title'>Welcome</h1>
            <p>
                Welcome to my website! My name is Isaac and I hope you're having a great {get_word_time($date_time.getHours())}. Feel free to look around and check out any cool projects that may interest you. Scroll down to learn more about me!
            </p>
        </Column>
    </Row>
    <Row>
        <Column>
            <h1>Howdy!</h1>
            <p>
                I'm a full time student at Texas A&M going for my BS in computer science with a minor in math. I love learning about how the world works and what I can do to make it a better place. You can often find me at the Game Developers Club where I'm working on a Python based game engine and improving my coding skills every day. 
            </p>
        </Column>
    </Row>
    <Row>
        <Column>
            <h1>Skills</h1>
            <Accordion>
                <AccordionItem title='Web Development'>
                    <p>

                    </p>
                    <UnorderedList >
                        Languages:
                        <ListItem>HTML</ListItem>
                        <ListItem>TypeScript</ListItem>
                        <ListItem>CSS</ListItem>
                    </UnorderedList>
                    <UnorderedList >
                        Frameworks:
                        <ListItem>Svelte</ListItem>
                        <ListItem>Carbon Design</ListItem>
                    </UnorderedList>
                </AccordionItem>
                <AccordionItem title='Databases'>
                    <p>
                        I first learned how to develop databases during my intership at iSTAR with PostgreSQL. I mainly worked on Cyber Expert's RLS using Supabase. I took some of the skills I learned from Cyber Expert and applied them to my very own D&D database.
                    </p>
                </AccordionItem>
                <AccordionItem title='Power Automate'>
                    <p>
                        I worked with Power Automate during my time at Structurology where I automated many manual processes for their structural engineers. 
                    </p>
                    <UnorderedList>
                        My automations:
                        <ListItem>Reduced redundant data</ListItem>
                        <ListItem>Filled out reports</ListItem>
                        <ListItem>Created notifications for employees</ListItem>
                        <ListItem>Created teams for new clients</ListItem>
                        <ListItem>Streamlined tedious tasks</ListItem>
                    </UnorderedList>
                </AccordionItem>
            </Accordion>
        </Column>
    </Row>
    <Row>
        <Column>
            <h1>Contect Me</h1>
            <p>I'm always looking for jobs and interships so if you're interested in me, please reach out!</p>
            <p>isaacblagoy@gmail.com</p>
        </Column>
    </Row>
</Grid>