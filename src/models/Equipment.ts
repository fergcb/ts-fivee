import Model from './Model'
import { EquipmentCategoryData } from './EquipmentCategory'

export interface EquipmentData extends BaseData {
  equipment_category: APIResource
  cost: Cost
  weight: number
}

export class Equipment<T extends EquipmentData = EquipmentData> extends Model<T> {
  get equipmentCategory (): EquipmentData['equipment_category'] {
    return this.data.equipment_category
  }

  public async fetchEquipmentCategory (): Promise<EquipmentCategoryData> {
    return await this.fetchCachable<EquipmentCategoryData>('equipment_category')
  }

  get cost (): EquipmentData['cost'] {
    return this.data.cost
  }

  get weight (): EquipmentData['weight'] {
    return this.data.weight
  }
}
