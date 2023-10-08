<template>
  <v-card color="white" class="mb-5 productCard">
    <v-row no-gutters align="center" style="padding: 10px">
      <v-icon :color="product.order ? 'black' : 'rgb(6, 191, 0)'" x-small
        >mdi-brightness-1</v-icon
      >
      <img
        height="40px"
        width="50px"
        class="ml-2 mr-5"
        :src="`${require('@/assets/img/' + product.photo)}`"
      />
      <v-col style="text-align: left" class="py-0" cols="2">
        <span class="productTitle"
          ><u style="text-decoration-color: silver">{{
            product.title
          }}</u></span
        ><br />
        <span class="serialNumber">{{ product.serialNumber }}</span>
      </v-col>
      <div style="width: 80px">
        <span
          :style="product.order ? 'color: black;' : 'color: rgb(6, 191, 0)'"
          >{{ product.order ? "В ремонті" : "вільний" }}</span
        >
      </div>
      <v-col style="text-align: left" class="px-0 ml-5" cols="1">
        <span
          >з
          {{
            new Date(product.guarantee.start).toLocaleDateString("en-GB", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })
          }}</span
        ><br />
        <span>
          по
          {{
            new Date(product.guarantee.end).toLocaleDateString("en-GB", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })
          }}
        </span>
      </v-col>
      <div style="text-align: left; width: 50px">
        <span>{{ product.isNew == 1 ? "Новий" : "Б/У" }}</span>
      </div>
      <v-col style="text-align: left" class="ml-5" cols="1">
        <span
          v-for="price in product.price"
          :key="price.id"
          :class="price.isDefault == 1 ? 'mainText' : 'mainSubtext'"
          >{{
            new Intl.NumberFormat("de-DE", {
              minimumFractionDigits: 2,
            }).format(price.value)
          }}{{ price.symbol == "USD" ? "$" : "UAН" }} <br
        /></span>
      </v-col>
      <v-col cols="2" style="text-align: left">
        <span>{{ product.group ? product.group : "&mdash;" }}</span>
      </v-col>
      <v-col cols="1" style="text-align: left">
        <span>{{
          product.ownerName ? product.ownerName : "&mdash;"
        }}</span></v-col
      >
      <v-col cols="2" style="text-align: left">
        <span>{{
          product.orderName ? product.orderName : "&mdash;"
        }}</span></v-col
      >
      <v-col style="text-align: center" cols="1">
        <span class="mainSubtext">{{
          new Date(product.date).toLocaleDateString("en-GB", {
            month: "numeric",
            day: "numeric",
          })
        }}</span
        ><br />
        <span class="mainText">
          {{
            new Date(product.date).toLocaleDateString("uk-UA", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          }}
        </span>
      </v-col>
      <v-row no-gutters align="start" justify="end" class="px-0">
        <v-icon color="silver" small style="cursor: pointer"
          >mdi-delete-outline</v-icon
        ></v-row
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      require: true,
    },
  },
};
</script>

<style scoped>
.productTitle {
  font-size: 16px;
  color: black;
}
.serialNumber {
  font-size: 14px;
  color: silver;
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