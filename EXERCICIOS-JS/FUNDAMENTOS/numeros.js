
//Variaveis Locais
const peso1 = 1.0
const peso2 = Number('2.2')
const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

//Interação com Usuário
console.log(peso1, peso2);              // Retorna valor de peso1, peso2
console.log(Number.isInteger(peso1))    // Verifica se peso1 é inteiro
console.log(Number.isInteger(peso2))    // Verifica se peso2 é inteiro
console.log(media.toFixed(2))           // Mostra o valor da média com 2 casas decimais
console.log(media.toString(2))          // Mostra o valor da média em String / Binário (?)
console.log(typeof media)               // Mostra o tipo da variavel media