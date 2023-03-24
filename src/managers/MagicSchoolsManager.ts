import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { MagicSchool, MagicSchoolData } from '../models'

export default class MagicSchoolsManager extends ResourceManager<MagicSchool, MagicSchoolData> {
  constructor (api: Fivee) {
    super(api, '/api/magic-schools/')
  }

  protected expand (data: MagicSchoolData): MagicSchool {
    return new MagicSchool(this.api, data)
  }
}
