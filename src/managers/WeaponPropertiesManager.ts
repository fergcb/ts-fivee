import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { WeaponProperty, WeaponPropertyData } from '../models'

export default class WeaponPropertiesManager extends ResourceManager<WeaponProperty, WeaponPropertyData> {
  constructor (api: Fivee) {
    super(api, '/api/weapon-properties/')
  }

  protected expand (data: WeaponPropertyData): WeaponProperty {
    return new WeaponProperty(this.api, data)
  }
}
