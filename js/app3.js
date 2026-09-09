let vezes = number(prompt("digite o primeiro número: "));
let vezes = number(prompt("digite o segundo número: "));
let op;
do{
    let msg = "escolha uma opção:\n"
    msg += "1 - somar\n";
    msg += "2 - subtrair\n";
    msg += "3 - multiplicar\n";
    msg += "4 - dividir\n";
    msg += "5 - sair\n";
    op = prompt(msg);
    switch(op){
        case "1":
            alert(`o resultado da soma é: ${n1 + n2}`);
            break;
        case "2":
            alert(`o resultado da subtração é: ${n1 - n2}`);
            break;
        case "3":
            alert(`o resultado da multiplicação é: ${n1 * n2}`);
            break;
        case "4":
            alert(`o resultado da divisão é: ${n1 / n2}`);
            break;
        case "5":
            alert("saindo...");
            break;
        default:
            alert("opção inválida!");
    }
}while(op != "5");