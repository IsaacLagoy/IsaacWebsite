// place files you want to import through the `$lib` alias in this folder.

class Store {
    value: any;
    constructor(value : any) {
        this.value = value;
    };
    get() {
        return this.value;
    };
    set(new_value : typeof this.value) {
        this.value = new_value;
    }
};

export type ItemData = {
    id: string;
    name: string;
    cost: number;
    description: string;
    category: string[];
};

export type filterType = {
    categories: string[];
    less: number;
    greater: number;
};

// filter categories for dnd shop
const initialFilterCategories : filterType = {categories: [''], less: 100000000, greater: 0};
export const filterCategoriesStore = new Store(initialFilterCategories);
// cart for dnd shop
const initialCart : {[key : string] : number} = {};
export const cartStore = new Store(initialCart);
// extra funds for dnd shop
export const extraStore = new Store(0);
// discound for dnd shop
export const discountStore = new Store(0);