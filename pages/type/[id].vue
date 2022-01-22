<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <div>Hi: {{ route.params.id }}</div>
  </div>
</template>
