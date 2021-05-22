import Collection from '@discordjs/collection'
import { APIResource, BaseData } from '../structures'
import { Fivee } from '../fivee'
import { CacheMissError, InvalidIndexError } from '../errors'
import Model from '../models/Model'

export default abstract class ResourceManager<T extends Model<U>, U extends BaseData> {
  private readonly cache: Collection<BaseData['index'], T>
  private readonly references: Collection<BaseData['index'], APIResource>

  constructor (
    protected api: Fivee,
    private readonly listURL: string
  ) {
    this.cache = new Collection<BaseData['index'], T>()
    this.references = new Collection<BaseData['index'], APIResource>()
  }

  protected abstract expand (resource: U): T

  public has (index: BaseData['index']): boolean {
    return this.cache.has(index)
  }

  public get (index: BaseData['index']): T {
    const value = this.cache.get(index)
    if (value !== undefined) return value

    throw new CacheMissError(this.api, this.listURL, index)
  }

  public async getReferences (): Promise<Collection<BaseData['index'], APIResource>> {
    if (this.references.size === 0) {
      const refs = await this.api.resolveCollection(this.listURL)
      for (const ref of refs) {
        this.references.set(ref.index, ref)
      }
    }
    return this.references
  }

  public async fetch (index: string | number): Promise<T> {
    if (this.has(index)) return this.get(index)
    const refs = await this.getReferences()
    const ref = refs.get(index)
    if (ref === undefined) throw new InvalidIndexError(this.api, index.toString(), this.listURL)
    const res = await this.api.resolveResource<U>(ref)
    const expanded = this.expand(res)
    this.cache.set(res.index, expanded)
    return expanded
  }

  public async fetchAll (): Promise<Collection<T['index'], T>> {
    const refs = await this.getReferences()
    const indexes = Array.from(refs.keys())
    await Promise.all(indexes.map(async index => await this.fetch(index)))
    return this.cache
  }
}
