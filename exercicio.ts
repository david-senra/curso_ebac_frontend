const multiplicacao = (a:number, b:number) :number => a * b;
const saudacao = (nome:string) :string => `Olá, ${nome}!`;
const saudacao2 = (nome:string) :string => "Olá, " + nome + "!";

console.log(multiplicacao(4,7));
console.log(saudacao('Pedro'));
console.log(saudacao2('Maria'));