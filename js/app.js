var nas = 1991;
let nome = "pedrina";
const viva = true;

function calcIdade(ano){
    let idade = ano - nas;
    alert(`dentro de função - Idade ${idade}`);
    return idade;
}


alert(`fora da funcao: Idade ${idade}`);
alert(`fora da funcao: chamado calcIdade ${calcIdade()}`);
