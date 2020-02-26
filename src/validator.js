function stringToArray(creditCardNumber){
  let creditCardArray = [];
  for (let i = 0; i < creditCardNumber.length; i++) {
      const charToNumber = parseInt(creditCardNumber.charAt(i))
      creditCardArray.push(charToNumber);
  }
  return creditCardArray;
}

const newArray = stringToArray(creditCardNumber);

function reverseArray(newArray){
  const reversedArray = [];
  for(let i=newArray.length -1; i>=0 ; i--){
    let number = parseInt(newArray[i]);
    reversedArray.push(number);
}
return reversedArray;
}

const arrayReversed = reverseArray(newArray);

function pares(){
  const sonPares = [];
  for (let i=0; i<arrayReversed.length; i++) {
       if (i%2 > 0) {
          sonPares.push(arrayReversed[i]);
       }
    }
  return sonPares;
}

const evenNumbers = pares(arrayReversed);

function impares(){
  const numerosImpares = [];
  for (let i=0; i<arrayReversed.length; i++) {
       if (i/2 === Math.round(i/2)) {
          numerosImpares.push(arrayReversed[i]);
       }
    }
  return numerosImpares;
}

const oddNumbers = impares(arrayReversed);
 
function doubleNumbers(){
  let sumatoria = [];
  for (let i=0; i<evenNumbers.length; i++){
    let multiplied = evenNumbers[i] * 2
    if(multiplied >=10){
      sumatoria.push(multiplied%9);
      }else{
      sumatoria.push(multiplied);
      }
  }
  return sumatoria;
}

const finalEvenNumbers = doubleNumbers(evenNumbers);

function joinNumbers(oddNumbers, finalEvenNumbers){
  const numeroTotal = oddNumbers.concat(finalEvenNumbers);
  return numeroTotal
}

const totalNumbers = joinNumbers(oddNumbers, finalEvenNumbers);

function addTotalNumbers(){
let suma = 0;
for (let i=0; i<totalNumbers.length; i++){
        suma = suma + totalNumbers[i];     
        console.log(suma);
      }
return suma;
};

const allNumbers = addTotalNumbers(totalNumbers);

function hallandoResiduos(){
  if (allNumbers % 10 === 0) {
    return true;
} else {
    return false;
}
}
hallandoResiduos(allNumbers);

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
