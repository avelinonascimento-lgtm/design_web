let vezes = number(prompt("digite a quantidade e vezes: "));
for (let i = 1; i <= vezes; i++) {
    if (vezes > 100){
        break;
    }
    alert(`contei ${i} vezes`);
    if (i%2!=0) {
        continue;
    }
    alert(`número par: ${i}`);
}