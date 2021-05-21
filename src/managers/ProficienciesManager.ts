import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Proficiency } from '../models'
import { ProficiencyData } from '../structures'

export default class ProficienciesManager extends ResourceManager<Proficiency, ProficiencyData> {
  constructor (api: Fivee) {
    super(api, '/api/proficiencies/')
  }

  protected expand (data: ProficiencyData): Proficiency {
    return new Proficiency(this.api, data)
  }
}
