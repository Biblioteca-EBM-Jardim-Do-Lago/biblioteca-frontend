import { HTTPClient } from '@/infra/http/httpClient'
import Students from './students'

const httpClient = HTTPClient.create()

export default {
  students: Students(httpClient)
}
