<template>
    <div class="d-flex gap-3">
        <BookSearchInput v-model="bookListStore.search"/>
        <BooksFilter />
    </div>
	<span v-if="bookListStore.isLoading">Carregando...</span>
	<span v-else-if="bookListStore.isError">Ocorreu um erro</span>
    <div class="table-container" v-else>
        <table>
            <thead>
                <tr>
                    <th scope="col" class="w-100">Nome</th>
                </tr>
            </thead>
            <tbody v-for="book in bookListStore.books" :key="book.id">
                <div class="dropdown w-100">
                    <tr class="100%" role="button" @click="bookListStore.setSelectedBook(book)" id="actionMenu" data-bs-toggle="dropdown" aria-expanded="false">
                        <td>{{ book.name }}</td>
                        <td><BookStatusTag :status="book.status"/></td>
                    </tr>
                    <ul class="dropdown-menu" aria-labelledby="actionMenu">
                        <li><h6 class="dropdown-header">Ações</h6></li>
                        <li v-if="bookListStore.selectedBook.status === 'AVAILABLE'"><button class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#checkoutBookModal">Emprestar</button></li>
                        <li v-if="bookListStore.selectedBook.status === 'CHECKEDOUT' || bookListStore.selectedBook.status === 'DELAYED'"><button class="dropdown-item" type="button">Devolver</button></li>
                    </ul>
                </div>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';

import { useBookListStore } from '@/store';

import BookStatusTag from './books-status-tag.vue';
import BooksFilter from './books-filter.vue';
import BookSearchInput from './book-search-input.vue';

const bookListStore = useBookListStore()

watchEffect(() => {
    bookListStore.getBooks({name: bookListStore.search, status: bookListStore.booksStatus})
})

</script>

<style>
table {
    width: 100%;
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
    padding: 0.75rem 1rem;
    width: 100%;
}

th {
    background-color: var(--color-gray-200);
    padding: 1rem;
    font-size: 1rem;
    width: 100%;
}

tbody {
    cursor: pointer;
    width: 100%;
}

tbody:nth-child(odd) {
    background-color: var(--color-gray-100);
    -webkit-background-color: var(--color-gray-100);
       -moz-background-color: var(--color-gray-100);
            background-color: var(--color-gray-100);
}

tbody:nth-child(odd):hover {
    background-color: var(--color-purple-100);
    -webkit-background-color: var(--color-purple-100);
       -moz-background-color: var(--color-purple-100);
            background-color: var(--color-purple-100);
}

tbody:nth-child(even) {
    background-color: var(--color-white);
    -webkit-background-color: var(--color-white);
       -moz-background-color: var(--color-white);
            background-color: var(--color-white);
}

tbody:nth-child(even):hover {
    background-color: var(--color-purple-100);
    -webkit-background-color: var(--color-purple-100);
       -moz-background-color: var(--color-purple-100);
            background-color: var(--color-purple-100);
}

.table-container {
    border: 1px solid var(--color-gray-300);
    border-radius: 0.5rem;
}
</style>