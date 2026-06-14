<script setup>
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

const title = 'Resources'
const description = 'Resources for Gender Affirming Healthcare'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '',
  twitterCard: ''
})

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('pages'))

const { data: resources } = await useAsyncData('resources', () => queryCollection('resources').all())

const defaultLinks = computed(() => {
  return resources.value?.map(item => ({
    id: item.id,
    label: item.title,
    suffix: item.description,
    to: item.link,
    icon: 'i-heroicons-link'
  })) || []
})

const { search, status, init } = useSearchCollection(['pages', 'resources'], {
  immediate: false
})

const { open } = useContentSearch()

watch(open, (value) => {
  if (value && status.value === 'idle') init()
})
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
        :search="search"
        :search-status="status"
        :links="defaultLinks"
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
