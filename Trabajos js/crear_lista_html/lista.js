let colors = document.getElementsByClassName("colors");
const boton = document.getElementById("boton");
colors = Array.from(colors);
boton.onclick = changeColor;
function changeColor (){
    colors.forEach(myFunction);
    function myFunction (element){        
        element.style.color = element.innerHTML.toLowerCase();
        //element.style.color = "blue";
    };
}


//Otra manera: (menos clara para el que lo lea)
/*let colors = document.getElementsByClassName("colors");
const boton = document.getElementById("boton");
colors = Array.from(colors);
boton.onclick = changeColor;
function changeColor (){
    colors.forEach(element => {
        
        element.style.color = element.innerHTML.toLowerCase();
    });

}
console.dir(colors);*/