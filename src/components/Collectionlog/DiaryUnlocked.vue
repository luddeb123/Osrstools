<template>
  <v-card class="cardStyle">
    <v-card-title class="item-card-header">
      <span class="title">Achievement Diaries</span>
    </v-card-title>
    <div v-for="(diaryArray, arrayid) in diaryList" :key="arrayid" class="collectionlogDiary">
      <div v-for="diary in diaryArray" :key="diary.name">
        <img
          v-if="imageLevelzero(diary)"
          :src="'https://www.osrsbox.com/osrsbox-db/items-icons/' + imageSrc(diary) + '.png'"
          style="width: 45px; height: 40px; opacity:0.3"
          @click="updateDiary(diary)"
        />
        <img
          v-else
          :src="'https://www.osrsbox.com/osrsbox-db/items-icons/' + imageSrc(diary) + '.png'"
          style="width: 45px; height: 40px;"
          @click="updateDiary(diary)"
        />
      </div>
    </div>
    <br />
  </v-card>
</template>

<script>
export default {
  computed: {
    diaryList() {
      return this.$store.state.itemsStore.diaryLayout;
    }
  },
  methods: {
    imageSrc(diary) {
      for (let i = 0; i < this.$store.state.itemsStore.diaryLevel.length; i++) {
        if (this.$store.state.itemsStore.diaryLevel[i]["name"] == diary) {
          let level = this.$store.state.itemsStore.diaryLevel[i]["level"];
          if (this.$store.state.itemsStore.diaryLevel[i]["level"] != 0) {
            level = this.$store.state.itemsStore.diaryLevel[i]["level"] - 1;
          }
          let imageSrc = this.$store.state.itemsStore.diaryLevel[i]["items"][
            level
          ];
          return imageSrc;
        }
      }
    },
    imageLevelzero(diary) {
      let diaryZero = true;
      for (let i = 0; i < this.$store.state.itemsStore.diaryLevel.length; i++) {
        if (this.$store.state.itemsStore.diaryLevel[i]["name"] == diary) {
          if (this.$store.state.itemsStore.diaryLevel[i]["level"] != 0) {
            diaryZero = false;
          }
        }
      }
      return diaryZero;
    },

    updateDiary(diary) {
      this.$store.dispatch("updateDiaryHave", diary);
    }
  }
};
</script>

<style scoped>
.collectionlogDiary {
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