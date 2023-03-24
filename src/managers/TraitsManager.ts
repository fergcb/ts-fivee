import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Trait, TraitData } from '../models'

export default class TraitsManager extends ResourceManager<Trait, TraitData> {
  constructor (api: Fivee) {
    super(api, '/api/traits/')
  }

  protected expand (data: TraitData): Trait {
    return new Trait(this.api, data)
  }
}
