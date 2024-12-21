// types
export type massType = {
    pos: vec2,
    vel: vec2,
    w: number,
    h: number,
    r: number,
    vr: number,
    inv: number,
    color: string
};
export type polygon = {vertices: vec2[]};

// vector
export type vec2 = {x: number, y:number};
export const dot     = (a: vec2, b: vec2):   number => a.x * b.x + a.y * b.y;
export const crossVV = (a: vec2, b: vec2):   number => a.x * b.y - a.y * b.x;
export const crossVS = (v: vec2, s: number): vec2 => ({x: v.y * s, y: v.x * -s});
export const crossSV = (s: number, v: vec2): vec2 => ({x: -v.y * s, y: v.x * s});
export const subtract = (a: vec2, b: vec2):  vec2 => ({ x: a.x - b.x, y: a.y - b.y });
export const add      = (a: vec2, b: vec2):  vec2 => ({x: a.x + b.x, y: a.y + b.y});
export const multiply = (v: vec2, s: number): vec2 => ({x: v.x * s, y: v.y * s});
export const normalize = (v: vec2):          vec2 => {
    const length = Math.sqrt(v.x * v.x + v.y * v.y);
    return length > 0 ? { x: v.x / length, y: v.y / length } : { x: 1, y: 0 };
};
const perpendicular = (v: vec2): vec2 => ({ x: -v.y, y: v.x });

// SAT
const project = (vertices: vec2[], axis: vec2): { min: number; max: number } => {
    const projections = vertices.map((vertex) => dot(vertex, axis));
    return { min: Math.min(...projections), max: Math.max(...projections) };
};

const overlap = (a: { min: number; max: number }, b: { min: number; max: number }): number | null => {
    const o = Math.min(a.max, b.max) - Math.max(a.min, b.min);
    return o > 0 ? o : 0;
};

const getAxes = (polygon: polygon): vec2[] =>
    polygon.vertices.map((v, i) => {
        const next = polygon.vertices[(i + 1) % polygon.vertices.length];
        return normalize(perpendicular(subtract(next, v)));
    });

export type penAndMan = {
    penetration: vec2,
    manifold: vec2[]
}

export const SATCollision = (poly1: polygon, poly2: polygon): penAndMan | false => {
    const axes1 = getAxes(poly1);
    const axes2 = getAxes(poly2);
    const axes = [...axes1, ...axes2]; // All axes to test

    let smallestOverlap = Infinity;
    let smallestAxis: vec2 | null = null;
    let referencePolygon: polygon | null = null;
    let incidentPolygon: polygon | null = null;

    for (const axis of axes) {
        const projection1 = project(poly1.vertices, axis);
        const projection2 = project(poly2.vertices, axis);

        const o = overlap(projection1, projection2);
        if (o === null) {
            // no overlap on this axis, therefore no collision
            return false;
        }

        if (o < smallestOverlap) {
            smallestOverlap = o;
            smallestAxis = axis;

            // etermine the reference and incident polygons
            if (projection1.max - projection1.min > projection2.max - projection2.min) {
                referencePolygon = poly1;
                incidentPolygon = poly2;
            } else {
                referencePolygon = poly2;
                incidentPolygon = poly1;
            }
        }
    }

    // collision detected, calculate penetration vector
    if (smallestAxis && referencePolygon && incidentPolygon) {
        const penetration = {
            x: smallestAxis.x * smallestOverlap,
            y: smallestAxis.y * smallestOverlap,
        };

        // Find contact points (example: vertex-edge or edge-edge)
        const contacts: vec2[] = [];
        for (const vertex of incidentPolygon.vertices) {
            const relativePosition = subtract(vertex, referencePolygon.vertices[0]);
            const projectedPoint = dot(relativePosition, smallestAxis);

            if (
                projectedPoint >= Math.min(...referencePolygon.vertices.map(v => dot(v, smallestAxis))) &&
                projectedPoint <= Math.max(...referencePolygon.vertices.map(v => dot(v, smallestAxis)))
            ) {
                contacts.push(vertex);
            }
        }

        return {penetration: penetration, manifold: contacts};
    }

    return false;
};

import { onMount } from 'svelte';

