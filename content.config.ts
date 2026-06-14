import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export const Resource = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().editor({ input: 'media' }),
  // Can't use .editor({ input: 'media' }) for the file selector unfortunately,
  // as Nuxt Studio only seems to support media files (not PDF!)
  file: z.string()
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        resources: z.array(Resource)
      })
    })
  }
})
