//Numbers

parseInt
let a= "12"
let b =12

console.log(parseInt("42"));
console.log(parseInt("421bc"));
console.log(parseInt("3.14"));



// Arrays
const initalarray=[1,2,3,4]
initalarray.pop();
console.log(initalarray);
initalarray.shift(); // start se uddo
initalarray.unshift(0); // start me add
console.log(initalarray);

const secondArray =[5,6,7]
console.log(initalarray.concat(secondArray));


// forEach

function logThing(str){
    console.log(str);
}
initalarray.forEach(logThing)

//MAP FILTER FIND SORT




// Classes

class Animal{
    constructor (name,legCount,speaks){
        this.name =name;
        this.legCount=legCount;
        this.speaks=speaks;
    }

    static myType(){
        console.log("Animal");
    }
    speak(){
        console.log("hi there " + this.speaks);
    }
}
// creating the object
let dog =new Animal("dog",4,"bhow bhow")     // dog is obj

let cat =new Animal("cat",4,"meow meow") 
dog.speak();



// Dates

const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getTime());








