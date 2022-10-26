<template>
  <v-row no-gutters align="start" class="px-0">
    <v-col class="px-0">
      <order-card
        v-for="order in orders"
        :key="order.id"
        :order="order"
        @showDetailProducts="showDetailProducts"
        :isShowDetailProducts="isShowDetailProducts"
        @deleteOrder="deleteOrder"
      />
    </v-col>
    <v-col cols="8" v-if="isShowDetailProducts" class="pl-10">
      <detail-product-component 
        @hideDetailProducts="isShowDetailProducts = false"
        :products="products"
        @deleteProduct="deleteProduct"
      />
    </v-col>
  </v-row>
</template>

<script>
import DetailProductComponent from './detailProduct/detailProductComponent.vue';
import orderCard from "./orderCard.vue";
export default {
  components: { orderCard, DetailProductComponent },
  data: () => ({
    isShowDetailProducts: false,
    products: [],
  }),
  props: {
    orders: {
      require: true,
    },
  },
  methods: {
    deleteOrder(products, id) {
      this.$emit("deleteOrder",products, id);
    },
    deleteProduct(product){
      this.$emit('deleteProduct', product)
    },
    showDetailProducts(products) {
      this.products = products;
      this.isShowDetailProducts = true;
    },
  },
};
</script>

<style>
</style>