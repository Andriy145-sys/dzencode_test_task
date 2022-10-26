<template>
  <v-main>
    <v-container style="padding: 100px">
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
      <orders-list
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
import ConfirmDeleteOrderModal from "./confirmDeleteOrderModal.vue";
import ordersList from "./ordersList.vue";
export default {
  components: { ordersList, ConfirmDeleteOrderModal },
  data: () => ({
    showConfirmDeleteOrderModal: false,
    orders: [
      {
        id: 1,
        title: "Order 1",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [],
      },
      {
        id: 2,
        title: "Order 2",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [],
      },
      {
        id: 3,
        title: "Order 3",
        date: "2017-06-29 12:09:33",
        description: "desc",
        products: [],
      },
    ],
    products: [
      {
        id: 1,
        serialNumber: 1234,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 1,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 2,
        serialNumber: 1234,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 2,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 3,
        serialNumber: 1234,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 3",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 1000, symbol: "USD", isDefault: 0 },
          { value: 26000, symbol: "UAH", isDefault: 1 },
        ],
        order: 3,
        date: "2017-06-29 12:09:33",
      },

      {
        id: 4,
        serialNumber: 1234,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 1,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 5,
        serialNumber: 1234,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 1,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 6,
        serialNumber: 1234,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 1,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 7,
        serialNumber: 1234,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 1,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 8,
        serialNumber: 1234,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 1,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 9,
        serialNumber: 1234,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 1,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 10,
        serialNumber: 1234,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 2",
        type: "Monitors",
        specification: "Specification 2",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 2,
        date: "2017-06-29 12:09:33",
      },
    ],
    deleteOrderProductsList: [],
  }),
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.products.forEach((product) => {
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
      let defaultSum = 0;
      let noDefaultSum = 0;
      this.orders.forEach((order) => {
        if (order.products.length > 0) {
          order.products.forEach((product) => {
            if (product.price[1].isDefault == 1) {
              defaultSum = defaultSum + product.price[1].value;
            } else {
              noDefaultSum = noDefaultSum + product.price[1].value;
            }
            if (product.price[0].isDefault == 0) {
              noDefaultSum = noDefaultSum + product.price[0].value;
            } else {
              defaultSum = defaultSum + product.price[0].value;
            }
          });
        }
        order.defaultSum = defaultSum;
        order.noDefaultSum = noDefaultSum;
        defaultSum = 0;
        noDefaultSum = 0;
      });
    },
  },
};
</script>

<style>
</style>