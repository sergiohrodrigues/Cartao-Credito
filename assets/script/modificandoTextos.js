const nome = document.querySelector('#name') 
const nomeCartao = document.querySelector('#nome-cartao')

nome.addEventListener('change', (e) => {
    if(nome.value.length > 5){
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
const vality = document.querySelector('#vality')

yy.addEventListener('change', (e) => {
    if(mm.value.length == 2 && yy.value.length){
        vality.textContent = mm.value + '/' + e.target.value
    }
})

const cod = document.querySelector('#cod')
const codCartao = document.querySelector('#cod-cartao')

cod.addEventListener('change', (e) => {
    if(cod.value.length === 3){
        codCartao.textContent = e.target.value
    }
})