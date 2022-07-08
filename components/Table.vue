<template>
  <div>
    <b-table :data="posts">
      <b-table-column label="User ID" field="userId" v-slot="post">
        {{ post.row.userId }}
      </b-table-column>
      <b-table-column label="ID" field="id" v-slot="post">
        {{ post.row.id }}
      </b-table-column>
      <b-table-column label="Title" field="title" v-slot="post">
        {{ post.row.title }}
      </b-table-column>
      <b-table-column label="Body" field="body" v-slot="post">
        {{ post.row.body }}
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Table",

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
};
</script>

<style></style>
