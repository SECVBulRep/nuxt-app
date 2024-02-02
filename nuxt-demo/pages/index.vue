<template lang="">
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

    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
      cupiditate ratione quia non omnis. Porro possimus maiores provident
      officiis odio voluptatem nisi cumque ea, pariatur quae assumenda harum eum
      consequuntur!
    </p>
  </div>
</template>
<script setup></script>
<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
