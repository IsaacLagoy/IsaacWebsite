<script lang='ts'>
    import {
        Grid,
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
        Form,
        Tile,
        NumberInput,
        Checkbox,
        Select,
        SelectItem,
        Button
    } from 'carbon-components-svelte';

    import {writable, derived} from 'svelte/store';

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
    const total = writable(-1);

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
            let add = ['', 'Devastating Crit', 'Improved Devastating Crit', 'Superior Devastating Crit', 'Epic Devastating Crit', 'Legendary Devastating Crit', 'Godly Devastating Crit'].indexOf($critOver[0]);
            if (add === -1) {
                add = 0;
            };
            return 2 + add;
        }
    );

    // functions
    async function thac0Roll(event : SubmitEvent) {
        event.preventDefault();
        rolls.set([]);
        total.set(-1);
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
        total.set($damage * ($hits + $crits * $critMultiplier));
    };
    function randint(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };  
    function sleep(ms:number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
</script>

<Grid padding class='page'>
    <Row>
        <Column>
            <Breadcrumb>
                <BreadcrumbItem href='/dnd'>D&D</BreadcrumbItem>
                <BreadcrumbItem href='/dnd/tools'>Tools</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>Melee Roller</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1>Melee Roller</h1></Column></Row>
    <Row>
        <Column>
            <Tile>
                <Form on:submit={thac0Roll}>
                    <Row>
                        <Column>
                            <NumberInput 
                                light
                                required
                                helperText='Attacks Per Round' 
                                bind:value={$dice} 
                                min={1}
                            />
                        </Column>
                        <Column>
                            <NumberInput
                                light
                                required
                                helperText='Strength'
                                bind:value={$strength}
                                min={1}
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <NumberInput
                                light
                                required
                                helperText='Your Thac0'
                                max={20}
                                bind:value={$thaco}
                            />
                        </Column>
                        <Column>
                            <NumberInput
                                light
                                required
                                max={10}
                                helperText='Enemy AC'
                                bind:value={$ac}
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Checkbox
                                labelText='Weapon?'
                                bind:checked={$weapon}
                            />
                        </Column>
                        {#if $weapon}
                            <Column>
                                <NumberInput
                                    light
                                    required
                                    min={0}
                                    helperText='Weapon Modifier'
                                    bind:value={$weaponThaco}
                                />
                            </Column>
                        {/if}
                    </Row>
                    <Row>
                        <Column>
                            <Select
                                selected=''
                                light
                                helperText='Proficiency'
                            >
                                <SelectItem value=''/>
                                <SelectItem value='Proficiency'/>
                                <SelectItem value='Improved Proficiency'/>
                                <SelectItem value='Superior Proficiency'/>
                                <SelectItem value='Epic Proficiency'/>
                                <SelectItem value='Legendary Proficiency'/>
                                <SelectItem value='Godly Proficiency'/>
                            </Select>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Select
                                selected=''
                                light
                                helperText='Devastating Crit'
                            >
                                <SelectItem value=''/>
                                <SelectItem value='Devastating Crit'/>
                                <SelectItem value='Improved Devastating Crit'/>
                                <SelectItem value='Superior Devastating Crit'/>
                                <SelectItem value='Epic Devastating Crit'/>
                                <SelectItem value='Legendary Devastating Crit'/>
                                <SelectItem value='Godly Devastating Crit'/>
                            </Select>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Checkbox
                                labelText='Reroll 1 or 2'
                                bind:checked={$reroll}
                            />
                        </Column>
                        <Column>
                            <Button type='submit' kind='secondary'>Roll</Button>
                        </Column>
                    </Row>
                </Form>
            </Tile>
        </Column>
    </Row>
    <Row id='board'>
        <Column>
            <Tile>
                <Row>
                    <Column>
                        <Tile light>
                            {#each $rolls as roll}
                                {#if (roll >= $toCrit)}
                                    <span class='yellow'>{roll + ' '}</span>
                                {:else if (roll >= $toHit)}
                                    <span class='green'>{roll + ' '}</span>
                                {:else}
                                    <span class='red'>{roll + ' '}</span>
                                {/if}
                            {/each}
                            {#if ($rolls.length > 0)}
                                <div class='container-row'>
                                    <p class='margin-one-around'>Hits: {$hits}</p>
                                    <p class='margin-one-around'>Crits: {$crits}</p>
                                </div>
                                {#if ($rolls.length === $dice)}
                                    <p class='text-center'>{$result}</p>
                                {/if}
                            {/if}
                            
                            {#if ($damage > -1 && $rolls.length > 0)}
                                <p class='text-center'>Multiplier: {$damage}</p>
                            {/if}
                        </Tile>
                    </Column>
                    <Column>
                        <Tile light>
                            <h1 class='text-center'>Damage</h1>
                            {#if ($total >= 0)}
                                <h1 class='text-center'>{$total}</h1>
                            {/if}
                        </Tile>
                    </Column>
                </Row>
            </Tile>
        </Column>
    </Row>
</Grid>