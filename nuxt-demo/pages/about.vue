<template lang="">
  <div>
    <h2>about</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
      cupiditate ratione quia non omnis. Porro possimus maiores provident
      officiis odio voluptatem nisi cumque ea, pariatur quae assumenda harum eum
      consequuntur!
    </p>
    <p>{{ data }}</p>
  </div>
</template>
<script setup>
const { data } = await useFetch("/api/ninja?name=mario");
</script>
<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
