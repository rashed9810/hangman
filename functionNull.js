// // let name = "Rashed";
// // console.log(name);

// let name;
// name = 'Rashed';
// if(name == undefined) {
//     console.log("Please provide your valid nam");

// } else {
//     console.log("Unvalid name");
// }


// first quize
const a = true;
if(!a) {
    console.log("Green");
} else {
    console.log("Blue");
}


//var x = true;
x = 23;
console.log(x);

//
var x = 0 != 1;

//
var x = 10;

if(x > 10) {
    console.log("Apple");
} else if(x > 5) {
    console.log("Pear");
} else {
    console.log("Orange");
}


// //

// var result = 0;

// for(var i = 0; i < 5; i++) {
//     result += 2;
// }

// console.log(result);


//
console.log(result);
var result = 7;


//
var car = { mileage: 200 }
var carMileage = 100
console.log(car.mileage)


//
var veggies = ['parsley', 'carrot']
console.log(veggies[2])


//
function addFive(val) {
    return val + 5;
  };
  module.exports = addFive;
  


//constructor function in javascript

function Person(name, age) {
    this.name = name;
    this.age = age;


//you can add method here
this.greet = function() {
    console.log("Hello my name is" + this.name);
};

}

const person1 = new Person(Rashed, 25);
const person2 = new Person(Ratul, 26);
person1.greet();
person2.greet();


