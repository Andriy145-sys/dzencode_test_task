<template>
  <div style="max-width: 1050px; overflow-x: auto; white-space: nowrap">
    <div style="width: 2000px">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        style="width: auto"
      />
    </div>
  </div>
</template>

<script>
import productCard from "./productCard.vue";
export default {
  components: { productCard },
  props: {
    products: {
      require: true,
    },
  },
};
</script>

<style>
</style>