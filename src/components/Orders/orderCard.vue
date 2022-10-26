<template>
  <v-card class="mb-2" height="65px">
    <v-row no-gutters align="center" style="padding: 10px 20px">
      <v-col cols="4" style="text-align: left" v-if="!isShowDetailProducts">
        <span>{{ order.title }}</span>
      </v-col>
      <div class="navbarIcon">
        <v-icon @click="showDetailProducts(order.products)" style="margin-top: 5px"
          >mdi-format-list-bulleted</v-icon
        >
      </div>
      <v-col
        style="text-align: left"
        class="ml-5"
        :cols="isShowDetailProducts ? '3' : '1'"
      >
        <span style="font-size: 18px; color: black; line-height: 5px">23</span
        ><br />
        <span style="font-size: 14px; color: silver; line-height: 5px"
          >Продукта</span
        >
      </v-col>
      <v-col
        style="text-align: center"
        class="ml-5"
        :cols="isShowDetailProducts ? '5' : '2'"
      >
        <span style="font-size: 14px; color: silver; line-height: 5px">
          {{
            new Date(order.date).toLocaleDateString("en-Gb", {
              month: "numeric",
              day: "numeric",
            })
          }}</span
        ><br />
        <span style="font-size: 16px; color: black; line-height: 5px">
          {{
            new Date(order.date).toLocaleDateString("uk-UA", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          }}</span
        >
      </v-col>
      <v-col
        style="text-align: left"
        class="ml-5"
        cols="2"
        v-if="!isShowDetailProducts"
      >
        <span class="mainSubtext"
          >{{ order.noDefaultSum
          }}&nbsp;{{
            order.products[0].price && order.products[0].price[0].isDefault == 0
              ? order.products[0].price[0].symbol
              : order.products[0].price[1].symbol
          }}</span
        ><br />
        <span class="mainText">{{ order.defaultSum }}&nbsp;{{
          order.products[0].price && order.products[0].price[1].isDefault == 1
            ? order.products[0].price[1].symbol
            : order.products[0].price[0].symbol
        }}</span>
      </v-col>
      <v-row
        no-gutters
        align="start"
        justify="end"
        class="px-0"
        v-if="!isShowDetailProducts"
      >
        <v-icon
          @click="$emit('deleteOrder',order.products, order.id)"
          color="silver"
          small
          style="cursor: pointer"
          >mdi-delete-outline</v-icon
        ></v-row
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    isShowDetailProducts: {
      require: true,
    },
    order: {
      require: true,
    },
  },
  methods: {
    showDetailProducts(products) {
      this.$emit("showDetailProducts", products);
    },
  },
};
</script>

<style>
.navbarIcon {
  background-color: white;
  border-radius: 50%;
  border: 1px solid silver;
  width: 35px;
  height: 35px;
  cursor: pointer;
}
.mainText {
  font-size: 14px;
  color: black;
}
.mainSubtext {
  font-size: 12px;
  color: silver;
}
</style>