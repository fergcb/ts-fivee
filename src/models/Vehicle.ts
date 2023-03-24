import { Equipment, EquipmentData } from './Equipment'

export interface VehicleData extends EquipmentData {
  vehicle_category: VehicleCategory
  desc?: string[]
  speed?: VehicleSpeed
}

export class Vehicle extends Equipment<VehicleData> {
  get vehicleCategory (): VehicleData['vehicle_category'] {
    return this.data.vehicle_category
  }

  get desc (): VehicleData['desc'] {
    return this.data.desc
  }

  get speed (): VehicleData['speed'] {
    return this.data.speed
  }
}
