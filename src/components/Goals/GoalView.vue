<template>
  <div style="padding:30px 30px 10px; margin:auto;">
    <!-- <v-checkbox v-model="showItemText" label="Show text" color="#1976D2"></v-checkbox> -->
    <div style="min-width:100%; min-height:100%;">
      <v-row
        no-gutters
        justify="center"
        v-for="(rows, rowIndex) in loadedGoal.Dimensions.Height"
        :key="rowIndex"
      >
        <v-col
          style="flex-grow:0;"
          v-for="(columns, columnIndex) in loadedGoal.Dimensions.Width"
          :key="columnIndex"
        >
          <div v-if="TotalyEmpty(rowIndex, columnIndex)">
            <v-img :style="maxSizeOfImage" contain></v-img>
          </div>
          <div v-else>
            <div v-if="ifNonItemGoals(rowIndex, columnIndex)">
              <v-img :style="maxSizeOfImage" contain src="@/assets/emptyImage.png">
                <div class="centered">
                  
                  {{dataOfNonItemGoals(rowIndex, columnIndex)}}</div>
              </v-img>
            </div>
            <div v-else>
              <v-img
                contain
                :style="maxSizeOfImage"
                :src="'https://www.osrsbox.com/osrsbox-db/items-icons/' + itemIdInArray(rowIndex, columnIndex) + '.png'"
              ></v-img>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goalId"],
  data() {
    return {
      showItemText: true
    };
  },
  computed: {
    loadedGoal() {
      return this.$store.getters.loadedGoal(this.goalId);
    },
    maxSizeOfImage() {
      let Height = Number(this.loadedGoal.Dimensions.Height);
      let Width = Number(this.loadedGoal.Dimensions.Width);
      let windowHeight = 0.87 * window.innerHeight;
      let windowWidth = 0.85 * window.innerWidth;
      let maxHeight = windowHeight / Height;
      let maxWidth = windowWidth / Width;
      let maxSize = null;
      if (maxWidth <= maxHeight) {
        maxSize = maxWidth;
      } else {
        maxSize = maxHeight;
      }
      return {
        width: maxSize + "px"
      };
    }
  },
  methods: {
    TotalyEmpty(row, col) {
      for (let i = 0; i < this.loadedGoal.Goals.length; i++) {
        if (
          this.loadedGoal.Goals[i].xPos == row &&
          this.loadedGoal.Goals[i].yPos == col
        ) {
          if (
            this.loadedGoal.Goals[i].otherType == false &&
            this.loadedGoal.Goals[i].item == null
          ) {
            return true;
          }
        }
      }
    },

    ifNonItemGoals(row, col) {
      for (let i = 0; i < this.loadedGoal.Goals.length; i++) {
        if (
          this.loadedGoal.Goals[i].xPos == row &&
          this.loadedGoal.Goals[i].yPos == col
        ) {
          if (
            this.loadedGoal.Goals[i].otherType == true &&
            this.loadedGoal.Goals[i].item == null
          ) {
            return true;
          }
        }
      }
    },

    dataOfNonItemGoals(row, col) {
      for (let i = 0; i < this.loadedGoal.Goals.length; i++) {
        if (
          this.loadedGoal.Goals[i].xPos == row &&
          this.loadedGoal.Goals[i].yPos == col
        ) {
          if (this.loadedGoal.Goals[i].goal) {
            return this.loadedGoal.Goals[i].goal;
          }
        }
      }
    },

    itemIdInArray(row, col) {
      for (let i = 0; i < this.loadedGoal.Goals.length; i++) {
        if (
          this.loadedGoal.Goals[i].xPos == row &&
          this.loadedGoal.Goals[i].yPos == col
        ) {
          return this.loadedGoal.Goals[i].item;
        }
      }
    }
  }
};
</script>

<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  white-space: nowrap;
  white-space: nowrap;
}

</style>