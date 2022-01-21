<template>
  <div class="container" style="margin-top: 40px;">
    <div>
      <p>userID: {{ getUserData.uid }}</p>
      <p>username: {{ getUserData.displayName }}</p>
      <p>email: {{ getUserData.email }}</p>
      <ul class="collapsible z-depth-0 guides" style="border: none;">
        <p v-for="item in itemData" :key="item">{{item}}</p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {},
      itemData: []
    };
  },
  computed: {
    getUserData() {
      return this.$store.getters.user;
    }
  },
  // watch: {
  //   getItemsUnlocked(value) {
  //     console.log(value);
  //     console.log("userupdate");
  //   },
  //   getUserData(value) {
  //     console.log(value);
  //     console.log("userupdate");
  //   }
  // }
};
</script>

<style scoped>
</style>
