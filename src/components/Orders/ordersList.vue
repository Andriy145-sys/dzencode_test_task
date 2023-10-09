<template>
  <v-row no-gutters align="start" class="px-0">
    <!-- Column for order cards -->
    <v-col class="px-0">
      <!-- Iterate over orders and render order card component -->
      <order-card
        v-for="order in orders"
        :key="order.id"
        :order="order"
        @showDetailProducts="showDetailProducts"
        :isShowDetailProducts="isShowDetailProducts"
        :activeOrderId="activeOrderId"
        @deleteOrder="deleteOrder"
      />
    </v-col>
    <!-- Column for detailed product information -->
    <v-col cols="8" v-if="isShowDetailProducts" class="pl-10">
      <!-- Detail product component shown when isShowDetailProducts is true -->
      <detail-product-component
        @hideDetailProducts="isShowDetailProducts = false"
        :products="products"
        @deleteProduct="deleteProduct"
      />
    </v-col>
  </v-row>
</template>

<script>
import DetailProductComponent from "./detailProduct/detailProductComponent.vue";
import orderCard from "./orderCard.vue";

export default {
  components: { orderCard, DetailProductComponent },
  data: () => ({
    isShowDetailProducts: false,  // Flag to show/hide detail product component
    activeOrderId: null,           // ID of the active order
    products: [],                  // Array to store products for the active order
  }),
  props: {
    orders: {
      required: true, 
    },
  },
  methods: {
    // Method to handle delete order event
    deleteOrder(products, id) {
      this.$emit("deleteOrder", products, id);
    },
    // Method to handle delete product event
    deleteProduct(product) {
      this.$emit("deleteProduct", product);
    },
    // Method to show/hide detail product component
    showDetailProducts(id, products) {
      if (this.activeOrderId == id) {
        // Hide detail product component if it's already active
        this.isShowDetailProducts = false;
        this.activeOrderId = null;
        this.products = [];
      } else {
        // Show detail product component for the selected order
        this.activeOrderId = id;
        this.products = products;
        this.isShowDetailProducts = true;
      }
    },
  },
};
</script>

<style>
</style>
