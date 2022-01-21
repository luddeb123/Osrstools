<template>
  <div>
    <div class="mainDiv">
      <div style="width:450px; min-width:40%; margin: 10px 30px 0px 30px;">
        <v-card>
          <v-tabs grow>
            <v-tab to="/lootlog/main/add">Add</v-tab>
            <v-tab to="/lootlog/main/edit">Edit</v-tab>
          </v-tabs>
          <router-view></router-view>
        </v-card>
      </div>

      <div style="width:450px; min-width:40%; margin: 10px 30px 0px 30px;">
        <LootlogLastTen />
      </div>
    </div>
  </div>
</template>

<script>
import LootlogLastTen from "./LootlogLastFew";
export default {
  components: {
    LootlogLastTen
  }
};
</script>

<style scoped>
.mainDiv {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</style>