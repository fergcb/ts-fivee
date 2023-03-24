import Model from './Model'

export interface SkillData extends BaseData {
  desc: string[]
  ability_score: APIResource
}

export class Skill extends Model<SkillData> {
  get desc (): SkillData['desc'] {
    return this.data.desc
  }

  get abilityScore (): SkillData['ability_score'] {
    return this.data.ability_score
  }
}
