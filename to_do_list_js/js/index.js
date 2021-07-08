const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let list = []
/**
 * Toda tag form tem um comportamento padrão no navegador,
 * toda vez que o navegador recebe um submit a pagina é atualizada. 
 * Então eu preciso prevenir esse comportamento padrão pra que a nossa
 * página não perca os dados ao ser atualizada.
 */
newListForm.addEventListener('submit', function(e){
  e.addEventListener()
  const listName = newListInput.value
  if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function render(){
  lists.forEach(function(list){
    const item = document.createElement('li')
  })
}