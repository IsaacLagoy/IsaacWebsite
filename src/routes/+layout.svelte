<script>
    import 'carbon-components-svelte/css/white.css';
    import '$lib/style.css';

    import {
        Header,
        HeaderUtilities,
        HeaderGlobalAction,
        SideNav,
        SideNavItems,
        SideNavLink,
        Content
    } from 'carbon-components-svelte';

    // icons
    import { 
        LogoGithub,
        LogoLinkedin,
        LogoYoutube,
        Home,
        Code,
        Workspace,
        WhitePaper,
        DataBase
    } from 'carbon-icons-svelte';

    let isSideNavOpen = false;
    
    // side nav links
    import {page} from '$app/stores';

    const links = [
        {icon:Home, text:'Home', href:'/'},
        {icon:Code, text:'Projects', href:'/projects'},
        {icon:Workspace, text:'Experience', href:'/experience'},
        {icon:WhitePaper, text:'Resume', href:'/resume'},
        {icon:DataBase, text:"D&D Database", href:'/dnd'}
    ];
</script>

<Header 
    platformName='Isaac Lagoy' 
    bind:isSideNavOpen
    
>
    <HeaderUtilities>
        <HeaderGlobalAction
            iconDescription='GitHub'
            tooltipAlignment='start'
            icon={LogoGithub}
            href='https://github.com/IsaacLagoy'
        />
        <HeaderGlobalAction 
            iconDescription='YouTube'
            icon={LogoYoutube}
            href='https://www.youtube.com/@Ob1Wan-J3di'
        />
        <HeaderGlobalAction
            iconDescription='LinkedIn'
            tooltipAlignment='end'
            icon={LogoLinkedin}
        />
    </HeaderUtilities>
</Header>

<SideNav bind:isOpen={isSideNavOpen} rail>
    <SideNavItems>
        {#each links as link}
            <SideNavLink 
                icon={link.icon} 
                text={link.text} 
                href={link.href}
                isSelected={$page.route.id === link.href}
            />
        {/each}
    </SideNavItems>
</SideNav>

<Content>

    <slot/>

</Content>

