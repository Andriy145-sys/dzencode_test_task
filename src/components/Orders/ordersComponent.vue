<template>
  <!-- Main content container -->
  <v-main>
    <!-- Container with padding -->
    <v-container style="padding: 100px 50px">
      <!-- Row for displaying add button and orders count -->
      <v-row no-gutters align="center" class="mb-5">
        <!-- Circular green button with add icon -->
        <div
          style="
            width: 40px;
            height: 40px;
            background-color: green;
            border-radius: 50%;
          "
          class="mr-2"
        >
          <v-btn class="mt-1" x-small color="rgb(6, 191, 0)" fab
            ><v-icon color="white">mdi-plus</v-icon>
          </v-btn>
        </div>
        <!-- Heading displaying orders count -->
        <h2>Прихід / {{ orders.length }}</h2>
      </v-row>
      <!-- Loader component displayed during data loading -->
      <loader v-if="showLoader" />
      <!-- Orders list component -->
      <orders-list
        v-else
        :orders="orders"
        @deleteOrder="deleteOrder"
        @deleteProduct="deleteProduct"
      />
      <!-- Confirmation modal for deleting orders -->
      <confirm-delete-order-modal
        v-if="showConfirmDeleteOrderModal"
        :visible="showConfirmDeleteOrderModal"
        @close="showConfirmDeleteOrderModal = false"
        @delete="deleteOrder"
        :products="deleteOrderProductsList"
      />
    </v-container>
  </v-main>
</template>

<script>
import Loader from "@/components/UI/loader.vue";
import ConfirmDeleteOrderModal from "./confirmDeleteOrderModal.vue";
import ordersList from "./ordersList.vue";
import { mapGetters } from "vuex";

export default {
  components: { ordersList, ConfirmDeleteOrderModal, Loader },
  data: () => ({
    // State for controlling the delete order confirmation modal
    showConfirmDeleteOrderModal: false,
    // Sample orders data
    orders: [
      {
        id: 1,
        title: "Довга назва приходу",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [],
      },
      {
        id: 2,
        title: "Довга придовга довжилезна назва приходу",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [],
      },
      {
        id: 3,
        title: "Довга назва приходу",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [],
      },
      {
        id: 4,
        title: "Довга придовга довжилезна назва приходу",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [],
      },
    ],
    // List of products to be deleted with an order
    deleteOrderProductsList: [],
    // State for controlling the loader visibility
    showLoader: true,
  }),
  mounted() {
    // Fetch products data if available
    if (this.productList.length > 0) {
      this.getProducts();
    }
  },
  methods: {
    // Method to map products to their respective orders
    getProducts() {
      this.productList.forEach((product) => {
        this.orders.forEach((order) => {
          order.id == product.order ? order.products.push(product) : "";
        });
      });
      this.setProductPrice();
    },
    // Method to trigger order deletion
    deleteOrder(products) {
      this.deleteOrderProductsList = products;
      this.showConfirmDeleteOrderModal = true;
    },
    // Method to trigger product deletion
    deleteProduct(product) {
      this.deleteOrderProductsList = [product];
      this.showConfirmDeleteOrderModal = true;
    },
    // Method to confirm order deletion
    confirmDeleteOrder() {
      this.showConfirmDeleteOrderModal = false;
    },
    // Method to calculate and set product prices for each order
    setProductPrice() {
      this.orders.forEach((order) => {
        let prices = [];
        if (order.products.length > 0) {
          order.products.forEach((product) => {
            product.price.forEach((price) => {
              let priceIndex = prices.findIndex(
                (_price) => _price.symbol == price.symbol
              );
              if (priceIndex !== -1) {
                prices[priceIndex].value += price.value;
              } else {
                prices.push(price);
              }
            });
          });
        }
        order.prices = prices.sort((a, b) => a.isDefault - b.isDefault);
        // Hide loader after a delay
        setTimeout(() => {
          this.showLoader = false;
        }, 500);
      });
    },
  },
  computed: {
    ...mapGetters(["productList"]),
  },
};
</script>

<style>
</style>
