<template>
  <div style="max-width:80%; margin: auto;">
    <!-- <div v-for="Categories in ingameCollectionlog.Categories" :key="Categories.name" class="collectionlogCardList">
      <collectionlogCard
        v-for="subCategories in Categories.subCategories"
        :key="subCategories.name"
        :cardData="subCategories"
        style="margin:10px;"
      />
    </div> -->

    <!-- skillcapes och diarys -->
    <div class="collectionlogCardList">
      <h4 style="width:100%; text-align:center;">placeholder title</h4>
      <diaryUnlocked style="margin:10px;" />
      <collectionlogCard :cardData="skillcapesList" style="margin:10px;" />
    </div>

    <!-- shit som ska bort i framtiden -->
    <div
      v-for="(cardList, listName) in listOfCardList"
      :key="listName"
      class="collectionlogCardList"
    >
      <h4 style="width:100%; text-align:center;">{{cardList.name}}</h4>
      <br />
      <collectionlogCard
        v-for="card in cardList['List']"
        :key="card.name"
        :cardData="card"
        style="margin:10px;"
      />
    </div>

    <v-divider />

    <!-- där alla pvm saker och bossar ska vara -->
    <div>
      <h2 style="width:100%; text-align:center; margin-top:30px;">{{listOfPvmActivities.name}}</h2>
      <div
        v-for="(listOfCards, listIndex) in listOfPvmActivities.monsterCategorys"
        :key="listIndex"
        class="collectionlogCardList"
      >
        <h3 style="width:100%; text-align:center;">{{listOfCards.name}}</h3>
        <collectionlogCard
          v-for="(pvmCardList, listIndex) in listOfCards.monsters"
          :key="listIndex"
          :cardData="pvmCardList"
          style="margin:10px;"
        />
      </div>
    </div>

    <v-divider />

    <!-- the shitshow of a cluescroll log lol -->
    <div>
      <h2 style="width:100%; text-align:center; margin-top:30px;">Treasure Trails</h2>
      <div
        v-for="(listOfCards, listIndex) in cluescrollTiers.tierGroups"
        :key="listIndex"
        class="collectionlogCardList"
      >
        <h3 style="width:100%; text-align:center;">{{listOfCards.name}}</h3>
        <collectionlogCard
          v-for="(clueCardList, listIndex) in listOfCards.tierCategory"
          :key="listIndex"
          :cardData="clueCardList"
          style="margin:10px;"
        />
      </div>
      <div class="collectionlogCardList">
        <h4 style="width:100%; text-align:center;">{{fromMultipleClues.name}}</h4>
        <collectionlogCard
          v-for="(clueCardList, listIndex) in fromMultipleClues.itemGroups"
          :key="listIndex"
          :cardData="clueCardList"
          style="margin:10px;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import collectionlogCard from "./CollectionlogCard";
import diaryUnlocked from "./DiaryUnlocked";

export default {
  components: {
    collectionlogCard,
    diaryUnlocked
  },
  created() {
    // disable when just testing
    this.$store.dispatch("initRealtimeItems");
    this.$store.dispatch("initRealtimeDiaries");
    this.$store.dispatch("initRealtimeClues");
  },
  computed: {
    listOfCardList() {
      let listOfCardList = {
        otherList: {
          name: "Other List",
          List: [this.$store.state.itemsStore.petsID]
        }
      };
      return listOfCardList;
    },

    skillcapesList() {
      return this.$store.state.itemsStore.skillcapesID;
    },

    fromMultipleClues() {
      return this.$store.state.itemsStore.fromMultipleClues;
    },

    cluescrollTiers() {
      return this.$store.state.itemsStore.cluescrollTiers;
    },

    listOfPvmActivities() {
      return this.$store.state.itemsStore.listOfPvmActivities;
    }
  }
};
</script>

<style scoped>
.collectionlogCardList {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin: 10px;
}
</style>
