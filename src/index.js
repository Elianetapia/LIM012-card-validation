import validator from './validator.js';

const creditCardNumber = document.getElementById('creditCardNumber');
const sendButton = document.getElementById('sendButton');
const respuestaUsuario = document.getElementById('respuesta-usuario');

const capturarInformacionUsuario = (event) => {
   event.preventDefault();
   if(validator.isValid(creditCardNumber.value)){
      respuestaUsuario.innerText = `Tu tarjeta ${validator.maskify(creditCardNumber.value)} es válida`
   }else{
      respuestaUsuario.innerText = `Tu tarjeta ${validator.maskify(creditCardNumber.value)} no es válida`
   }
   
};

sendButton.addEventListener('click', capturarInformacionUsuario);
