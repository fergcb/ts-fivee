import Model from './Model'
import { MagicSchoolData } from '../structures'

export default class MagicSchool extends Model<MagicSchoolData> {
  get desc (): MagicSchoolData['desc'] {
    return this.data.desc
  }
}
