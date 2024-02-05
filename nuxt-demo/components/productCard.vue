import type productsVue from '~/layouts/products.vue'; import type productsVue
from '~/layouts/products.vue';
<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <nuxt-link :to="`/products/${product.id}`">
      <p class="btn my-4">view</p>
    </nuxt-link>
  </div>
</template>

<script setup>
const { prodcut } = defineProps(["product"]);
</script>

<style scoped></style>
