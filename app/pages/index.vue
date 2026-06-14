<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
const { data: resources } = await useAsyncData('resources', () => {
  return queryCollection('resources').all()
})
</script>

<template>
  <div>
    <UPageHero
      :title="page?.title"
      :description="page?.description"
    />

    <UPageSection>
      <UPageGrid>
        <UBlogPost
          v-for="(resource) in resources"
          :title="resource.title"
          :description="resource?.description"
          :image="resource?.image"
          :to="resource?.link"
          target="_blank"
        />
      </UPageGrid>
    </UPageSection>
  </div>
</template>
