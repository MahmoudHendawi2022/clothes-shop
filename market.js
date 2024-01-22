let dropMenu=document.getElementById("drop-menu");
let xmark=document.getElementById("xmark");
let bar=document.getElementById("bar");

bar.onclick=function(){
    dropMenu.classList.add("appear");
}
xmark.onclick = function(){
    dropMenu.classList.remove("appear");
}
