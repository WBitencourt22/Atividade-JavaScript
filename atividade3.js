/**Faça um programa que gere uma matriz transposta (Matriz transposta é toda a matriz onde são
trocadas as linhas pelas colunas, ou vice-versa).*/

function NovaMatriz(matriz){
    const transposta = [];
   for(j = 0; j < matriz[0].length; j++){
    const novalinha = [];
    for(i = 0; i < matriz.length; i++){
        novalinha.push(matriz[i][j]);
    }
    transposta.push(novalinha);
}
    return transposta;
}
let matrizOriginal = [];

for(i = 0; i < 11; i++){
    matrizOriginal[i] = [];
    for(j = 0; j < 11; j++){
        matrizOriginal[i][j] = Math.floor(Math.random() * 16);
    }
}
console.table(matrizOriginal);

const transposta = NovaMatriz(matrizOriginal);
console.table(transposta);