import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Spell, SpellData } from '../models'

export default class SpellsManager extends ResourceManager<Spell, SpellData> {
  constructor (api: Fivee) {
    super(api, '/api/spells/')
  }

  protected expand (data: SpellData): Spell {
    return new Spell(this.api, data)
  }
}
