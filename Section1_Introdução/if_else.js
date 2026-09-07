/* Implemente uma lógica que, de acordo com a nota,
verifique se a pessoa foi aprovada, reprovada ou se
está na lista de espera. Para isso, considere estas
informações.

    - Se a nota for maior ou igual a 80, armazene na
    variável mensagem: "Parabéns, você foi aprovado!";

    - Se a nota for menor que 80 e maior ou igual a 60,
    armazene na variável mensagem: "Você está na lista
    de espera.";

    - Se a nota for menor que 60, armazene na variável
    mensagem: "Reprovado.". */

const nota = 40;
let mensagem = ""

if (nota >= 80) {
    mensagem = "Parabéns, você foi aprovado!"
} else if (nota >= 60 ){
    mensagem = "Você está na lista de espera."
} else {
    mensagem = "Reprovado."
}

console.log(mensagem)