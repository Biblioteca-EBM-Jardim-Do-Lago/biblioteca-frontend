<script setup lang="ts">
import type { GetBookStatus } from '@/modules/books';

const props = defineProps<{ status: GetBookStatus }>();

const bookStatusTagVariantMap: Record<GetBookStatus, {name: string, className: string}> = {
    CHECKEDOUT: {
        name: 'Emprestado',
        className: 'warning'
    },
    AVAILABLE: {
        name: 'Disponível',
        className: 'success'
    },
    DELAYED: {
        name: 'Atrasado',
        className: 'danger'
    }
}

const booksStatusTagProps = bookStatusTagVariantMap[props.status]
</script>

<template>
    <span :class="booksStatusTagProps.className">{{ booksStatusTagProps.name }}</span>
</template>

<style scoped>
span {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;

    font-weight: 500;
    font-size: 10px;
    line-height: 0.75rem;
}

span.success {
    color: var(--color-green-800);
    background-color: var(--color-green-100);
}

span.warning {
    color: var(--color-yellow-800);
    background-color: var(--color-yellow-100);
}

span.danger {
    color: var(--color-red-800);
    background-color: var(--color-red-100);
}
</style>