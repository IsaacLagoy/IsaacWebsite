<script lang='ts'>
    import {readable} from 'svelte/store';

    import {
        Accordion,
        AccordionItem,
        Row,
        Column,
        UnorderedList,
        ListItem,
        StructuredList,
        StructuredListBody,
        StructuredListCell,
        StructuredListHead,
        StructuredListRow
    } from 'carbon-components-svelte';

    import {    
        LogoLinkedin
    } from 'carbon-icons-svelte';

    function get_word_time(hour : number) {
        if (hour < 12) {return 'morning';} 
        else if (hour < 17) {return 'afternoon';}
        else if (hour < 20 ) {return 'evening';}
        else {return 'night';};
    };

    const date_time = readable(new Date());
</script>


<Row>
    <Column>
        <h1 class='page-title'>Welcome</h1>
        <div>
            <p>
                Welcome to my website! My name is Isaac and I hope you're having a great {get_word_time($date_time.getHours())}. Feel free to look around and check out any cool projects that may interest you.
            </p>
        </div>
    </Column>
</Row>
<Row>
    <Column>
        <h1>Howdy!</h1>
        <div>
            <p>
                I'm a full time student at Texas A&M going for my BS in computer science with a minor in math. I love learning about how the world works and what I can do to make it a better place. You can often find me at the Game Developers Club where I'm working on my Basilisk Game Engine and improving my coding skills every day. 
            </p>
        </div>
    </Column>
</Row>
<Row>
    <Column>
        <h1>Skills</h1>
        <Accordion>
            <AccordionItem title='Programming Languages'>
                <div style='width:130%;'>
                <StructuredList condensed style='margin-bottom:20px;'>
                    <StructuredListHead>
                        <StructuredListRow head>
                            <StructuredListCell head>Language</StructuredListCell>
                            <StructuredListCell head>Experience</StructuredListCell>
                        </StructuredListRow>
                    </StructuredListHead>
                    <StructuredListBody>
                        <StructuredListRow>
                            <StructuredListCell>Python</StructuredListCell>
                            <StructuredListCell>
                                I love working with Python because of it's ease of use and its ability to work with multiple programming paradigms. Recently, I've been working on a game engine almost completely written in Python. 
                            </StructuredListCell>
                        </StructuredListRow>
                        <StructuredListRow>
                            <StructuredListCell>Java</StructuredListCell>
                            <StructuredListCell>
                                I competed as the captain for my high school's computer science UIL team. UIL included both a programming and testing portion of the competition, all in Java. 
                            </StructuredListCell>
                        </StructuredListRow>
                        <StructuredListRow>
                            <StructuredListCell>C++</StructuredListCell>
                            <StructuredListCell>
                                I started learning C++ at the start of the Fall 2024 semester. While I haven't made any projects with it yet, I'll be sure to add something soon. 
                            </StructuredListCell>
                        </StructuredListRow>
                        <StructuredListRow></StructuredListRow>
                    </StructuredListBody>
                </StructuredList>
            </div>
            </AccordionItem>
            <AccordionItem title='Web Development'>
                <UnorderedList style='margin:20px;'>
                    <h5>Languages</h5>
                    <ListItem>HTML</ListItem>
                    <ListItem>TypeScript</ListItem>
                    <ListItem>CSS</ListItem>
                </UnorderedList>
                <UnorderedList style='margin:20px;'>
                    <h5>Frameworks</h5>
                    <ListItem>Svelte</ListItem>
                    <ListItem>Carbon Design</ListItem>
                </UnorderedList>
            </AccordionItem>
            <AccordionItem title='Databases'>
                <p>
                    I first learned how to develop databases during my intership at iSTAR with PostgreSQL, mainly working on Cyber Expert's RLS using Supabase. Using some of the skills I learned from Cyber Expert, I delevoped my own D&D database which you can view on this website. 
                </p>
            </AccordionItem>
            <AccordionItem title='Power Automate'>
                <p>
                    I worked with Power Automate during my time at Structurology where I automated many manual processes for their structural engineers. 
                </p>
                <UnorderedList style='margin:20px;'>
                    <h5>My automations:</h5>
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
        <h1>Contact Me</h1>
        <div>
            <p>I'm always looking for jobs and interships so if you're interested in me, please reach out!</p>
            <Row>
                <Column><p class='text-center'>isaacblagoy@gmail.com</p></Column>
                <Column class='content-center'>
                    <a href='https://www.linkedin.com/in/isaac-lagoy-698481331' style='color:black'>
                        <LogoLinkedin size={32} color={'white'}/>
                    </a>
                </Column>
            </Row>
        </div>
    </Column>
</Row>