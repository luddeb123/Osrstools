<template>
  <div class="lootlog">
    <h1>Lootlog</h1>
    <div>
      <v-tabs grow>
        <v-tab to="/lootlog/main/add">Add / Edit</v-tab>
        <v-tab to="/lootlog/summary">Summary</v-tab>
      </v-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("initLastFiveRaids");
  }
};
</script>

<style scoped>
.lootlog {
  width: 80%;
  margin: auto;
}
</style>