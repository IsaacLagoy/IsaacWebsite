<script>
    export let visible = false;
    export let on_close = () => {};
    export let boxed = true;

    import '$lib/components/popup.css';
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
