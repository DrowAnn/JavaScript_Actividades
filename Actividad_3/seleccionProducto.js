import { mostrar } from "./mostrarProducto.js";

export function seleccion(event) {
  let opccion = document.getElementById("options");
  let casa;

  event.preventDefault();

  switch (opccion.value) {
    case "alfajores":
      mostrar("./img/alfajores.jpg", "Alfajores", "$3.000 la unidad");
      break;
    case "tortaMarcia":
      mostrar("./img/tortaMarcia.jpg", "Torta Marcia", "$8.000 la porción");
      break;
    case "mochis":
      mostrar("./img/mochis.jpg", "Mochis", "$5.000 la unidad");
      break;
    case "redVelvet":
      mostrar("./img/redVelvet.jpg", "Torta Red Velvet", "$80.000 la libra");
      break;
  }
}
