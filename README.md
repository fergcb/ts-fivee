# Fivee - D&D 5e API Wrapper
**Fivee is a powerful typescript wrapper library for the [D&D 5e SRD API](https://dnd5eapi.co/)**

## Features
- **Promises** - API requests are promise-based, granting lazy, asynchronous access to the API data.
- **Fully Typed** - Fivee provides comprehensive TypeScript interfaces for API responses.
- **Data Relationships** - internal references in the API data can be expanded as needed with a simple method call.

## Installation
*Coming Soon*

## Getting Started
Import an initialise the Fivee wrapper:
```js
const { fivee } = require('fivee')

const api = fivee()
```

Using an alternate instance of the 5e SRD API server:
```js
const api = fivee({
    baseURL: 'http://localhost:3000',
})
```

Fetching data:
```js
api.races.fetch('gnome')
   .then(data => {
       console.log(gnome.name, gnome.languages)
   })
   .catch(console.error)
```

## License

**This project, the Fivee API wrapper is licensed under the [MIT license](https://github.com/fergcb/fivee/blob/master/LICENSE)**

[D&D 5e SRD](https://dnd.wizards.com/articles/features/systems-reference-document-srd) content provided by the API is licensed under the [Open Game License](https://en.wikipedia.org/wiki/Open_Game_License), Version 1.0a.

The [5e SRD API](https://github.com/bagelbits/5e-srd-api) is licensed under the [MIT license](https://github.com/bagelbits/5e-srd-api/blob/master/LICENSE.md)
