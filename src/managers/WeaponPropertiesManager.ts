import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { WeaponProperty } from '../models'
import { WeaponPropertyData } from '../structures'

export default class WeaponPropertiesManager extends ResourceManager<WeaponProperty, WeaponPropertyData> {

    constructor (api: Fivee) {
        super(api, '/api/weapon-properties/')
    }

    protected expand (data: WeaponPropertyData): WeaponProperty {
        return new WeaponProperty(this.api, data)
    }

}