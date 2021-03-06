/// <reference lib="esnext" />
//
// let myPromise: Promise<number> = new Promise(() => {
//
// });

let period: number = 20;
const baseUrl: string = 'http://localhost:4200';

let firstName: string = 'Igor';
type TAccount = {
    firstName: string;
    getName(): string;
};
let account: TAccount = {
    firstName,
    getName(): string {
        return this.firstName;
    }
}

let person: TAccount = {...account};

let dates: number[] = [...[12, 13, 14]];


let {firstName: username} = account;
let [firstDate] = dates;

for (let date of dates) {
    console.log(date);
}

function userMessage(arr: TemplateStringsArray, acc: typeof account): string {
    console.log(arguments);
    return `${arr[0]}${acc.firstName}${arr[1]}`;
}

console.log(userMessage`Good day, ${person} !!!! `);


let sum: (a: number, b: number) => number = (a: number, b: number) => a + b;
sum(1, 2);


class Point {
    public x!: number;
    public y!: number;
}

let point: Point = new Point;

/******/

function sleep(ms: number): Promise<void> {
    return new Promise<void>((resolve: () => void) => {
        setTimeout(resolve, ms);
    });
}

async function* getItemsSlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(1000);
        yield item;
    }
}

async function speakSlowly(items: string[]): Promise<void> {
    for await (const item of getItemsSlowly(items)) {
        console.log(item);
    }
}

speakSlowly(['Hi', 'all,', 'TypeScript', 'is', 'awesome']);

enum Size {
    S = 44,
    M = 48,
    XL = 52,
}

let euroSize = Size[Size.S];
let russinSize = Size.S;

enum Actions {
    AddUser = 'ADD_USER',
    RemoveUser = 'ADD_USER',
    DeleteUser = RemoveUser
}

const action = Actions[Actions.AddUser]

function reducer(_state: number, action: { type: Actions }): number {
    switch (action.type) {
        case Actions.AddUser: {
            return 1;
        }
        case Actions.DeleteUser: {
            return 2;
        }
        default: {
            return 0;
        }
    }
}
