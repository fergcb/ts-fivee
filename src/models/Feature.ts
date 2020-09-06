import Model from './Model'
import { FeatureData } from '../structures'

export default class Feature extends Model<FeatureData> {

    get class (): FeatureData['class'] {
        return this.data.class;
    }

    get subclass (): FeatureData['subclass'] {
        return this.data.subclass
    }

    get name (): FeatureData['name'] {
        return this.data.name
    }

    get level (): FeatureData['level'] {
        return this.data.level
    }

    get desc (): FeatureData['desc'] {
        return this.data.desc
    }

}