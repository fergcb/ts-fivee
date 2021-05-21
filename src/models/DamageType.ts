import { DamageTypeData } from '../structures'
import Model from './Model'

export default class DamageType extends Model<DamageTypeData> {
  get desc (): DamageTypeData['desc'] {
    return this.data.desc
  }
}
