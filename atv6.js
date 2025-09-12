let prompt = require ('prompt-sync')()
let vetor1 = [];
let vetorPares = [];
let vetorImpares = [];
let sair = true;


while(sair){
    let numero = parseInt(Number(prompt("Digite um número: ")))
    vetor1.push(numero);
    let confirmar = prompt("Desejar continuar ? Sim ou não ? ").toLowerCase().trim(); /**toLower casa diminui tudo para caixa baixa e trim elimina o espaço */
    sair = ["sim" , "s"].includes(confirmar); /**includes torna o valor ao confirmar, caso seja específico dentro [] */ 

}
for(let filtro of vetor1){
    if(filtro % 2 == 0){
        vetorPares.push(filtro);
    } 
    else{
        vetorImpares.push(filtro);
    } 
}
vetorPares.sort((a,b) => a - b); 
vetorImpares.sort((a,b) => b - a); 
let vetorResultado = vetorPares.concat(vetorImpares);

console.log(vetor1);
console.log(vetorPares);
console.log(vetorImpares);
console.log(vetorResultado);
