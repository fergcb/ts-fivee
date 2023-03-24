import Model from './Model'
import { AbilityScoreData } from './AbilityScore'
import { LevelData } from './Level'
import { ProficiencyData } from './Proficiency'
import { SubclassData } from './Subclass'

export interface ClassData extends BaseData {
  hit_die: number
  proficiencies: APIResource[]
  proficiency_choices: Choice[]
  saving_throws: APIResource[]
  starting_equipment: APIResource
  class_levels: APIResource
  subclasses: APIResource[]
  spellcasting: APIResource
}

export interface SpellCastingData extends BaseData {
  class: APIResource
  level: number
  spellcasting_ability: APIResource
  info: SpellCastingInfo[]
}

export interface StartingEquipmentData extends BaseData {
  class: APIResource
  starting_equipment: EquipmentStack[]
  starting_equipment_options: Choice[]
}

export class Class extends Model<ClassData> {
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
    return await this.fetchCachables<ProficiencyData>('proficiencies')
  }

  get savingThrows (): ClassData['saving_throws'] {
    return this.data.saving_throws
  }

  public async fetchSavingThrows (): Promise<AbilityScoreData[]> {
    return await this.fetchCachables<AbilityScoreData>('saving_throws')
  }

  get startingEquipment (): ClassData['starting_equipment'] {
    return this.data.starting_equipment
  }

  public async fetchStartingEquipment (): Promise<StartingEquipmentData> {
    return await this.fetchCachable<StartingEquipmentData>('starting_equipment')
  }

  get classLevels (): ClassData['class_levels'] {
    return this.data.class_levels
  }

  public async fetchClassLevels (): Promise<LevelData[]> {
    if (this.cache.has('class_levels')) return this.cache.get('class_levels')
    const refs = await this.api.resolveCollection(this.data.class_levels)
    const resources = await this.api.resolveResources<LevelData>(refs)
    this.cache.set('class_levels', resources)
    return resources
  }

  get subclasses (): ClassData['subclasses'] {
    return this.data.subclasses
  }

  public async fetchSubclasses (): Promise<SubclassData[]> {
    return await this.fetchCachables('subclasses')
  }

  get spellcasting (): ClassData['spellcasting'] {
    return this.data.spellcasting
  }

  public async fetchSpellcasting (): Promise<SpellCastingData> {
    return await this.fetchCachable('spellcasting')
  }
}
