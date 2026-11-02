alert("Olá, Seja bem vindo(a)")

let nomeAluno = prompt("Insira seu nome completo");
let prova1 = Number(prompt("Digite a nota da primeira prova"));
let prova2 = Number(prompt("Digite a nota da segunda prova"));
let prova3 = Number(prompt("Digite a nota da terceira prova"));
let media = (prova1 + prova2 + prova3) /3;

if(media>=8){
    document.write("Parabéns Sr(a) " ,nomeAluno );
    document.write(" você foi APROVADO, entraremos em contato para mais informações da sua aprovação.");
}else{(media<8)
    document.write("Sr(a) " ,nomeAluno);
    document.write(" você foi REPROVADO, tente novamente no proximo ano.");

}