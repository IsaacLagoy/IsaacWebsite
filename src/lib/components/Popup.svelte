<script>
    export let visible = false;
    export let on_close = () => {};
    export let boxed = true;
</script>

{#if visible}
    <div 
        class="popup-overlay" 
        on:click={on_close} 
        role="dialog"
        aria-modal="true"
        tabindex="0"
        on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && on_close()}
    >
        <div 
            role="button"
            tabindex="0"
            class="popup-content animate-in" 
            on:click|stopPropagation
            on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && on_close()}
        >
            {#if boxed}
                <div class="popup-box">
                    <button class="popup-close" on:click={on_close} aria-label="Close popup">×</button>
                    <slot />
                </div>
            {:else}
                <slot />
            {/if}
        </div>
    </div>
{/if}

<style>
    .popup-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        backdrop-filter: blur(2px);
    }

    .popup-content {
        width: 90%;
        max-width: 600px;
        padding: 1rem;
        opacity: 0;
        transform: scale(0.95);
        animation: fade-in-scale 0.3s ease-out forwards;
    }

    @keyframes fade-in-scale {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Box styling */
    .popup-box {
        background: rgba(20, 20, 40, 0.9);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 0 20px rgba(0, 200, 255, 0.3);
        color: #fff;
        backdrop-filter: blur(6px);
        position: relative;
        animation: neon-border 3s infinite alternate;
    }

    @keyframes neon-border {
        0% {
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
        }
        100% {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4);
        }
    }

    .popup-close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: transparent;
        border: none;
        font-size: 1.5rem;
        color: #fff;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .popup-close:hover {
        transform: scale(1.2);
        color: #0ff;
    }
</style>
