<template lang="">
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
      <ProductCard :product="p"></ProductCard>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "products",
});

// dataобозвали produc6ts
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
<style lang=""></style>
