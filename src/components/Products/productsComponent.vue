<template>
  <v-main>
    <v-container style="padding-left: 100px; padding-top: 60px">
      <v-row no-gutters align="center" class="mb-10">
        <v-btn color="rgb(6, 191, 0)" icon><v-icon>mdi-plus</v-icon></v-btn>
        <h2>Продукти / {{ products.length }}</h2>
        <p class="ml-5 mr-3 pt-4">Тип</p>
        <v-col cols="3" class="pt-5">
          <v-autocomplete
            dense
            outlined
            :items="productTypes"
            v-model="productType"
          />
        </v-col>
        <p class="ml-5 mr-3 pt-4">Специфікація</p>
        <v-col cols="3" class="pt-5">
          <v-autocomplete dense outlined />
        </v-col>
      </v-row>
      <products-list :products="filteredProducts" />
    </v-container>
  </v-main>
</template>

<script>
import productsList from "./productsList.vue";
export default {
  components: { productsList },
  data: () => ({
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
        isNew: 0,
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
        serialNumber: 12345,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 3",
        type: "Monitors",
        specification: "Specification 3",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: null,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 4,
        serialNumber: 12345,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 3",
        type: "Monitors1",
        specification: "Specification 3",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: null,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 5,
        serialNumber: 12345,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 3",
        type: "Monitors1",
        specification: "Specification 3",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: null,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 6,
        serialNumber: 12345,
        isNew: 1,
        photo: "monitor.jpg",
        title: "Product 3",
        type: "Monitors2",
        specification: "Specification 3",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: null,
        date: "2017-06-29 12:09:33",
      },
    ],
    filteredProducts: [],
    productTypes: ["Всі"],
    productType: "Всі",
  }),
  mounted() {
    this.setProductTypes();
    this.filteredProducts = this.products;
  },
  methods: {
    setProductTypes() {
      this.products.forEach((product) => this.productTypes.push(product.type));
      this.productTypes = [...new Set(this.productTypes)];
    },
    filterProductsByType() {
      this.filteredProducts = this.products.filter(
        (product) => product.type == this.productType
      );
    },
  },
  watch: {
    productType: {
      deep: true,
      handler() {
        if (this.productType !== "" && this.productType !== null) {
          if (this.productType == "Всі") {
            this.filteredProducts = this.products;
          } else {
            this.filterProductsByType();
          }
        }
      },
    },
  },
};
</script>

<style>
</style>