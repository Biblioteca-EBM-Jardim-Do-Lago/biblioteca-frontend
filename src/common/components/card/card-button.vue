<template>
    <button class="btn btn-link" v-bind="$attrs">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import { defineProps } from 'vue';

defineProps<ButtonHTMLAttributes>()
</script>

<style scoped>
button {
    padding: 0;
}
</style>