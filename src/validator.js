//input
const myStr = '12745129410';

01492154721
0 4 2 5 7 1
0 8 4 10 14 2

//funcion que va a trabajar sobre ese input
function stringToArray(){
  const myArray = myStr.split('');
  return myArray;
}

//invocar la funcion y pasarle como argumento el input
//guardar el resultado de esto en una nueva variable
//que será mi siguiente input para mi siguiente función
const newArray = stringToArray(myStr);

function reverseArray(){
  const reversedArray = [];
  for(let i=newArray.length -1; i>=0 ; i--){
    let number = parseInt(newArray[i]);
    reversedArray.push(number);
}
return reversedArray;
}

const arrayReversed = reverseArray(newArray);

function pares(){
  sonPares = [];
  for (let i=0; i<arrayReversed.length; i++) {
       if (i/2 === Math.round(i/2)) {
          sonPares.push(arrayReversed[i]);
       }
    }
  return sonPares;
}

const evenNumbers = pares(arrayReversed);
 
function dobleNumbers(){
  let sumatoria = [];
  for (let i=0; i<evenNumbers.length; i++){
    let multiplied = evenNumbers[i] * 2
    if(multiplied >=10){
      /*for(let i=0;i<multiplied.length;i++){
        let suma = suma + parseInt(valor[i]);
        sumatoria.push(suma);
        }*/
      }else{
      sumatoria.push(multiplied);
      }
  }
  return sumatoria;
}

dobleNumbers(evenNumbers);

//atrapando numeros en posiciones pares

/*
function separateNumbers(){
  for( let i=0; < number.length, i++){

  }
}
//CODIGO TRABAJADO CON MICHELLE
/*const myStr = '1234567789872';


function stringToNumber(){
  const strToNumber = parseInt(myStr);
  console.log(strToNumber);
  return strToNumber;
};

const number = stringToNumber(myStr);

function separateNumbers(){
for( let i = 0; i < number.length; i++){
  
}
}

CODIGO DE JOYLOVE
//Call the function
isValidCard (inputCodeCard)

//Create the function to valid card
function isValidCard (codeCard){

    var arrReverse = []; //Create the array.reverse
    for (var i = 0; i < codeCard.length; i++){
          arrReverse.unshift(parseInt(codeCard[i]));
    }

    //Getting numbers in even position
    for (var j = 1; j <arrReverse.length; j = j+2){

      if (arrReverse[j]*2 >= 10){
        var numberByTwo = arrReverse[j]*2;
        //If the value of the multiplication is two digits: add digits and then replace in arrReverse
        arrReverse[j] = parseInt(numberByTwo.toString(10)[0]) + parseInt(numberByTwo.toString(10)[1])
        }else{
          //If the value of the multiplication is one digit, it is replaced in arrReverse
          arrReverse[j] = arrReverse[j]*2
        }


      //Adding card digits
      var sum = 0
      for (var k = 0; k < arrReverse.length; k++){
        sum = sum + arrReverse[k]
      }
    }

    //Validate card
    if (sum % 10 === 0) {
      return document.write ("Tu número de tarjeta es VÁLIDA")
      }else{
        return document.write ("Tu número de tarjeta es INVÁLIDA")
      }
   }
*/





const validator = {
  // ...
};

export default validator;
