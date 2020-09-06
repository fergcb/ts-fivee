import Equipment from './Equipment'
import { ToolData } from '../structures'

export default class Tool extends Equipment<ToolData> {
    
    get toolCategory (): ToolData['tool_category'] {
        return this.data.tool_category
    }

    get desc (): ToolData['desc'] {
        return this.data.desc
    }

}