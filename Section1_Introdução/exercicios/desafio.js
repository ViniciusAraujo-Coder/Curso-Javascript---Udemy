const nome = "Victor";
const codinome = "Capitão JS";

let energia = 80;
let nivel = 7;

const elemento = "raio";

let poder;

switch (elemento) {
    case "fogo":
        poder = "Chamas infinitas";
        break;

    case "gelo":
        poder = "Congelamento absoluto";
        break;

    case "raio":
        poder = "Choque do trovão";
        break;

    case "sombra":
        poder = "Invisibilidade";
        break;

    default:
        poder = "Poder desconhecido";
}


// dano baseado no nível
let danoFinal = nivel * 10;


// verifica se a energia é par ou ímpar
let energiaTipo;

if (energia % 2 === 0) {
    energiaTipo = "par";
} else {
    energiaTipo = "ímpar";
}


// verifica se pode entrar na batalha
if (energia > 60 && nivel >= 5) {

    console.log(`${nome} (${codinome}), entrou na batalha final!
Poder: ${poder}
Dano: ${danoFinal}
Energia: ${energia} (${energiaTipo}).`);

} else {
    console.log("Herói não está pronto para a batalha final.");
}