const btnConfirm  = document.querySelector('.input-button');
const formDisable = document.querySelector('#form');
const formActive  = document.querySelector('.form-sucess');
const btnContinue = document.querySelector('.input-continue');
const inpts = document.querySelectorAll('.required');
const campoCartao = document.querySelectorAll('.campoCartao')


import { setError } from "./validandoCampos.js";
import { removeError } from "./validandoCampos.js";


btnConfirm.addEventListener('click', (e) => {
    e.preventDefault();

    for(let i = 0; i < inpts.length; i++){
        if(inpts[i].value === ""){
            setError(i)
        } else{
            formDisable.style.display = 'none'
            formActive.style.display = 'block'
            removeError(i);
        }
    }
})

btnContinue.addEventListener('click', () => {
    inpts.forEach(inpt => inpt.value = "")

    campoCartao[0].innerHTML = "0000 0000 0000 0000"
    campoCartao[1].innerHTML = "JANE APPLESEED"
    campoCartao[2].innerHTML = "00/00"
    campoCartao[3].innerHTML = "000"

    formDisable.style.display = 'block'
    formActive.style.display = 'none'
    

    for (let i = 0; i < inpts.length; i++){
        removeError(i);
    }
})