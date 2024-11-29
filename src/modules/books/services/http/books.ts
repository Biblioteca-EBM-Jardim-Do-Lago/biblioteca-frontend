import type { HttpProviderInstance } from '@/providers'
import type { GetBooks, GetBooksParams } from '../..'

export default (provider: HttpProviderInstance) => ({
  getAll: async (params?: GetBooksParams) => {
    const response = await provider.get<Array<GetBooks>>(`/books`, { params })
    return response.data
  }
})
