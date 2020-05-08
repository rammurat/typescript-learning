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
interface Person {
    [index: number]: string
}
let indexArr:Person
indexArr = ["John", "Lucas"]

let firstName: string = indexArr[0]


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






console.log(newPoint)
console.log(_sum(10, 20))
console.log(_bank)
