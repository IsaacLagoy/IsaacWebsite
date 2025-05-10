import classwork_data from '$lib/data/classwork.json';
import game_awards from '$lib/data/game_awards.json';

type Classwork = {
    name: string;
    subject: string;
    course: number;
    description: string;
}

export async function load() {
    const classwork = classwork_data
        .sort((a, b) => class_value(a) - class_value(b))
        .reverse();

    return {
        game_awards,
        classwork
    };
}

function class_value(c: Classwork): number {
    return c.subject === 'CSCE' ? c.course + 50 : c.course;
}