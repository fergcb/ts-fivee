import Equipment from './Equipment'
import { ArmorData } from '../structures'

export default class Armor extends Equipment<ArmorData> {

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