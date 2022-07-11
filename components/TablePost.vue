<template>
  <div>
    <b-table :data="posts">
      <b-table-column label="Id do usuário" field="userId" v-slot="post">
        {{ post.row.userId }}
      </b-table-column>
      <b-table-column label="Id do Post" field="id" v-slot="post">
        {{ post.row.id }}
      </b-table-column>
      <b-table-column label="Título do Post" field="title" v-slot="post">
        {{ post.row.title }}
      </b-table-column>
      <b-table-column
        label="Avaliação e observações"
        field="body"
        v-slot="post"
      >
        {{ post.row.body }}
      </b-table-column>
      <b-table-column v-slot="post">
        <b-button
          @click="emitModal(post.row)"
          type="is-info "
          icon-right="pen"
          class="container"
        ></b-button>
        <b-button
          @click="deletePhoto"
          type="is-danger "
          icon-right="delete"
          class="container"
        ></b-button>
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "TablePost",

  props: {
    posts: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      columns: [],
    };
  },

  methods: {
    emitModal(info) {
      this.$emit("open-modal", info);
    },

    deletePhoto() {
      this.$store
        .dispatch("posts/deletePosts")
        .then(() => {
          this.$buefy.dialog.confirm({
            title: "Deletando Post",
            message: "Deseja Realmente deletar esta Post ?",
            confirmText: "Deletar Post",
            type: "is-danger",
            hasIcon: true,
            onConfirm: () =>
              this.$buefy.toast.open("Post deletada com sucesso!"),
          });
        })
        .catch(() => {
          this.$buefy.notification.open(
            "Erro ao enviar, tente novamente mais tarde"
          );
        });
    },
  },
};
</script>

<style></style>
