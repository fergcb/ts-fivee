import Model from './Model'

export interface LevelData extends BaseData {
  level: number
  ability_score_bonuses: number
  prof_bonus: number
  feature_choices: APIResource[]
  features: APIResource[]
  class_specific: { [key: string]: any }
  class: APIResource
}

export class Level extends Model<LevelData> {
  get level (): LevelData['level'] {
    return this.data.level
  }

  get ability_score_bonuses (): LevelData['ability_score_bonuses'] {
    return this.data.ability_score_bonuses
  }

  get prof_bonus (): LevelData['prof_bonus'] {
    return this.data.prof_bonus
  }

  get feature_choices (): LevelData['feature_choices'] {
    return this.data.feature_choices
  }

  get features (): LevelData['features'] {
    return this.data.features
  }

  get class_specific (): LevelData['class_specific'] {
    return this.data.class_specific
  }

  get class (): LevelData['class'] {
    return this.data.class
  }
}
