<script lang='ts'>
    import {
        Grid,
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
        Form,
        FormItem,
        FormGroup,
        Tile,
        NumberInput

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
                <BreadcrumbItem href='/dnd/tools/meleeRoller' isCurrentPage>Melee Roller</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row>
    <Row><Column><h1 class='page-title'>Melee Roller</h1></Column></Row>
    <Row>
        <Column>
            <Tile>
                <Form on:submit={thac0Roll}>
                    <NumberInput 
                        label='Attacks Per Round' 
                        bind:value={$dice} 
                        min={1}
                    />
                </Form>
            </Tile>
            
        </Column>
    </Row>
</Grid>