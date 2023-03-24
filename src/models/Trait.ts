import Model from './Model'
import { RaceData } from './Race'
import { SubraceData } from './Subrace'

export interface TraitData extends BaseData {
  races: APIResource[]
  subraces: APIResource[]
  desc: string[]
}

export class Trait extends Model<TraitData> {
  get races (): TraitData['races'] {
    return this.data.races
  }

  public async fetchRaces (): Promise<RaceData[]> {
    return await this.fetchCachables<RaceData>('races')
  }

  get subraces (): TraitData['subraces'] {
    return this.data.subraces
  }

  public async fetchSubraces (): Promise<SubraceData[]> {
    return await this.fetchCachables<SubraceData>('subraces')
  }

  get desc (): TraitData['desc'] {
    return this.data.desc
  }
}
