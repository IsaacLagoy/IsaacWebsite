<script lang='ts'>
    import '$lib/styles/dnd-form.css';
    import d20 from '$lib/images/dnd/icons/d20.png';
    import { browser } from '$app/environment';

    let thac0 = 20;
    let ac = 10;
    let weapon = 0;
    let armor = 0;
    let strength = 10;
    let mode = 'one handed';
    let crit = 0;
    let devastatingCrit = 0;
    let reroll = false;
    let ranged = false;
    let dexterity = 10;
    let forgoArmor = 0;
    let forgoWeapon = 0;
    let apr = 1;
    let damage = 0;
    let total = -1;
    let calledHits = 0;
    let calledCrits = 0;

    let calledHitsUsed = 0;
    let calledCritsUsed = 0;
    let pauseTime = 200;
    let tot_hits = 0;
    let tot_crits = 0;
    let tot_rolls = 0;

    const damageRollTable: {[key: string]: number[]} = {
        'unarmed' : [4, 4, 4, 4, 6, 6],
        'one handed' : [4, 6, 6, 8, 8, 10],
        'two handed' : [4, 6, 8, 10, 12, 20]
    };

    const improvementList = ['', 'Improved ', 'Superior ', 'Epic ', 'Legendary ', 'Godly '];

    const critList = [''].concat(improvementList.map(l => `${l}Improved Crit`));
    const devastatingCritList = [''].concat(improvementList.map(l => `${l}Devastating Crit`));
    const forgoArmorList = [''].concat(improvementList.map(l => `${l}Forgo Armor`));
    const forgoWeaponList = [''].concat(improvementList.map(l => `${l}Forgo Weapon`));

    $: toHit = thac0 - ac - weapon + armor;
    $: toCrit = 20 - crit;
    $: damageRoll = damageRollTable[mode][18 > strength && strength >= 16 ? 4 : Math.max(Math.min(Math.floor((strength - 6) / 2), 5), 0)]

    let rolls: number[] = [];
    
    // functions
    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    function randint(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };  

    async function roll() {
        rolls = [];
        total = -1;
        pauseTime = 200;
        calledCritsUsed = 0;
        calledHitsUsed = 0;
        let mfa = 1 + forgoArmor;
        let mfw = 1 + forgoWeapon;

        tot_hits = 0;
        tot_crits = 0;
        tot_rolls = 0;
        let hits = 0;
        let crits = 0;
        let rolled = 0;

        for (let a = 0; a < mfa * mfw; a++) {
            hits = 0;
            crits = 0;
            for (let i = 0; i < apr; i++) {
                // get roll values
                rolled = randint(1, 20);
                tot_rolls++;
                if (reroll && rolled < 3) {
                    i--;
                    continue;
                }

                if (ranged) rolled = randint(1, 20) <= dexterity ? rolled : 0

                rolls = [...rolls, rolled];
                if (rolled >= toCrit && rolled >= toHit) {
                    crits++;
                    playNote(1200 - pauseTime, 0.25);
                }
                else if (rolled >= toHit) {
                    hits++;
                    playNote(800 - pauseTime, 0.25);
                } else playNote(100, 0.25);

                // sleep for effect
                await sleep(pauseTime);
                pauseTime = pauseTime * 0.95
            }
            tot_crits += crits;
            tot_hits += hits;
            
            let hasCalledHits = calledHitsUsed < calledHits;
            let hasCalledCrits = calledCritsUsed < calledCrits;
            if (crits == 0) {
                if (hits == 0 && hasCalledHits && hasCalledCrits) {
                    calledCritsUsed++;
                    calledHitsUsed++;
                    tot_crits++;
                    continue;
                }
                if (hasCalledCrits) {
                    calledCritsUsed++;
                    tot_crits++;
                    continue;
                }
                break;
            }
        }

        damage = 0;
        for (let i = 0; i < 20; i++) {
            playNote(randint(400, 800), 0.25);
            await sleep(50);
            damage = randint(1, damageRoll);
        }

        // display total damage
        total = damage * ((2 + devastatingCrit) * tot_crits + tot_hits);
        let max_damage = damageRoll * (2 + devastatingCrit) * tot_rolls;

        playNote(2000, 0.5);
    }

    // audio
	function playNote(frequency: number = 440, duration: number = 0.5) {
        if (!browser) return; // prevent SSR crash

        const ctx = new AudioContext();

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start();
        oscillator.stop(ctx.currentTime + duration);

        gainNode.gain.setValueAtTime(1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    }

</script>

<div class="roll-display">
    {#each rolls as roll, i}
        {#if roll < toHit || roll < 1}
            <span class="roll miss" style="animation-delay: {i * 0.05}s">
                {roll ? roll : 'miss'} 
            </span>
        {:else if roll < toCrit}
            <span class="roll hit" style="animation-delay: {i * 0.05}s">
                {roll}
            </span>
        {:else}
            <span class="roll crit" style="animation-delay: {i * 0.05}s">
                {roll}
            </span>
        {/if}
    {/each}
</div>


<div class='stat-grid'>
    <div class='stat-box'>
        <p>Roll To Hit: {toHit}</p>
        <p>Roll To Crit: {Math.max(toCrit, toHit)}</p>
        <p>Max Damage Roll: d{damageRoll}</p>
    </div>

    <div class='stat-box'>
        <p>Attacks: {tot_rolls}</p>
        <p>Hits: {tot_hits}</p>
        <p>Crits: {tot_crits}</p>
        <p>Called Hits: {calledHitsUsed}</p>
        <p>Called Crits: {calledCritsUsed}</p>
    </div>

    <div class='stat-box dice-box'>
        <div class='dice-wrapper'>
            <img src={d20} alt='D20' />
            <span class='dice-number'>{damage}</span>
        </div>
        <p class='damage-total'>{total}</p>
    </div>
</div>


<div class='dnd-label'>
    <button on:click={roll} class='glow-button'>Attack!</button>
</div>

<div class='form-grid'>
    
    <label class='dnd-label'>
        Weapon Type
        <select bind:value={mode} class='text-entry'>
            {#each ['unarmed', 'one handed', 'two handed'] as o}
                <option value={o}>{o}</option>
            {/each}
        </select>
    </label>
    <label class='dnd-label'>
        thac0
        <input
            type='number'
            bind:value={thac0}
            class='text-entry'
        />
    </label>
    <label class='dnd-label'>
        ac
        <input
            type='number'
            bind:value={ac}
            class='text-entry'
        />
    </label>
    <label class='dnd-label'>
        weapon
        <input
            type='number'
            bind:value={weapon}
            class='text-entry'
        />
    </label>
    <label class='dnd-label'>
        armor
        <input
            type='number'
            bind:value={armor}
            class='text-entry'
        />
    </label>
    <label class='dnd-label'>
        Strength
        <input
            type='number'
            bind:value={strength}
            class='text-entry'
        />
    </label>
    <label class='dnd-label'>
        Ranged Attack
        <input
            type='checkbox'
            bind:checked={ranged}
            
        />
    </label>
    <label class='dnd-label'>
        Dexterity
        <input
            type='number'
            bind:value={dexterity}
            class='text-entry'
        />
    </label>
    <label class='dnd-label'>
        Reroll 1 or 2
        <input
            type='checkbox'
            bind:checked={reroll}
        />
    </label>
    <label class='dnd-label'>
        Attacks Per Round
        <input
            type='number'
            bind:value={apr}
            class='text-entry'
        />
    </label>
    <label class='dnd-label'>
        Crit
        <select bind:value={crit} class='text-entry'>
            {#each critList as o, i}
                <option value={i}>{o}</option>
            {/each}
        </select>
    </label>
    <label class='dnd-label'>
        Devastating Crit
        <select bind:value={devastatingCrit} class='text-entry'>
            {#each devastatingCritList as o, i}
                <option value={i}>{o}</option>
            {/each}
        </select>
    </label>
    <label class='dnd-label'>
        Forgo Armor
        <select bind:value={forgoArmor} class='text-entry'>
            {#each forgoArmorList as o, i}
                <option value={i}>{o}</option>
            {/each}
        </select>
    </label>
    <label class='dnd-label'>
        Forgo Weapon
        <select bind:value={forgoWeapon} class='text-entry'>
            {#each forgoWeaponList as o, i}
                <option value={i}>{o}</option>
            {/each}
        </select>
    </label>
    <label class='dnd-label'>
        Remaining Called Hits
        <input
            type='number'
            bind:value={calledHits}
            class='text-entry'
        />
    </label>
    <label class='dnd-label'>
        Remaining Called Crits
        <input
            type='number'
            bind:value={calledCrits}
            class='text-entry'
        />
    </label>
</div>

<style>
    .form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
    }

.stat-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
}

.stat-box {
    flex: 1 1 30%;
    background: #1e1e1e;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    color: white;
    position: relative;
}

@media (max-width: 768px) {
    .stat-box {
        flex: 1 1 100%;
    }
}

/* Dice styling */
.dice-wrapper {
    position: relative;
    width: 100px;
    margin: 0 auto;
}

.dice-wrapper img {
    width: 100%;
    display: block;
}

.dice-number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 4px black;
    pointer-events: none;
}

/* Total damage below die */
.damage-total {
    margin-top: 1rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #ff4444;
}

.roll-display {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem;
    font-family: 'Orbitron', sans-serif; /* Or a fun game font */
    font-size: 1.5rem;
    justify-content: center;
}

.roll {
    /* opacity: 0; */
    transform: translateY(-10px) scale(0.9);
    /* animation: popIn 0.05s forwards ease-out; */
}

/* Color-coded classes */
.roll.miss {
    color: red;
    text-shadow: 0 0 5px #ff000088;
}

.roll.hit {
    color: limegreen;
    text-shadow: 0 0 5px #00ff0088;
}

.roll.crit {
    color: gold;
    font-weight: bold;
    text-shadow: 0 0 8px #ffd700aa;
}

/* Animation */
@keyframes popIn {
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

</style>