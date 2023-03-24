/* Base API entities */

interface ResourceCollection {
  count: number
  results: APIResource[]
}

interface APIResource {
  index: BaseData['index']
  url: BaseData['url']
}

interface BaseData {
  name: string
  index: string | number
  url: string
}

/* Common Types */

type ArmorCategory = 'Light' | 'Medium' | 'Heavy' | 'Shield'

type CreatureSize = 'Fine' | 'Diminutive' | 'Tiny'
| 'Small' | 'Medium' | 'Large'
| 'Huge' | 'Gargantuan' | 'Colossal'

type CurrencyUnit = 'cp' | 'sp' | 'ep' | 'gp' | 'pp'

type GearCategory = 'Ammunition' | 'Arcane Focus' | 'Druidic focus' | 'Equipment Pack'
| 'Holy Symbol' | 'Kit' | 'Standard Gear'

type LanguageType = 'Exotic' | 'Standard'

type ToolCategory = 'Artisan\'s Tools' | 'Gaming Sets' | 'Musical Instrument' | 'Other Tools'

type VehicleCategory = 'Mounts and Other Animals' | 'Tack, Harness, and Drawn Vehicles' | 'Waterborne Vehicles'

type WeaponCategory = 'Simple' | 'Martial'

type WeaponRange = 'Melee' | 'Ranged'

/* Common Interfaces */

interface AbilityBonus extends APIResource {
  bonus: number
}

interface Action {
  name: string
  desc: string
  usage?: ActionUsage
}

interface ActionUsage {
  type: string
  times: number
}

interface ActionOption extends Action {
  options: Choice
}

interface ActionReference {
  name: Action['name']
  count?: number
}

interface ArmorClass {
  base: number
  dex_bonus: boolean
  max_bonus: number
}

interface AttackAction extends Action {
  attack_bonus: number
  dc: DifficultyClass
  damage: Damage
}

interface Choice {
  choose: number
  type: string
  from: any[] | APIResource
}

interface Cost {
  quantity: number
  unit: CurrencyUnit
}

interface Damage {
  damage_dice: string
  damage_type: APIResource
}

interface DifficultyClass {
  dc_type: APIResource
  dc_value: number
  success_type: string
}

interface EquipmentStack {
  equipment: APIResource
  quantity: number
}

interface LevelledSpellDamage {
  damage_type: Damage['damage_type']
  damage_at_slot_level: { [key: string]: string }
}

interface MonsterSpeed {
  [key: string]: string
}

interface ProficiencyBonus extends APIResource {
  value: number
}

interface Range {
  normal: number
  long: number | null
}

interface SpecialAbility {
  name: string
  desc: string
  dc?: DifficultyClass
}

interface SpellCastingInfo {
  name: string
  desc: string[]
}

interface VehicleSpeed {
  quantity: number
  unit: string
}
