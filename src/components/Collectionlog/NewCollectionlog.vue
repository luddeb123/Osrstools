<template>
  <div style="margin-top:3em;">
    <v-card style="min-width: 60em; min-height:40em; max-width:60%; margin:auto; ">
      <h1>{{collectionlogTabs.name}}</h1>
      <v-tabs grow>
        <v-tab
          v-for="(category, index) in collectionlogTabs['tabs']"
          :key="index"
          @click="updateTab(index)"
        >{{category.name}}</v-tab>
        <v-tab-item v-for="(category, index) in collectionlogTabs['tabs']" :key="index">
          <div style="display:flex;">
            <v-list dense style="overflow-y: auto; height:33em; max-width:15em;">
              <v-list-item-group>
                <v-list-item
                  v-for="(subCategory, index) in category.subCategories"
                  :key="subCategory.name"
                  @click="updateRow(index)"
                >{{subCategory.name}}</v-list-item>
              </v-list-item-group>
            </v-list>
            <v-container style="overflow-y: auto; height:33em; max-width:45em;">
              <v-row no-gutters>
                <template v-for="(item, index) in itemsToShow">
                  <v-col :key="item.id">
                    <itemImage :item="item.id" />
                  </v-col>
                  <v-responsive v-if="moduloSix(index)" :key="`width-${index}`" width="100%"></v-responsive>
                </template>
              </v-row>
            </v-container>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import itemImage from "./ItemButBigger";
export default {
  components: {
    itemImage
  },
  created() {
    // disable when just testing
    this.$store.dispatch("initRealtimeItems");
    this.$store.dispatch("initRealtimeDiaries");
    this.$store.dispatch("initRealtimeClues");
  },
  data() {
    return {
      currentTab: 0,
      currentRow: 0
    };
  },
  methods: {
    updateTab(index) {
      this.currentTab = index;
      this.currentRow = 0;
    },
    updateRow(index) {
      this.currentRow = index;
    },
    moduloSix(n) {
      let response = false;
      let value = n + 1;
      if (value % 6 == 0) {
        response = true;
      }
      return response;
    }
  },
  computed: {
    collectionlogTabs() {
      return this.$store.state.itemsStore.ingameCollectionlogData;
    },

    itemsToShow() {
      return this.$store.state.itemsStore.ingameCollectionlogData["tabs"][
        this.currentTab
      ]["subCategories"][this.currentRow]["items"];
    }
  }
};
</script>

<style scoped>
.itemsInCollectionlog {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  max-width: 75%;
}

.itemimg {
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
}
</style>