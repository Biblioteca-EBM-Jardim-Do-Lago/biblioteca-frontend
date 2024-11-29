<template>
	<BookSearchInput />
	<span v-if="isLoading">Carregando...</span>
	<span v-else-if="isError">Ocorreu um erro</span>
    <table v-else class="table">
        <thead class="table-secondary">
            <tr>
            <th scope="col">Nº</th>
            <th scope="col">Nome</th>
            <th scope="col">Situação</th>
            </tr>
        </thead>
        <tbody v-for="(book, index) in books" :key="book._id"> 
            <tr :class="index % 2 === 0 ? '': 'table-light'">
            <th scope="row">{{ book.code }}</th>
            <td>{{ book.name }}</td>
            <td><BookStatusTag :status="book.status"/></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import BookSearchInput from './book-search-input.vue';
import BookStatusTag from './books-status-tag.vue';

import { useQueryGetAllBooks } from '../../../services';

const { data: books, isLoading, isError } = useQueryGetAllBooks()
</script>

<style>
table {
    overflow:hidden;
    border-collapse:separate;
    -webkit-border-radius: 0.5rem;
       -moz-border-radius: 0.5rem;
            border-radius: 0.5rem;
}
</style>