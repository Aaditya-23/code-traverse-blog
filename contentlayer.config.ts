import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Posts = defineDocumentType(() => ({
  name: 'Posts',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
      description: 'define a title for this post',
    },
    description: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Posts],
})
