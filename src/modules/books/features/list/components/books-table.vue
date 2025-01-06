<template>
	<BookSearchInput v-model="booksSearchStore.search"/>
	<span v-if="booksSearchStore.isLoading">Carregando...</span>
	<span v-else-if="booksSearchStore.isError">Ocorreu um erro</span>
    <div class="table-container" v-else>
        <table>
            <thead>
                <tr>
                    <th scope="col" class="row-with-checkbox"><input class="form-check-input" type="checkbox" value=""> Nº</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Situação</th>
                </tr>
            </thead>
            <tbody v-for="book in booksSearchStore.books" :key="book._id"> 
                <tr>
                    <td scope="row" class="row-with-checkbox">
                        <input class="form-check-input" type="checkbox" value="">
                        <span class="code-text">{{ book.code }}</span>
                    </td>
                    <td>{{ book.name }}</td>
                    <td><BookStatusTag :status="book.status"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useBooksSearchStore } from '@/store';

import BookStatusTag from './books-status-tag.vue';
import { watchEffect } from 'vue';
import BookSearchInput from './book-search-input.vue';

const booksSearchStore = useBooksSearchStore()

watchEffect(() => {
    booksSearchStore.getBooks(booksSearchStore.search)
})

</script>

<style>
table {
    overflow:hidden;
    -webkit-border-radius: 0.5rem;
       -moz-border-radius: 0.5rem;
            border-radius: 0.5rem;
}

tr {
    width: 100%;
}

td {
    background-color: transparent;
    width: 100%;

    padding: 0.75rem 1rem;
}

th {
    background-color: var(--color-gray-200);
    padding: 1rem;
    
    font-size: 1rem;
    width: 100%;
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

.row-with-checkbox {
    display: flex;
    gap: 1rem;
    width: 100%;
}

.code-text {
    width: max-content;
    font-weight: bold;
}
</style>