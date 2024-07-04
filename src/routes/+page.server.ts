export async function load() {
    // array: start x, y, exit x, z

    // creates background vine positions
    let empty_vines : number[][] = [];
    for (let i = 0; i < 21; i++) {
        empty_vines.push([
            Math.floor(Math.random() * 5) + i * 5, 
            -Math.floor(Math.random() * 50),
            get_exit_pos(),
            Math.floor(Math.random() * 3) + 1, // 1 to 3
            get_detail_flower_pos()
        ]);
    };

    empty_vines = shuffle(empty_vines);

    let flowers : number[][] = [
        // x, y
        // w
        [11, 19],
        [11.5, 22],
        [12.5, 24.5],
        [14, 28],
        [15, 31],
        [16, 27.5],
        [17, 24.5],
        [18, 22],
        [19, 20],
        [20.5, 23.5],
        [21.5, 27],
        [22.5, 29],
        [23, 31],
        [24.5, 27],
        [25.5, 24],
        [26, 22],
        [27, 19],
        // e
        [33, 23.5],
        [35, 24],
        [36.5, 26],
        [30.5, 24.5],
        [29.5, 27],
        [32, 27],
        [35, 27],
        [30, 29],
        [31.5, 31],
        [34, 31.5],
        [36, 30],
        // l
        [40.5, 19],
        [40.5, 22],
        [40.5, 24],
        [40.5, 27],
        [40.5, 29.5],
        [43, 31],
        // c
        [50, 23.5],
        [52.5, 24.5],
        [47.5, 24],
        [46, 26.5],
        [46.5, 29.5],
        [49, 31],
        [52, 30],
        // o
        [60, 23.5],
        [63, 24.5],
        [64, 27],
        [63, 30],
        [60.5, 31],
        [58, 30.5],
        [58, 30.5],
        [56.5, 28.5],
        [56.5, 26],
        [58, 24],
        // m
        [67.5, 31],
        [67.5, 29],
        [67.5, 26],
        [69, 23.5],
        [71.5, 24],
        [72.5, 31],
        [72.5, 28],
        [72.5, 26],
        [74, 23.5],
        [76.5, 24],
        [77.5, 30],
        [77.5, 28],
        [77.5, 26],
        // e
        [85, 23.5],
        [87, 24],
        [88.5, 26],
        [82.5, 24.5],
        [81.5, 27],
        [84, 27],
        [87, 27],
        [82, 29],
        [83.5, 31],
        [86, 31.5],
        [88, 30],
    ];

    for (let i = 0; i < flowers.length; i++) {
        flowers[i] = [
            flowers[i][0], 
            flowers[i][1], 
            get_exit_pos(), 
            Math.floor(Math.random() * 3) + 2,
            Math.random() * 50
        ];
    };

    return {
        vines: empty_vines,
        flowers: flowers
    };
};

function get_exit_pos(){
    if (Math.random() > 0.5) {
        return Math.floor(Math.random() * 80) - 100;
    };
    return Math.floor(Math.random() * 80) + 120;
};

function get_detail_flower_pos(){
    if (Math.random() < 0.2) {
        return Math.floor(Math.random() * 20)
    }
    return Math.floor(Math.random() * 65) + 35;
};

function shuffle(array : any[]) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    };

    return array;
};