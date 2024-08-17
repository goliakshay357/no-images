import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://goliakshay.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/uses', '/work'].map((route) => ({
    url: `https://goliakshay.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
