const btnConfirm  = document.querySelector('.input-button');
const formDisable = document.querySelector('#form');
const formActive  = document.querySelector('.form-sucess');
const btnContinue = document.querySelector('.input-continue');


btnConfirm.addEventListener('click', (e) => {
    e.preventDefault();

    formDisable.style.display = 'none'
    formActive.style.display = 'block'
})

btnContinue.addEventListener('click', () => {
    formDisable.style.display = 'block'
    formActive.style.display = 'none'
})