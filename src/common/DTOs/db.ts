export type DBData<T> = T & {
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}
