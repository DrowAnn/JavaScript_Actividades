export function mostrar(src, h2, p) {
  let main = document.getElementById("item");
  let imagen = document.createElement("img");
  let text = document.createElement("div");

  main.innerHTML = "";

  text.setAttribute("class", "container");

  imagen.setAttribute("src", src);
  main.appendChild(imagen);

  text.innerHTML = `<h2>${h2}</h2><p>Este esquisito producto tiene un valor de ${p}</p>`;
  main.appendChild(text);
}
