//students score and total possible score
 // 15/20-> YOu got a C(75%)!

 //A 90-100, B 80-89, C 70-79, D 60-69, F- 0 -59 

 function studentsScore(score, totalPossibleScore) {
    const percentage = (score/totalPossibleScore)*100;
 

 let grade;

 if(percentage >= 90) {
    grade = 'A';
 } else if(percentage>= 80) {
    grade = 'B';

 } else if (percentage >= 70) {
    grade = 'C';
 } else if (percentage >= 60) {
    grade = 'D';
 } else {
    grade = 'F';
 }
  const scoreMesssage =  `${score}/${totalPossibleScore} -> You got a ${grade} (${percentage.toFixed(2)}%)!`;
  return scoreMesssage;
}

const result = studentsScore(40, 50);
console.log(result); 


