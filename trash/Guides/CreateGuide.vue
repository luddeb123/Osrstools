<template>
  <div class="CreateGuide">
    <div style="display: flex;">
      <b-form-input v-model="GuideTitle" placeholder="Title of your guide"></b-form-input>
      <b-form-select
        v-model="guideCategorySelected"
        :options="guideCategoryOptions"
        style="max-width: 20%"
        class="mb-3"
      >
        <!-- This slot appears above the guideCategoryOptions from 'guideCategoryOptions' prop -->
        <template v-slot:first>
          <option :value="null" disabled>Guide Category</option>
        </template>
      </b-form-select>
    </div>
    <b-form-textarea
      id="textarea"
      style="max-width: 90%; margin:auto;"
      v-model="WrittenGuide"
      placeholder="Write your guide here..."
      rows="10"
      max-rows="500"
    ></b-form-textarea>
    <br>
    <b-form-textarea
      id="description"
      style="max-width: 80%; margin:auto;"
      v-model="Description"
      placeholder="Write a short description..."
      rows="5"
      max-rows="5"
    ></b-form-textarea>
    <br />
    <div>
      <h4 style="min-width:190px;">Add requirement</h4>
      <b-form-select
        v-model="requrementCategorySelect"
        :options="requrementCategoryOption"
        style="max-width: 20%"
        class="mb-3"
      >
        <template v-slot:first>
          <option :value="null" disabled>Requirement</option>
        </template>
      </b-form-select>
      <div style="display:flex;">
        <div v-if="requrementCategorySelect == 'Skill'" style="width:100%; display:flex;">
          <b-form-select :options="skills" v-model="requrementAddSkill" placeholder="Require Skill"></b-form-select>
          <b-form-input style="width:10%;" v-model="requrementAddSkillLevel" placeholder="Level"></b-form-input>
          <b-button @click="addRequrementSkill">Add</b-button>
        </div>
        <div v-if="requrementCategorySelect == 'Item'" style="width:100%; display:flex;">
          <b-form-input v-model="requrementAddItem" placeholder="Require Item"></b-form-input>
          <b-button @click="addRequrementItem">Add</b-button>
        </div>
        <div v-if="requrementCategorySelect == 'Quest'" style="width:100%; display:flex;">
          <b-form-input v-model="requrementAddQuest" placeholder="Require Quest"></b-form-input>
          <b-button @click="addRequrementQuest">Add</b-button>
        </div>
        <div v-if="requrementCategorySelect == 'Other'" style="width:100%; display:flex;">
          <b-form-input v-model="requrementAddOther" placeholder="Other"></b-form-input>
          <b-button @click="addRequrementOther">Add</b-button>
        </div>
      </div>
    </div>

    <div class="Requirements">
      <h4 style="margin: auto;">Requirements:</h4>
      <b-container>
        <b-row class="RequirementGroup">
          <b-col>
            <div class="RequirementList">
              <b-list-group>
                <h5>Skills:</h5>
                <b-list-group-item
                  v-for="skillReqs in requrementGroups['Skills']"
                  :key="skillReqs.name"
                >
                  {{skillReqs.name}}: {{skillReqs.level}}
                  <button
                    @click="removeRequirementSkill(skillReqs.name)"
                    style="float: right;"
                  >X</button>
                </b-list-group-item>
              </b-list-group>
            </div>
          </b-col>
          <b-col>
            <div class="RequirementList">
              <b-list-group>
                <h5>Quests:</h5>
                <b-list-group-item v-for="(questReq) in requrementGroups['Quests']" :key="questReq">
                  {{questReq}}
                  <button
                    @click="removeRequirementQuest(questReq)"
                    style="float: right;"
                  >X</button>
                </b-list-group-item>
              </b-list-group>
            </div>
          </b-col>
        </b-row>
        <b-row class="RequirementGroup">
          <b-col>
            <div class="RequirementList">
              <b-list-group>
                <h5>Items:</h5>
                <b-list-group-item v-for="(itemReq) in requrementGroups['Items']" :key="itemReq">
                  {{itemReq}}
                  <button @click="removeRequirementItem(itemReq)" style="float: right;">X</button>
                </b-list-group-item>
              </b-list-group>
            </div>
          </b-col>
          <b-col>
            <div class="RequirementList">
              <b-list-group>
                <h5>Other:</h5>
                <b-list-group-item v-for="(otherReq) in requrementGroups['Other']" :key="otherReq">
                  {{otherReq}}
                  <button
                    @click="removeRequirementOther(otherReq)"
                    style="float: right;"
                  >X</button>
                </b-list-group-item>
              </b-list-group>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <br />
    <div>
      <b-button @click="publiciseGuide" style="float:right;"> Make Guide Public</b-button>
    </div>
