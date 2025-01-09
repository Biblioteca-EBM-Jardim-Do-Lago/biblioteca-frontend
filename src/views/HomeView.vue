<template>
  <CheckoutModal />
  <PageLayout>
    <PageTitle>
      Bem Vindo (a) Novamente
    </PageTitle>
    <DividerLine />
    <PageSectionLayout>
      <PageSectionTitle>
        Livros
      </PageSectionTitle>
      
      <BooksTable />
    </PageSectionLayout>
    <!-- <DividerLine />
    <PageSectionLayout>
      <PageSectionTitle>
        Cadastros
      </PageSectionTitle>
      <CardGroup>
        <CardLayout>
          <CardContent>
            <CardTitle>
              Alunos
            </CardTitle>
            <CardDescription>
              Cadastre novos alunos ou importe a partir de uma planilha
            </CardDescription>
          </CardContent>
          <CardFooter>
            <CardButton>
              Novo aluno
            </CardButton>
            <CardButton>
              Importar alunos
            </CardButton>
          </CardFooter>
        </CardLayout>
        <CardLayout>
          <CardContent>
            <CardTitle>
              Livros
            </CardTitle>
            <CardDescription>
              Cadastre novos livros ou importe a partir de uma planilha
            </CardDescription>
          </CardContent>
          <CardFooter>
            <button data-bs-target="#new-book-modal" data-bs-toggle="modal">
              Novo livro
            </button>
            <CardButton>
              Importar livros
            </CardButton>
          </CardFooter>
        </CardLayout>
      </CardGroup>
    </PageSectionLayout> -->
  </PageLayout>
</template>

<script setup lang="ts">
// import CardButton from '@/common/components/card/card-button.vue';
// import CardContent from '@/common/components/card/card-content.vue';
// import CardDescription from '@/common/components/card/card-description.vue';
// import CardFooter from '@/common/components/card/card-footer.vue';
// import CardGroup from '@/common/components/card/card-group.vue';
// import CardLayout from '@/common/components/card/card-layout.vue';
// import CardTitle from '@/common/components/card/card-title.vue';
import DividerLine from '@/common/components/divider-line.vue';
import PageLayout from '@/common/components/page-layout.vue';
import PageSectionLayout from '@/common/components/page-section-layout.vue';
import PageSectionTitle from '@/common/components/page-section-title.vue';
import PageTitle from '@/common/components/page-title.vue';
import BooksTable from '@/modules/books/features/list/components/books-table.vue';
import CheckoutModal from '@/modules/checkout/features/checkout/components/checkout-modal.vue';
</script>