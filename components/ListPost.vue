<template>
  <div>
    <div class="columns section">
      <div class="column">
        <b-button type="is-link" @click="openModal({})">Criar Post</b-button>
      </div>
    </div>
    <TablePost :posts="posts" @open-modal="emitModal" />
  </div>
</template>

<script>
import TablePost from "@/components/TablePost";
import PostForm from "@/components/PostForm";
export default {
  name: "ListPost",

  props: {
    posts: {
      type: Array,
      default: [],
    },
  },

  components: {
    TablePost,
  },

  methods: {
    emitModal(info) {
      this.$emit("open-modal", info);
    },

    openModal(info) {
      this.$buefy.modal.open({
        parent: this,
        component: PostForm,
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
