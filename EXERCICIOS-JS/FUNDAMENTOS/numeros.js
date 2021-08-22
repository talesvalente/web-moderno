
//Variaveis Locais
const peso1 = 1.0
const peso2 = Number('2.2')
const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

//Interação com Usuário
console.log("Retorna valor de peso1, peso2: " + peso1, peso2);
console.log("Verifica se peso1 é inteiro: "+Number.isInteger(peso1))
console.log("Verifica se peso2 é inteiro: "+Number.isInteger(peso2))
console.log("Retorna o valor da avaliacao1 e avaliacao2: "+avaliacao1.toFixed(2),"e "+ avaliacao2.toFixed(2))
console.log("Retorna a nota do aluno no período com pesos AV1*P1+AV2*P2: ",total.toFixed(2))
console.log("Mostra o valor da média com 2 casas decimais (NOTA/(P1+P2)): "+media.toFixed(2))
console.log("Mostra o valor da média em String / Binário (?): "+media.toString(2))
console.log("Mostra o tipo da variavel media: "+typeof media)               