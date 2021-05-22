import { fivee } from '../src'

const api = fivee({
  baseURL: 'http://dnd5eapi.co/'
})

console.log('init')
api.equipment.fetchAll()
  .then(items => {
    items.filter(item => item.weight > 3)
      .forEach(item => console.log(item.name, item.weight))
  })
  .catch(console.error)
