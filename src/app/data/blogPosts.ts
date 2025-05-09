
export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    content: string;
    date: string;
    author: string;
    keywords?: string[]; // 👈 optional, but used in SEO
    image?: string; // ✅ Add this line
  }
  
export const blogPosts: BlogPost[] = [
    {
      slug: 'optimize-seo-in-nextjs',
      title: 'How to Optimize SEO in Next.js',
      description: 'A complete guide on optimizing SEO for your Next.js website using App Router and TypeScript.',
      content: `<p>Next.js provides built-in support for SEO through metadata and structured components...</p>`,
      date: '2025-05-01',
      author: 'Bhavesh Dev',
      keywords: ['Next.js SEO', 'SEO optimization', 'TypeScript SEO', 'App Router SEO'],
      image: 'http://192.168.0.105:3000/images/472998841_18391668016097239_4160982039699515104_n.jpg', // ✅ Add a valid relative image path,
    },
    {
      slug: 'optimize-seo2-in-nextjs',
      title: 'How to Optimize SEO in Next.js2',
      description: 'A complete guide on optimizing SEO for your Next.js website using App Router and TypeScript.',
      content: `<p>Next.js provides built-in support for SEO through metadata and structured components...</p>`,
      date: '2025-05-01',
      author: 'Bhavesh Dev Cool',
      keywords: ['Next.js App Router', 'SEO guide', 'React SEO', 'Web vitals'],
      image: 'http://192.168.0.105:3000/images/472998841_18391668016097239_4160982039699515104_n.jpg', // ✅ Add a valid relative image path,
    },
  ];
  