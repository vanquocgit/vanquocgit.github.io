import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().min(5, 'Tiêu đề nên có ít nhất 5 ký tự'),
      description: z
        .string()
        .min(20, 'Mô tả SEO nên có ít nhất 20 ký tự')
        .max(200, 'Mô tả SEO nên gọn dưới 200 ký tự'),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      youtubeId: z.string().optional().default(''),
      draft: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = {
  posts: postsCollection,
};
