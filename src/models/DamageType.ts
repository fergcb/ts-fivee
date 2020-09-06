import { DamageTypeData } from '../structures'
import Model from './Model'

export default class DamageType extends Model<DamageTypeData> {

    get name (): DamageTypeData['name'] {
        return this.data.name
    }

    get desc (): DamageTypeData['desc'] {
        return this.data.desc
    }

}