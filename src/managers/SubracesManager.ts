import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Subrace, SubraceData } from '../models'

export default class SubracesManager extends ResourceManager<Subrace, SubraceData> {
  constructor (api: Fivee) {
    super(api, '/api/subraces/')
  }

  protected expand (data: SubraceData): Subrace {
    return new Subrace(this.api, data)
  }
}
