// let myBook = {
//     title: '1984',
//     author: 'George orewell',
//      pageCount: 326

// }

// let otherBook = {
//     title: 'A people History',
//     author: 'Howard Zinn',
//     pageCount: 723
// }

// let getSummary = function(book) {
//     console.log(`${book.title} by ${book.author}`)

// }
// getSummary(myBook) = function(book) {
// console.log(`${book.title}  by ${book.author}`)
// }

// getSummary(myBook);


// // bothe  logs print the same exact things




// let addExpense = function(account, amount) {
//     account.expenses = account.expense + amount
//     console.log(account)
// }

// addExpense(myBook, 2000);
// console.log(myAccount);




// //problem farhenheit to celsius  in object in fucntion
// //Objects as functions returns values

// let convertFahrenheit = function(fahrenheit) {
//     return {
//         fahrenheit: fahrenheit,
//         kelvin: (fahrenheit + 459.67) * (5/9),
//         celsius: (fahrenheit-32)* (5/9)
//     }
// }

// let temps = convertFahrenheit(74);
// console.log(temps);


//Simple problem soving in build in expense  tracker

//adIncome
// resetAccount
// getAccountSummary
//Account for adnrew  has $900, $1000 in income, $100 expense
// addIncome
// addExpense
// getAccountSummary
//resetAccount
//getAccountSummary
let myAccount = {
    name: 'Rashed',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount)
 {
    account.expenses = account.expenses + amount;
 }

 let addIncome = function(account, income) {
    account.income = account.income + income;

 }

 let resetAccount = function(account) {
     account. expenses = 0;
     account.income = 0
 }

 let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in  expenses.`
 }

addIncome(myAccount, 2000);
addExpense(myAccount, 2.50);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));



//create an array of  five  todos
// you have to x  todos where 
// print the first and second  to the last items=? todo: walk the dog


const todos = ['Order cat food', 'Clean Kitchen', 'Buy food', 'Do worked', 'Excercise'];
console.log(`You have ${todos.length} todos!`);
console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[todos.length -2]}`);


//Manupulating array with methods push methods()

// let fruits = ["apple", "banana", "orange"];
// fruits.push("mango")
// fruits.unshift("kiwi")
// let lastFruits = fruits.pop();
// let firstFruits = fruits.shift();
// let secondFruits = fruits.push(firstFruits);
// console.log(fruits);


let person = ["Rashed", "Robin", "Ratul", "Takib"]
let selectPerson = person.slice(1,4);
console.log(selectPerson);

// let fruits = ['apple', 'banana', 'orange', 'grape'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }



//using forEach loop method
let fruits = ['apple', 'banana', 'orange', 'grape'];
fruits.forEach(function(fruit) {
   console.log(fruit);
});


//array elements try to  search
let desiredFruit = "কমলা";
let index = fruits.findIndex(function(কমলা) {
  return কমলা === desiredFruit;
});

if (index !== -1) {
  console.log(desiredFruit + "-এর ইনডেক্স হলো " + index);
} else {
  console.log(desiredFruit + " অ্যারেতে নেই।");
}





 //
 function getItem() {
   console.log(this);
   }
   getItem();

   

//Javascript in the browser 
// setting up a web server

//DOM Manipulation
const element = document.querySelector('p');
//Manipulating elements
const elements = document.querySelector('h1')
element.remove();

//DOM challenge manipulations
const name = document.querySelector


//todo app

 
const element = document.getElementById("div-02");
element.remove();


with(node) {
   remove();
}
//ReferenceError: remove is not defined


//Element: removeAttribute() method

removeAttribute(attrName)

//Node: textContent property

