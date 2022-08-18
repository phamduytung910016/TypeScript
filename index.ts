/**
 * Type basic
 * 
 */
const channelName: string = "Hú hú";
console.log("Welcome to My world", channelName);
console.log("Hello");

const sayHello = (word: string) => {
    return "Hello " + word;
}
/**
 * Typescript sẽ được compile ra code Javascript
Typescript có kiểu dữ liệu rõ ràng.
Typescript giúp chúng ta phát hiện lỗi sớm hơn (ngay quá trình compile đã phát hiện ra lỗi)
 */
const word = "world!";
//khai báo dữ liệu (let + tên_biến + ":" + kiểu dữ liệu)
let isDone: boolean = false;
let decimal: number = 6;
//const word = [0, 1, 2];
let obj: any = { x: 0 };
// obj.foo();
obj();
obj.bar = 100;
obj = "helo";
const n: number = obj;

//hàm

function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!");
};

function getFavariteNumber(): number {
    return 26;
}

const names = ["Alice", "Bob", "Eve"];

names.forEach((s) => {
    console.log(s.toUpperCase());
})


//object types

// function printCoord(pt: { x: number, y: number }) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 3, y: 7 });

//optional properties : có thể truyền vào hoặc không truyền vào
//sử dụng toán tử ? sau tên biến
function printName(obj: { first: string, last?: string }) {
    console.log("The firstName is " + obj.first);
    console.log("The lastName is " + obj.last);
}

printName({ first: "Bob" });
printName({ first: "Bob", last: "James" });


//union types : kết hợp nhiều type dùng toán tử | giữa các kiểu dữ liệu

function printId(id: number | string | boolean) {
    console.log("Your ID is: " + id);
}

printId(101);
printId("202");
printId(true);

//Type Aliases
// type Point = {
//     x: number;
//     y: number;
// };

// function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });



//Interfaces
interface Point {
    x: number;
    y: number;

}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
//Điểm khác nhau giữa type và interface rằng :
/**
 * type không thể được mở lại để thêm thuộc tính mới 
 * interface thì luôn có thể mở rộng
 */

// interface Animal{
//     name: string
// }

// interface Bear extends Animal{
//     honey: boolean
// }

type Animal = {
    name: string
}

type Bear = Animal & {
    honey: boolean
}




interface Window {
    title: string
}

interface Window {
    ts: number;
}

const src = 'const a = "Hello World"';

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare("tùng", "vy"));

interface Options {
    width: number;
}
function configure(x: Options | "auto") {
    // ...
}

configure({ width: 100 });
configure("auto");

declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req.url, req.method);


//function type expression
//truyền vào 1 hàm 
//cú pháp (a: string) => void có nghĩa là 1 hàm với 1 tham số truyền vào, 
//có tên là a, kiểu dữ liệu string và không có giá trị trả về
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

type GreetFunction = (a: string) => void;

function greeter1(fn: GreetFunction, name: string) {
    fn("Hello " + name);
}



//generic Functions
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const num = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

console.log(s, num, u);

//inference

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

function add(a: string) : any {
    return a + 1;
}  
const parsed = map(["1", "2", "3"], (n) => parseInt(n));



document.body.textContent = sayHello(word);




