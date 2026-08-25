var nas = 1991;
let nome = "pedrina";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nas;
    alert(`dentro de função - Idade ${idade}`);
    return idade;
}

calcIdade();
alert(`fora da funcao: chamado calcIdade ${calcIdade(2027)}`);
