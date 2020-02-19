import validator from './validator.js';

const creditCardNumber = document.getElementById('creditCardNumber');
const sendButton = document.getElementById('sendButton');


sendButton.addEventListener('click',() => {
    console.log (creditCardNumber.value);
});

