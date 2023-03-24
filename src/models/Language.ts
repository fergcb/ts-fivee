import Model from './Model'

export interface LanguageData extends BaseData {
  desc: string
  type: LanguageType
  typical_speakers: string[]
  script: string
}

export class Language extends Model<LanguageData> {
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
