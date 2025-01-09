import { HTTPClient } from '@/infra/http/httpClient'
import Checkout from './checkout'

const httpClient = HTTPClient.create()

export default {
  checkout: Checkout(httpClient)
}
