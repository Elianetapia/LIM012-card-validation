const stringToArray = (creditCardNumber) => {
  let creditCardArray = [];
  for (let i = 0; i < creditCardNumber.length; i++) {
      let charToNumber = parseInt(creditCardNumber.charAt(i))
      creditCardArray.push(charToNumber);
  }
  return creditCardArray;
}

let newArray = stringToArray(creditCardNumber);

const reverseArray = (newArray) => {
  let reversedArray = [];
  for(let i=newArray.length -1; i>=0 ; i--){
    let number = parseInt(newArray[i]);
    reversedArray.push(number);
}
return reversedArray;
}

let arrayReversed = reverseArray(newArray);

const pares = (arrayReversed) => {
  let sonPares = [];
  for (let i=0; i<arrayReversed.length; i++) {
       if (i%2 > 0) {
          sonPares.push(arrayReversed[i]);
       }
    }
  return sonPares;
}

let evenNumbers = pares(arrayReversed);

const impares = (arrayReversed) => {
  let numerosImpares = [];
  for (let i=0; i<arrayReversed.length; i++) {
       if (i/2 === Math.round(i/2)) {
          numerosImpares.push(arrayReversed[i]);
       }
    }
  return numerosImpares;
}

let oddNumbers = impares(arrayReversed);
 
const doubleNumbers = (evenNumbers) => {
  let sumatoria = [];
  for (let i=0; i<evenNumbers.length; i++){
    let multiplied = evenNumbers[i] * 2
    if(multiplied >=10){
      sumatoria.push((multiplied-1)%9 + 1);
      }else{
      sumatoria.push(multiplied);
      }
  }
  return sumatoria;
}
 
let finalEvenNumbers = doubleNumbers(evenNumbers);

const joinNumbers = (oddNumbers, finalEvenNumbers) => {
  let numeroTotal = oddNumbers.concat(finalEvenNumbers);
  return numeroTotal
}

let totalNumbers = joinNumbers(oddNumbers, finalEvenNumbers);

const addTotalNumbers = (totalNumbers) => {
let suma = 0;
for (let i=0; i<totalNumbers.length; i++){
        suma = suma + totalNumbers[i];     
      }
return suma;
}

let allNumbers = addTotalNumbers(totalNumbers)

const hallandoResiduos = (allNumbers) => {
  if (allNumbers % 10 == 0) {
    return true;
} else {
    return false;
}
}


const validator = {
  isValid: (creditCardNumber) => {
    const newArray = stringToArray(creditCardNumber);
    const arrayReversed = reverseArray(newArray);
    const evenNumbers = pares(arrayReversed);
    const oddNumbers = impares(arrayReversed);
    const finalEvenNumbers = doubleNumbers(evenNumbers);
    const totalNumbers = joinNumbers(oddNumbers, finalEvenNumbers);
    const allNumbers = addTotalNumbers(totalNumbers);
    const finalValue = hallandoResiduos(allNumbers);
    return finalValue;
  }, 

  maskify: (creditCardNumber) => {
    return creditCardNumber.replace(/\d(?=\d{4})/g, "#");
  }
};

export default validator;
