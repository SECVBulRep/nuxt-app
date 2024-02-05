<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <nuxt-link to="/" class="font-bold">Nuxt app</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/">home</nuxt-link></li>
          <li><nuxt-link to="/about">about</nuxt-link></li>
          <li><nuxt-link to="/products" class="btn">products</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.router-link-exact-active {
  color: aqua;
}
</style>
