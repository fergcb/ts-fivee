import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Skill, SkillData } from '../models'

export default class SkillsManager extends ResourceManager<Skill, SkillData> {
  constructor (api: Fivee) {
    super(api, '/api/skills/')
  }

  protected expand (data: SkillData): Skill {
    return new Skill(this.api, data)
  }
}
