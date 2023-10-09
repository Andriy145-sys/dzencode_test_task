<template>
  <v-app-bar dense height="70px" color="white">
    <v-row justify="end">
      <v-col cols="7" xl="2" lg="2" md="2" sm="6" style="text-align: left">
        <span class="weekday">{{
          new Date().toLocaleDateString("uk-UA", {
            weekday: "long",
          })
        }}</span>
        <v-row no-gutters align="center">
          <span>{{
            new Date().toLocaleDateString("uk-UA", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          }}</span
          >&nbsp;
          <v-icon color="green" small class="ml-3 mr-1"
            >mdi-clock-time-three-outline</v-icon
          >
          <span>{{ currentTime }}</span>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import socketMixin from '../mixins/socketMixin';

export default {
  mixins: [socketMixin],
  data: () => ({
    currentTime: "00:00",
  }),
  mounted() {
    this.getCurrentTime();
  },
  methods: {
    getCurrentTime() {
      this.currentTime = new Date().toLocaleTimeString().substring(0, 5);
      setTimeout(() => {
        this.getCurrentTime();
      }, 1000);
    },
  },
};
</script>

<style>
</style>