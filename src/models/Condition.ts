import Model from './Model'
import { ConditionData } from '../structures'

export default class Condition extends Model<ConditionData> {
    
    get desc (): ConditionData['desc'] {
        return this.data.desc
    }

}