<template>
  <v-main>
    <v-container style="padding-left: 100px; padding-top: 60px">
      <v-row no-gutters align="center" class="mb-10">
        <v-btn color="rgb(6, 191, 0)" icon><v-icon>mdi-plus</v-icon></v-btn>
        <h2>Продукти / {{ filteredProducts.length }}</h2>
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
          <v-autocomplete
            dense
            outlined
            :items="productSpecifications"
            v-model="productSpecification"
          />
        </v-col>
      </v-row>
      <loader v-if="showLoader" />
      <v-expand-transition>
        <products-list v-if="!showLoader" :products="filteredProducts" />
      </v-expand-transition>
    </v-container>
  </v-main>
</template>

<script>
import productsList from "./productsList.vue";
import loader from "../UI/loader.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { productsList, loader },
  data: () => ({
    filteredProducts: [],
    productTypes: ["Всі"],
    productSpecifications: [],
    productType: "Всі",
    productSpecification: "",
    showLoader: true,
  }),
  mounted() {
    this.getProductList();
    if (this.productList.length > 0) {
      this.setProductTypes();
    }
  },
  methods: {
    ...mapActions(["getProductList"]),
    setProductTypes() {
      this.productTypes = ["Всі"];
      this.productList.forEach((product) => {
        this.productTypes.push(product.type);
      });
      this.productTypes = [...new Set(this.productTypes)];
      this.setProductSpecifications();
    },
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
    filterProductsByType() {
      this.showLoader = true;
      this.filteredProducts = this.productList.filter(
        (product) => product.type == this.productType
      );
      this.hideLoader();
    },
    filterProductsBySpecification() {
      this.showLoader = true;
      this.filteredProducts = this.productList.filter((product) =>
        this.productType == "Всі"
          ? product.specification == this.productSpecification
          : product.specification == this.productSpecification &&
            product.type == this.productType
      );
      this.hideLoader();
    },
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
    productType: {
      handler() {
        if (this.productType !== "" && this.productType !== null) {
          this.productSpecification = "";
          if (this.productType == "Всі") {
            this.filteredProducts = this.productList;
          } else {
            this.filterProductsByType();
          }
          this.setProductSpecifications();
        }
      },
    },
    productSpecification: {
      handler() {
        if (
          this.productSpecification !== "" &&
          this.productSpecification !== null
        ) {
          this.filterProductsBySpecification();
        } else if (this.productType == "Всі") {
          this.filteredProducts = this.productList;
        }
      },
    },
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
</style>