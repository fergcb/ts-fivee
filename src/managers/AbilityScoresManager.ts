import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { AbilityScoreData } from '../structures'
import { AbilityScore } from '../models'

export default class AbilityScoresManager extends ResourceManager<AbilityScore, AbilityScoreData> {

    constructor (api: Fivee) {
        super(api, '/api/ability-scores/')
    }

    protected async expand (data: AbilityScoreData): Promise<AbilityScore> {
        return new AbilityScore(this.api, data)
    }

}