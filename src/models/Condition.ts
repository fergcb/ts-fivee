import Model from './Model'
import { ConditionData } from '../structures'

export default class Condition extends Model<ConditionData> {
    
    get name (): ConditionData['name'] {
        return this.data.name
    }

    get desc (): ConditionData['desc'] {
        return this.data.desc
    }

}