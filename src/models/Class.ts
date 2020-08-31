import Model from "./Model";
import { ClassData, ProficiencyData, AbilityScoreData, StartingEquipmentData, LevelData, SubclassData, SpellCastingData } from "../structures";

export default class Class extends Model<ClassData> {

    get name (): ClassData['name'] {
        return this.data.name
    }

    get hitDie (): ClassData['hit_die'] {
        return this.data.hit_die
    }

    get proficiency_choices (): ClassData['proficiency_choices'] {
        return this.data.proficiency_choices
    }

    get proficiencies (): ClassData['proficiencies'] {
        return this.data.proficiencies
    }

    public async fetchProficiencies (): Promise<ProficiencyData[]> {
        return this.fetchCachables<ProficiencyData>('proficiencies')
    }

    get savingThrows (): ClassData['saving_throws'] {
        return this.data.saving_throws
    }

    public async fetchSavingThrows (): Promise<AbilityScoreData[]> {
        return this.fetchCachables<AbilityScoreData>('saving_throws')
    }

    get startingEquipment (): ClassData['starting_equipment'] {
        return this.data.starting_equipment
    }

    public async fetchStartingEquipment (): Promise<StartingEquipmentData> {
        return this.fetchCachable<StartingEquipmentData>('starting_equipment')
    }

    get classLevels (): ClassData['class_levels'] {
        return this.data.class_levels
    }

    public async fetchClassLevels (): Promise<LevelData[]> {
        if (this.cache.has('class_levels')) return this.cache.get('class_levels')
        return this.api
            .resolveCollection(this.data.class_levels)
            .then(refs => this.api.resolveResources<LevelData>(refs))
            .then(resources => {
                this.cache.set('class_levels', resources)
                return resources
            })
    }

    get subclasses (): ClassData['subclasses'] {
        return this.data.subclasses
    }

    public async fetchSubclasses (): Promise<SubclassData[]> {
        return this.fetchCachables('subclasses')
    }

    get spellcasting (): ClassData['spellcasting'] {
        return this.data.spellcasting
    }

    public async fetchSpellcasting (): Promise<SpellCastingData> {
        return this.fetchCachable('spellcasting')
    }

}