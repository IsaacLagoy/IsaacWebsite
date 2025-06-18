<script lang="ts">
    import '$lib/styles/dnd-form.css';
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

    function playFailureSound() {

        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth'; // Harsh, buzzy tone
        osc.frequency.setValueAtTime(600, ctx.currentTime); // Start high
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 1); // Drop pitch

        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1); // Fade out

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1); // Stop after 1s
    }

</script>

<div>
    {#each rolls as roll}
        {#if roll < toHit || roll < 1}
            <span style='color: red;'>{`${roll ? roll : 'miss'} `}</span>
        {:else if roll < toCrit}
            <span style='color: green;'>{`${roll ? roll : 'miss'} `}</span>
        {:else}
            <span style='color: yellow;'>{`${roll ? roll : 'miss'} `}</span>
        {/if}
    {/each}
</div>

<div>
    <div>
        <p>Max Damage Roll: d{damageRoll}</p>
        <p>Roll To Hit: {toHit}</p>
        <p>Roll To Crit: {Math.max(toCrit, toHit)}</p>
        <p>Attacks: {tot_rolls}</p>
        <p>Hits: {tot_hits}</p>
        <p>Crits: {tot_crits}</p>
    </div>
    <div>
        <p>Called Hits: {calledHitsUsed}</p>
        <p>Called Crits: {calledCritsUsed}</p>
        <p>Damage Roll: {damage}</p>
        <p>{total}</p>
    </div>
</div>


<button on:click={roll} class='glow-button'>Attack!</button>
<div class='form-grid'>
    
    <label>
        Weapon Type
        <select bind:value={mode}>
            {#each ['unarmed', 'one handed', 'two handed'] as o}
                <option value={o}>{o}</option>
            {/each}
        </select>
    </label>
    <label>
        thac0
        <input
            type='number'
            bind:value={thac0}
        />
    </label>
    <label>
        ac
        <input
            type='number'
            bind:value={ac}
        />
    </label>
    <label>
        weapon
        <input
            type='number'
            bind:value={weapon}
        />
    </label>
    <label>
        armor
        <input
            type='number'
            bind:value={armor}
        />
    </label>
    <label>
        Strength
        <input
            type='number'
            bind:value={strength}
        />
    </label>
    <label>
        Ranged Attack
        <input
            type='checkbox'
            bind:checked={ranged}
        />
    </label>
    <label>
        Dexterity
        <input
            type='number'
            bind:value={dexterity}
        />
    </label>
    <label>
        Reroll 1 or 2
        <input
            type='checkbox'
            bind:checked={reroll}
        />
    </label>
    <label>
        Attacks Per Round
        <input
            type='number'
            bind:value={apr}
        />
    </label>
    <label>
        Crit
        <select bind:value={crit}>
            {#each critList as o, i}
                <option value={i}>{o}</option>
            {/each}
        </select>
    </label>
    <label>
        Devastating Crit
        <select bind:value={devastatingCrit}>
            {#each devastatingCritList as o, i}
                <option value={i}>{o}</option>
            {/each}
        </select>
    </label>
    <label>
        Forgo Armor
        <select bind:value={forgoArmor}>
            {#each forgoArmorList as o, i}
                <option value={i}>{o}</option>
            {/each}
        </select>
    </label>
    <label>
        Forgo Weapon
        <select bind:value={forgoWeapon}>
            {#each forgoWeaponList as o, i}
                <option value={i}>{o}</option>
            {/each}
        </select>
    </label>
    <label>
        Remaining Called Hits
        <input
            type='number'
            bind:value={calledHits}
        />
    </label>
    <label>
        Remaining Called Crits
        <input
            type='number'
            bind:value={calledCrits}
        />
    </label>
</div>

<style>
    .form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
    }
</style>