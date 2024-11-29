import { httpProvider } from '@/providers'
import Books from './books'

export default {
  books: Books(httpProvider)
}
