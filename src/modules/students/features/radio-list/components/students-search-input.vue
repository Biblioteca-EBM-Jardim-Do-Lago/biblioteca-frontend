<template>
    <input class="form-control border" type="text" placeholder="Procurar por nome ou CPF" v-model="model">
</template>

<script lang="ts" setup>
const model = defineModel()
</script>