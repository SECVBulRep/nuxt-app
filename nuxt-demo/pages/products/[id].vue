<template>
  <div>
    <p>product detail {{ id }}</p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
      voluptates, quo est accusamus, architecto eum doloremque voluptas
      repellendus itaque esse molestiae consequuntur minima porro id obcaecati?
      Quis porro sint natus.
    </p>
  </div>
</template>
<script setup>
const { id } = useRoute().params;
</script>
<style scoped></style>
