<template>
  <v-dialog v-model="visibility" width="600px">
    <v-row no-gutters align="center" justify="end" class="px-0">
      <close-icon style="position: absolute; z-index: 10" @close="$emit('close')"/>
    </v-row>
    <v-card style="padding: 10px" width="600px">
      <v-card-title style="font-weight: 600"
        >Ви впевнені , що хочете видалити цей прихід?</v-card-title
      >
      <v-col>
        <detail-product-list :products="products"/>
      </v-col>
    </v-card>
    <v-card color="rgb(6, 191, 0)" height="80px" class="pt-5 pr-5">
      <v-row align="center" no-gutters justify="end">
        <v-btn text color="white" @click="$emit('close')" style="font-weight: 600;">відмінити</v-btn>
        <v-btn
          color="white"
          style="text-transform: none; color: red"
          class="rounded-xl"
          height="45px"
          @click="$emit('delete')"
          ><v-icon color="red" small>mdi-delete-outline</v-icon> видалити</v-btn
        >
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import closeIcon from "../UI/closeIcon.vue";
import DetailProductList from './detailProduct/detailProductList.vue';
export default {
  components: { closeIcon, DetailProductList },
  props: {
    visible: {
      require: false,
    },
    products: {
      require: true,
    }
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("close");
      },
    },
  },
};
</script>

<style>
</style>