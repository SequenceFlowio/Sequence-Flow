import getMarkDownData from '@/utils/getMarkDownData';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getMarkDownData('src/data/blogs');
  const baseUrl = 'https://sequenceflow.io';

  const staticPages = ['/', '/blog', '/oplossingen', '/hoe-wij-werken', '/contact'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...blogPages];
}
