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
  name: "itemComponent",
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
      if (this.$store.state.itemsStore.itemsUnlocked.includes(this.itemID)){
        const unlocked = "unlocked"
        return unlocked
      }
    },
  }
};
</script>

<style scoped>
.image {
  width: 45px;
  height: 40px;
  opacity: 0.3;
}
.unlocked {
  opacity: 1;
}
</style>

