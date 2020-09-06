import Equipment from './Equipment'
import { WeaponData, WeaponPropertyData } from '../structures'

export default class Weapon extends Equipment<WeaponData> {

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
        return this.fetchCachables('properties')
    }

}