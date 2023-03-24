import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Condition, ConditionData } from '../models'

export default class ConditionsManager extends ResourceManager<Condition, ConditionData> {
  constructor (api: Fivee) {
    super(api, '/api/ability-scores/')
  }

  protected expand (data: ConditionData): Condition {
    return new Condition(this.api, data)
  }
}
