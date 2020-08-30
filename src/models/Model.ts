import { BaseData, APIResource } from '../structures'
import { Fivee } from '../fivee';

export default abstract class Model<T extends BaseData = BaseData> {

    private cache: Map<keyof T, BaseData[]>

    constructor (
        protected api: Fivee,
        protected data: T
    ) {
        this.cache = new Map()
    }

    get index (): BaseData['index'] {
        return this.data.index
    }

    get url (): BaseData['url'] {
        return this.data.url
    }

    private isReferenceArray (value: any): value is (string | APIResource)[] {
        return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'string' || 'url' in value[0])
    }

    protected async fetchCachable<U extends BaseData> (key: keyof T): Promise<U[]> {
        if (this.cache.has(key)) return this.cache.get(key) as U[]
        return new Promise<U[]>((resolve, reject) => {
            const refs = this.data[key]
            if (this.isReferenceArray(refs)) {
                this.api.resolveResources<U>(refs)
                .then(resources => {
                    this.cache.set(key, resources)
                    resolve(resources)
                })
                .catch(reject)
            }
            else reject(new TypeError(`Model.data.${key} is not an array of references.`))
        })
    }

}