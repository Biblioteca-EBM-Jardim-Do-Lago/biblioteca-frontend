import type { GetBooks } from '@/modules/books'
import type { DBData } from '@/common'

export type GetStudent = DBData<{
  name: string
  cpf: string
  checkedOutBooks: Array<GetBooks>
}>

export type GetStudents = Array<GetStudent>

export type GetStudentsParams = Partial<GetStudent>
