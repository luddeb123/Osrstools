<template>
  <div class="lootlogMain">
    <h1>Lootlog</h1>
    <div style="float:left; min-width:612px;">
      <v-card>
        <v-tabs grow>
          <v-tab to="/lootlog/main">Main</v-tab>
          <v-tab to="/lootlog/#">Edit/add</v-tab>
          <v-tab to="/lootlog/#">Summary</v-tab>
        </v-tabs>
        <router-view></router-view>
      </v-card>
    </div>
    <!-- <div style="display: flex;">
      <h1>LootlogMain</h1>
      <v-btn @click="getSumOfPoints">getSumOfPoints</v-btn>
      <v-btn @click="getAllNormalLootSummary">getAllNormalLootSummary</v-btn>
      <v-btn @click="getAllUniqueLootSummary">getAllUniqueLootSummary</v-btn>
    </div>
    <div style="width:100%; float:left;">
      <div style="float:left; min-width:612px;;">
        <v-card>
          <v-tabs grow>
            <v-tab to="/lootlog/add">Add</v-tab>
            <v-tab to="/lootlog/summary">Summary</v-tab>
          </v-tabs>
          <router-view></router-view>
        </v-card>
      </div>
      <div style="width:40%; float:right; min-width:320px;">
        <div v-if="lastRaidsFromStore">
          <v-card v-for="raid in lastRaidsFromStore" :key="raid.killcount" class="mx-auto">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline">{{raid.killcount}}</v-list-item-title>
                <v-list-item-subtitle>{{raid.points}} points</v-list-item-subtitle>
                <v-list v-if="!raid.unique" class="transparent">
                  <v-list-item v-for="item in raid.items" :key="item.Item" style="float:left;">
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
                  <v-list-item v-for="item in raid.items" :key="item.Item" style="float:left;">
                    <v-img
                      :src="'https://www.osrsbox.com/osrsbox-db/items-icons/' + item.Item + '.png'"
                      style="max-width:45px; max-hight:40px; min-width:45px; min-hight:40px;"
                    ></v-img>
                    <v-img
                      v-if="item.Pet"
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
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastraids: []
    };
  },
  methods: {
    getAllUniques() {
      this.$store.dispatch("getAllUniques");
    },
    getSumOfPoints() {
      this.$store.dispatch("getSumOfPoints");
    },
    getAllNormalLootSummary() {
      this.$store.dispatch("getAllNormalLootSummary");
    },
    getAllUniqueLootSummary() {
      this.$store.dispatch("getAllUniqueLootSummary");
    },
    showLootlogHome() {
      this.$router.push("/lootlog");
    },
    showLootlogSummary() {
      this.$router.push("/lootlog/summary");
    },
    showLootlogAdd() {
      this.$router.push("/lootlog/add");
    }
  },
  computed: {
    lastRaidsFromStore() {
      // this.lastraids = this.$store.getters.dataFromFirebase;
      return this.$store.getters.dataFromFirebase;
    }
  },
  beforeCreate() {
    this.$store.dispatch("getTenFromFirebase");
  }
};
</script>

<style scoped>
.lootlogMain {
  width: 80%;
  margin: auto;
}
</style>