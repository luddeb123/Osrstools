<template>
  <app id="app">
    <v-navigation-drawer v-model="primaryDrawer.model" temporary app>
      <!-- <v-list-item>
        <v-list-item-avatar>
          <v-img src="@/assets/logo.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>lägg till account name osv</v-list-item-title>
        </v-list-item-content>
      </v-list-item>-->

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="toolLink in toolLinks" :key="toolLink.title" :to="toolLink.link">
          <v-list-item-title>{{toolLink.title}}</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div v-if="userIsAuthenticated">
          <v-btn @click="logoutUser" block>Logout</v-btn>
        </div>
        <div v-else>
          <v-btn @click="goToLogin" block>Login / Register</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar dark class="grey darken-4" app>
      <v-app-bar-nav-icon @click.stop="primaryDrawer.model = !primaryDrawer.model" app></v-app-bar-nav-icon>

      <v-toolbar-title @click="returnHome">OSRS Tools</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </app>
</template>

<script>
// import AppNavbar from "./components/Navigation/AppNavbar";
// import logo from "./assets/logo.png";

export default {
  name: "app",
  // components: {
  //   AppNavbar
  // },
  data() {
    return {
      primaryDrawer: {
        model: null,
        type: "temporary",
        clipped: false,
        floating: false,
        mini: false
      }
    };
  },
  computed: {
    toolLinks() {
      let toolLinks = [
        { title: "Calculators", link: "/calculators" }
      ];
      if (this.userIsAuthenticated) {
        toolLinks = [
          { title: "Calculators", link: "/calculators" },
          { title: "Collectionlog", link: "/collectionlog" }
        ];
      }
      if (this.$store.getters.admin) {
        toolLinks = [
          { title: "Calculators", link: "/calculators" },
          { title: "Collectionlog", link: "/collectionlog" },
          { title: "Lootlog", link: "/lootlog/main/add" },
          { title: "NewCollectionlog", link: "/newcollectionlog" },
          { title: "Goals", link: "/goals/list" },
        ];
      }
      return toolLinks;
    },
    menuItems() {
      let menuItems = [
        { title: "login", link: "/login" },
        { title: "register", link: "/register" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [{ title: "account", link: "/account" }];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    returnHome() {
      this.$router.push("/");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    logoutUser() {
      this.$store.dispatch("signUserOut");
    }
  }

  // beforeMount() {
  //   this.$store.dispatch("authStateChanged");
  // }
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css";
*:not(i) {
  font-family: Nunito, sans-serif !important;
}
</style>