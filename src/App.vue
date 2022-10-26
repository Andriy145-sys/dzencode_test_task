<template>
  <div id="app">
    <v-app>
      <top-menu />
      <v-row no-gutters style="height: 1000px">
        <navigation-menu />
        <router-view />
      </v-row>
    </v-app>
  </div>
</template>

<script>
import NavigationMenu from "./components/NavigationMenu.vue";
import TopMenu from "./components/TopMenu.vue";
export default {
  components: { TopMenu, NavigationMenu },
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
