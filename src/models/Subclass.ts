import Model from './Model'
import { SubclassData, LevelData, ClassData } from '../structures'

export default class Subclass extends Model<SubclassData> {

    get class (): SubclassData['class'] {
        return this.data.class
    }

    public async fetchClass (): Promise<ClassData> {
        return this.fetchCachable<ClassData>('class')
    }

    get subclassFlavor (): SubclassData['subclass_flavor'] {
        return this.data.subclass_flavor
    }

    get desc (): SubclassData['desc'] {
        return this.data.desc
    }

    get subclassLevels (): SubclassData['subclass_levels'] {
        return this.data.subclass_levels
    }

    public async fetchClassLevels (): Promise<LevelData[]> {
        if (this.cache.has('subclass_levels')) return this.cache.get('subclass_levels')
        return this.api
            .resolveCollection(this.data.subclass_levels)
            .then(refs => this.api.resolveResources<LevelData>(refs))
            .then(resources => {
                this.cache.set('subclass_levels', resources)
                return resources
            })
    }

}