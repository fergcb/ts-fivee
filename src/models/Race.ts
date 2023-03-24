import Model from './Model'
import { LanguageData } from './Language'
import { ProficiencyData } from './Proficiency'
import { TraitData } from './Trait'
import { SubraceData } from './Subrace'

export interface RaceData extends BaseData {
  name: string
  speed: number
  ability_bonuses: AbilityBonus[]
  ability_bonus_options: Choice
  alignment: string
  age: string
  size: CreatureSize
  size_description: string
  starting_proficiencies: ProficiencyData[]
  starting_proficiency_options?: Choice
  languages: APIResource[]
  languages_options?: Choice
  language_desc: string
  traits: APIResource[]
  subraces: APIResource[]
}

export class Race extends Model<RaceData> {
  get speed (): RaceData['speed'] {
    return this.data.speed
  }

  get abilityBonuses (): RaceData['ability_bonuses'] {
    return this.data.ability_bonuses
  }

  get abilityBonusOptions (): RaceData['ability_bonus_options'] {
    return this.data.ability_bonus_options
  }

  get alignment (): RaceData['alignment'] {
    return this.data.alignment
  }

  get age (): RaceData['age'] {
    return this.data.age
  }

  get size (): RaceData['size'] {
    return this.data.size
  }

  get sizeDescription (): RaceData['size_description'] {
    return this.data.size_description
  }

  get startingProficiencies (): RaceData['starting_proficiencies'] {
    return this.data.starting_proficiencies
  }

  get startingProficiencyOptions (): RaceData['starting_proficiency_options'] {
    return this.data.starting_proficiency_options
  }

  async fetchStartingProficiencies (): Promise<ProficiencyData[]> {
    return await this.fetchCachables<ProficiencyData>('starting_proficiencies')
  }

  get languages (): RaceData['languages'] {
    return this.data.languages
  }

  async fetchLanguages (): Promise<LanguageData[]> {
    return await this.fetchCachables<LanguageData>('languages')
  }

  get languageDescription (): RaceData['language_desc'] {
    return this.data.language_desc
  }

  get traits (): RaceData['traits'] {
    return this.data.traits
  }

  async fetchTraits (): Promise<TraitData[]> {
    return await this.fetchCachables<TraitData>('traits')
  }

  get subraces (): RaceData['subraces'] {
    return this.data.subraces
  }

  async fetchSubraces (): Promise<SubraceData[]> {
    return await this.fetchCachables<SubraceData>('subraces')
  }
}
