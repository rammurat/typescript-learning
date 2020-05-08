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

// null or undefined 
let empty: undefined = undefined 
let notInitialized: null = null 


// Iterable - For in and For of 
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}

// never (any isn’t assignable to never)
function err(msg:string): never {
    throw new Error(msg)
}

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

console.log(err("Error..."))