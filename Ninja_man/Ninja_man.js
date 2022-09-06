var leftValue = 900, topValue = 350;
arr = [32,32]
var check = 0
var count = 0
function update(){
    document.getElementById("character").style.left = leftValue+"px";
    document.getElementById("character").style.top = topValue+"px";
}
function enemy(){
    if (check == 0){
    document.getElementById("onigiri").style.width = arr[0]+"px";
    document.getElementById("onigiri").style.height = arr[1]+"px";
    }
}
document.onkeydown = function(e){
    console.log(e);
    if(e.keyCode == 37 && leftValue > 650) { // LEFT
        leftValue-=10
        document.getElementById("character").classList.remove(["down"])
        document.getElementById("character").classList.remove(["right"])
        document.getElementById("character").classList.remove(["up"])
        document.getElementById("character").classList.add("left") 
        }	
    else if (e.keyCode == 39 && leftValue < 1150) { // RIGHT
        leftValue+=10;
        document.getElementById("character").classList.remove(["down"])
        document.getElementById("character").classList.remove(["left"])
        document.getElementById("character").classList.remove(["up"])
        document.getElementById("character").classList.add("right")    		
    }
    else if (e.keyCode == 40 && topValue < 600) { // DOWN
        topValue+=10;
        document.getElementById("character").classList.remove(["left"])
        document.getElementById("character").classList.remove(["right"])
        document.getElementById("character").classList.remove(["up"])
        document.getElementById("character").classList.add("down")
    }
    else if (e.keyCode == 38 && topValue > 100) { //UP
        topValue-=10
        document.getElementById("character").classList.remove(["left"])
        document.getElementById("character").classList.remove(["right"])
        document.getElementById("character").classList.remove(["down"])
        document.getElementById("character").classList.add("up")
    }	
    update();
    enemy();
}
