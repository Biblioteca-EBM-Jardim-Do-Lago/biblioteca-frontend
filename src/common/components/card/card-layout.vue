<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    border-radius: 0.75rem;
    border: 1px solid #DEE2E6;
    width: 100%;
}
</style>