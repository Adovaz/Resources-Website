<script setup lang="ts">
const { data: page } = await useAsyncData(() => {
  return queryCollection('content').path('/').first()
})
</script>

<template>
  <div>
    <UPageHero
      :title="page?.title"
      :description="page?.description"
    />
    <UPageSection v-if="page?.resources">
      <UPageGrid>
        <UBlogPost
          v-for="(resource, i) in page.resources"
          :key="i"
          :title="resource.title"
          :description="resource.description"
          :image="resource.image"
          :to="resource.file"
          external
        />
      </UPageGrid>
    </UPageSection>
  </div>
</template>
