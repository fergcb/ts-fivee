import Model from './Model'
import { LanguageData } from '../structures'

export default class Language extends Model<LanguageData> {
    
    get name (): LanguageData['name'] {
        return this.data.name
    }

    get type (): LanguageData['type'] {
        return this.data.type
    }

    get typicalSpeakers (): LanguageData['typical_speakers'] {
        return this.data.typical_speakers
    }

    get script (): LanguageData['script'] {
        return this.data.script
    }

}