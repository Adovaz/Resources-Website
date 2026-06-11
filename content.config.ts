import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'data',
      source: 'index.yml',
      schema: z.object({
        title: z.string(),
        description: z.string()
      })  
    })
  }
})