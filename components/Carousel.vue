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
                    size="is-small"
                    type="is-danger"
                    icon-left="heart"
                    outlined
                  />
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
  },
};
</script>

<style></style>
