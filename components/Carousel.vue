<template>
  <section class="section">
    <b-carousel-list v-model="test" :data="items" :items-to-show="2">
      <template #item="photo">
        <div class="card">
          <div class="card-image">
            <figure class="image is-5by4">
              <a @click="info(photo.index)"><img :src="photo.url" /></a>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-6">{{ photo.title }}</p>

              <b-field grouped>
                <p class="control" style="margin-left: auto">
                  <b-button
                    @click="emitModal(photo)"
                    type="is-info is-medium"
                    class="container"
                    >Atualizar Post</b-button
                  >
                  <b-button
                    @click="deletePhoto"
                    type="is-danger is-medium"
                    icon-right="delete"
                    class="container"
                    >Remover</b-button
                  >
                </p>
              </b-field>
            </div>
          </div>
        </div>
      </template>
    </b-carousel-list>
  </section>
</template>

<script>
export default {
  name: "Carousel",

  props: {
    items: {
      Type: Array,
      required: true,
      dafault: [],
    },
  },

  data() {
    return {
      test: 0,
    };
  },

  methods: {
    info(value) {
      this.test = value;
    },

    emitModal(info) {
      this.$emit("open-modal", info);
    },

    deletePhoto() {
      this.$store
        .dispatch("photos/deletePhotos")
        .then(() => {
          this.$buefy.notification.open("Sua foto foi deletada");
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
