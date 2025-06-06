import { Rule } from 'sanity';

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    // Title of the blog post
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },

    // Slug for the blog post (URL-friendly)
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },

    // Author of the blog post
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },

    // Published date and time
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },

    // Main image for the blog post, with alt text for SEO
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Alternative text for SEO and accessibility',
        },
      ],
    },

    // Short excerpt or summary
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },

    // Main content/body of the blog post
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },

    // SEO: Custom meta title
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Custom title for SEO (optional)',
      validation: (Rule: Rule) => Rule.max(60),
    },

    // SEO: Custom meta description
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Custom meta description for SEO (optional)',
      rows: 2,
      validation: (Rule: Rule) => Rule.max(160),
    },

    // SEO: Open Graph image for social sharing, with alt text
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social sharing (optional)',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Alternative text for SEO and accessibility',
        },
      ],
    },

    // Tags for SEO and organization
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags for SEO and organization',
    },

    // Canonical URL to avoid duplicate content
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Canonical URL to avoid duplicate content (optional)',
    },

    // Robots meta tag for SEO control
    {
      name: 'robots',
      title: 'Robots Meta',
      type: 'string',
      description: 'Control search engine indexing (e.g., "index, follow" or "noindex, nofollow")',
      options: {
        list: [
          { title: 'Index, Follow', value: 'index, follow' },
          { title: 'No Index, No Follow', value: 'noindex, nofollow' },
        ],
      },
    },

    // Optional: Primary tag for main topic
    {
      name: 'primaryTag',
      title: 'Primary Tag',
      type: 'string',
      description: 'Main topic of the blog post (optional)',
    },

    // Optional: Estimated reading time
    {
      name: 'readingTime',
      title: 'Estimated Reading Time',
      type: 'number',
      description: 'Estimated reading time in minutes (optional)',
    },
  ],
};