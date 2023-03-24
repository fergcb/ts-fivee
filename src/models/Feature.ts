import Model from './Model'

export interface FeatureData extends BaseData {
  class: APIResource
  subclass?: APIResource
  desc: string[]
  level: number
}

export class Feature extends Model<FeatureData> {
  get class (): FeatureData['class'] {
    return this.data.class
  }

  get subclass (): FeatureData['subclass'] {
    return this.data.subclass
  }

  get level (): FeatureData['level'] {
    return this.data.level
  }

  get desc (): FeatureData['desc'] {
    return this.data.desc
  }
}
