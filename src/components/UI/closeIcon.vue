<template>
  <div class="closeIcon">
    <v-icon @click="$emit('close')" small>mdi-close</v-icon>
  </div>
</template>

<script>
export default {};
</script>

<style>
.closeIcon {
  background: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  box-shadow: 3px 3px 5px silver;
  cursor: pointer;
  padding-top: 2px;
}
</style>