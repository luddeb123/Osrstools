<template>
  <div style="padding:50px;">
    <div>
      <v-btn :disabled="columns > 29" @click="addColumn">Add Column</v-btn>
      <v-btn :disabled="rows > 19" @click="addRow">Add row</v-btn>
      <v-btn :disabled="columns < 2" @click="removeColumn">Remove Column</v-btn>
      <v-btn :disabled="rows < 2" @click="removeRow">Remove Row</v-btn>
    </div>
    <div style="display:flex;">
      <v-text-field label="Title" v-model="title"></v-text-field>
      <v-btn @click="printOutData">printOutData</v-btn>
      <v-btn @click="addToFirebase">addToFirebase</v-btn>
    </div>
    <div style="display:flex; padding-top:20px;">
      <v-autocomplete
        style="max-width:400px;"
        v-model="itemSearch"
        label="Search for Item"
        :items="allItemsFromOsrsbox"
        type="Object"
      ></v-autocomplete>
      <h4 style="padding-top:20px; padding-left:30px;" v-if="itemSearch">item id: {{itemSearch}}</h4>
      <h4 style="padding-top:20px; padding-left:30px;" v-else>Search for a item to get its id</h4>
    </div>
    <v-container>
      <v-row v-for="(row, rowindex) in this.rows" :key="rowindex">
        <v-col v-for="(column, colindex) in columns" :key="colindex">
          <template>
            <v-checkbox color="#1976D2" v-model="gridData[rowindex][colindex].otherType" @change="makeThisObjectNull(rowindex, colindex)"></v-checkbox>
            <v-text-field v-if="gridData[rowindex][colindex].otherType" label="Goal" v-model="gridData[rowindex][colindex].goal"></v-text-field>
            <v-text-field v-else label="Item ID" v-model="gridData[rowindex][colindex].item"></v-text-field>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      rows: 2,
      columns: 2,
      allItemsFromOsrsbox: {},
      itemSearch: null,
      title: "this is test title",
      gridData: [
        [
          { item: null, goal: null, otherType: false },
          { item: null, goal: null, otherType: false }
        ],
        [
          { item: null, goal: null, otherType: false },
          { item: null, goal: null, otherType: false }
        ]
      ]
    };
  },
  methods: {
    addColumn() {
      this.columns += 1;
      for (let i = 0; i < this.rows; i++) {
        this.gridData[i].push({item: null, goal: null, otherType: false });
      }
      this.gridData;
    },
    removeColumn() {
      this.columns -= 1;
      for (let i = 0; i < this.gridData.length; i++) {
        this.gridData[i].pop();
      }
    },
    addRow() {
      this.rows += 1;
      let emptyArray = [];
      for (let i = 0; i < this.columns; i++) {
        emptyArray.push({item: null, goal: null, otherType: false });
      }
      this.gridData.push(emptyArray);
    },
    removeRow() {
      this.rows -= 1;
      this.gridData.pop();
    },
    printOutData() {
      console.log(this.gridData);
    },
    addToFirebase() {
      let payload = {
        data: this.gridData,
        title: this.title,
        width: this.columns,
        height: this.rows
      };
      this.$store.dispatch("addGoalToFirebase", payload);
    },
    makeThisObjectNull(row, col) {
      this.gridData[row][col].item == null
      this.gridData[row][col].goal == null
    }
  },
  computed: {},

  beforeCreate() {
    Axios.get("https://www.osrsbox.com/osrsbox-db/items-summary.json").then(
      Response => {
        var list = [];
        Object.keys(Response.data).forEach(each => {
          list.push({
            text: Response.data[each]["name"],
            value: Response.data[each]["id"]
          });
        });
        this.allItemsFromOsrsbox = list;
      }
    );
  }
};
</script>