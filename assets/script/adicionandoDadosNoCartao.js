const nome = document.querySelector('#name') 
const nomeCartao = document.querySelector('#nome-cartao')

nome.addEventListener('change', (e) => {
    if(nome.value.length >= 5){
        nomeCartao.textContent = e.target.value;
    }
})

const number = document.querySelector('#number')
let numberCard = document.querySelector('.cards__front-number')

number.addEventListener('change', (e) => {
    if(number.value.length === 16){
        numberCard.textContent = e.target.value;
    }
})

const mm = document.querySelector('#mm')
const yy = document.querySelector('#yy')
const valityMes = document.querySelector('#vality-mes')
const valityAno = document.querySelector('#vality-ano')

mm.addEventListener('change', (e) => {
    if(mm.value.length == 2){
        valityMes.textContent = mm.value
    } else {
        return null
    }
})

yy.addEventListener('change', (e) => {
    if(yy.value.length == 2){
        valityAno.textContent = yy.value
    } else {
        return null
    }
})

const cod = document.querySelector('#cod')
const codCartao = document.querySelector('#cod-cartao')

cod.addEventListener('change', (e) => {
    if(cod.value.length === 3){
        codCartao.textContent = e.target.value
    }
})