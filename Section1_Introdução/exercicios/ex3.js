// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer

const peca = "Rei"

switch (peca){
    case "Rei":
        console.log(`Rei -> uma casa em qualquer direção.`)
        break;
    case "Rainha":
        console.log(`Rainha -> quantas casas quiser na horizontal, vertical ou diagonal.`)
        break;
    case "Torre":
        console.log(`Torre -> quantas casas quiser na horizontal ou vertical.`)
        break;
    case "Bispo":
        console.log(`Bispo -> quantas casas quiser na diagonal.`)
        break;
    case "Cavalo":
        console.log(`Cavalo -> movimento em “L”: duas casas numa direção e uma para o lado.`)
        break;
    case "Peão":
        console.log(`Peão - > normalmente uma casa para frente; no primeiro movimento pode avançar duas. Captura na diagonal.`)
        break;
    default:
        console.log(`Erro: Peça inválida`)
}