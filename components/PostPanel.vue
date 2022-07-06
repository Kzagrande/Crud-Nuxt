<template>
  <div class="box">
    <div class="columns">
      <Figure />
      <Figure />
      <Figure />
      <Figure />
    </div>
    <div class="columns">
      <Figure />
      <Figure />
      <Figure />
      <Figure />
    </div>
    <div class="columns">
      <Figure />
      <Figure />
      <Figure />
      <Figure />
    </div>
  </div>
</template>

<script>
import Figure from "@/components/Figure";
export default {
  name: "PostPanel",

  components: {
    Figure,
  },
};
</script>

<style></style>
