import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { MagicSchoolData } from '../structures'
import { MagicSchool } from '../models'

export default class MagicSchoolsManager extends ResourceManager<MagicSchool, MagicSchoolData> {

    constructor (api: Fivee) {
        super(api, '/api/ability-scores/')
    }

    protected expand (data: MagicSchoolData): MagicSchool {
        return new MagicSchool(this.api, data)
    }

}