<template>
  <section class="containter">
    <div class="section">
      <b-button type="is-link" expanded @click="openModal({})"
        >Criar Photo</b-button
      >
    </div>
    <Carousel :items="filteredPhotos" @open-modal="openModal" />
  </section>
</template>

<script>
import { mapState } from "vuex";
import Carousel from "@/components/Carousel";
import PhotoForm from "@/components/PhotoForm";

export default {
  name: "index",

  components: {
    Carousel,
    PhotoForm,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      photos: (state) => state.photos.photos,
    }),

    filteredPhotos() {
      return this.photos.filter((item) => {
        if (item.albumId == 2) return item;
      });
    },
  },

  created() {
    this.loadPhotos();
  },

  methods: {
    loadPhotos() {
      this.$store.dispatch("photos/getPhotos");
    },

    openModal(info) {
      this.$buefy.modal.open({
        parent: this,
        component: PhotoForm,
        hasModalCard: false,
        trapFocus: true,
        props: {
          info: info,
        },
      });
    },
  },
};
</script>

<style></style>
