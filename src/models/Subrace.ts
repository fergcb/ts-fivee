import Model from './Model'
import { TraitData } from './Trait'
import { ProficiencyData } from './Proficiency'
import { LanguageData } from './Language'

export interface SubraceData extends BaseData {
  race: APIResource
  desc: string
  ability_bonuses: AbilityBonus[]
  ability_bonus_options?: Choice
  starting_proficiencies: APIResource[]
  starting_proficiency_options?: Choice
  languages: APIResource[]
  languages_options?: Choice
  racial_traits: APIResource[]
  racial_trait_options: Choice
}

export class Subrace extends Model<SubraceData> {
  get race (): SubraceData['race'] {
    return this.data.race
  }

  get desc (): SubraceData['desc'] {
    return this.data.desc
  }

  get abilityBonuses (): SubraceData['ability_bonuses'] {
    return this.data.ability_bonuses
  }

  get abilityBonusOptions (): SubraceData['ability_bonus_options'] {
    return this.data.ability_bonus_options
  }

  get startingProficiencies (): SubraceData['starting_proficiencies'] {
    return this.data.starting_proficiencies
  }

  public async fetchStartingProficiencies (): Promise<ProficiencyData[]> {
    return await this.fetchCachables<ProficiencyData>('starting_proficiencies')
  }

  get startingProficiencyOptions (): SubraceData['starting_proficiency_options'] {
    return this.data.starting_proficiency_options
  }

  get languages (): SubraceData['languages'] {
    return this.data.languages
  }

  public async fetchLanguages (): Promise<LanguageData[]> {
    return await this.fetchCachables<LanguageData>('languages')
  }

  get languagesOptions (): SubraceData['languages_options'] {
    return this.data.languages_options
  }

  get racialTraits (): SubraceData['racial_traits'] {
    return this.data.racial_traits
  }

  public async fetchRacialTraits (): Promise<TraitData[]> {
    return await this.fetchCachables<TraitData>('racial_traits')
  }

  get racialTraitOptions (): SubraceData['racial_trait_options'] {
    return this.data.racial_trait_options
  }
}
