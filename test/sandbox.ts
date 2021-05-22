import { fivee } from '../src'

const api = fivee({
  baseURL: 'http://dnd5eapi.co/'
})

api.races
  .fetch('gnome')
  .then(gnome => {
    console.log(gnome.name)
  })
  .catch(console.error)
