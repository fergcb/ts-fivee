import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { AbilityScore, AbilityScoreData } from '../models'

export default class AbilityScoresManager extends ResourceManager<AbilityScore, AbilityScoreData> {
  constructor (api: Fivee) {
    super(api, '/api/ability-scores/')
  }

  protected expand (data: AbilityScoreData): AbilityScore {
    return new AbilityScore(this.api, data)
  }
}
