import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        title: z.string(),
        description: z.string()
      })  
    }),
  resources: defineCollection({
    type: 'data',
    source: 'resources/**.yml',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      path: z.string()
    })  
  })
  }
  
})