<br>
    <!-- <div class="Requirements">
      <p>Leave empty if it is not a requirement</p>
      <div v-for="skill in skills" :key="skill.skillName" style="float:left;">
        <p style="margin:20px; ">
          {{skill.skillName}}
          <b-form-input v-model="skill.value" style="width:50px;"></b-form-input>
        </p>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      GuideTitle: null,
      Description: null,
      WrittenGuide: null,
      requrementAddSkill: null,
      requrementAddSkillLevel: null,
      requrementAddItem: null,
      requrementAddQuest: null,
      requrementAddOther: null,
      requrementSkillLevel: null,
      requrementCategorySelect: null,
      guideCategorySelected: null,
      requrementCategoryOption: [
        { value: "Skill", text: "Skill" },
        { value: "Item", text: "Item" },
        { value: "Quest", text: "Quest" },
        { value: "Other", text: "Other" }
      ],
      guideCategoryOptions: [
        { value: "MoneyMakerGuide", text: "Money Making Guide" },
        { value: "BossGuide", text: "Boss Guide" }
      ],
      skills: [
        { value: "Attack", text: "Attack" },
        { value: "Hitpoints", text: "Hitpoints" },
        { value: "Mining", text: "Mining" },
        { value: "Strength", text: "Strength" },
        { value: "Agility", text: "Agility" },
        { value: "Smithing", text: "Smithing" },
        { value: "Defence", text: "Defence" },
        { value: "Herblore", text: "Herblore" },
        { value: "Fishing", text: "Fishing" },
        { value: "Ranged", text: "Ranged" },
        { value: "Thieving", text: "Thieving" },
        { value: "Cooking", text: "Cooking" },
        { value: "Ranged", text: "Ranged" },
        { value: "Thieving", text: "Thieving" },
        { value: "Cooking", text: "Cooking" },
        { value: "Prayer", text: "Prayer" },
        { value: "Crafting", text: "Crafting" },
        { value: "Firemaking", text: "Firemaking" },
        { value: "Magic", text: "Magic" },
        { value: "Fletching", text: "Fletching" },
        { value: "Woodcutting", text: "Woodcutting" },
        { value: "Runecraft", text: "Runecraft" },
        { value: "Slayer", text: "Slayer" },
        { value: "Farming", text: "Farming" },
        { value: "Construction", text: "Construction" },
        { value: "Hunter", text: "Hunter" },
        { value: "Overall", text: "Overall" }
      ],
      requrementGroups: {
        Skills: [],
        Items: [],
        Quests: [],
        Other: []
      }
    };
  },
  methods: {
    addRequrementSkill() {
      console.log(this.requrementGroups.Skills);
      let skill = {
        name: this.requrementAddSkill,
        level: this.requrementAddSkillLevel
      };
      for (let i = 0; i < this.requrementGroups.Skills.length; i++) {
        if (this.requrementGroups.Skills[i].name == this.requrementAddSkill)
          this.requrementGroups.Skills.splice(i, 1);
      }
      this.requrementGroups.Skills.push(skill);
      console.log(this.requrementGroups.Skills);
    },
    addRequrementItem() {
      let inReq = false;
      for (let i = 0; i < this.requrementGroups.Items.length; i++) {
        if (this.requrementGroups.Items[i] == this.requrementAddItem) {
          inReq = true;
          console.log("already in req");
          break;
        }
      }
      if (!inReq) {
        this.requrementGroups.Items.push(this.requrementAddItem);
      }
    },
    addRequrementQuest() {
      let inReq = false;
      for (let i = 0; i < this.requrementGroups.Quests.length; i++) {
        if (this.requrementGroups.Quests[i] == this.requrementAddQuest) {
          inReq = true;
          console.log("already in req");
          break;
        }
      }
      if (!inReq) {
        this.requrementGroups.Quests.push(this.requrementAddQuest);
      }
    },
    addRequrementOther() {
      let inReq = false;
      for (let i = 0; i < this.requrementGroups.Other.length; i++) {
        if (this.requrementGroups.Other[i] == this.requrementAddOther) {
          inReq = true;
          console.log("already in req");
          break;
        }
      }
      if (!inReq) {
        this.requrementGroups.Other.push(this.requrementAddOther);
      }
    },
    removeRequirementSkill(skillReq) {
      for (let i = 0; i < this.requrementGroups.Skills.length; i++) {
        if (this.requrementGroups.Skills[i].name == skillReq)
          this.requrementGroups.Skills.splice(i, 1);
      }
    },
    removeRequirementQuest(questReq) {
      for (let i = 0; i < this.requrementGroups.Quests.length; i++) {
        if (this.requrementGroups.Quests[i] == questReq)
          this.requrementGroups.Quests.splice(i, 1);
      }
    },
    removeRequirementItem(itemReq) {
      for (let i = 0; i < this.requrementGroups.Items.length; i++) {
        if (this.requrementGroups.Items[i] == itemReq)
          this.requrementGroups.Items.splice(i, 1);
      }
    },
    removeRequirementOther(otherReq) {
      for (let i = 0; i < this.requrementGroups.Other.length; i++) {
        if (this.requrementGroups.Other[i] == otherReq)
          this.requrementGroups.Other.splice(i, 1);
      }
    },
    publiciseGuide() {
    const payload = {
      Title: this.GuideTitle,
      GuideContent: this.WrittenGuide,
      Description: this.Description,
      Requirements: this.requrementGroups,
      GuideCategory: this.guideCategorySelected
    }
    this.$store.dispatch("publiciseNewGuide", payload);
    }
  }
};
</script>

<style scoped>
.CreateGuide {
  width: 80%;
  padding: 4% 0 0;
  margin: auto;
}

.Requirements {
  max-width: 80%;
  margin: 0 auto;
}

.RequirementGroup {
  margin: 0 auto;
}

.RequirementList {
  min-height: 150px;
}
</style>
