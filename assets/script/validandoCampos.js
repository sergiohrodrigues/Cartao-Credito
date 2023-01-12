const spans = document.querySelectorAll('.span-required');
const inpts = document.querySelectorAll('.required')

export const setError = (index) => {
    inpts[index].style.border = '3px solid #e63636'
    spans[index].style.display = 'block'
}

export const removeError = (index) => {
    inpts[index].style.border = ''
    spans[index].style.display = 'none'
}

inpts[0].oninput = function nomeValidate(){
    if(inpts[0].value.length < 5){
        setError(0)
    } else {
        removeError(0)
    }
}

inpts[1].oninput = function cardValidate(){
    if(inpts[1].value.length < 16){
        setError(1)
    } else {
        removeError(1)
    } 
}

inpts[2].oninput = function mmValidate(){
    if(inpts[2].value.length < 2){
        setError(2)
    } else {
        removeError(2)
    } 
}

inpts[3].oninput = function yyValidate(){
    if(inpts[3].value.length < 2){
        setError(3)
    } else {
        removeError(3)
    } 
}

inpts[4].oninput = function codValidate(){
    if(inpts[4].value.length < 3){
        setError(4)
    } else {
        removeError(4)
    } 
}