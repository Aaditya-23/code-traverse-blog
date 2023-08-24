import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import GithubSlugger from 'github-slugger'
import { options } from './lib/rehypePrettyCode'

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
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    headings: {
      type: 'json',
      resolve: (doc) => {
        const slugger = new GithubSlugger()
        const headingRegX = /(?<flag>#{1,6})\s+(?<content>.+)/g

        const headings = Array.from(doc.body.raw.matchAll(headingRegX)).map(
          (match) => {
            const { flag, content } = match.groups || {}

            return {
              level: flag.length,
              text: content,
              slug: content ? slugger.slug(content) : null,
            }
          }
        )

        return headings
      },
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Posts],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
  },
})
