import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Trait } from '../models'
import { TraitData } from '../structures'

export default class TraitsManager extends ResourceManager<Trait, TraitData> {
  constructor (api: Fivee) {
    super(api, '/api/traits/')
  }

  protected expand (data: TraitData): Trait {
    return new Trait(this.api, data)
  }
}
