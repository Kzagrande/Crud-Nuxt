<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Formulário de Posts</p>

      <button type="button" class="delete" @click="$emit('close')" />
    </header>
    <section class="modal-card-body">
      <b-field label="Título do Post" type="">
        <b-input v-model="info.title" maxlength="30"></b-input>
      </b-field>

      <b-field label="Comentário do Post" type="">
        <b-input v-model="info.body"></b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Fechar" @click="$emit('close')" />
      <b-button
        v-if="Object.keys(info).length > 0"
        label="Atualizar"
        @click="updatePost()"
        type="is-primary"
      />
      <b-button v-else label="Criar" @click="savePost()" type="is-primary" />
    </footer>
    <b-loading v-model="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
export default {
  name: "PostForm",

  props: {
    info: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },

  created() {},

  methods: {
    savePost() {
      this.isLoading = true;
      this.$store
        .dispatch("posts/sendPosts")
        .then(() => {
          this.$buefy.notification.open("Seu Post foi salva");
        })
        .catch(() => {
          this.$buefy.notification.open(
            "Erro ao enviar, tente novamente mais tarde"
          );
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false;
            this.$emit("close");
          }, 3 * 1000);
        });
    },
    updatePost() {
      this.isLoading = true;
      this.$store
        .dispatch("posts/updatePosts")
        .then(() => {
          this.$buefy.notification.open("Seu Post foi Atualizado");
        })
        .catch(() => {
          this.$buefy.notification.open(
            "Erro ao enviar, tente novamente mais tarde"
          );
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false;
            this.$emit("close");
          }, 3 * 1000);
        });
    },
  },
};
</script>

<style></style>
