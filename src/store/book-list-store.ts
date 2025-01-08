import { type GetBooks, type GetBooksParams, type GetBookStatus } from '@/modules/books'
import Service from '@/modules/books/services/http'
import { defineStore } from 'pinia'

export const useBookListStore = defineStore('books-search-store', {
  state: () => ({
    search: '',
    books: [] as Array<GetBooks>,
    isError: false,
    isLoading: false,
    booksStatus: '' as GetBookStatus,
    selectedBook: {} as GetBooks
  }),
  actions: {
    async getBooks(params: Partial<GetBooksParams>) {
      this.isLoading = true
      const response = await Service.books.getAll(params)
      this.books = response
      this.isLoading = false
    },
    setStatus(status: GetBookStatus | '') {
      this.booksStatus = status as GetBookStatus
    },
    setSelectedBook(book: GetBooks) {
      console.log(book)
      this.selectedBook = book
    }
  }
})
