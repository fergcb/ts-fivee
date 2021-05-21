import Model from './Model'
import { WeaponPropertyData } from '../structures'

export default class WeaponProperty extends Model<WeaponPropertyData> {
  get desc (): WeaponPropertyData['desc'] {
    return this.data.desc
  }
}
