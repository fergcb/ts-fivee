import Model from './Model'

export interface WeaponPropertyData extends BaseData {
  desc: string[]
}

export class WeaponProperty extends Model<WeaponPropertyData> {
  get desc (): WeaponPropertyData['desc'] {
    return this.data.desc
  }
}
