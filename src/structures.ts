/* Wrapper Structures */

export interface FiveeOptions {
  baseURL?: string
}

export interface ResourceCollection {
  count: number
  results: APIResource[]
}

/* API Structures */

/* Basic Types */

export type ArmorCategory = 'Light' | 'Medium' | 'Heavy' | 'Shield'

export type CreatureSize = 'Fine' | 'Diminutive' | 'Tiny'
| 'Small' | 'Medium' | 'Large'
| 'Huge' | 'Gargantuan' | 'Colossal'

export type CurrencyUnit = 'cp' | 'sp' | 'ep' | 'gp' | 'pp'

export type GearCategory = 'Ammunition' | 'Arcane Focus' | 'Druidic focus' | 'Equipment Pack'
| 'Holy Symbol' | 'Kit' | 'Standard Gear'

export type LanguageType = 'Exotic' | 'Standard'

export type ToolCategory = 'Artisan\'s Tools' | 'Gaming Sets' | 'Musical Instrument' | 'Other Tools'

export type VehicleCategory = 'Mounts and Other Animals' | 'Tack, Harness, and Drawn Vehicles' | 'Waterborne Vehicles'

export type WeaponCategory = 'Simple' | 'Martial'

export type WeaponRange = 'Melee' | 'Ranged'

/* Simple Structures */

export interface APIResource {
  index: BaseData['index']
  url: BaseData['url']
}

export interface AbilityBonus extends APIResource {
  bonus: number
}

export interface Action {
  name: string
  desc: string
  usage?: ActionUsage
}

export interface ActionUsage {
  type: string
  times: number
}

export interface ActionOption extends Action {
  options: Choice
}

export interface ActionReference {
  name: Action['name']
  count?: number
}

export interface ArmorClass {
  base: number
  dex_bonus: boolean
  max_bonus: number
}

export interface AttackAction extends Action {
  attack_bonus: number
  dc: DifficultyClass
  damage: Damage
}

export interface Choice {
  choose: number
  type: string
  from: any[] | APIResource
}

export interface Cost {
  quantity: number
  unit: CurrencyUnit
}

export interface Damage {
  damage_dice: string
  damage_type: APIResource
}

export interface DifficultyClass {
  dc_type: APIResource
  dc_value: number
  success_type: string
}

export interface EquipmentStack {
  equipment: APIResource
  quantity: number
}

export interface LevelledSpellDamage {
  damage_type: Damage['damage_type']
  damage_at_slot_level: { [key: string]: string }
}

export interface MonsterSpeed {
  [key: string]: string
}

export interface ProficiencyBonus extends APIResource {
  value: number
}

export interface Range {
  normal: number
  long: number | null
}

export interface SpecialAbility {
  name: string
  desc: string
  dc?: DifficultyClass
}

export interface SpellCastingInfo {
  name: string
  desc: string[]
}

export interface VehicleSpeed {
  quantity: number
  unit: string
}

/* Model Structures */

export interface BaseData {
  name: string
  index: string | number
  url: string
}

export interface AbilityScoreData extends BaseData {
  full_name: string
  desc: string[]
  skills: APIResource[]
}

export interface ClassData extends BaseData {
  hit_die: number
  proficiencies: APIResource[]
  proficiency_choices: Choice[]
  saving_throws: APIResource[]
  starting_equipment: APIResource
  class_levels: APIResource
  subclasses: APIResource[]
  spellcasting: APIResource
}

export interface ConditionData extends BaseData {
  desc: string[]
}

export interface DamageTypeData extends BaseData {
  desc: string[]
}

export interface EquipmentCategoryData extends BaseData {
  equipment: APIResource[]
}

export interface EquipmentData extends BaseData {
  equipment_category: APIResource
  cost: Cost
  weight: number
}

export interface GearData extends EquipmentData {
  gear_category: APIResource
  desc?: string[]
}

export interface ArmorData extends EquipmentData {
  armor_category: ArmorCategory
  armor_class: ArmorClass
  str_minimum: number
  stealth_disadvantage: boolean
}

export interface ToolData extends EquipmentData {
  tool_category: ToolCategory
  desc?: string[]
}

export interface WeaponData extends EquipmentData {
  weapon_category: WeaponCategory
  weapon_range: WeaponRange
  damage: Damage
  range: WeaponRange
  properties: APIResource[]
}

export interface VehicleData extends EquipmentData {
  vehicle_category: VehicleCategory
  desc?: string[]
  speed?: VehicleSpeed
}

export interface FeatureData extends BaseData {
  class: APIResource
  subclass?: APIResource
  desc: string[]
  level: number
}

export interface LanguageData extends BaseData {
  desc: string
  type: LanguageType
  typical_speakers: string[]
  script: string
}

export interface LevelData extends BaseData {
  level: number
  ability_score_bonuses: number
  prof_bonus: number
  feature_choices: APIResource[]
  features: APIResource[]
  class_specific: { [key: string]: any }
  class: APIResource
}

export interface MagicSchoolData extends BaseData {
  desc: string
}

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

export interface ProficiencyData extends BaseData {
  type: string
  classes: APIResource[]
  races: APIResource[]
  references: APIResource[]
}

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

export interface SkillData extends BaseData {
  desc: string[]
  ability_score: APIResource
}

export interface SpellCastingData extends BaseData {
  class: APIResource
  level: number
  spellcasting_ability: APIResource
  info: SpellCastingInfo[]
}

export interface SpellData extends BaseData {
  desc: string[]
  higher_level: string[]
  range: string
  components: string[]
  material: string
  ritual: boolean
  duration: string
  concentration: boolean
  casting_time: string
  level: number
  attack_type: string
  damage: Damage | LevelledSpellDamage
  school: APIResource
  classes: APIResource[]
  subclasses: APIResource[]
}

export interface StartingEquipmentData extends BaseData {
  class: APIResource
  starting_equipment: EquipmentStack[]
  starting_equipment_options: Choice[]
}

export interface SubclassData extends BaseData {
  class: APIResource
  subclass_flavor: string
  desc: string[]
  subclass_levels: APIResource
}

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

export interface TraitData extends BaseData {
  races: APIResource[]
  subraces: APIResource[]
  desc: string[]
}

export interface WeaponPropertyData extends BaseData {
  desc: string[]
}
