<template>
  <section class="box">
    <b-field label="Título">
      <b-input v-model="titulo"></b-input>
    </b-field>

    <b-field label="Título da Foto" type="" message="This email is invalid">
      <b-input type="email" value="" maxlength="30"> </b-input>
    </b-field>

    <b-field label="Url" type="">
      <b-input value="johnsilver" maxlength="30"></b-input>
    </b-field>

    <b-field label="Descrição">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>

    <b-button type="is-success" outlined>Outlined</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titulo: "",
    };
  },
};
</script>

<style></style>
