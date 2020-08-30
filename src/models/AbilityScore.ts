import Model from './Model'
import { AbilityScoreData, SkillData } from '../structures'

export default class AbilityScore extends Model<AbilityScoreData> {
    get name (): AbilityScoreData['name'] {
        return this.data.name
    }

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
        return this.fetchCachables<SkillData>('skills')
    }

}