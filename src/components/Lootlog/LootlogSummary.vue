<template>
  <div>
    <div>summary</div>
    <v-card style="display:flex;">
      <div>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Item</th>
              <th class="text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in uniqueLootSummary" :key="item.item">
              <td>
                <v-img
                  :src="'https://www.osrsbox.com/osrsbox-db/items-icons/' + item.item + '.png'"
                  style="max-width:45px; max-hight:40px; min-width:45px; min-hight:40px; "
                ></v-img>
              </td>
              <td>{{ item.amount }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
      <div v-for="(rows, index) in normalLootSummary" :key="index">
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Item</th>
              <th class="text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in rows['items']" :key="item.item">
              <td>
                <v-img
                  :src="'https://www.osrsbox.com/osrsbox-db/items-icons/' + item.item + '.png'"
                  style="max-width:45px; max-hight:40px; min-width:45px; min-hight:40px; "
                ></v-img>
              </td>
              <td>{{ item.amount }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
      <div></div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      normalLoot: true,
      sendData: null,
      dataFromStore: null,
      dataFromFirebase: null
    };
  },
  methods: {},
  computed: {
    uniqueLootSummary() {
      return this.$store.getters.uniqueLoot;
    },
    normalLootSummary() {
      return this.$store.getters.normalLoot;
    },
    lootSummary() {
      let lootSummary = [this.$store.getters.uniqueLoot];

      if (this.normalLoot) {
        lootSummary = [
          this.$store.getters.uniqueLoot,
          this.$store.getters.normalLoot
        ];
      }
      return lootSummary;
    }
  },
  created() {
    this.$store.dispatch("getSummaryOfEverything");
  }
};
</script>

<style scoped>
.lootTypes {
  align-content: center;
  justify-content: center;
  margin: 10px;
}
.cardOfItems {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin: 10px;
}

.itemDataDisplay {
  display: flex;
  align-content: center;
  justify-content: center;
  min-width: 110px;
}
</style>