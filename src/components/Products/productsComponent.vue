<template>
  <v-main>
    <!-- Main container with padding -->
    <v-container style="padding-left: 100px; padding-top: 60px">
      <!-- Product filter and count section -->
      <v-row no-gutters align="center" class="mb-10">
        <!-- Button for adding a new product -->
        <v-btn color="rgb(6, 191, 0)" icon><v-icon>mdi-plus</v-icon></v-btn>
        <!-- Heading displaying product count -->
        <h2>Продукти / {{ filteredProducts.length }}</h2>
        <!-- Dropdown for filtering by product type -->
        <p class="ml-5 mr-3 pt-4">Тип</p>
        <v-col cols="3" class="pt-5">
          <v-autocomplete
            dense
            outlined
            :items="productTypes"
            v-model="productType"
          />
        </v-col>
        <!-- Dropdown for filtering by product specification -->
        <p class="ml-5 mr-3 pt-4">Специфікація</p>
        <v-col cols="3" class="pt-5">
          <v-autocomplete
            dense
            outlined
            :items="productSpecifications"
            v-model="productSpecification"
          />
        </v-col>
      </v-row>
      <!-- Loader component displayed during data loading -->
      <loader v-if="showLoader" />
      <!-- Transition effect for displaying products list -->
      <v-expand-transition>
        <products-list v-if="!showLoader" :products="filteredProducts" />
      </v-expand-transition>
    </v-container>
  </v-main>
</template>

<script>
import productsList from "./productsList.vue";
import loader from "@/components/UI/loader.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { productsList, loader },
  data: () => ({
    filteredProducts: [],
    productTypes: ["All"],
    productSpecifications: [],
    productType: "All",
    productSpecification: "",
    showLoader: true,
  }),
  mounted() {
    // Fetch product list data on component mount
    this.getProductList();
    // Set up product types if data is available
    if (this.productList.length > 0) {
      this.setProductTypes();
    }
  },
  methods: {
    ...mapActions(["getProductList"]),
    // Method to set up product types
    setProductTypes() {
      this.productTypes = ["All"];
      this.productList.forEach((product) => {
        this.productTypes.push(product.type);
      });
      this.productTypes = [...new Set(this.productTypes)];
      this.setProductSpecifications();
    },
    // Method to set up product specifications
    setProductSpecifications() {
      this.productSpecifications = [];
      this.filteredProducts.forEach((product) => {
        if (product.specification) {
          this.productSpecifications.push(product.specification);
        }
      });
      this.productSpecifications = [...new Set(this.productSpecifications)];
      this.hideLoader();
    },
    // Method to filter products by type
    filterProductsByType() {
      this.showLoader = true;
      this.filteredProducts = this.productList.filter(
        (product) => product.type == this.productType
      );
      this.hideLoader();
    },
    // Method to filter products by specification
    filterProductsBySpecification() {
      this.showLoader = true;
      this.filteredProducts = this.productList.filter((product) =>
        this.productType == "All"
          ? product.specification == this.productSpecification
          : product.specification == this.productSpecification &&
            product.type == this.productType
      );
      this.hideLoader();
    },
    // Method to hide loader after a delay
    hideLoader() {
      setTimeout(() => {
        this.showLoader = false;
      }, 500);
    },
  },
  computed: {
    ...mapGetters(["productList"]),
  },
  watch: {
    // Watcher for changes in product type
    productType: {
      handler() {
        if (this.productType !== "" && this.productType !== null) {
          this.productSpecification = "";
          if (this.productType == "All") {
            this.filteredProducts = this.productList;
          } else {
            this.filterProductsByType();
          }
          this.setProductSpecifications();
        }
      },
    },
    // Watcher for changes in product specification
    productSpecification: {
      handler() {
        if (
          this.productSpecification !== "" &&
          this.productSpecification !== null
        ) {
          this.filterProductsBySpecification();
        } else if (this.productType == "All") {
          this.filteredProducts = this.productList;
        }
      },
    },
    // Watcher for changes in the product list
    productList: {
      deep: true,
      handler() {
        this.filteredProducts = this.productList;
        this.setProductTypes();
      },
    },
  },
};
</script>

<style>