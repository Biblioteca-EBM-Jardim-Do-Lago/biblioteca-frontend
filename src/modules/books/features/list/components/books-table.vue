<template>
    <div class="d-flex gap-3">
        <BookSearchInput v-model="booksSearchStore.search"/>
        <BooksFilter />
    </div>
	<span v-if="booksSearchStore.isLoading">Carregando...</span>
	<span v-else-if="booksSearchStore.isError">Ocorreu um erro</span>
    <div class="table-container" v-else>
        <table>
            <thead>
                <tr>
                    <th scope="col" class="w-100">Nome</th>
                    <th scope="col" class="w-100">Situação</th>
                </tr>
            </thead>
            <tbody v-for="book in booksSearchStore.books" :key="book._id"> 
                <tr>
                    <td>{{ book.name }}</td>
                    <td><BookStatusTag :status="book.status"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';

import { useBooksSearchStore } from '@/store';

import BookStatusTag from './books-status-tag.vue';
import BooksFilter from './books-filter.vue';
import BookSearchInput from './book-search-input.vue';

const booksSearchStore = useBooksSearchStore()

watchEffect(() => {
    booksSearchStore.getBooks({name: booksSearchStore.search, status: booksSearchStore.booksStatus})
})

</script>

<style>
table {
    overflow:hidden;
    -webkit-border-radius: 0.5rem;
       -moz-border-radius: 0.5rem;
            border-radius: 0.5rem;
}

td {
    background-color: transparent;
    padding: 0.75rem 1rem;
}

th {
    background-color: var(--color-gray-200);
    padding: 1rem;
    font-size: 1rem;
}

tbody:nth-child(odd) {
    background-color: var(--color-gray-100);
    -webkit-background-color: 0.5rem;
       -moz-background-color: 0.5rem;
            background-color: 0.5rem;
}

.table-container {
    border: 1px solid var(--color-gray-300);
    border-radius: 0.5rem;
}
</style>