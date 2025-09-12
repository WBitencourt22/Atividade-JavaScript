let prompt = require ('prompt-sync')()
let n1 = parseInt(Number(prompt("Digite um número:")));
let n2 = parseInt(Number(prompt("Digite um número:")));
let n3 = parseInt(Number(prompt("Digite um número:")));
let n4 = parseInt(Number(prompt("Digite um número:")));
let n5 = parseInt(Number(prompt("Digite um número:")));

let numeros = ["", n1, n2, n3, n4, n5];
let numeros2 = [];

for(i = 1; i < 6; i++){
    if(i % 2 ===0){
        numeros2.push(numeros[i] / 2);
        
    }else{
        numeros2.push(numeros[i] * 3);
        
    }
}

    console.log(numeros);
    console.log(numeros2);
    







