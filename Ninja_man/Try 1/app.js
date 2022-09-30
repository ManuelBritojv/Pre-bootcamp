var leftValue = 0, topValue = 0;
function update(){
    document.getElementById("character").style.left = leftValue+"px";
    document.getElementById("character").style.top = topValue+"px";
}
document.onkeydown = function(e){
    console.log(e);
    if(e.keyCode == 37){
        leftValue-=10
        document.getElementById("character").classList.remove(["down"])
        document.getElementById("character").classList.remove(["right"])
        document.getElementById("character").classList.remove(["up"])
        document.getElementById("character").classList.add("left") 
    }	
    else if (e.keyCode == 39) { // RIGHT
        leftValue+=10;
        document.getElementById("character").classList.remove(["down"])
        document.getElementById("character").classList.remove(["left"])
        document.getElementById("character").classList.remove(["up"])
        document.getElementById("character").classList.add("right")    		
    }
    else if (e.keyCode == 40) { // DOWN
        topValue+=10;
        document.getElementById("character").classList.remove(["left"])
        document.getElementById("character").classList.remove(["right"])
        document.getElementById("character").classList.remove(["up"])
        document.getElementById("character").classList.add("down")
    }
    else if (e.keyCode == 38) { //UP
        topValue-=10
        document.getElementById("character").classList.remove(["left"])
        document.getElementById("character").classList.remove(["right"])
        document.getElementById("character").classList.remove(["down"])
        document.getElementById("character").classList.add("up")
    }	
    update();
}