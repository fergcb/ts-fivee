import { BaseData, FiveeOptions, APIResource } from './structures'
import axios, { AxiosResponse } from 'axios'
import { NotFoundError } from './errors'
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
    WeaponPropertiesManager,
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

    constructor(options: FiveeOptions = {}) {
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

    private extractReferenceURL(reference: string | APIResource): string {
        return typeof reference === 'string' ? reference : reference.url
    }

    async getResource(reference: string | APIResource): Promise<AxiosResponse> {
        const resourceURL = this.extractReferenceURL(reference),
              baseURL = this.options.baseURL
        return axios.get(baseURL + resourceURL)
    }

    async resolveResource<T extends BaseData>(reference: string | APIResource): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.getResource(reference)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    if (err.response) {
                        if (err.response.status === 404)
                            err = new NotFoundError(this, this.extractReferenceURL(reference))
                    }

                    reject(err)
                })
        })
    }

    async resolveResources<T extends BaseData>(references: Array<string | APIResource>): Promise<T[]> {
        return new Promise<T[]>((resolve, reject) => {
            let resolved = 0;
            const resources: T[] = [] 
            references.forEach((reference, index) => {
                this.resolveResource<T>(reference)
                    .then(res => {
                        resources[index] = res
                        if (++resolved === references.length) resolve(resources)
                    })
                    .catch(reject)
            })
        })
    }

    async resolveCollection(reference: string | APIResource): Promise<APIResource[]> {
        return new Promise<APIResource[]>((resolve, reject) => {
            const url = this.options.baseURL + this.extractReferenceURL(reference)
            axios.get(url)
                .then(res => {
                    if (Array.isArray(res.data)) resolve(res.data)
                    else if ('results' in res.data) resolve(res.data.results)
                })
                .catch(reject)
        })
    }

}