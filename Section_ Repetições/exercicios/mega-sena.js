const fezinha = [4, 8, 15, 16, 23, 42]
const megaSena = []

// geração dos numeros da mega-sena sem repetir
for(let i = 0; i < 6; i +=1) {
    let numero = Math.ceil(Math.random() * 60);
    if(megaSena.includes(numero)){
        i--;
    }else{
        megaSena.push(numero);
    }
}

let quantidadeAcertos = 0;
let acertos = []

for (let i = 0; i < fezinha.length; i+=1){ //fezinha
    for (let j = 0; j < megaSena.length; j+=1){ //mega-sena
        if (fezinha[i] === megaSena[j]) {
            quantidadeAcertos +=1
            acertos.push(fezinha[i])
        }
    }
}
console.log("==============================")
console.log(`Fezinha: ${fezinha}`);
console.log(`Mega-Sena: ${megaSena}`);
console.log("==============================")

console.log(`Quantidade de acertos: ${quantidadeAcertos}`);
console.log(`Números acertados: ${acertos}`);