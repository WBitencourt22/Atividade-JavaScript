let prompt =require ('prompt-sync')()

let Vetor1 = [];
let Vetor2 = [];
let VetorDiferença = [];
let VetorSoma = [];
let VetorMulti = [];

    for(let i = 1; i < 20; i++){
        let num = parseInt(prompt(`Digite o ${i + 1}º número:`));
        Vetor1[i]= num;

    }
    for(let i = 1; i < 20; i++){
        let num = parseInt(prompt(`Digite o ${i + 1}º número:`));
        Vetor2[i]= num;
        console.log (i + "/10")
    }
    for(let i = 1; i < Vetor1.length; i++){
        VetorSoma.push(Vetor1[i] + Vetor2[i]);
    }
    for(let i = 1; i < Vetor1.length; i++){
        VetorDiferença.push(Vetor1[i] - Vetor2[i]);
    }
    for(let i = 1; i < Vetor1.length; i++){
        VetorMulti.push(Vetor1[i] * Vetor2[i]);
    }

console.log(Vetor1);
console.log(Vetor2);
console.log(VetorDiferença);
console.log(VetorMulti);
console.log(VetorSoma);