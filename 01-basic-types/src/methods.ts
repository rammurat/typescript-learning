// void (only null and undefined is allowed to return )
function sum(a: number,b: number): void {
    const c:number = a + b;
    console.log(c)
}
console.log(sum(10, 20))

// number only method with optional params and rest of the params
function sumNumberOnly(a: number,b: number, c?:number, ...d:number[]): number {
    const s:number = a + b;
    return s
}
console.log(sumNumberOnly(10, 20))

// object - methods
let obj = {firstName: 'Publicis', lastName : 'Sapient'}
let emp = function (f: {firstName: string, lastName: string}) {
    return `${obj.firstName} ${obj.lastName}`
}
console.log(obj)
console.log(emp(obj))

// optional parameters
function optionalParams({ a, b = 0 } = { a: "" }): void {
    console.log(a,b)
}
optionalParams({ a: "yes" }); // ok, default b = 0
optionalParams(); // ok, default to { a: "" }, which then defaults b = 0
// optionalParams({}); // error, 'a' is required if you supply an argument


// Function - Overloading 
function pickCard(x: {x: string; y: number; }): number;
function pickCard(x: number): {x: string; y: number; };
function pickCard(x): any {
    if (typeof x == "object") {
        return Math.random();
    }
    else if (typeof x == "number") {
        return {x: 'ring', y: 5}
    }
}

const myDeck = { x: "diamonds", y: 2 };

pickCard(myDeck)
pickCard(10)
