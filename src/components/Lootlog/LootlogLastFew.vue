<template>
  <div>
    <div>
      <!-- <v-btn @click="initLastFiveRaids">initLastFiveRaids</v-btn> -->
      <v-btn @click="loadFirstFive"><v-icon>mdi-chevron-double-left</v-icon></v-btn>
      <v-btn @click="loadPrevFive"><v-icon>mdi-chevron-left</v-icon></v-btn>
      <v-btn @click="loadNextFive"><v-icon>mdi-chevron-right</v-icon></v-btn>
      <v-btn @click="loadLastFive"><v-icon>mdi-chevron-double-right</v-icon></v-btn>
    </div>
    <div v-if="loadedRaidsLoot">
      <v-card v-for="raid in loadedRaidsLoot" :key="raid.KC" class="mx-auto">
        <v-list-item two-line dense>
          <v-list-item-content>
            <v-list-item>
              <v-list-item-title class="headline">{{raid.KC}}</v-list-item-title>
              <v-list-item-subtitle class="text-right">{{raid.Points}} points</v-list-item-subtitle>
            </v-list-item>
            <v-list v-if="!raid.Unique" class="transparent">
              <v-list-item v-for="item in raid.Loot" :key="item.Item" style="float:left;">
                <v-img
                  :src="'https://www.osrsbox.com/osrsbox-db/items-icons/' + item.Item + '.png'"
                  style="max-width:45px; max-hight:40px; min-width:45px; min-hight:40px;"
                ></v-img>
                <v-list-item-title>{{ item.Amount }}</v-list-item-title>
              </v-list-item>
              <v-list-item style="float:right;">
                <v-img
                  v-if="raid.Clue"
                  src="https://www.osrsbox.com/osrsbox-db/items-icons/12073.png"
                  style="max-width:45px; max-hight:40px; min-width:45px; min-hight:40px;"
                ></v-img>
              </v-list-item>
            </v-list>
            <v-list v-else class="transparent">
              <v-list-item v-for="item in raid.Loot" :key="item.Item" style="float:left;">
                <v-img
                  :src="'https://www.osrsbox.com/osrsbox-db/items-icons/' + item.Item + '.png'"
                  style="max-width:45px; max-hight:40px; min-width:45px; min-hight:40px;"
                ></v-img>
                <v-img
                  v-if="raid.Pet"
                  src="https://www.osrsbox.com/osrsbox-db/items-icons/20851.png"
                  style="max-width:45px; max-hight:40px; min-width:45px; min-hight:40px;"
                ></v-img>
              </v-list-item>
              <v-list-item style="float:right;">
                <v-img
                  v-if="raid.Clue"
                  src="https://www.osrsbox.com/osrsbox-db/items-icons/12073.png"
                  style="max-width:45px; max-hight:40px; min-width:45px; min-hight:40px;"
                ></v-img>
              </v-list-item>
            </v-list>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
    <div v-else>
      <v-card>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">No Loot found</v-list-item-title>
            <v-list-item-subtitle>Click the button Add to add some loot</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "LootlogLastTen",
  methods: {
    loadFirstFive() {
      this.$store.dispatch("loadFirstFive");
    },
    loadPrevFive() {
      this.$store.dispatch("loadPrevFive");
    },
    loadNextFive() {
      this.$store.dispatch("loadNextFive");
    },
    loadLastFive() {
      this.$store.dispatch("loadLastFive");
    },

  },
  computed: {
    loadedRaidsLoot() {
      return this.$store.getters.loadedRaidsLoot;
    }
  }
};
</script>