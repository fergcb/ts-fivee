import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Class, ClassData } from '../models'

export default class AbilityScoresManager extends ResourceManager<Class, ClassData> {
  constructor (api: Fivee) {
    super(api, '/api/classes/')
  }

  protected expand (data: ClassData): Class {
    return new Class(this.api, data)
  }
}
