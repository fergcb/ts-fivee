import Model from './Model'
import { EquipmentCategoryData, EquipmentData } from '../structures'


export default class EquipmentCategory extends Model<EquipmentCategoryData> {

    get equipment (): EquipmentCategoryData['equipment'] {
        return this.data.equipment
    }

    public async fetchEquipment (): Promise<EquipmentData[]> {
        return this.fetchCachables<EquipmentData>('equipment')
    }

}