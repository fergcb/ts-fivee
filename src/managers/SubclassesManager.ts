import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Subclass, SubclassData } from '../models'

export default class SubclassManager extends ResourceManager<Subclass, SubclassData> {
  constructor (api: Fivee) {
    super(api, '/api/subclasses/')
  }

  protected expand (data: SubclassData): Subclass {
    return new Subclass(this.api, data)
  }
}
