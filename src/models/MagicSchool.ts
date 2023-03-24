import Model from './Model'

export interface MagicSchoolData extends BaseData {
  desc: string
}

export class MagicSchool extends Model<MagicSchoolData> {
  get desc (): MagicSchoolData['desc'] {
    return this.data.desc
  }
}