// polygons
export const getPolygon = (mass: massType): polygon => {
    const w = mass.w / 2;
    const h = mass.h / 2;
    const corners: vec2[] = [
        {x: -w, y: -h},
        {x: w, y: -h},
        {x: w, y: h},
        {x: -w, y: h}
    ]

    // rot matrix
    const cos = Math.cos(mass.r);
    const sin = Math.sin(mass.r);

    // rotate and translate corners
    return {vertices: corners.map((corner) => ({
        x: cos * corner.x - sin * corner.y + mass.pos.x + mass.w / 2,
        y: sin * corner.x + cos * corner.y + mass.pos.y + mass.h / 2
    }))};
}


    // simulation
    let previousTime = performance.now();
    const numMasses = 6;
    let masses: massType[] = [];
    let polygons: polygon[] = [];

    for (let i = 0; i < numMasses; i++) {
        const w = Math.random() * 6 + 3;
        const h = Math.random() * 6 + 3;

        masses.push({
            pos: {x: Math.random() * 20 + 10, y: Math.random() * 20 + 40},
            vel: {x: 0, y: 0},
            w: w,
            h: h,
            r: Math.random() * 6 + 3,
            vr: 0,
            inv: 12 / (1 * (w ** 2 + h ** 2)),
            color: 'orange'
        })
    };

    const move = (dt: number, mass: massType, index: number) => {

        mass.vel.y += 9.8 * dt;
        mass.pos.x += mass.vel.x * dt;
        mass.pos.y += mass.vel.y * dt;

        for (let i = 0; i < numMasses; i++) {
            if (index === i) continue;

            let data = SATCollision(polygons[index], polygons[i]);
            if (data === false) continue;

            // separate masses if a collision is found
            if (dot(subtract(mass.pos, masses[i].pos), data.penetration) < 0) {
                data.penetration.x *= -1;
                data.penetration.y *= -1;
            }

            // penetration
            mass.pos.x += data.penetration.x / 2;
            mass.pos.y += data.penetration.y / 2;
            masses[i].pos.x -= data.penetration.x / 2;
            masses[i].pos.y -= data.penetration.y / 2;

            // resolve collision
            const e = 0.2;

            for (const contact of data.manifold) {
                // relative components
                const r1 = subtract(contact, mass.pos);
                const r2 = subtract(contact, masses[i].pos);
                const v1 = add(mass.vel, crossSV(mass.vr, r1));
                const v2 = add(masses[i].vel, crossSV(masses[i].vr, r2));
                const relVel = subtract(v2, v1);

                const normal = normalize(data.penetration);
                const velAlongNormal = dot(relVel, normal);
                // if (velAlongNormal > 0) continue;

                const invMass1 = 1;
                const invMass2 = 1;
                const angularComponent1 = crossVV(r1, normal) ** 2 * mass.inv;
                const angularComponent2 = crossVV(r2, normal) ** 2 * masses[i].inv;

                const mag = (-(1 + e) * velAlongNormal) / (invMass1 + invMass2 + angularComponent1 + angularComponent2);
                const impulse = multiply(data.penetration, mag);

                mass.vel = add(mass.vel, multiply(impulse, 1)); // mass is 1
                mass.vr  = mass.inv * crossVV(data.penetration, impulse);

                masses[i].vel = add(masses[i].vel, multiply(impulse, 1)); // mass is 1
                masses[i].vr  = masses[i].inv * crossVV(data.penetration, impulse);
            }
        }

        // temp bounds box
        if (mass.pos.x < 0) mass.pos.x = 0;
        else if (mass.pos.x > 100) mass.pos.x = 100;
        if (mass.pos.y < 0) mass.pos.y = 0;
        else if (mass.pos.y > 90) mass.pos.y = 90;

        return mass
    };

    // animation
    const update = () => {
        // get dt
        const currentTime = performance.now();
        const dt = (currentTime - previousTime) / 1000;
        previousTime = currentTime;

        polygons = masses.map((mass) => getPolygon(mass));
        masses = masses.map((mass, index) => move(dt, mass, index));
        
        requestAnimationFrame(update); 
    };

    // start
    onMount(() => {
        update(); 
    });

    // {#each masses as mass}
    //     <rect
    //         x={mass.pos.x}
    //         y={mass.pos.y}
    //         width={mass.w}
    //         height={mass.h}
    //         fill={mass.color}
    //         transform={`rotate(${(mass.r * 180) / Math.PI}, ${mass.pos.x + mass.w / 2}, ${mass.pos.y + mass.h / 2})`}
    //     />
    // {/each}

    // {#each polygons as polygon}
    //     {#each polygon.vertices as vertex}
    //         <rect
    //             x={vertex.x}
    //             y={vertex.y}
    //             fill='green'
    //             width={0.5}
    //             height={0.5}
    //         />
    //     {/each}
    // {/each}