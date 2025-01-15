import type { DBData } from '@/common'
import type { GetBookStatus } from './status'
import type { GetStudent } from '@/modules/students'

export type GetBooks = DBData<{
  name: string
  code: string
  checkedOut: boolean
  status: GetBookStatus
  returnDate?: string
  checkedOutBy?: Omit<GetStudent, 'checkedOutBooks'>
}>

export type GetBooksParams = Partial<GetBooks>
