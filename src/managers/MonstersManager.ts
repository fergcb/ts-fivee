import ResourceManager from './ResourceManager'
import { Fivee } from '../fivee'
import { MonsterData } from '../structures'
import { Monster } from '../models'

export default class MonstersManager extends ResourceManager<Monster, MonsterData> {
  constructor (api: Fivee) {
    super(api, '/api/monsters/')
  }

  protected expand (data: MonsterData): Monster {
    return new Monster(this.api, data)
  }
}
