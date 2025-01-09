import Service from '@/modules/checkout/services/http'
import { defineStore } from 'pinia'

export const useCheckoutBookStore = defineStore('checkout-book-store', {
  state: () => ({
    isLoading: false,
    isError: false,
    isSuccess: false
  }),
  actions: {
    async checkout(studentId: string, bookId: string) {
      this.isError = false
      this.isSuccess = false
      try {
        this.isLoading = true
        const response = await Service.checkout.checkout(studentId, bookId)
        if (response) this.isSuccess = true
      } catch (e) {
        this.isError = true
        this.isSuccess = false
      } finally {
        this.isLoading = false
      }
    }
  }
})
