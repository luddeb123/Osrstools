<template>
  <div class="ListOfGuides">
    <b-jumbotron
      class="Guides"
      v-for="guide in guides"
      :key="guide.id"
      headerLevel="4"
      header-tag="h3"
    >
      <template v-slot:header lead="3">{{ guide.Title }}</template>
      <hr class="my-4" />
      <template v-slot:lead>{{guide.Description}}</template>
      <p>{{ guide.GuideCategory }}</p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // guides: []
    };
  },
  computed: {
    guides() {
      return this.$store.getters.loadedGuides;
    }
  },
  created() {
    this.$store.dispatch("GetAllGuides");
  }
};
</script>

<style scoped>
.ListOfGuides {
  width: 80%;
  padding: 4% 0 0;
  margin: auto;
}
</style>