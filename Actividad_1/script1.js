var producto1 = {nombre: "Helado", precio: 5000};
var producto2 = {nombre: "Hamburguesa", precio: 15000};
var producto3 = {nombre: "Perro Caliente", precio: 10000};
var producto4 = {nombre: "Ensalada", precio: 8000};

var opcion = prompt(`Menú\n\n1. ${producto1.nombre}
2. ${producto2.nombre}\n3. ${producto3.nombre}
4. ${producto4.nombre}\n\nDigite la opción que desea`);

switch (opcion){
    case "1":
        alert(`Tu pedido fue ${producto1.nombre} y tiene un costo de $${producto1.precio}`);
    break;
    case "2":
        alert(`Tu pedido fue ${producto2.nombre} y tiene un costo de $${producto2.precio}`);
    break;
    case "3":
        alert(`Tu pedido fue ${producto3.nombre} y tiene un costo de $${producto3.precio}`);
    break;
    case "4":
        alert(`Tu pedido fue ${producto4.nombre} y tiene un costo de $${producto4.precio}`);
    break;
    case null:
        alert(`Gracias por tu visita`);
    break;
    default:
        alert (`La opción ${opcion} no esta en el menú`);
}