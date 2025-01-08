<template>
    <div class="btn-group" role="group" aria-label="Filtros">
        <button type="button" :class="checkButtonStyle('')" @click="handleFilter('')">Todos</button>
        <button type="button" :class="checkButtonStyle('AVAILABLE')" @click="handleFilter('AVAILABLE')">Disponíveis</button>
        <button type="button" :class="checkButtonStyle('CHECKEDOUT')" @click="handleFilter('CHECKEDOUT')">Emprestados</button>
        <button type="button" :class="checkButtonStyle('DELAYED')" @click="handleFilter('DELAYED')">Atrasados</button>
    </div>
</template>

<script setup lang="ts">
import type { GetBookStatus } from '@/modules/books/services';
import { useBookListStore } from '@/store';

const bookListStore = useBookListStore()

const checkButtonStyle = (status:  GetBookStatus | '') => {
    if(bookListStore.booksStatus === status) return 'btn btn-primary'

    return 'btn btn-light'
}

const handleFilter = (status: GetBookStatus | '') => {
    bookListStore.setStatus(status)
}
</script>