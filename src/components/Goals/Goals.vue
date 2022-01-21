<template>
  <div class="goals">
    <v-tabs grow>
        <v-tab to="/goals/list">List of your goals</v-tab>
        <v-tab to="/goals/add">Make a new template</v-tab>
      </v-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goals: []
    };
  },
  methods: {},
  computed: {
    LoadedGoals() {
      return this.$store.getters.LoadedGoals;
    }
  },
  beforeCreate() {
    this.$store.dispatch("loadGoalsFromFirebase");
  }
};
</script>

<style scoped>
.goals {
  margin: auto;
}
</style>