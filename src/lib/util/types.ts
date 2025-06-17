export function notNull<T>(value: T | null | undefined): value is T {
    return value != null;
}
  

export type Item = {
    url: string;
    name: string;
    cost: number;
    description: string;
    category: string[]
}

export type Class = {
    url: string;
    name: string;
    description: string;
    skill_sheets: string[];
    rules: null;
    alignment: string;
    thac0: number[];
    ac: number[];
    health: string;
    mana: number;
    hidden: boolean;
}

// skills
export type Skill = {
    url: string;
    name: string;
    description: string;
    rolls: string[];
}

export function isSkill(value: unknown): value is Skill {
    return (
        typeof value === 'object' &&
        value !== null &&
        typeof (value as any).url === 'string' &&
        typeof (value as any).name === 'string' &&
        typeof (value as any).description === 'string' &&
        Array.isArray((value as any).rolls) &&
        (value as any).rolls.every((r: any) => typeof r === 'string')
    );
}

// spells
export type Spell = {
    url: string;
    name: string;
    description: string;
    cost: string | null;
    damage_roll: string | null;
    damage_count: string | number | null;
    price: number;
}

export function isSpell(value: unknown): value is Spell {
    return true;
    // return (
    //     typeof value === 'object' &&
    //     value !== null &&
    //     typeof (value as any).url === 'string' &&
    //     typeof (value as any).name === 'string' &&
    //     typeof (value as any).description === 'string' &&
    //     (typeof (value as any).cost === 'string' || (value as any).cost === null) &&
    //     (typeof (value as any).damage_roll === 'string' || (value as any).damage_roll === null) &&
    //     (typeof (value as any).damage_count === 'string' || (value as any).damage_count === null) &&
    //     typeof (value as any).price === 'number'
    // );
}
  
// races
export type Race = {
    url: string;
    name: string;
    str: number | null;
    con: number | null;
    dex: number | null;
    int: number | null;
    wis: number | null;
    cha: number | null;
    skills: string[] | never[];
    description: string;
    rules: string | null;
    hidden: boolean;
}

// skill sheets
export type SkillSheet = {
    url: string;
    name: string;
    skills: string[][];
    spells: string[][];
    starting_skills: string[];
    starting_spells: string[];
}

// enchantments
export type Enchantment = {
    name: string;
    description: string;
    base: number;
    linear: number;
    exponential: number;
    form: string[];
    type: string;
}

// dice
export type Dice = {
    name: string;
    avg: number;
}

export type DndElement = {
    name: string;
    description: string;
    effective_against: string[];
    weak_against: string[];
    color: string;
    text: string;
}

// potions
export type Potion = {
    name: string;
    description: string;
    base: number;
    linear: number;
    exponential: number;
    form: string[];
    hue: number;
    iterval: string;
    saturation: number;
}

// statistics
export type Statistic = {
    name: string;
    nick: string;
}