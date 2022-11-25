var arr = [document.querySelector("#var"),document.querySelector("#var2"),document.querySelector("#var3")]
var button = document.querySelector("button"); var acumulador = [0, 0, 0]
function Suma(){
    acumulador[0] +=1
    arr[0].innerText = acumulador[0] + " Like(s)"
}
function Suma2(){
    acumulador[1] +=1
    arr[1].innerText = acumulador[1] + " Like(s)"
}
function Suma3(){
    acumulador[2] +=1
    arr[2].innerText = acumulador[2] + " Like(s)"
}