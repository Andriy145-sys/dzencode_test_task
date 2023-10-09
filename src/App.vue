<template>
  <div id="app">
    <v-app>
      <top-menu />
      <v-row no-gutters style="min-height: 100svh">
        <navigation-menu />
        <page-transition />
      </v-row>
    </v-app>
  </div>
</template>

<script>
import NavigationMenu from "./components/NavigationMenu.vue";
import TopMenu from "./components/TopMenu.vue";
import PageTransition from "./components/PageTransition.vue";
export default {
  components: { TopMenu, NavigationMenu, PageTransition },
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
