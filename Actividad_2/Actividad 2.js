function area(lado1, lado2){
    return lado1 * lado2;
}

let area2 = function(lado1, lado2){return lado1 * lado2};

let area3 = (lado1, lado2) => alert(lado1 * lado2);

console.log(area(3, 1));
console.log(area2(4, 2));
console.log(area3(5, 3));