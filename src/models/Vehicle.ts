import Equipment from './Equipment'
import { VehicleData } from '../structures'

export default class Vehicle extends Equipment<VehicleData> {
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
