
const prompt = require ('prompt-sync')()
let Vetor = [];

for(let i = 1; i <= 10; i++){
        let num = parseInt(prompt('Digite o número:'));
        Vetor[i] = num; 
        console.log(i + "/10");
}
console.log('Vetor na ordem direta:');
for(let i = 1; i <= 10; i++){
        console.log(Vetor[i]);
}
console.log('Vetor na ordem inversa:');
for(var i = 10; i >= 1; i--){
        console.log(Vetor[i]);
  }





