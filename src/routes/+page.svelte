<script lang='ts'>
    import './page.css';
    import './orbit.css';

    // load images
    import isaac_head from '$lib/images/isaac/isaac_research_head.png';

    import basilisk from '$lib/images/basilisk/basilisk_square_black.png';
    import tamu from '$lib/images/school/tamu_logo.png';
    import tagd from '$lib/images/school/tagd_logo.png';
    
    import github from '$lib/graphics/social/github_stars.svg';
    import linked_in from '$lib/graphics/social/linked_in_stars.svg';
    import email from '$lib/graphics/social/email_stars.svg';

    export let data;
    let skills = data.skills_data;

    // copy email button at the bottom of page
    let emailCopied = false;
    function copyEmail() {
		navigator.clipboard.writeText('isaacblagoy@gmail.com')
			.then(() => {
				emailCopied = true;
				setTimeout(() => {
					emailCopied = false;
				}, 2000);
			})
			.catch(err => {
				console.error("Failed to copy email: ", err);
			});
	}
</script>

<!-- Header -->
<div class='header'>
    <div class='headshot'>
        <img src={isaac_head} alt='Isaac Lagoy' />
    </div>
    <div class='info'>
        <h1 class='name'>Isaac Lagoy</h1>
        <p class='tagline'>Passion for Programming • Love for Game Dev</p>
    </div>
</div>

<!-- Main about me -->
<div class='planet-grid'>
    <div class='planet'>
        <a href='/'>
            <div class='bubble tamu' style='animation-delay: 0s;'>
                <img src={tamu} alt='Texas A&M Logo' class='logo' />
            </div>
        </a>
        <p class='label'>Computer Science @ Texas A&M<br />Minor in Math • 4.0 GPA<br />Student Researcher @ iSTAR</p>
    </div>

    <div class='planet'>
        <a href='/'>
            <div class='bubble tagd' style='animation-delay: -2s;'>
                <img src={tagd} alt='TAGD Logo' class='logo' />
            </div>
        </a>
        <p class='label'>President of Texas Aggie Game Developers</p>
    </div>

    <div class='planet'>
        <a href='/projects/basilisk'>
            <div class='bubble basilisk' style='animation-delay: -4s;'>
                <img src={basilisk} alt='Basilisk Logo' class='logo' />
            </div>
        </a>
        <p class='label'>Developer @ Basilisk Engine<br />Physics & Collisions</p>
    </div>
</div>

<!-- Skills -->
<div class='solar-system'>
    <h1>Solar Skills</h1>
    <div class='sun'></div>
    {#each skills as skill, i}
        <div class='small-planet' style='--i: {i}'>
            <a href={`/projects?skills=${skill.key}`}>
                <div class='small-bubble'>
                    <img src={`/${skill.thumb}`} alt={skill.name}>
                </div>
            </a>
        </div>
    {/each}
</div>


<!-- Contact -->  
<div class='contact-constellations'>
    <h1>Contact Constellations</h1>
    <div class='planet-grid'>
        <div class='planet'>
            <a href='https://github.com/IsaacLagoy' target='_blank'>
                <div class='constellation-bubble' style='animation-delay: 0s;'>
                    <img src={github} alt='GitHub' class='logo' />
                </div>
                <p class='hover-text'>Github</p>
            </a>
        </div>
        <div class='planet'>
            <a href='https://www.linkedin.com/in/isaac-lagoy-698481331' target='_blank'>
                <div class='constellation-bubble' style='animation-delay: -2s;'>
                    <img src={linked_in} alt='LinkedIn' class='logo' />
                </div>
                <p class='hover-text'>Linkedin</p>
            </a>
        </div>
        <div class="planet">
            <button on:click={copyEmail} class="email-button" aria-label="Copy email to clipboard">
                <div class="constellation-bubble" style="animation-delay: -4s;">
                    <img src={email} alt="Email" class="logo" />
                </div>
                <p class="hover-text">
                    {emailCopied ? "Email Copied!" : "isaacblagoy@gmail.com"}
                </p>
            </button>
        </div>
    </div>
</div>