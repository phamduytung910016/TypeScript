//khi khởi tao 1 class, tất cả các thuộc tính đều phải gán giá trị
//nếu muốn không bị lỗi, sử dụng thêm toán tử ! trước thuộc tính

class Supper {
    x!: any;
    y: any;

    constructor() {

        this.y = 0;
    }
}

// class Base {
//     k = 4;
// }

// class Derived extends Base {
//     constructor() {
//         super();
//         console.log(this.k);
//         //super() viết ở đây thì sẽ 
//         //không dùng được toán tử this bên trên
//     }
// }

class Point {
    x = 10;
    y = 10;
    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}

const pt1 = new Point();
pt1.scale(2);
console.log(pt1.x, pt1.y);


class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}

interface Checkable {
    check(name: string): boolean;
}

class NameChecker implements Checkable {
    check(s: any) {
        if (typeof s === "string") {
            return s.toLowerCase() === "ok";
        } else {
            return s;
        }


    }
}

class Animal {
    move() {
        console.log("Moving along!");
    }
}

class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);



// class Base {
//     greet() {
//         console.log("Hello, world!");
//     }
// }

// class Derived extends Base {
//     greet(name?: string) {
//         if (name === undefined) {
//             super.greet();
//         } else {
//             console.log(`Hello, ${name.toUpperCase()}`);
//         }
//     }
// }


//phạm vi truy cập



// const db = new Derived();
// db.greet();
// db.greet("reader");
const pt = new Supper();
console.log(pt.x, pt.y);


class Base {
    private x = 0;
    get getX() {
        return this.x;
    }
}

const b = new Base();
console.log(b.getX);

class Derived extends Base {
    showX() {
        // Can't access in subclasses
        console.log(this.getX);
    }
}

