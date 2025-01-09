<template>
    <div class="modal fade" id="uncheckoutBookModal" tabindex="-1" aria-labelledby="uncheckoutBookModalLabel" aria-hidden="true" data-bs-autohide="false" ref="modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <div class="d-flex gap-3 align-items-center">
                    <h6 class="modal-title" id="uncheckoutBookModalLabel">Devolver "{{ bookListStore.selectedBook.name }}"?</h6>
                    <p class="code-label">#{{ bookListStore.selectedBook.code }}</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Tem certeza que deseja devolver?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger" @click="handleUncheckout">
                    <span v-if="checkoutBookStore.isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Devolver
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Modal } from 'bootstrap'

import { useBookListStore, useCheckoutBookStore, useStudentsListStore } from '@/store';
import { onMounted, ref, watch } from 'vue';

const bookListStore = useBookListStore()
const studentListStore = useStudentsListStore()
const checkoutBookStore = useCheckoutBookStore()

const uncheckoutModal = ref({} as Modal)

onMounted(() => {
    uncheckoutModal.value = new Modal(document.getElementById('uncheckoutBookModal') as HTMLDivElement)
})

const handleUncheckout = () => {
    checkoutBookStore.uncheckout(
        bookListStore.selectedBook.id
    )
}

watch(() => checkoutBookStore.isSuccess, () => {
    if(!checkoutBookStore.isSuccess) return
    
    bookListStore.getBooks()
    uncheckoutModal.value.hide()
})

</script>

<style scoped>
.code-label {
    color: var(--color-gray-600);
    font-size: 0.75rem;
    vertical-align: middle;
}
</style>