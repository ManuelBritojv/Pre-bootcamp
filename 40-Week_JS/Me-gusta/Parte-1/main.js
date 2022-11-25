var h1 = document.querySelector("#var")
var button = document.querySelector("button")
var acumulador = 0
function Suma(){
    acumulador += 1
    h1.innerText = acumulador + " like(s)"
}