<script setup lang="ts">
import type { ContentSearchLink } from '@nuxt/ui/runtime/components/content/ContentSearch.vue.js'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description
})

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const links = computed <ContentSearchLink[]> (() =>
  page.value?.resources.map(resource => ({
    label: resource.title,
    description: resource.description,
    icon: 'i-lucide-file-text',

    to: resource.file,
    external: true // Required so that PDFs open correctly.
  })) ?? []
)
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation
        :links
      />
    </ClientOnly>

    <UHeader
      title="Resources"
      :toggle="false"
    >
      <template #right>
        <UContentSearchButton />
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="mailto:avery@zavoda.nz"
          target="_blank"
          icon="i-simple-icons-gmail"
          aria-label="Email"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
