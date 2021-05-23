import { BaseData, FiveeOptions, APIResource } from './structures'
import axios, { AxiosResponse } from 'axios'
import { BadResponseError, NotFoundError } from './errors'
import {
  AbilityScoresManager,
  ClassesManager,
  RacesManager,
  ConditionsManager,
  DamageTypesManager,
  EquipmentCategoriesManager,
  EquipmentManager,
  FeaturesManager,
  LanguagesManager,
  MagicSchoolsManager,
  MonstersManager,
  ProficienciesManager,
  SkillsManager,
  SpellsManager,
  SubclassesManager,
  SubracesManager,
  TraitsManager,
  WeaponPropertiesManager
} from './managers'

const defaultOptions: FiveeOptions = {
  baseURL: 'https://www.dnd5eapi.co'
}

export function fivee (options: FiveeOptions = {}): Fivee {
  return new Fivee(options)
}

export class Fivee {
  public options: FiveeOptions

  public abilityScores: AbilityScoresManager
  public classes: ClassesManager
  public conditions: ConditionsManager
  public damageTypes: DamageTypesManager
  public equipmentCategories: EquipmentCategoriesManager
  public equipment: EquipmentManager
  public features: FeaturesManager
  public languages: LanguagesManager
  public magicSchools: MagicSchoolsManager
  public monsters: MonstersManager
  public proficiencies: ProficienciesManager
  public races: RacesManager
  public skills: SkillsManager
  public spells: SpellsManager
  public subclasses: SubclassesManager
  public subraces: SubracesManager
  public traits: TraitsManager
  public weaponProperties: WeaponPropertiesManager

  constructor (options: FiveeOptions = {}) {
    this.options = Object.assign(defaultOptions, options)

    this.abilityScores = new AbilityScoresManager(this)
    this.classes = new ClassesManager(this)
    this.conditions = new ConditionsManager(this)
    this.damageTypes = new DamageTypesManager(this)
    this.equipmentCategories = new EquipmentCategoriesManager(this)
    this.equipment = new EquipmentManager(this)
    this.features = new FeaturesManager(this)
    this.languages = new LanguagesManager(this)
    this.magicSchools = new MagicSchoolsManager(this)
    this.monsters = new MonstersManager(this)
    this.proficiencies = new ProficienciesManager(this)
    this.races = new RacesManager(this)
    this.skills = new SkillsManager(this)
    this.spells = new SpellsManager(this)
    this.subclasses = new SubclassesManager(this)
    this.subraces = new SubracesManager(this)
    this.traits = new TraitsManager(this)
    this.weaponProperties = new WeaponPropertiesManager(this)
  }

  private extractReferenceURL (reference: string | APIResource): string {
    return typeof reference === 'string' ? reference : reference.url
  }

  public resolveReferenceURL (reference: string | APIResource): string {
    const base = this.options.baseURL as string
    const url = this.extractReferenceURL(reference)
    return new URL(url, base).href
  }

  async getResource (reference: string | APIResource): Promise<AxiosResponse> {
    const url = this.resolveReferenceURL(reference)
    return await axios.get(url)
  }

  async resolveResource<T extends BaseData>(reference: string | APIResource): Promise<T> {
    try {
      const res = await this.getResource(reference)
      return res.data
    } catch (err) {
      if (err.response !== undefined && err.response.status === 404) {
        throw new NotFoundError(this, this.extractReferenceURL(reference))
      }
      throw err
    }
  }

  async resolveResources<T extends BaseData>(references: Array<string | APIResource>): Promise<T[]> {
    return await Promise.all(references.map(async ref => {
      return await this.resolveResource<T>(ref)
    }))
  }

  async resolveCollection (reference: string | APIResource): Promise<APIResource[]> {
    const url = this.resolveReferenceURL(reference)
    const res = await axios.get(url)
    if (Array.isArray(res.data)) return res.data
    if ('results' in res.data) return res.data.results
    throw new BadResponseError(this, url, 'Expected array, or object with `results` property, when resolving collection')
  }
}
