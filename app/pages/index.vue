<script setup lang="ts">
import type { BlogPostProps } from '@nuxt/ui'
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
  </div>
  <UPageSection>
    <UPageGrid>
          <UBlogPost v-for="(resource) in resources"
          :title="resource.title",
          :description="resource?.description"
          :image="resource?.image"
          :to="resource?.path"
          />
    </UPageGrid>
  </UPageSection>  
  
</template>
