<template>
  <div>
    <div style="display:flex; margin:30px 20px 10px;">
      <v-card style="width:40%; margin:auto; min-height:75vh;">
        <v-container>
          <h2>My Goals</h2>
          <h2></h2>
          <v-list style="overflow-y: auto; max-height:75vh;">
            <v-list-item-group>
              <v-list-item
                :to="'/goals/goal/' + goal.Id"
                style="min-height:9vh;"
                two-line
                v-for="goal in listOfMyGoals"
                :key="goal.Id"
              >
                <v-list-item-content>
                  <v-list-item-title class="headline">{{goal.Title}}</v-list-item-title>
                  <v-list-item-subtitle>{{goal.Description}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <!-- <v-btn :to="'/goals/goal/' + goal.Id">
                    <v-icon>mdi-chevron-double-right</v-icon>
                  </v-btn>-->
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-container>
      </v-card>

      <v-card style="width:40%; margin:auto; min-height:75vh;">
        <v-container>
          <h2>Public Goals</h2>
          <v-list style="overflow-y: auto; max-height:75vh;">
            <v-list-item-group>
              <v-list-item
                style="min-height:9vh;"
                two-line
                v-for="goal in listOfPublicGoals"
                :key="goal.Id"
              >
                <v-list-item-content>
                  <v-list-item-title class="headline">{{goal.Title}}</v-list-item-title>
                  <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn :to="'/goals/goal/' + goal.Id">
                    <v-icon>mdi-chevron-double-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-container>
      </v-card>

      <!-- <v-card style="width:40%; margin:auto;">
        <v-container>
          <v-layout v-for="goal in listOfMyGoals" :key="goal.id" class="mb-5">
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
              <v-card>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="headline">{{goal.Title}}</v-list-item-title>
                    <v-list-item-subtitle></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-card-actions>
                  <v-btn :to="'/goals/goal/' + goal.Id">
                    <v-icon>mdi-chevron-double-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>-->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listOfMyGoals() {
      return this.$store.getters.myLoadedGoals;
    },
    listOfPublicGoals() {
      return this.$store.getters.publicLoadedGoals;
    }
  }
};
</script>