<template>
  <v-card class="cardStyle">
    <v-card-title class="item-card-header">
      <span class="title">{{cardData.name}}</span>
    </v-card-title>
    <div v-for="(rows, row) in cardData.items" :key="row" class="collectionlogCard">
      <itemImage v-for="(item, id) in rows" :key="id" :item="item" style="float: left;" />
    </div>
  </v-card>
</template>

<script>
import itemImage from "./ItemComponent";
export default {
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  components: {
    itemImage
  },
  data() {
    return {
      Items: []
    };
  }
};
</script>

<style scoped>
.collectionlogCard {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.cardStyle {
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
}

.item-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: 400;
} 

</style>