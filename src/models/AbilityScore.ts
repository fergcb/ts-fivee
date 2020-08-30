import Model from './Model'
import { AbilityScoreData, SkillData } from '../structures'

export default class AbilityScore extends Model<AbilityScoreData> {

    private _skills?: SkillData[];

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
        if (this._skills !== undefined) return this._skills
        return this.api.resolveResources<SkillData>(this.data.skills)
    }

}