import Model from './Model'
import { SpellData, MagicSchoolData, ClassData, SubclassData } from '../structures'

export default class Spell extends Model<SpellData> {

    get desc (): SpellData['desc'] {
        return this.data.desc
    }

    get higherLevel (): SpellData['higher_level'] {
        return this.data.higher_level
    }

    get range (): SpellData['range'] {
        return this.data.range
    }

    get components (): SpellData['components'] {
        return this.data.components
    }

    get material (): SpellData['material'] {
        return this.data.material
    }

    get ritual (): SpellData['ritual'] {
        return this.data.ritual
    }

    get duration (): SpellData['duration'] {
        return this.data.duration
    }

    get concentration (): SpellData['concentration'] {
        return this.data.concentration
    }

    get castingTime (): SpellData['casting_time'] {
        return this.data.casting_time
    }

    get level (): SpellData['level'] {
        return this.data.level
    }

    get attackType (): SpellData['attack_type'] {
        return this.data.attack_type
    }

    get damage (): SpellData['damage'] {
        return this.data.damage
    }

    get school (): SpellData['school'] {
        return this.data.school
    }

    public async fetchSchool (): Promise<MagicSchoolData> {
        return this.fetchCachable<MagicSchoolData>('school')
    }

    get classes (): SpellData['classes'] {
        return this.data.classes
    }

    public async fetchClasses (): Promise<ClassData[]> {
        return this.fetchCachables<ClassData>('classes')
    }

    get subclasses (): SpellData['subclasses'] {
        return this.data.subclasses
    }

    public async fetchSubclasses (): Promise<SubclassData> {
        return this.fetchCachable<SubclassData>('subclasses')
    }

}