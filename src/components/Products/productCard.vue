<template>
  <!-- Card displaying product details -->
  <v-card color="white" class="mb-5 productCard">
    <!-- Row for aligning product information -->
    <v-row no-gutters align="center" style="padding: 10px">
      <!-- Indicator for product status -->
      <v-icon :color="product.order ? 'black' : 'rgb(6, 191, 0)'" x-small
        >mdi-brightness-1</v-icon
      >
      <!-- Product photo -->
      <img
        height="40px"
        width="50px"
        class="ml-2 mr-5"
        :src="`${require('@/assets/img/' + product.photo)}`"
      />
      <!-- Column for product title and serial number -->
      <v-col style="text-align: left" class="py-0" cols="2">
        <span class="productTitle"
          ><u style="text-decoration-color: silver">{{
            product.title
          }}</u></span
        ><br />
        <span class="serialNumber">{{ product.serialNumber }}</span>
      </v-col>
      <!-- Displaying product status -->
      <div style="width: 80px">
        <span
          :style="product.order ? 'color: black;' : 'color: rgb(6, 191, 0)'"
          >{{ product.order ? "В ремонті" : "Вільний" }}</span
        >
      </div>
      <!-- Column for displaying guarantee dates -->
      <v-col style="text-align: left" class="px-0 ml-5" cols="1">
        <span
          >з
          {{
            new Date(product.guarantee.start).toLocaleDateString("uk-UA", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })
          }}</span
        ><br />
        <span>
          по
          {{
            new Date(product.guarantee.end).toLocaleDateString("uk-UA", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })
          }}
        </span>
      </v-col>
      <!-- Displaying whether the product is new or used -->
      <div style="text-align: left; width: 50px">
        <span>{{ product.isNew == 1 ? "Новий" : "Б/У" }}</span>
      </div>
      <!-- Column for displaying product prices -->
      <v-col style="text-align: left" class="ml-5" cols="1">
        <!-- Loop for displaying multiple prices -->
        <span
          v-for="price in product.price"
          :key="price.id"
          :class="price.isDefault == 1 ? 'mainText' : 'mainSubtext'"
          >{{
            new Intl.NumberFormat("uk-UA", {
              minimumFractionDigits: 2,
            }).format(price.value)
          }}{{ price.symbol == "USD" ? "$" : "UAH" }} <br
        /></span>
      </v-col>
      <!-- Column for displaying product group -->
      <v-col cols="2" style="text-align: left">
        <span>{{ product.group ? product.group : "&mdash;" }}</span>
      </v-col>
      <!-- Column for displaying product owner -->
      <v-col cols="1" style="text-align: left">
        <span>{{
          product.ownerName ? product.ownerName : "&mdash;"
        }}</span></v-col
      >
      <!-- Column for displaying product order name -->
      <v-col cols="2" style="text-align: left">
        <span>{{
          product.orderName ? product.orderName : "&mdash;"
        }}</span></v-col
      >
      <!-- Column for displaying product date -->
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
      <!-- Row for delete icon with right alignment -->
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

