import validator from './validator.js';

const creditCardNumber = document.getElementById('creditCardNumber');
const sendButton = document.getElementById('sendButton');
const respuestaUsuario = document.getElementById('respuesta-usuario');

const informacionUsuario = (event) => {
   event.preventDefault();
   respuestaUsuario.innerText = `Tu tarjeta ${validator.maskify(creditCardNumber.value)} es ${validator.isValid(creditCardNumber.value)}`
};

sendButton.addEventListener('click', informacionUsuario);
