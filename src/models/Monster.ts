import Model from './Model'
import { DamageTypeData } from './DamageType'
import { ConditionData } from './Condition'
import { LanguageData } from './Language'

export interface MonsterData extends BaseData {
  size: CreatureSize
  type: string
  subtype: string
  alignment: string
  armor_class: number
  hit_points: number
  hit_dice: string
  speed: MonsterSpeed
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  proficiencies: ProficiencyBonus[]
  damage_vulnerabilities: APIResource[]
  damage_resistances: APIResource[]
  damage_immunities: APIResource[]
  condition_immunities: APIResource[]
  senses: {
    darkvision: string
    passive_perception: number
  }
  languages: string
  challenge_rating: number
  special_abilities: SpecialAbility[]
  actions: Action[]
  legendary_actions: Action[]
}

export class Monster extends Model<MonsterData> {
  get size (): MonsterData['size'] {
    return this.data.size
  }

  get type (): MonsterData['type'] {
    return this.data.type
  }

  get subtype (): MonsterData['subtype'] {
    return this.data.subtype
  }

  get alignment (): MonsterData['alignment'] {
    return this.data.alignment
  }

  get armorClass (): MonsterData['armor_class'] {
    return this.data.armor_class
  }

  get hitPoints (): MonsterData['hit_points'] {
    return this.data.hit_points
  }

  get hitDice (): MonsterData['hit_dice'] {
    return this.data.hit_dice
  }

  get speed (): MonsterData['speed'] {
    return this.data.speed
  }

  get strength (): MonsterData['strength'] {
    return this.data.strength
  }

  get dexterity (): MonsterData['dexterity'] {
    return this.data.dexterity
  }

  get constitution (): MonsterData['constitution'] {
    return this.data.constitution
  }

  get intelligence (): MonsterData['intelligence'] {
    return this.data.intelligence
  }

  get wisdom (): MonsterData['wisdom'] {
    return this.data.wisdom
  }

  get charisma (): MonsterData['charisma'] {
    return this.data.charisma
  }

  get proficiencies (): MonsterData['proficiencies'] {
    return this.data.proficiencies
  }

  get damageVulnerabilities (): MonsterData['damage_vulnerabilities'] {
    return this.data.damage_vulnerabilities
  }

  public async fetchDamageVulnerabilities (): Promise<DamageTypeData[]> {
    return await this.fetchCachables<DamageTypeData>('damage_vulnerabilities')
  }

  get damageResistances (): MonsterData['damage_resistances'] {
    return this.data.damage_resistances
  }

  public async fetchDamageResistances (): Promise<DamageTypeData[]> {
    return await this.fetchCachables<DamageTypeData>('damage_resistances')
  }

  get damageImmunities (): MonsterData['damage_immunities'] {
    return this.data.damage_immunities
  }

  public async fetchDamageImmunities (): Promise<DamageTypeData[]> {
    return await this.fetchCachables<DamageTypeData>('damage_immunities')
  }

  get conditionImmunities (): MonsterData['condition_immunities'] {
    return this.data.condition_immunities
  }

  public async fetchConditionImmunities (): Promise<ConditionData[]> {
    return await this.fetchCachables<ConditionData>('condition_immunities')
  }

  get senses (): MonsterData['senses'] {
    return this.data.senses
  }

  get languages (): MonsterData['languages'] {
    return this.data.languages
  }

  public async fetchLanguages (): Promise<LanguageData[]> {
    return await this.fetchCachables<LanguageData>('languages')
  }

  get challengeRating (): MonsterData['challenge_rating'] {
    return this.data.challenge_rating
  }

  get specialAbilities (): MonsterData['special_abilities'] {
    return this.data.special_abilities
  }

  get actions (): MonsterData['actions'] {
    return this.data.actions
  }

  get legendaryActions (): MonsterData['legendary_actions'] {
    return this.data.legendary_actions
  }
}
