let x: number = 1
const c : any = 2
const nam: string = "jay"
console.log(x);
console.log(nam);
// function
function greet(nam: string) {
    console.log(`hello ${nam}`);
}
greet("jack")

// give function what to return: function(a:type,b:type): type {}
// type inference
//  typescript knows a is a nuber , b is number so ans would also be a number
function sum(a: number, b: number):number {
    return a + b
}

console.log(sum(4, 3));

// type infernecve : we do not tell that return type is boolean
function userIs18(age: number) {
    if (age > 18) return true;
    else return false;

  
}

const ans: boolean = userIs18(22);
 
//  create a function that takes another function as input and returns after 1 sec

function f1(n: number):number {
    console.log("hi from f1");
    return n+1
}

function f2(fn: () => number):void {
    console.log("hi from f2");
    setTimeout(() => {
        
        const ans: number = fn()
        console.log(ans);
    }, 1000);
 
}

f2(() =>f1(3))