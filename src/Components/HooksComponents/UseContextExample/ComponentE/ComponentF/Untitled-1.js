const mainArray = [1, 2, 3, 4];

const initialValue = 5;
const reducer = (accumulator, currentValue) => accumulator + currentValue

console.log(mainArray.reduce(reducer, initialValue));
 