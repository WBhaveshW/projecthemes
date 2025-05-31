// /app/blog/[slug]/page.tsx

import { blogPosts } from '@/app/data/blogPosts';
import { notFound } from 'next/navigation';
import SEO from '@/components/SEO';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(props: Props) {
  const { params } =  props; // ✅ await props

  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto p-6 prose">
      <SEO
        title={post.title}
        description={post.description}
        url={`https://yoursite.com/blog/${post.slug}`}
        datePublished={post.date}
        image={post.image}
        authorName={post.author}
        keywords={post.keywords}
      />
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 text-sm">
        By {post.author} • {new Date(post.date).toLocaleDateString()}
      </p>
      <hr className="my-3" />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

