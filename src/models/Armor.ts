import { Equipment, EquipmentData } from './Equipment'

export interface ArmorData extends EquipmentData {
  armor_category: ArmorCategory
  armor_class: ArmorClass
  str_minimum: number
  stealth_disadvantage: boolean
}

export class Armor extends Equipment<ArmorData> {
  get armorCategory (): ArmorData['armor_category'] {
    return this.data.armor_category
  }

  get armorClass (): ArmorData['armor_class'] {
    return this.data.armor_class
  }

  get strMinimum (): ArmorData['str_minimum'] {
    return this.data.str_minimum
  }

  get stealthDisadvantage (): ArmorData['stealth_disadvantage'] {
    return this.data.stealth_disadvantage
  }
}
