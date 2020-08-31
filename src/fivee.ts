import { BaseData, FiveeOptions, APIResource } from './structures'
import axios, { AxiosResponse } from 'axios'
import { NotFoundError } from './errors'
import { AbilityScoresManager, ClassesManager, RacesManager } from './managers'

const defaultOptions: FiveeOptions = {
    baseURL: 'https://www.dnd5eapi.co'
}

export function fivee (options: FiveeOptions = {}): Fivee {
    return new Fivee(options)
}

export class Fivee {

    public options: FiveeOptions
    public races: RacesManager
    public classes: ClassesManager
    public abilityScores: AbilityScoresManager

    constructor(options: FiveeOptions = {}) {
        this.options = Object.assign(defaultOptions, options)

        this.abilityScores = new AbilityScoresManager(this)
        this.classes = new ClassesManager(this)
        this.races = new RacesManager(this)
    }

    private extractReferenceURL(reference: string | APIResource): string {
        return typeof reference === 'string' ? reference : reference.url
    }

    async getResource(reference: string | APIResource): Promise<AxiosResponse> {
        const resourceURL = this.extractReferenceURL(reference),
              baseURL = this.options.baseURL
        return axios.get(baseURL + resourceURL)
    }

    async resolveResource<T extends BaseData>(reference: string | APIResource): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.getResource(reference)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    if (err.response) {
                        if (err.response.status === 404)
                            err = new NotFoundError(this, this.extractReferenceURL(reference))
                    }

                    reject(err)
                })
        })
    }

    async resolveResources<T extends BaseData>(references: Array<string | APIResource>): Promise<T[]> {
        return new Promise<T[]>((resolve, reject) => {
            let resolved = 0;
            const resources: T[] = [] 
            references.forEach((reference, index) => {
                this.resolveResource<T>(reference)
                    .then(res => {
                        resources[index] = res
                        if (++resolved === references.length) resolve(resources)
                    })
                    .catch(reject)
            })
        })
    }

    async resolveCollection(reference: string | APIResource): Promise<APIResource[]> {
        return new Promise<APIResource[]>((resolve, reject) => {
            const url = this.options.baseURL + this.extractReferenceURL(reference)
            axios.get(url)
                .then(res => {
                    if (Array.isArray(res.data)) resolve(res.data)
                    else if ('results' in res.data) resolve(res.data.results)
                })
                .catch(reject)
        })
    }

}