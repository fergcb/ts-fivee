import { BaseData, APIResource } from '../structures'
import { Fivee } from '../fivee'

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

  get name (): BaseData['name'] {
    return this.data.name
  }

  get url (): BaseData['url'] {
    return this.data.url
  }

  private isReference (value: any): value is string | APIResource {
    return typeof value === 'string' || 'url' in value
  }

  private isReferenceArray (value: any): value is Array<string | APIResource> {
    return Array.isArray(value) && value.every(this.isReference)
  }

  protected async fetchCachable<U extends BaseData> (key: keyof T): Promise<U> {
    if (this.cache.has(key)) return this.cache.get(key)
    const ref = this.data[key]
    if (!this.isReference(ref)) {
      throw TypeError(`Value at key '${key as string}' of document '${this.index}' is not an APIReference.`)
    }
    const res = await this.api.resolveResource<U>(ref)
    this.cache.set(key, res)
    return res
  }

  protected async fetchCachables<U extends BaseData> (key: keyof T): Promise<U[]> {
    if (this.cache.has(key)) return this.cache.get(key)
    const refs = this.data[key]
    if (!this.isReferenceArray(refs)) {
      throw TypeError(`Value at key '${key as string}' of document '${this.index}' is not an APIReferenceList.`)
    }
    const resources = await this.api.resolveResources<U>(refs)
    this.cache.set(key, resources)
    return resources
  }
}
