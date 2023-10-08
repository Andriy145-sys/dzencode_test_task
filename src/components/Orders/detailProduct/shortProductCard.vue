<template>
  <div class="productCard" color="white">
    <v-row no-gutters align="center" style="padding: 10px">
      <v-icon :color="product.order ? 'black' : 'rgb(6, 191, 0)'" x-small>mdi-brightness-1</v-icon>
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
      <div style="width: 80px" v-if="isDeleteOrderModal">
        <span
          :style="product.order ? 'color: black;' : 'color: rgb(6, 191, 0)'"
          >{{ product.order ? "В ремонті" : "вільний" }}</span
        >
      </div>
      <v-row no-gutters align="start" justify="end" class="px-0"  v-if="isDeleteOrderModal">
        <v-icon @click="$emit('deleteProduct', product)" color="silver" small style="cursor: pointer"
          >mdi-delete-outline</v-icon
        ></v-row
      >
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      require: true,
    },
    isDeleteOrderModal: {
      require: false,
    }
  },
};
</script>

<style scoped>
.productCard {
  border: 1px solid #ccc;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 65px;
  cursor: pointer;
}
.productCard:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
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