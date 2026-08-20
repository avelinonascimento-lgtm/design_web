alert("olá mundo!");

var nasc = 1991;
let nome = "pedrina";
const viva = true;
let altura = 1.64;


if (viva) {
    let saudacao = "Olá, " + nome + "!";
    let mensagem = `altura: ${altura}m | Idade: ${2025-nasc}`;
    alert(saudacao+'\n' +mensagem);
} else {
    alert("você não está viva!");
}
