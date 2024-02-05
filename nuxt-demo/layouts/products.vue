<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <nuxt-link to="/" class="font-bold">Nuxt app</nuxt-link>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <nav>
        <nuxt-link to="/">Nuxt app</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/">home</nuxt-link></li>
          <li><nuxt-link to="/about">about</nuxt-link></li>
          <li><nuxt-link to="/products">products</nuxt-link></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>
<script setup></script>
<style scoped>
.router-link-exact-active {
  color: aqua;
}
</style>
