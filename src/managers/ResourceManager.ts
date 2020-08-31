import { APIResource, BaseData } from '../structures'
import { Fivee } from '../fivee'
import { CacheMissError } from '../errors'
import Model from '../models/Model'

export default abstract class ResourceManager<T extends Model<U>, U extends BaseData> {

    private cache: Map<BaseData['index'], T>
    private references: Map<BaseData['index'], APIResource>

    constructor (
        protected api: Fivee,
        private listURL: string
    ) {
        this.cache = new Map<BaseData['index'], T>()
        this.references = new Map<BaseData['index'], APIResource>()
    }

    protected abstract expand (resource: U): T

    public has (index: BaseData['index']): boolean {
        return this.cache.has(index)
    }

    public get (index: BaseData['index']): T {
        if (this.cache.get(index))
            return this.cache.get(index) as T
        
        throw new CacheMissError(this.api, this.listURL, index)
    }

    public async getReferences (): Promise<Map<BaseData['index'], APIResource>>{
        if (this.references.size > 0) {
            return this.references
        }
        else {
            return new Promise<Map<BaseData['index'], APIResource>>((resolve, reject) => {
                this.api.resolveCollection(this.listURL)
                    .then(res => {
                        res.forEach((reference) => {
                            this.references.set(reference.index, reference)
                        })
                        resolve(this.references)
                    })
                    .catch(reject)
            })
        }
    }

    public async fetch (index: string | number): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            if (this.has(index)) {
                resolve(this.get(index))
            }
            else {
                this.getReferences()
                    .then(refs => {
                        const res = refs.get(index)
                        if (res !== undefined) {
                            this.api.resolveResource<U>(res)
                                .then(res => resolve(this.expand(res)))
                                .catch(reject)
                        }
                    })
            }
        })
    }

    public async fetchAll (): Promise<T[]> {
        return new Promise<T[]>((resolve, reject) => {
            this.getReferences()
                .then(refs => {
                    for (const index of refs.keys()) {
                        this.fetch(index)
                            .then(() => {
                                if (this.cache.size === refs.size) {  
                                    resolve(Array.from(this.cache.values()))
                                }
                            })
                            .catch(reject)
                    }
                })
        })
    }

}