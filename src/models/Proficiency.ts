import Model from './Model'
import { ClassData } from './Class'
import { RaceData } from './Race'

export interface ProficiencyData extends BaseData {
  type: string
  classes: APIResource[]
  races: APIResource[]
  references: APIResource[]
}

export class Proficiency extends Model<ProficiencyData> {
  get type (): ProficiencyData['type'] {
    return this.data.type
  }

  get classes (): ProficiencyData['classes'] {
    return this.data.classes
  }

  public async fetchClasses (): Promise<ClassData[]> {
    return await this.fetchCachables<ClassData>('classes')
  }

  get races (): ProficiencyData['races'] {
    return this.data.races
  }

  public async fetchRaces (): Promise<RaceData[]> {
    return await this.fetchCachables<RaceData>('races')
  }

  get references (): ProficiencyData['references'] {
    return this.data.references
  }
}
