let instructorName = {
    Name: 'Andrew',
    age: '27',
    location: 'Philadelphia'
}

console.log(`${instructorName.Name} is  ${instructorName.age} lives in ${instructorName.location}`);
instructorName.age = parseInt(instructorName.age) + 1;
instructorName.age = Number(instructorName.age) + 1;
instructorName.age = +instructorName.age+ 1;




console.log(`${instructorName.Name} is ${instructorName.age} lives in ${instructorName.location}`);


