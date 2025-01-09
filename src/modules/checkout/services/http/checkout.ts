import type { GetStudents } from '@/modules/students'
import { HTTPMethods, type IHTTPClient } from '@/infra/http/contract'

export default (client: IHTTPClient) => ({
  checkout: async (studentId: string, bookId: string) => {
    const response = await client.sendRequest<GetStudents>({
      method: HTTPMethods.POST,
      endpoint: '/checkout',
      params: {
        studentId,
        bookId
      }
    })
    return response
  }
})
