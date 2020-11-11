
let who = ['Mi perro ','Mi abuela ','Su tortuga ','Mi pajaro '];
let action = ['comio ','orino ','aplasto ','rompio '];
let what = ['mi tarea ', 'las llaves ', 'el carro '];
let when = ['despues de clases','justo a tiempo','cuando terminé','durante mi almuerzo','cuando estaba rezando'];

var rand = Math.floor((Math.random() * 3) + 0);
var rand1 = Math.floor((Math.random() * 4) + 0);

var excuse = who[rand] + action[rand] + what [rand] + when[rand1];

window.onload = () => {
   
    document.querySelector("#excuse").innerHTML = excuse;
}

function actualizar(){location.reload(true);}
setInterval("actualizar()",5000);