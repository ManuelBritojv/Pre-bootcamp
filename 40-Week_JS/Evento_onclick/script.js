function hide(element){
    element.remove();
}
function text(element){
    if(element.innerText == "Login"){
        element.innerText = "Logout"
    }
    else{
        element.innerText = "Login"
    }
}