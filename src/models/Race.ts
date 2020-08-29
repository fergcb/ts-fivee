import Model from './Model'
import { RaceData, ProficiencyData, LanguageData, TraitData, SubraceData } from '../structures'
import { Fivee } from '../fivee'

export default class Race extends Model<RaceData> {

    private _startingProficiencies?: ProficiencyData[]
    private _languages?: LanguageData[]
    private _traits?: TraitData[]
    private _subraces?: SubraceData[]

    constructor(api: Fivee, data: RaceData) {
        super(api, data)
    }

    get name (): RaceData['name'] {
        return this.data.name
    }

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
        if (this._startingProficiencies !== undefined) return this._startingProficiencies
        return await this.api.resolveResources<ProficiencyData>(this.data.starting_proficiencies)
    }

    get languages (): RaceData['languages'] {
        return this.data.languages
    }

    async fetchLanguages (): Promise<LanguageData[]> {
        if (this._languages !== undefined) return this._languages
        return await this.api.resolveResources<LanguageData>(this.data.languages)
    }

    get languageDescription (): RaceData['language_desc'] {
        return this.data.language_desc
    }

    get traits (): RaceData['traits'] {
        return this.data.traits
    }

    async fetchTraits (): Promise<TraitData[]> {
        if (this._traits !== undefined) return this._traits
        return await this.api.resolveResources<TraitData>(this.data.traits)
    }

    get subraces (): RaceData['subraces'] {
        return this.data.subraces
    }

    async fetchSubraces (): Promise<SubraceData[]> {
        if (this._subraces !== undefined) return this._subraces
        return await this.api.resolveResources<SubraceData>(this.data.subraces)
    }

}