import Model from './Model'

export interface ConditionData extends BaseData {
  desc: string[]
}

export class Condition extends Model<ConditionData> {
  get desc (): ConditionData['desc'] {
    return this.data.desc
  }
}
