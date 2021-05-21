import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Feature } from '../models'
import { FeatureData } from '../structures'

export default class FeaturesManager extends ResourceManager<Feature, FeatureData> {
  constructor (api: Fivee) {
    super(api, '/api/features/')
  }

  protected expand (data: FeatureData): Feature {
    return new Feature(this.api, data)
  }
}
