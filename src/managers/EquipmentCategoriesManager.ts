import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { EquipmentCategory, EquipmentCategoryData } from '../models'

export default class EquipmentCategoriesManager extends ResourceManager<EquipmentCategory, EquipmentCategoryData> {
  constructor (api: Fivee) {
    super(api, '/api/equipment-categories/')
  }

  protected expand (data: EquipmentCategoryData): EquipmentCategory {
    return new EquipmentCategory(this.api, data)
  }
}
