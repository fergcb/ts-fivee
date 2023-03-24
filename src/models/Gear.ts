import { Equipment, EquipmentData } from './Equipment'
import { EquipmentCategoryData } from './EquipmentCategory'

export interface GearData extends EquipmentData {
  gear_category: APIResource
  desc?: string[]
}

export class Gear extends Equipment<GearData> {
  get gearCategory (): GearData['gear_category'] {
    return this.data.gear_category
  }

  public async fetchGearCategory (): Promise<EquipmentCategoryData> {
    return await this.fetchCachable<EquipmentCategoryData>('gear_category')
  }

  get desc (): GearData['desc'] {
    return this.data.desc
  }
}
