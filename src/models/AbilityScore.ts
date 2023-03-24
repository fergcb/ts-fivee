import Model from './Model'
import { SkillData } from './Skill'

export interface AbilityScoreData extends BaseData {
  full_name: string
  desc: string[]
  skills: APIResource[]
}

export class AbilityScore extends Model<AbilityScoreData> {
  get fullName (): AbilityScoreData['full_name'] {
    return this.data.full_name
  }

  get desc (): AbilityScoreData['desc'] {
    return this.data.desc
  }

  get skills (): AbilityScoreData['skills'] {
    return this.data.skills
  }

  public async fetchSkills (): Promise<SkillData[]> {
    return await this.fetchCachables<SkillData>('skills')
  }
}
