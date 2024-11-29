import { useQuery, type UndefinedInitialQueryOptions } from '@tanstack/vue-query'
import type { GetBooks, GetBooksParams } from '..'
import Services from '../http'

export const useQueryGetAllBooks = (
  input?: GetBooksParams,
  options?: UndefinedInitialQueryOptions<Array<GetBooks>, Error, Array<GetBooks>, any>
) => {
  return useQuery({
    ...options,
    queryKey: ['get_books', input],
    queryFn: () => Services.books.getAll(input)
  })
}
