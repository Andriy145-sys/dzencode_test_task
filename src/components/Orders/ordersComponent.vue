<template>
  <v-main>
    <v-container style="padding: 100px 50px">
      <v-row no-gutters align="center" class="mb-5">
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
        <h2>Приходи / {{ orders.length }}</h2>
      </v-row>
      <loader v-if="showLoader" />
      <orders-list
        v-else
        :orders="orders"
        @deleteOrder="deleteOrder"
        @deleteProduct="deleteProduct"
      />
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
import Loader from "../UI/loader.vue";
import ConfirmDeleteOrderModal from "./confirmDeleteOrderModal.vue";
import ordersList from "./ordersList.vue";
import { mapGetters } from "vuex";
export default {
  components: { ordersList, ConfirmDeleteOrderModal, Loader },
  data: () => ({
    showConfirmDeleteOrderModal: false,
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
    deleteOrderProductsList: [],
    showLoader: true,
  }),
  mounted() {
    if (this.productList.length > 0) {
      this.getProducts();
    }
  },
  methods: {
    getProducts() {
      this.productList.forEach((product) => {
        this.orders.forEach((order) => {
          order.id == product.order ? order.products.push(product) : "";
        });
      });
      this.setProductPrice();
    },
    deleteOrder(products) {
      this.deleteOrderProductsList = products;
      this.showConfirmDeleteOrderModal = true;
    },
    deleteProduct(product) {
      this.deleteOrderProductsList = [product];
      this.showConfirmDeleteOrderModal = true;
    },
    confirmDeleteOrder() {
      this.showConfirmDeleteOrderModal = false;
    },
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