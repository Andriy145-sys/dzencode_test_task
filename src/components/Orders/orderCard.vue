<template>
  <div
    class="mb-2 orderCard"
    style="border-radius: 5px"
    @click="showDetailProducts(order.id, order.products)"
  >
    <v-row no-gutters align="start">
      <v-col :cols="isShowDetailProducts ? '10' : '12'">
        <v-row
          no-gutters
          align="center"
          :style="
            isShowDetailProducts
              ? 'padding: 10px 0px 10px 10px'
              : 'padding: 10px 20px;'
          "
        >
          <v-col cols="4" style="text-align: left" v-if="!isShowDetailProducts">
            <span class="orderTitle">{{ order.title }}</span>
          </v-col>
          <div class="navbarIcon">
            <v-icon style="margin-top: 5px">mdi-format-list-bulleted</v-icon>
          </div>
          <v-col
            style="text-align: left"
            class="ml-5"
            :cols="isShowDetailProducts ? '3' : '1'"
          >
            <span style="font-size: 18px; color: black; line-height: 5px">{{
              order.products.length
            }}</span
            ><br />
            <span style="font-size: 14px; color: silver; line-height: 5px">{{
              order.products.length == 1
                ? "Продукт"
                : order.products.length > 1 && order.products.length < 5
                ? "Продукти"
                : "Продуктів"
            }}</span>
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
            <span
              :class="price.isDefault == 1 ? 'mainText' : 'mainSubtext'"
              v-for="price in order.prices"
              :key="price.symbol"
              ><br v-if="price.isDefault == 1 && order.prices.length > 1" />
              {{ price.value }} {{ price.symbol }}</span
            >
          </v-col>
          <v-row
            no-gutters
            align="start"
            justify="end"
            class="px-0"
            v-if="!isShowDetailProducts"
          >
            <v-icon
              @click="$emit('deleteOrder', order.products, order.id)"
              color="silver"
              small
              style="cursor: pointer"
              >mdi-delete-outline</v-icon
            ></v-row
          >
        </v-row>
      </v-col>
      <v-col
        v-if="isShowDetailProducts && activeOrderId == order.id"
        cols="2"
        style="text-align: right"
      >
        <v-row no-gutters justify="end">
          <div class="detailArrow">
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </div>
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
    activeOrderId: {
      require: false,
    },
  },
  methods: {
    showDetailProducts(id, products) {
      this.$emit("showDetailProducts", id, products);
    },
  },
};
</script>

<style scoped>
.orderCard {
  border: 1px solid #ccc;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 65px;
  cursor: pointer;
}
.orderCard:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.orderTitle {
  font-size: 16px;
  text-decoration: underline;
}
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
.detailArrow {
  background: rgb(224, 219, 219);
  width: 40px;
  height: 65px;
  display: grid;
  place-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>