// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro

// const ang1 = 100;
// const ang2 = 40;
// const ang3 = 40;

// if (ang1 + ang2 + ang3 == 180){
//     console.log(`A soma dos angulos internos: ${ang1}, ${ang2}, ${ang3} = 180º. Logo, verdadeiro.`)
//     console.log(ang1 + ang2 + ang3 == 180)
// }else {
//     console.log(`A soma dos angulos internos: ${ang1}, ${ang2}, ${ang3} é diferente de 180º. Logo, falso.`)
//     console.log(ang1 + ang2 + ang3 == 180)
// }


const angulo1 = 100;
const angulo2 = 40;
const angulo3 = 40;

const somaAngulos = angulo1 + angulo2 + angulo3

const AngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (AngulosPositivos){
    if (somaAngulos == 180){
        console.log(true);
    }
    else{
        console.log(180)
    }
} else {
    console.log("Erro: ângulo inválido")
}