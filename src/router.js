import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Navigation/Home";

import Calculators from "./components/Calculators/Calculators";
import Collectionlog from "./components/Collectionlog/Collectionlog";
import NewCollectionlog from "./components/Collectionlog/NewCollectionlog";

import Account from "./components/Account/Account";
import Login from "./components/Account/Login";
import Register from "./components/Account/Register";

import Lootlog from "./components/Lootlog/Lootlog";
import LootlogInit from "./components/Lootlog/LootlogInit";
import AddToLootlog from "./components/Lootlog/AddToLootlog";
import EditLootlog from "./components/Lootlog/EditLootlog";

import SummaryLootlog from "./components/Lootlog/LootlogSummary";

import Goals from "./components/Goals/Goals";
import GoalList from "./components/Goals/GoalList";
import GoalView from "./components/Goals/GoalView";
import MakeNewGoal from "./components/Goals/MakeNewGoal";

import AuthGuard from "./auth-guard";
import adminGuard from "./admin-guard";



Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/calculators",
      name: "calculators",
      component: Calculators
    },
    {
      path: "/collectionlog",
      name: "collectionlog",
      component: Collectionlog,
      beforeEnter: AuthGuard
    },
    {
      path: "/newcollectionlog",
      name: "NewCollectionlog",
      component: NewCollectionlog,
      beforeEnter: AuthGuard
    },
    {
      path: "/account",
      name: "account",
      component: Account,
      beforeEnter: AuthGuard
    },
    {
      path: "/goals",
      name: "goals",
      component: Goals,
      beforeEnter: adminGuard,
      children: [
        {
          path: "/goals/list",
          name: "goalList",
          component: GoalList,
          beforeEnter: adminGuard
        },
        {
          path: "/goals/goal/:goalId",
          name: "specificGoal",
          props: true,
          component: GoalView,
          beforeEnter: adminGuard
        },
        {
          path: "/goals/add",
          name: "addGoal",
          component: MakeNewGoal,
          beforeEnter: adminGuard
        },
      ]
    },
    {
      path: "/lootlog",
      name: "lootlog",
      component: Lootlog,
      beforeEnter: adminGuard,
      children: [
        {
          path: "/lootlog/main",
          name: "lootlogmain",
          component: LootlogInit,
          beforeEnter: adminGuard,
          children: [
            {
              path: "/lootlog/main/add",
              name: "addtolootlog",
              component: AddToLootlog,
              beforeEnter: adminGuard
            },
            {
              path: "/lootlog/main/edit",
              name: "editlootlog",
              component: EditLootlog,
              beforeEnter: adminGuard
            },

          ]
        },
        {
          path: "/lootlog/summary",
          name: "summarylootlog",
          component: SummaryLootlog,
          beforeEnter: adminGuard
        },
      ]
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

export default router;