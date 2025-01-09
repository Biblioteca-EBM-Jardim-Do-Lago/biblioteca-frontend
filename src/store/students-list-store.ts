import type { GetStudentsParams, GetStudents, GetStudent } from '@/modules/students'
import Service from '@/modules/students/services/http'
import { defineStore } from 'pinia'

interface UseStudentsListStoreState {
  search: string
  students: Array<GetStudent>
  isError: boolean
  isLoading: boolean
  selectedStudentId?: string
}

export const useStudentsListStore = defineStore('students-list-store', {
  state: () =>
    ({
      search: '',
      students: [] as GetStudents,
      isError: false,
      isLoading: false,
      selectedStudentId: undefined
    }) as UseStudentsListStoreState,
  actions: {
    async getStudents(params: Partial<GetStudentsParams>) {
      this.isLoading = true
      const response = await Service.students.getAll(params)
      this.students = response
      this.isLoading = false
    },
    setSelectedStudentId(studentId: string) {
      this.selectedStudentId = studentId
    }
  }
})
