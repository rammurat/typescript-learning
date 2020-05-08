// Functions overloading 
function overloading(x: number, y: number) : number; 
function overloading(x) : any {
    if(typeof x === 'object') {
        return x++;
    } else {
        return x + y;
    }
} 

// object - interface example 
interface Point { 
    x: number;
    y: number;
    z?: number; // I am optional parameter 
    readonly zz?: number // I am read only 
}

function addPoints(p1:Point,p2:Point) : Point { 
    const x = p1.x + p2.x;
    const y = p1.y + p2.y;
    return {x:x,y:y};
} 

const newPoint = addPoints({x:3,y:4},{x:5,y:1})

// functions - interface 
interface Sum {
    (a: number, b:number): boolean
}

let _sum : Sum
_sum = (a: number,b: number) =>{
    return a > b
}

// Interfaces - Indexable Types 
interface Persons {
    [index: number]: string
}

let indexArr:Persons;
indexArr = ["John", "Lucas"];

let firstName: string = indexArr[0]
console.log(firstName)

// Interface - Class Types 
// object - classes 
interface Bank {
    branches: number
    name: string
}
class Citi implements Bank {
    location: string;
    constructor(public branches: number, public name: string) {
        this.location = 'London';
        this.branches = branches;
        this.name = name
    }
}
const _bank: Bank = new Citi(50, "Citi")

// Interface - Extend  
interface Location {
    pinCode: string
}
interface LocalBank extends Bank, Location{
    locality: string
}

// Interface - Hybrid  
interface Country {
    id: number,
    name: string,
    reset(): void
}

// Classes - Public by default and readonly/static 
class Netflix {
    static location = 'USA';
    readonly name: string;
    greeting: string;
    constructor(message:string) {
        this.greeting = message
    }
    greet() {
        return this.greeting
    }
}
let greeter = new Netflix('Welcome to Netflix.')
console.log(greeter)

// Classes - Private
class Prime {
    private greeting: string;
    constructor(message:string) {
        this.greeting = message
    }
    greet() {
        return this.greeting
    }
}
let primeGreeter = new Prime('Welcome to Netflix.')
// .greeting is private and won't be accessible 
// console.log(primeGreeter.greeting)

// Classes - protected modifiers
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employer extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employer("Howard", "Sales");
console.log(howard.getElevatorPitch());
// error as name is protected 
// console.log(howard.name); 


console.log(newPoint)
console.log(_sum(10, 20))
console.log(_bank)
