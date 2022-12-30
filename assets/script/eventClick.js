const btnConfirm  = document.querySelector('.input-button');
const formDisable = document.querySelector('#form');
const formActive  = document.querySelector('.form-sucess');
let btnContinue = document.querySelector('.input-continue');
const inpts = document.querySelectorAll('.required');

import { setError } from "./validandoCampos.js";
import { removeError } from "./validandoCampos.js";


btnConfirm.addEventListener('click', (e) => {
    e.preventDefault();

    for(let i = 0; i < inpts.length; i++){
        if(inpts[i].value === ""){
            setError(i)
        } else {
            removeError(i);
            formDisable.style.display = 'none'
            formActive.style.display = 'block'
        }
    }
    
})

btnContinue.addEventListener('click', () => {
    inpts.forEach(inpt => inpt.value = "")

    formDisable.style.display = 'block'
    formActive.style.display = 'none'
})