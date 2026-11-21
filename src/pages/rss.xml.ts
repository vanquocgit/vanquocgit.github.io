import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { profile } from '@/data/profile';
import { sortPostsByDate } from '@/utils/posts';

export async function GET(context: APIContext) {
  const posts = sortPostsByDate(
    await getCollection('posts', ({ data }) => !data.draft)
  );

  return rss({
    title: profile.siteTitle,
    description: profile.bio,
    site: context.site ?? 'https://vanquocgit.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: '<language>vi-vn</language>',
  });
}
