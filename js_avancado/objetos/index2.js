const filmes = [
  {
    id: 1,
    titulo: "Dilema das Redes",
    descricao: "Documentario sobre tecnologia.",
    duracao:  120
  },
  {
    id: 2,
    titulo: "Us",
    descricao: "um Filme de terror.",
    duracao:  120
  },
  {
    id: 3,
    titulo: "Corra",
    descricao: "Um Filme de suspense.",
    duracao:  120
  }
]

const [{ titulo, descricao, duracao }] = filmes

filmes.map(filme => console.log(filme.descricao))
