<script lang='ts'>
    import {writable, derived} from 'svelte/store';
    import Multiselect from 'svelte-multiselect';
    import BackArrow from '$lib/BackArrow.svelte';

    // stores
    const dice = writable(1);
    const thaco = writable(20);
    const ac = writable(10);
    const weaponThaco = writable(0);
    const strength = writable(20);
    const weapon = writable(true);
    const critSkill = writable(['']);
    const proficiency = writable(['']);
    const critOver = writable(['']);
    const rolls = writable<number[]>([]);
    const reroll = writable(false);
    const damage = writable(1);
    const done = writable(false);

    // derived stores
    const toHit = derived(
        [thaco, ac, weaponThaco, proficiency],
        ([$thaco, $ac, $weaponThaco, $proficiency]) => {
            let minus = ['', 'Proficiency', 'Improved Proficiency', 'Superior Proficiency', 'Epic Proficiency', 'Legendary Proficiency', 'Godly Proficiency'].indexOf($proficiency[0]);
            if (minus === -1) {minus = 0;};
            return $thaco - $ac - $weaponThaco - minus;
        }
    );
    const toCrit = derived(
        [toHit, critSkill],
        ([$toHit, $critSkill]) => {
            let minus = ['', 'Improved Crit', 'Improved Improved Crit', 'Superior Improved Crit', 'Epic Improved Crit', 'Legendary Improved Crit', 'Godly Improved Crit'].indexOf($critSkill[0]);
            if (minus === -1) {minus = 0;};
            return Math.max($toHit, 20 - minus);
        }
    );
    const crits = derived(
        [toCrit, rolls],
        ([$toCrit, $rolls]) => {
            let count = 0;
            $rolls.forEach((roll) => {
                if (roll >= $toCrit) {
                    count++;
                };
            });
            return count;
        }
    );
    const hits = derived(
        [toHit, crits, rolls],
        ([$toHit, $crits, $rolls]) => {
            let count = 0;
            $rolls.forEach((roll) => {
                if (roll >= $toHit) {
                    count++;
                };
            });
            return count - $crits;
        }
    );
    const result = derived(
        [hits, crits, rolls],
        ([$hits, $crits, $rolls]) => {
            const score = Math.floor(($hits + $crits * 2) / $rolls.length * 100);
            if (score === 200) {return 'PERFECTION!!!';}
            else if (score >= 150) {return 'Fantastic!!';}
            else if (score >= 125) {return 'Amazing!';}
            else if (score >= 100) {return 'Great!';}
            else if (score >= 75) {return 'Good job';}
            else if (score >= 50) {return 'Nice';}
            else if (score >= 25) {return 'That was alright';}
            else if (score >= 1) {return 'Yikes';}
            else {return 'Even I\'m embarrassed';}
        }
    );
    const critMultiplier = derived(
        [critOver],
        ([$critOver]) => {
            let add = ['', 'Overwhelming Crit', 'Improved Overwhelming Crit', 'Superior Overwhelming Crit', 'Epic Overwhelming Crit', 'Legendary Overwhelming Crit', 'Godly Overwhelming Crit'].indexOf($critOver[0]);
            if (add === -1) {
                add = 0;
            };
            return 2 + add;
        }
    );

    // functions
    async function thac0Roll() {
        rolls.set([]);
        done.set(false);
        for (let i = 0; i < $dice; i++) {
            await sleep(200);
            if ($reroll){
                rolls.update(r => [...r, randint(3, 20)]);
            } else {
                rolls.update(r => [...r, randint(1, 20)]);
            };
        };
        DamageRoll();
    };
    async function DamageRoll() {
        let max = 4;
        let str = $strength;
        if (!$weapon) {
            str = Math.floor(str / 2);
        };
        if ($strength >= 15) {max = 20;}
        else if ($strength >= 11) {max = 12;}
        else if ($strength >= 9) {max = 10;}
        else if ($strength >= 7) {max = 8;}
        else if ($strength >= 5) {max = 6;};
        for (let i = 0; i < 40; i++){
            await sleep(50);
            damage.set(randint(1, max));
        };
        done.set(true);
    };
    function randint(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };  
    function sleep(ms:number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

</script>

<BackArrow
    destination='/dndDatabase/dndTools'
/>

<h1 class='item-title'><span class='wooden-sign'>Melee Roller</span></h1>

<div class='wooden-sign margin-ten'>
    <form on:submit|preventDefault={thac0Roll}>
        <div class='container-row-wrap'>
            <div class='margin-one-around'>
                <p class='no-margin text-center'>Attacks Per Round</p>
                <input
                    type='number'
                    required
                    bind:value={$dice}
                />
            </div>
            <div class='margin-one-around'>
                <p class='no-margin text-center'>Strength</p>
                <input
                    type='number'
                    required
                    min={1}
                    bind:value={$strength}
                />
            </div>
            <div class='margin-one-around'>
                <p class='no-margin text-center'>Your Thac0</p>
                <input
                    type='number'
                    max=20
                    required
                    bind:value={$thaco}
                />
            </div>
            <div class='margin-one-around'>
                <p class='no-margin text-center'>Enemy AC</p>
                <input
                    type='number'
                    max=10
                    required
                    bind:value={$ac}
                />
            </div>
            <div class='margin-one-around'>
                <p class='no-margin text-center'>Weapon Modifier</p>
                <input
                    type='number'
                    required
                    min=0
                    bind:value={$weaponThaco}
                />
            </div>
            <div class='margin-one-around'>
                <div class='container-column'>
                    <label>
                        Reroll 1 or 2
                        <input
                            type="checkbox"
                            bind:checked={$reroll}
                        />
                    </label>
                    <label>
                        Weapon?
                        <input
                            type="checkbox"
                            bind:checked={$weapon}
                        />
                    </label>
                </div>
            </div>
        </div>
        <div class='margin-one-around'>
            <Multiselect
                options={['Improved Crit', 'Improved Improved Crit', 'Superior Improved Crit', 'Epic Improved Crit', 'Legendary Improved Crit', 'Godly Improved Crit']}
                maxSelect={1}
                placeholder='Improved Crit Skill Level'
                bind:selected={$critSkill}
            />
        </div>
        <div class='margin-one-around'>
            <Multiselect
                options={['Proficiency', 'Improved Proficiency', 'Superior Proficiency', 'Epic Proficiency', 'Legendary Proficiency', 'Godly Proficiency']}
                maxSelect={1}
                placeholder='Proficiency Level'
                bind:selected={$proficiency}
            />
        </div>
        <div class='margin-one-around'>
            <Multiselect
                options={['Overwhelming Crit', 'Improved Overwhelming Crit', 'Superior Overwhelming Crit', 'Epic Overwhelming Crit', 'Legendary Overwhelming Crit', 'Godly Overwhelming Crit']}
                maxSelect={1}
                placeholder='Overwhelming Crit Level'
                bind:selected={$critOver}
            />
        </div>
        <button type='submit'>Roll</button>
    </form>
</div>
<div class='spacer-five'></div>
<div class='wooden-sign margin-ten'>
    <div class='container-row'>
        <div>
            <h1 class='text-center'>Roll</h1>
            <div class='text-center'>
                {#each $rolls as roll}
                    {#if (roll >= $toCrit)}
                        <span class='yellow'>{roll + ' '}</span>
                    {:else if (roll >= $toHit)}
                        <span class='green'>{roll + ' '}</span>
                    {:else}
                        <span class='red'>{roll + ' '}</span>
                    {/if}
                {/each}
            </div>
            {#if ($rolls.length > 0)}
                <div class='container-row'>
                    <p class='margin-one-around'>Hits: {$hits}</p>
                    <p class='margin-one-around'>Crits: {$crits}</p>
                </div>
                {#if ($rolls.length === $dice)}
                    <p class='text-center'>{$result}</p>
                {/if}
            {/if}
        </div>
        <div>
            <h1 class='text-center'>Damage</h1>
            {#if ($rolls.length > 0)}
                {#if ($rolls.length === $dice)}
                    <h1 class='text-center'>{$damage}</h1>
                    {#if ($done)}
                        <h1 class='text-center wooden-sign'>{$damage * ($hits + $crits * $critMultiplier)}</h1>
                    {/if}
                {/if}
            {/if}
        </div>
    </div>
</div>
<div class='spacer-five'></div>