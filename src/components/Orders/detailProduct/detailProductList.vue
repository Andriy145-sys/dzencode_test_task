<template>
  <v-col class="px-0" style="max-height: 400px; overflow: scroll">
    <short-product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      :isDeleteOrderModal="isDeleteOrderModal"
      @deleteProduct="deleteProduct"
    />
  </v-col>
</template>

<script>
import closeIcon from "../../UI/closeIcon.vue";
import shortProductCard from "./shortProductCard.vue";
export default {
  components: { closeIcon, shortProductCard },
  props: {
    products: {
      require: true,
    },
    isDeleteOrderModal: {
      require: false,
    }
  },
  methods: {
    deleteProduct(product){
      this.$emit('deleteProduct', product)
    }
  }
};
</script>

<style>
</style>