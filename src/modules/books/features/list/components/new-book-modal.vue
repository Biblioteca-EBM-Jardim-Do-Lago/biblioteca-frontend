<template>
    <div class="modal-dialog modal-dialog-centered fade" id="new-book-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Novo(s) livro(s)</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex gap-3">
                <div>
                    <label for="book-number" class="form-label">N°</label>
                    <input type="text" class="form-control" id="book-number" placeholder="Informe o número do livro">
                </div>
                <div>
                    <label for="book-name" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="book-name" placeholder="Informe o nome do livro">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Cadastrar</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>