import Model from './Model'
import { SubraceData, ProficiencyData, LanguageData, TraitData } from '../structures'

export default class Subrace extends Model<SubraceData> {

    get name (): SubraceData['name'] {
        return this.data.name
    }

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
        return this.fetchCachables<ProficiencyData>('starting_proficiencies')
    }

    get startingProficiencyOptions (): SubraceData['starting_proficiency_options'] {
        return this.data.starting_proficiency_options
    }

    get languages (): SubraceData['languages'] {
        return this.data.languages
    }

    public async fetchLanguages (): Promise<LanguageData[]> {
        return this.fetchCachables<LanguageData>('languages')
    }

    get languagesOptions (): SubraceData['languages_options'] {
        return this.data.languages_options
    }

    get racialTraits (): SubraceData['racial_traits'] {
        return this.data.racial_traits
    }

    public async fetchRacialTraits (): Promise<TraitData[]> {
        return this.fetchCachables<TraitData>('racial_traits')
    }

    get racialTraitOptions (): SubraceData['racial_trait_options'] {
        return this.data.racial_trait_options
    }

}