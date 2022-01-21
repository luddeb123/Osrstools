<template>
  <v-toolbar app>
    <v-toolbar-title>
      <router-link to="/">OSRS Tools</router-link>
    </v-toolbar-title>
  </v-toolbar>
  <!-- <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item :to="'/'">OSRS TOOLS</b-nav-item>
        <b-nav-item-dropdown text="Tools" right>
          <b-dropdown-item
            v-for="tool in toolLinks"
            :key="tool.title"
            :to="tool.link"
          >{{tool.title}}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-button-group>
          <b-button
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
            variant="dark"
          >{{item.title}}</b-button>
          <b-button v-if="this.userIsAuthenticated" @click="logoutUser" variant="dark">Logout</b-button>
          <b-button @click="debuggerTool" variant="dark">debuggerTool</b-button>
        </b-button-group>
      </b-navbar-nav>
    </b-navbar>
  </div>-->
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    };
  },
  computed: {
    toolLinks() {
      let toolLinks = [
        { title: "Calculators", link: "/calculators" },
        { title: "Guides", link: "/guides" }
      ];
      if (this.userIsAuthenticated) {
        toolLinks = [
          { title: "Calculators", link: "/calculators" },
          { title: "Collectionlog", link: "/collectionlog" },
          { title: "Guides", link: "/guides" },
          { title: "Create Guide", link: "/guides/new" }
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
    logoutUser() {
      this.$store.dispatch("signUserOut");
    },
    debuggerTool() {
      this.$store.dispatch("getLootFromCox");
    }
  }
};
</script>