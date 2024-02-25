let documentActivity = document.getElementById("activity");
let answers = document.createElement("div");

let punto1 = [2, 4, 6, 8, 10];
let punto1Respuesta = punto1.map((item) => {
  return item ** 2;
});

let punto2 = ["Juan", "Maria", "Carlos", "Ana", "Pedro", "Luisa"];
let punto2Respuesta = punto2.filter((item) => item.length > 5);

let punto3 = [10, 25, 83, 41, 5];
let punto3Respuesta = punto3.reduce((acc, act) => {
  return acc + act;
});

let punto4 = ["Hola", "Mundo", "JavaScript", "Web"];
let punto4Respuesta = punto4.every((item) => item.length > 3);

/*Profe, este ejercicio que sigue lo realice con map para poder conservar el arreglo
inicial sin que se ordenara y poder imprimir el cambio porque cuando lo asignaba de
forma simple se ordenaban los dos arreglos.
let punto5 = [5, 3, 8, 1, 2];
let punto5Respuesta = punto5;
punto5Respuesta.sort(); */

let punto5 = [5, 3, 8, 1, 2];
let punto5Respuesta = punto5.map((item) => {
  return item;
});
punto5Respuesta.sort();

answers.innerHTML = `<h3>Actividad 1</h3><p>Arreglo del primer punto: ${punto1}<br>El resultado de la operacion es: ${punto1Respuesta}</p>
<h3>Actividad 2</h3><p>Arreglo del segundo punto: ${punto2}<br>El resultado de la operacion es: ${punto2Respuesta}</p>
<h3>Actividad 3</h3><p>Arreglo del tercer punto: ${punto3}<br>El resultado de la operacion es: ${punto3Respuesta}</p>
<h3>Actividad 4</h3><p>Arreglo del cuarto punto: ${punto4}<br>El resultado de la operacion es: ${punto4Respuesta}</p>
<h3>Actividad 5</h3><p>Arreglo del quinto punto: ${punto5}<br>El resultado de la operacion es: ${punto5Respuesta}</p>`;

documentActivity.appendChild(answers);
