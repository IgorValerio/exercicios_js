const alunos = ["Igor", "Valerio", "Antônio"]
console.log(alunos[2])

//operador spread(...)
const alunasXp = [...alunos, "Simara"]

console.log(alunasXp)

//metodos de iteração
//Quando precisamos de um retorno que não modifique o array anterior,
// o map é excellente
alunasXp.map(aluno => console.log(aluno))

// Filter
//é uma espécie de for com filtro if
const numeros = [34, 45, 67, 90, 55, 76]
const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares)

//Ordenando Numeros de forma crescente
let numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

//Ordenando Numeros de forma decrescente
//aqui está alterando o array original mão retorna um novo array
 numerosOrdenadosCrescente = numeros.sort((a,b)=> b-a)
console.log(numerosOrdenadosCrescente)

//reduce - reduz nosso array a um resultado de uma operação matemática
let numbers = [1,34,35]
const soma = numbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual
},5)

console.log(soma)