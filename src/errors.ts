import { Fivee } from './fivee'
// eslint-disable-next-line
import { resolve } from 'url'

export class FiveeError extends Error {
  constructor (public api: Fivee, message: string) {
    super(message)
  }
}

export class CacheMissError extends FiveeError {
  constructor (api: Fivee, url: string, index: string | number) {
    super(api, `Cache miss error: No entry with index '${index}' found in cache of '${api.resolveReferenceURL(url)}'`)
  }
}

export class NotFoundError extends FiveeError {
  constructor (api: Fivee, url: string) {
    super(api, `Not found error: No such API resource '${api.resolveReferenceURL(url)}'`)
  }
}

export class InvalidIndexError extends FiveeError {
  constructor (api: Fivee, index: string, collection: string) {
    super(api, `No such index '${index}' in collection at '${collection}'`)
  }
}

export class BadResponseError extends FiveeError {
  constructor (api: Fivee, url: string, details: string) {
    super(api, `Bad API response: ${details} from ${api.resolveReferenceURL(url)}}`)
  }
}
