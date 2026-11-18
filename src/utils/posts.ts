import type { CollectionEntry } from 'astro:content';

export function formatDateVi(date: Date): string {
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function estimateReadingTime(body: string): number {
  const cleanText = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[#*_`>\-\[\]()!]/g, ' ');
  const words = cleanText.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function sortPostsByDate(posts: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
  return [...posts].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
