import Model from './Model'

export interface DamageTypeData extends BaseData {
  desc: string[]
}

export class DamageType extends Model<DamageTypeData> {
  get desc (): DamageTypeData['desc'] {
    return this.data.desc
  }
}
