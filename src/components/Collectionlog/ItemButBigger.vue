<template>
  <div>
    <img
      v-if="itemID !== null"
      class="image"
      :class="itemState"
      :src="'https://www.osrsbox.com/osrsbox-db/items-icons/' + itemID + '.png'"
      @click="updateItemHave"
    />
    <img
      v-else
      style="width:45px; height:40px; opacity: 0;"
    />
  </div>
</template>

<script>
export default {
  name: "ItemButBigger",
  props: {
    item: Number
  },
  data() {
    return {
      itemID: this.item
    };
  },
  methods: {
    updateItemHave() {
      this.$store.dispatch('updateItemHave', this.itemID);
    }
  },
  computed: {
    itemState() {
      let unlocked = ""
      if (this.$store.state.itemsStore.itemsUnlocked.includes(this.itemID)){
        unlocked = "unlocked"
      }
      return unlocked
    },
  }
};
</script>

<style scoped>
.image {
  width: 90px;
  height: 80px;
  opacity: 0.3;
}
.unlocked {
  opacity: 1;
}
</style>

