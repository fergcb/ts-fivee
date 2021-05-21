import Equipment from './Equipment'
import { GearData, EquipmentCategoryData } from '../structures'

export default class Gear extends Equipment<GearData> {
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
