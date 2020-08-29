import { fivee } from '../src'

const api = fivee({
    baseURL: 'http://localhost:3000'
})

api.races
    .fetch('gnome')
    .then(async gnome => {
        console.log(gnome.name)
    })
    .catch(console.error)
