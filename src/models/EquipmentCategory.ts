import Model from './Model'
import { EquipmentData } from './Equipment'

export interface EquipmentCategoryData extends BaseData {
  equipment: APIResource[]
}

export class EquipmentCategory extends Model<EquipmentCategoryData> {
  get equipment (): EquipmentCategoryData['equipment'] {
    return this.data.equipment
  }

  public async fetchEquipment (): Promise<EquipmentData[]> {
    return await this.fetchCachables<EquipmentData>('equipment')
  }
}
