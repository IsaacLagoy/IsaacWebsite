<script lang='ts'>
    import '$lib/styles/style.css';
    import './layout.css';

    // load images
    import github from '$lib/graphics/social/github_white_logo.svg';
    import linked_in from '$lib/graphics/social/linkedin_white_logo.svg';
    import youtube from '$lib/graphics/social/youtube_white_logo.svg';

    let stars: {
        x: number,
        y: number,
        size: number,
        color: string
    }[] = []

    for (let i = 0; i < 50; i++) {

        const color = Math.floor(Math.random() * 100 + 50);
        const hex   = color.toString(16);

        stars.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 0.2 + 0.1,
            color: `#${hex}${hex}${hex}`
        })
    }
</script>

<nav class="navbar">
    <div class="nav-content">
        <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/dnd">D&D</a></li>
        </ul>
        <div class="nav-icons">
            <a href="https://github.com/IsaacLagoy" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" class="nav-icon" />
            </a>
            <a href="https://www.youtube.com/@Ob1Wan-J3di" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="Youtube" class="nav-icon" />
            </a>
            <a href="https://www.linkedin.com/in/isaac-lagoy-698481331" target="_blank" rel="noopener noreferrer">
                <img src={linked_in} alt="LinkedIn" class="nav-icon" />
            </a>
        </div>
    </div>
</nav>


<div class='svg-background'>
    <svg viewBox='0 0 100 100' preserveAspectRatio='xMidYMid meet'>
        {#each stars as star}
            <circle
                cx={star.x}
                cy={star.y}
                r={star.size}
                fill={star.color}
            />
        {/each}
    </svg>
</div>


<main>
    <slot />
</main>