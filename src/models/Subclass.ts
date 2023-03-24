import Model from './Model'
import { ClassData } from './Class'
import { LevelData } from './Level'

export interface SubclassData extends BaseData {
  class: APIResource
  subclass_flavor: string
  desc: string[]
  subclass_levels: APIResource
}

export class Subclass extends Model<SubclassData> {
  get class (): SubclassData['class'] {
    return this.data.class
  }

  public async fetchClass (): Promise<ClassData> {
    return await this.fetchCachable<ClassData>('class')
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

  public async fetchSubclassLevels (): Promise<LevelData[]> {
    if (this.cache.has('subclass_levels')) return this.cache.get('subclass_levels')
    const refs = await this.api.resolveCollection(this.data.subclass_levels)
    const resources = await this.api.resolveResources<LevelData>(refs)
    this.cache.set('subclass_levels', resources)
    return resources
  }
}
