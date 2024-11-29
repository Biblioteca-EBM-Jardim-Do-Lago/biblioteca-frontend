<script setup lang="ts">
import type { GetBookStatus } from '@/modules/books';

const props = defineProps<{ status: GetBookStatus }>();

const bookStatusTagVariantMap: Record<GetBookStatus, {name: string, className: string}> = {
    CHECKEDOUT: {
        name: 'Emprestado',
        className: 'badge bg-warning'
    },
    AVAILABLE: {
        name: 'Disponível',
        className: 'badge bg-success'
    },
    DELAYED: {
        name: 'Atrasado',
        className: 'badge bg-danger'
    }
}

const booksStatusTagProps = bookStatusTagVariantMap[props.status]
</script>

<template>
    <span :class="booksStatusTagProps.className">{{ booksStatusTagProps.name }}</span>
</template>