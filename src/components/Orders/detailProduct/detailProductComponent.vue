<template>
  <div class="mt-4">
    <v-row align="end" justify="end" class="pt-2">
      <close-icon
        style="position: absolute; z-index: 10; margin-left: 10px"
        @close="$emit('hideDetailProducts')"
      />
    </v-row>
    <v-card style="text-align: left">
      <div style="padding: 20px">
        <h3 class="mb-5">Довга придовга довжилезна назва приходу</h3>
        <button style="color: rgb(6, 191, 0);"
          ><v-btn x-small color="rgb(6, 191, 0)" fab
            ><v-icon color="white">mdi-plus</v-icon></v-btn
          >&nbsp; Добавити продукт</button
        >
      </div>
      <detail-product-list
        :products="products"
        :isDeleteOrderModal="true"
        @deleteProduct="deleteProduct"
      />
    </v-card>
  </div>
</template>
  
  <script>
import closeIcon from "../../UI/closeIcon.vue";
import DetailProductList from "./detailProductList.vue";
export default {
  components: { closeIcon, DetailProductList },
  props: {
    products: {
      require: true,
    },
  },
  methods: {
    deleteProduct(product) {
      this.$emit("deleteProduct", product);
    },
  },
};
</script>
  
  <style>
</style>