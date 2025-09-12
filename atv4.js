let prompt = require ('prompt-sync')()
 
let nomes = ['Wesley', 'Aflaudizio', 'joão', 'Adalberto', 'Ronaldo', 'Ozil', 'Pablo', 'Juvenal', 'Clodoaldo', 'Sérgio']
let NomeProcurar = prompt('Digite um nome:');

if(nomes.includes(NomeProcurar)){
    console.log("Achei")
}    else{
    console.log("Não achei")}



  


        