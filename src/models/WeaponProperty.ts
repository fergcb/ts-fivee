import Model from './Model'
import { WeaponPropertyData } from '../structures'

export default class WeaponProperty extends Model<WeaponPropertyData> {
    
    get name(): WeaponPropertyData['name'] {
        return this.data.name
    }

    get desc(): WeaponPropertyData['desc'] {
        return this.data.desc
    }

}