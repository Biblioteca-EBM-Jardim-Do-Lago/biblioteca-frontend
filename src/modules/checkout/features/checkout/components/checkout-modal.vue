<template>
    <div class="modal fade" id="checkoutBookModal" tabindex="-1" aria-labelledby="checkoutBookModalLabel" aria-hidden="true" data-bs-autohide="false" ref="modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <div class="d-flex gap-3 align-items-center">
                    <h6 class="modal-title" id="checkoutBookModalLabel">Emprestar "{{ bookListStore.selectedBook.name }}"?</h6>
                    <p class="code-label">#{{ bookListStore.selectedBook.code }}</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <StudentsRadioList />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary" @click="handleCheckout" :disabled="!studentListStore.selectedStudentId">
                    <span v-if="checkoutBookStore.isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Emprestar
                </button>
            </div>
            </div>
        </div>
    </div>
    <CheckoutSuccessToast />
</template>

<script setup lang="ts">
import StudentsRadioList from '@/modules/students/features/radio-list/components/students-radio-list.vue';
import CheckoutSuccessToast from './checkout-success-toast.vue';
import { Modal } from 'bootstrap'

import { useBookListStore, useCheckoutBookStore, useStudentsListStore } from '@/store';
import { onMounted, ref, watch } from 'vue';

const bookListStore = useBookListStore()
const studentListStore = useStudentsListStore()
const checkoutBookStore = useCheckoutBookStore()

const checkoutModal = ref({} as Modal)

onMounted(() => {
    checkoutModal.value = new Modal(document.getElementById('checkoutBookModal') as HTMLDivElement)
})

const handleCheckout = () => {
    if(!studentListStore.selectedStudentId) return
    
    checkoutBookStore.checkout(
        studentListStore.selectedStudentId,
        bookListStore.selectedBook.id
    )
}

watch(() => checkoutBookStore.isSuccess, () => {
    if(!checkoutBookStore.isSuccess) return
    
    bookListStore.getBooks()
    checkoutModal.value.hide()
})

</script>

<style scoped>
.code-label {
    color: var(--color-gray-600);
    font-size: 0.75rem;
    vertical-align: middle;
}
</style>