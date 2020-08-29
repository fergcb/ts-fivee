import { BaseData } from '../structures'
import { Fivee } from '../fivee';

export default abstract class Model<T extends BaseData = BaseData> {

    constructor(
        protected api: Fivee,
        protected data: T
    ) {}

    get index(): BaseData['index'] {
        return this.data.index
    }

    get url(): BaseData['url'] {
        return this.data.url
    }

}