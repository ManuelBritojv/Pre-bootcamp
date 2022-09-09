var leftValue = 900, topValue = 350;
function update(){
    document.getElementById("character").style.left = leftValue+"px";
    document.getElementById("character").style.top = topValue+"px";
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
}
var mapa = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    ];
var mapadict = {
    0: 'blank',
    1: 'wall'
}
function dibujarmapa(){
    output = "";
    for(var fila = 0;fila<mapa.length;fila++){
        output += "<div class = 'fila'>"
        for(var x = 0; x<mapa[fila].length;x++){
            output += "<div class = ''" + mapadict[mapa[fila][x]] + "'></div>"
        }
        output += "</div>"
    }
    document.getElementById('mapa').innerHTML = output;
}
dibujarmapa()