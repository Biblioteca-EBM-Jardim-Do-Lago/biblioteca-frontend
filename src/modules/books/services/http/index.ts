import { HTTPClient } from '@/infra/http/httpClient'
import Books from './books'

const httpClient = HTTPClient.create()

export default {
  books: Books(httpClient)
}
