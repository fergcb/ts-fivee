import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import Race from '../models/Race'
import { RaceData } from '../structures'

export default class RacesManager extends ResourceManager<Race, RaceData> {

    constructor (api: Fivee) {
        super(api, '/api/races/')
    }

    protected async expand (data: RaceData): Promise<Race> {
        return new Race(this.api, data)
    }

}