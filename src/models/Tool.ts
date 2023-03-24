import { Equipment, EquipmentData } from './Equipment'

export interface ToolData extends EquipmentData {
  tool_category: ToolCategory
  desc?: string[]
}

export class Tool extends Equipment<ToolData> {
  get toolCategory (): ToolData['tool_category'] {
    return this.data.tool_category
  }

  get desc (): ToolData['desc'] {
    return this.data.desc
  }
}
