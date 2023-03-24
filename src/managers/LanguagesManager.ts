import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Language, LanguageData } from '../models'

export default class FeaturesManager extends ResourceManager<Language, LanguageData> {
  constructor (api: Fivee) {
    super(api, '/api/languages/')
  }

  protected expand (data: LanguageData): Language {
    return new Language(this.api, data)
  }
}
