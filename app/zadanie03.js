//Twój kod

// let num1 = process.argv[2] ? parseInt(process.argv[2]) : 0;
// let num2 = process.argv[3] ? parseInt(process.argv[3]) : 0;

// console.log(`${num1} + ${num2} = ${num1 + num2}`);

const sum = process.argv.reduce((prev, curr) => isNaN(parseInt(curr)) ? prev : prev + parseInt(curr), 0);
console.log("Sum of given arguments:", sum);