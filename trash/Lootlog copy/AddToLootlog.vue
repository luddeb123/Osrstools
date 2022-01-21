<template>
  <div class="addToLootlog">
    <v-form>
      <v-form v-model="valid">
        <v-form style="min-width:250px; display:flex;">
          <v-text-field
            :disabled="getPointsFromPrevousKC"
            v-model="raidKillcount"
            :rules="alwaysReq"
            label="KC"
            required
            type="number"
            style="max-width:50%; min-width:50px; margin-right:10px;"
          ></v-text-field>
          <v-switch v-model="getPointsFromPrevousKC" label="Predict KC" color="#1976D2"></v-switch>
        </v-form>
        <v-text-field
          v-model="raidPoints"
          :rules="alwaysReq"
          label="Points"
          required
          type="number"
          style="max-width:75%; min-width:200px;"
        ></v-text-field>
      </v-form>
      <v-switch v-model="SpecialLoot" label="Purple Chest?" color="#1976D2"></v-switch>

      <v-form v-if="!SpecialLoot">
        <v-form style="display:flex;">
          <v-autocomplete
            label="Loot one"
            v-model="LootOneItem"
            :items="NormalLootList"
            style="max-width:70%; min-width:250px; margin-right:2%;"
          ></v-autocomplete>
          <v-text-field v-model="LootOneAmount" label="Amount" type="number" style="max-width:30%;"></v-text-field>
        </v-form>

        <v-form style="display:flex;">
          <v-autocomplete
            label="Loot two"
            v-model="LootTwoItem"
            :items="NormalLootList"
            style="max-width:70%; min-width:250px; margin-right:2%;"
          ></v-autocomplete>
          <v-text-field v-model="LootTwoAmount" label="Amount" type="number" style="max-width:30%;"></v-text-field>
        </v-form>
      </v-form>

      <v-form v-else>
        <v-form style="display:flex;">
          <v-autocomplete label="Unique Item" v-model="SpecialLootID" :items="UniquesLootList"></v-autocomplete>
          <v-switch v-model="gotPet" label="Olmlet?" color="#1976D2"></v-switch>
        </v-form>
      </v-form>

      <v-btn
        block
        color="primary"
        :disabled="ValidFormRequest || !valid"
        @click="AddToLootlog"
      >Add to lootlogger</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      raidKillcount: null,
      getPointsFromPrevousKC: false,
      raidPoints: null,
      SpecialLoot: false,
      SpecialLootID: null,
      gotPet: false,
      EliteCluescroll: false,
      LootOneItem: null,
      LootOneAmount: null,
      LootTwoItem: null,
      LootTwoAmount: null,

      alwaysReq: [
        v => !!v || "Field is required",
        v => (v && v > 0) || "Needs to be bigger than 0"
      ],
      lootItemRules: [v => !!v || "Please specify a loot"],
      lootAmountRules: [
        v => !!v || "Please specify the amount",
        v => (v && v >= 0) || "Cant be negative"
      ],

      NormalLootList: [
        { value: null, text: "Nothing" },
        { value: 21027, text: "Dark relic" },
        { value: 21046, text: "Ancient tablet" },
        { value: 3051, text: "Grimy snapdragon" },
        { value: 3049, text: "Grimy toadflax" },
        { value: 219, text: "Grimy torstol" },
        { value: 217, text: "Grimy dwarf weed" },
        { value: 215, text: "Grimy cadantine" },
        { value: 213, text: "Grimy kwuarm" },
        { value: 211, text: "Grimy avantoe" },
        { value: 209, text: "Grimy irit leaf" },
        { value: 207, text: "Grimy ranarr weed" },
        { value: 566, text: "Soul rune" },
        { value: 565, text: "Blood rune" },
        { value: 560, text: "Death rune" },
        { value: 892, text: "Rune arrow" },
        { value: 1623, text: "Uncut sapphire" },
        { value: 1621, text: "Uncut emerald" },
        { value: 1619, text: "Uncut ruby" },
        { value: 1617, text: "Uncut diamond" },
        { value: 13421, text: "Saltpetre" },
        { value: 11212, text: "Dragon arrow" },
        { value: 8782, text: "Mahogany plank" },
        { value: 8780, text: "Teak plank" },
        { value: 13573, text: "Dynamite" },
        { value: 453, text: "Coal" },
        { value: 451, text: "Runite ore" },
        { value: 449, text: "Adamantite ore" },
        { value: 447, text: "Mithril ore" },
        { value: 444, text: "Gold ore" },
        { value: 442, text: "Silver ore" },
        { value: 7936, text: "Pure essence" },
        { value: 2485, text: "Grimy lantadyme" },
        { value: 13391, text: "Lizardman fang" },
        { value: 21047, text: "Torn prayer scroll" }
      ],
      UniquesLootList: [
        { value: 21079, text: "Arcane prayer scroll" },
        { value: 21034, text: "Dexterous prayer scroll" },
        { value: 21000, text: "Twisted buckler" },
        { value: 21012, text: "Dragon hunter crossbow" },
        { value: 21015, text: "Dinh's bulwark" },
        { value: 21018, text: "Ancestral hat" },
        { value: 21021, text: "Ancestral robe top" },
        { value: 21024, text: "Ancestral robe bottom" },
        { value: 13652, text: "Dragon claws" },
        { value: 21003, text: "Elder maul" },
        { value: 21043, text: "Kodai insignia" },
        { value: 20997, text: "Twisted bow" }
      ]
    };
  },
  methods: {
    AddToLootlog() {
      if (this.SpecialLoot) {
        if (
          this.raidKillcount &&
          this.raidPoints &&
          this.SpecialLootID != null
        ) {
          this.valid = true;
        }
      }
      let payload = {};
      if (this.SpecialLoot) {
        payload = {
          unique: this.SpecialLoot,
          kc: String(this.raidKillcount),
          points: this.raidPoints,
          item: this.SpecialLootID,
          clue: Boolean(this.EliteCluescroll),
          pet: Boolean(this.gotPet)
        };
      } else {
        payload = {
          unique: this.SpecialLoot,
          kc: this.raidKillcount,
          points: this.raidPoints,
          clue: this.EliteCluescroll,
          items: [
            {
              item: Number(this.LootOneItem),
              amount: Number(this.LootOneAmount)
            },
            {
              item: Number(this.LootTwoItem),
              amount: Number(this.LootTwoAmount)
            }
          ]
        };
      }
      this.$store.dispatch("AddToCoxLog", payload);

      this.raidKillcount++,
        (this.raidPoints = null),
        (this.SpecialLoot = false),
        (this.SpecialLootID = null),
        (this.gotPet = false),
        (this.EliteCluescroll = false),
        (this.LootOneItem = null),
        (this.LootOneAmount = null),
        (this.LootTwoItem = null),
        (this.LootTwoAmount = null);
    },
    initCoxLastTen() {
      this.$store.dispatch("getLastTenRaids");
    },
    getCoxNextTen() {
      this.$store.dispatch("getCoxNextTen");
    }
  },
  computed: {
    ValidFormRequest() {
      if (this.SpecialLoot) {
        if (
          this.raidKillcount == null ||
          this.raidPoints == null ||
          this.SpecialLootID == null
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (
          this.raidKillcount == null ||
          this.raidPoints == null ||
          this.LootOneItem == null ||
          this.LootOneAmount == null ||
          this.LootTwoItem == null ||
          this.LootTwoAmount == null
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};
</script>

<style scoped>
.addToLootlog {
  margin: auto;
  padding: 4%;
}
.selectNormal {
  color: blue;
}
</style>
