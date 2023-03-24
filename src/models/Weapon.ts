import { Equipment, EquipmentData } from './Equipment'
import { WeaponPropertyData } from './WeaponProperty'

export interface WeaponData extends EquipmentData {
  weapon_category: WeaponCategory
  weapon_range: WeaponRange
  damage: Damage
  range: WeaponRange
  properties: APIResource[]
}

export class Weapon extends Equipment<WeaponData> {
  get weaponCategory (): WeaponData['weapon_category'] {
    return this.data.weapon_category
  }

  get weaponRange (): WeaponData['weapon_range'] {
    return this.data.weapon_range
  }

  get damage (): WeaponData['damage'] {
    return this.data.damage
  }

  get properties (): WeaponData['properties'] {
    return this.data.properties
  }

  public async fetchProperties (): Promise<WeaponPropertyData[]> {
    return await this.fetchCachables('properties')
  }
}
