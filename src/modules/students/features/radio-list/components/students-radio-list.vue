<template>
    <div class="d-flex flex-column gap-3">
        <StudentsSearchInput v-model="studentListStore.search"/>
        <span v-if="studentListStore.isLoading">Carregando...</span>
        <div v-else>
            <div v-for="student in reducedStudentsList" :key="student.id">
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="studentId" :value="student.id" :id="student.id" v-model="studentListStore.selectedStudentId">
                    <label class="form-check-label" :for="student.id">
                        <div class="d-flex flex-column">
                            <p class="m-0">{{ student.name }}</p>
                            <p class="cpf-label m-0">{{ student.cpf }}</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue';

import { useStudentsListStore } from '@/store';

import StudentsSearchInput from './students-search-input.vue';

const studentListStore = useStudentsListStore()
const reducedStudentsList = computed(() => studentListStore.students.slice(0, 4))

watchEffect(() => {
    studentListStore.getStudents({
        name: studentListStore.search,
    })
})

</script>

<style scoped>
.cpf-label {
    color: var(--color-gray-600);
    font-size: 0.75rem;
    vertical-align: middle;
}
</style>