//stept to convert a regular function to  arrow functions
//handling form submissions

function greetings(name) {
    return `Hello, ${name}!`;
}



//step: replace the function with const

const greetings(name) {
    return `Hello, {name}!`;
}


//step:03 add = after the function name

const greetings = (name) {
    return `Hello, ${name}!`;
}


//step3: add => after the parentheses

const greetings = name => {
    return `Hello, ${name}!`;

}


//now we can write the those function  more shortly if we have a one parameter and arguments

//from this
const greetings = (name) => {
    return `Hello, ${name}!`;
};


//to this functions


const greetings = (name) => `Hello, ${name}!`;

//when you have a only one parameter in that case you can also remove the parentheses

const greetings = name => `Hello, ${name}!`;




