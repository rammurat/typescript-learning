// Data types 

// boolean
const progress: boolean = false; 

// Number 
const count: number = 1;

// string 
const str: string = 'Whatever'
const dynamicStr: string = `Whatever ${count}`

// array 
const arr: Array<number> = [1,2,3,4,5]
const arrStr: Array<string> = ["John", "Lucas"]
const arrObj: Array<object> = [{id: 1}]

// enum
enum env {dev,staging, prod}
enum envCustom {dev = 1,staging = 5, prod = 10}

let envDefaultVal: env = env.prod
let envCustomVal: string = envCustom[10]

//tuple 
let mixedValues: [string, number];
mixedValues = ["Sapient", 10000]

// any 
let salary:any = 10000;
salary = "100000";
salary = false;

let mixedData:any = [10, "Ram", {id: 2}]

// void (only null and undefined is allowed to return )
function sum(a: number,b: number): void {
    const c:number = a + b;
    console.log(c)
}

// null or undefined 
let empty: undefined = undefined 
let notInitialized: null = null 

// never (any isn’t assignable to never)
function err(msg:string): never {
    throw new Error(msg)
}

// object - methods
let obj = {firstName: 'Publicis', lastName : 'Sapient'}
let emp = function (f: {firstName: string, lastName: string}) {
    return `${obj.firstName} ${obj.lastName}`
}

// object - interface example 
interface Point { 
    x:number 
    y:number 
}

function addPoints(p1:Point,p2:Point) : Point { 
    const x = p1.x + p2.x;
    const y = p1.y + p2.y;
    return {x:x,y:y};
} 
 
const newPoint = addPoints({x:3,y:4},{x:5,y:1})

// object - classes 
class Employee {
    fullName: string;
    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
}
const employee = new Employee("John", "Lucas")

// output 
console.log(progress)
console.log(count)
console.log(str)
console.log(dynamicStr)

console.log(arr)
console.log(arrStr)
console.log(arrObj)

console.log(envDefaultVal)
console.log(envCustomVal)
console.log(mixedValues)

console.log(salary)
console.log(mixedData)
console.log(sum(10, 20))

console.log(obj)
console.log(emp(obj))
console.log(employee.fullName)

console.log(err("Error..."))
