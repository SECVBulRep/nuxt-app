<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/">Nuxt app</nuxt-link>
        <ul>
          <li><nuxt-link to="/">home</nuxt-link></li>
          <li><nuxt-link to="/about">about</nuxt-link></li>
          <li><nuxt-link to="/products">products</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <div>
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
