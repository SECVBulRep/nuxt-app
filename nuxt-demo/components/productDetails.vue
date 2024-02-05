import type productCardVue from './productCard.vue'; import type productCardVue
from './productCard.vue'; import type productCardVue from './productCard.vue';
<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product thumb" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - $ {{ product.price }}</p>
        <h3>{{ product.description }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
