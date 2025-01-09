import type { GetStudent, GetStudents, GetStudentsParams } from '..'
import { HTTPMethods, type IHTTPClient } from '@/infra/http/contract'

export default (client: IHTTPClient) => ({
  getAll: async (params?: GetStudentsParams) => {
    const response = await client.sendRequest<Array<GetStudent>>({
      method: HTTPMethods.GET,
      endpoint: '/students',
      params
    })
    return response
  }
})
