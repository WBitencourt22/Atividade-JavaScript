const matriz = [];

for(l = 0; l < 11; l++){
    matriz[l]=[];
    for(c = 0; c < 16; c++){
        matriz[l][c] = Math.floor(Math.random() * 11);
    }
}
const somalinhas = [];
for(i = 0; i < matriz.length; i++){
    let soma = 0;
    for(j = 0; j < matriz[i].length; j++){
        soma += matriz[i][j];
    }
    
    const tipo = (soma % 2 ===0)? "é par" : "é ímpar";
    const novalinha = [soma, tipo];
    somalinhas.push(novalinha);
}
const somacolunas = [];
const numcolunas = matriz[0].length;

for(i = 0; i < numcolunas; i++){
    let soma2 = 0;
    for(j = 0; j < matriz.length; j++){
        soma2 += matriz[j][i];
    }
    
    const tipo2 = (soma2 % 2 === 0)? "é par":"é impar";
    const somas = [soma2, tipo2];
    somacolunas.push(somas);
}

console.table(matriz);
console.table(somalinhas);
console.table(somacolunas);
