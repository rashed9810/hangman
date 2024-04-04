// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge Area

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)



// undefined for variables
let name
if (name === undefined) {
    console.log('Please provide a name')

} else {
    console.log(name);
}


//multiple arguments
let add = function(a,b,c) {
    return a+b+c;
}
let result = add(10,15,3);
console.log(result);


//deafault arguments

let getScoreText = function(name = 'anonymous', score = 0) {
    return 'Name:' + name + '-Score: ' + score;
} 
let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

//challenge area
// total, tipPercent

 let getTip = function(total, tipPercent = 0.1) {
    return total * tipPercent;
 }

 let tip = getTip(200, 0.25)
 console.log(tip);


 //functional scope

 let getScore = function(total, tipPercent = 'name-score') {
    return `Name: $score{total} - total ${getScore}`
 }


 //
 const totalAmount = 100;
 const subtotalAmount = totalAmount* 0.4;
 const tipPercent = 0.25;
 const tipAmount = subtotalAmount* tipPercent;

 //display the tip amount
 console.log("The tip amount is: $" + tipAmount.toFixed(2) );




 //Handling form submission

<form id = "name">
    <input type = "text" placeholder = "Enter your name" name = "firstName">
    <button>Submit</button>
 </form>



//querySelector()
const firstButton = document.querySelector("button")
firstButton.addEventListener("click", () => {
    console.log("First button clicked");
})


//querySelectorAll()

const clickableElement = document.querySelectorAll(".clickable");
clickableElement.forEach(element => {
    element.addEventListener("click", () => {
        console.log("Clickable element clicked!")

    });
});






const button = document.querySelector("button");
button.addEventListener("click", () => {
    alert("Button clicked")
});



const myAge = 27;
const showPage = () => {
    console.log("Show the page in deatails,,,");
}

const showErrorPage = () => {
    console.log("Showing the error page in details");

}

myAge>= 20 ? showPage() : showErrorPage();




//JSON server



