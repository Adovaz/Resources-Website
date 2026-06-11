<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
</script>

<template>
  <div>
    <UPageHero
      title="Title"
      description="Description"
    />
  </div>
</template>
