import { BaseData, APIResource } from '../structures'
import { Fivee } from '../fivee';

export default abstract class Model<T extends BaseData = BaseData> {

    protected cache: Map<keyof T, any>

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

    private isReference (value: any): value is string | APIResource {
        return typeof value === 'string' || 'url' in value
    }

    private isReferenceArray (value: any): value is (string | APIResource)[] {
        return Array.isArray(value) && value.every(this.isReference)
    }

    protected async fetchCachable<U extends BaseData> (key: keyof T): Promise<U> {
        if (this.cache.has(key)) return this.cache.get(key) as U
        return new Promise<U>((resolve, reject) => {
            const ref = this.data[key]
            if (this.isReference(ref)) {
                this.api.resolveResource<U>(ref)
                    .then(resource => {
                        this.cache.set(key, resource)
                        resolve(resource)
                    })
            }
        })
    }

    protected async fetchCachables<U extends BaseData> (key: keyof T): Promise<U[]> {
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