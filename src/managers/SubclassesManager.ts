import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { Subclass } from '../models'
import { SubclassData } from '../structures'

export default class SubclassManager extends ResourceManager<Subclass, SubclassData> {

    constructor (api: Fivee) {
        super(api, '/api/subclasses/')
    }

    protected expand (data: SubclassData): Subclass {
        return new Subclass(this.api, data)
    }

}