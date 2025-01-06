import type { GetBooks, GetBooksParams } from '../..'
import { HTTPMethods, type IHTTPClient } from '@/infra/http/contract'

export default (client: IHTTPClient) => ({
  getAll: async (params?: GetBooksParams) => {
    const response = await client.sendRequest<Array<GetBooks>>({
      method: HTTPMethods.GET,
      endpoint: '/books',
      params
    })
    return response
  }
})
