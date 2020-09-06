import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { DamageTypeData } from '../structures'
import { DamageType } from '../models'

export default class DamageTypesManager extends ResourceManager<DamageType, DamageTypeData> {

    constructor (api: Fivee) {
        super(api, '/api/ability-scores/')
    }

    protected expand (data: DamageTypeData): DamageType {
        return new DamageType(this.api, data)
    }

}