<template>
  <b-card class="cardStyle">
    <div class="item-card-header">
      <span class="subheading">Pets</span>
    </div>
    <div v-for="(rows, row) in Items" :key="row" style="display:flex;">
      <itemImage v-for="(item, id) in rows" :key="id" :item="item" style="float: left;" />
    </div>
  </b-card>
</template>

<script>
import itemImage from "../ItemComponent";
import emptyImage from "../../../assets/transparentImage.png";
export default {
  name: "displayPets",
  components: {
    itemImage
  },
  data() {
    return {
      Items: []
    };
  },
  created() {
    this.Items = this.$store.state.itemsStore.petsID;
  },
  methods: {
    ShowEmptySquare(item) {
      event.target.src = emptyImage;
    }
  }
};
</script>

<style scoped>
.cardStyle {
  margin: 1rem;
  max-width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.image {
  width: 45px;
  height: 40px;
  opacity: 0.3;
}
.unlocked {
  opacity: 1;
}

.item-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: 400;
}
</style>