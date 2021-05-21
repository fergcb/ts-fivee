import ResourceManager from './ResourceManager'
import { Equipment, Gear, Armor, Tool, Weapon, Vehicle } from '../models'
import { EquipmentData } from '../structures'
import { Fivee } from '../fivee'

export default class EquipmentManager extends ResourceManager<Equipment, EquipmentData> {
  constructor (api: Fivee) {
    super(api, '/api/equipment')
  }

  protected expand (resource: EquipmentData): Equipment {
    if ('armor_category' in resource) {
      return new Armor(this.api, resource) as Equipment
    }

    if ('gear_category' in resource) {
      return new Gear(this.api, resource) as Equipment
    }

    if ('tool_category' in resource) {
      return new Tool(this.api, resource) as Equipment
    }

    if ('vehicle_category' in resource) {
      return new Vehicle(this.api, resource) as Equipment
    }

    if ('weapon_category' in resource) {
      return new Weapon(this.api, resource) as Equipment
    }

    return new Equipment(this.api, resource)
  }
}
