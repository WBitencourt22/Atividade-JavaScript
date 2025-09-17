/**Faça um algoritmo que construa uma matriz 50 por 50 de números reais e depois de construída,
colocar o conteúdo de sua diagonal principal dentro de um vetor e depois do vetor montado,
imprimir o vetor.*/

let matriz = [];

for(i = 0; i < 16; i++){
    matriz[i] = [];
    for(j = 0; j < 16; j++){
        matriz[i][j] = Math.floor(Math.random() * 16);
    }

}
function ExtrairDiagonal(matriz){
    const diagonal = [];
for(i = 0; i < matriz.length; i++){    
    diagonal.push(matriz[i][i]);
}
    return diagonal;
}
const diagonal = ExtrairDiagonal(matriz);
console.table(matriz);
console.table(diagonal);
