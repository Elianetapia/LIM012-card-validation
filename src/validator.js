function stringToArray(){
  const numberByNumber = creditCardNumber.value.split('').reverse().join();
return numberByNumber;
}

function arrayReverse(){

  const numberReverse = numberByNumber.reverse();
  return numberReverse;
  console.log(numberReverse);
} 

function stringToNumber(){
  const strToNumber = parseInt(numberReverse);
  return strToNumber;
  
};
/*function separateNumbers(){
  for( let i=0; < number.length, i++){

  }
}
//codigo trabajado con Michelle
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
}*/





const validator = {
  // ...
};

export default validator;
