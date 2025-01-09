export type DBData<T> = T & {
  id: string
  createdAt: string
  updatedAt: string
  __v: number
}
