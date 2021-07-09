const pessoa = {
  nome: "Simara",
  idade: 32,
  cidade: "São Paulo"
}

//notação de ponto

console.log(pessoa.nome) 

//notação de colchetes

console.log(pessoa['idade'])

//Como destruturar objetos

const {nome, idade, cidade} = pessoa
console.log(nome,idade,cidade) //Com o objeto destruturado não preciso informa o nome do objeto no console, somente o nome da chave.
