import Model from './Model'
import { MagicSchoolData } from '../structures'

export default class MagicSchool extends Model<MagicSchoolData> {
    
    get name (): MagicSchoolData['name'] {
        return this.data.name
    }

    get desc (): MagicSchoolData['desc'] {
        return this.data.desc
    }

}