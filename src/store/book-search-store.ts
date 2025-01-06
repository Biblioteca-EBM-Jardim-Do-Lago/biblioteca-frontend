import { type GetBooks } from '@/modules/books'
import Service from '@/modules/books/services/http'
import { defineStore } from 'pinia'

export const useBooksSearchStore = defineStore('books-search-store', {
  state: () => ({
    search: '',
    books: [] as Array<GetBooks>,
    isError: false,
    isLoading: false
  }),
  actions: {
    async getBooks(search: string) {
      this.isLoading = true
      const response = await Service.books.getAll({ name: search })
      this.books = response
      this.isLoading = false
    }
  }
})
