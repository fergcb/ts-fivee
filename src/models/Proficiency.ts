import Model from './Model'
import { ProficiencyData, ClassData, RaceData } from '../structures'

export default class Proficiency extends Model<ProficiencyData> {

    get type (): ProficiencyData['type'] {
        return this.data.type
    }

    get classes (): ProficiencyData['classes'] {
        return this.data.classes
    }

    public async fetchClasses (): Promise<ClassData[]> {
        return this.fetchCachables<ClassData>('classes')
    }

    get races (): ProficiencyData['races'] {
        return this.data.races
    }

    public async fetchRaces (): Promise<RaceData[]> {
        return this.fetchCachables<RaceData>('races')
    }

    get references (): ProficiencyData['references'] {
        return this.data.references
    }

}