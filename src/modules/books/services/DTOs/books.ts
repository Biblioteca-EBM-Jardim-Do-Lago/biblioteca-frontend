import type { DBData } from '@/common'
import type { GetBookStatus } from './status'

export type GetBooks = DBData<{
  name: string
  code: string
  checkedOut: boolean
  status: GetBookStatus
  returnDate?: string
}>

export type GetBooksParams = Partial<GetBooks>
