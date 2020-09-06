import Model from './Model'
import { RaceData, ProficiencyData, LanguageData, TraitData, SubraceData } from '../structures'

export default class Race extends Model<RaceData> {

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
        return this.fetchCachables<ProficiencyData>('starting_proficiencies')
    }

    get languages (): RaceData['languages'] {
        return this.data.languages
    }

    async fetchLanguages (): Promise<LanguageData[]> {
        return this.fetchCachables<LanguageData>('languages')
    }

    get languageDescription (): RaceData['language_desc'] {
        return this.data.language_desc
    }

    get traits (): RaceData['traits'] {
        return this.data.traits
    }

    async fetchTraits (): Promise<TraitData[]> {
        return this.fetchCachables<TraitData>('traits')
    }

    get subraces (): RaceData['subraces'] {
        return this.data.subraces
    }

    async fetchSubraces (): Promise<SubraceData[]> {
        return this.fetchCachables<SubraceData>('subraces')
    }

}