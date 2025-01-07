<template>
    <button class="btn btn-link" v-bind="$attrs">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import { defineProps } from 'vue';

interface CardButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {}

defineProps<CardButtonProps>()
</script>

<style scoped>
button {
    padding: 0;
}
</style>