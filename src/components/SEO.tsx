
import Head from 'next/head';

interface SEOProps {
    title: string;
    description: string;
    url: string;
    image?: string;
    datePublished?: string;
    authorName?: string;
    keywords?: string[];
  }
  
  export default function SEO({
    title,
    description,
    url,
    image,
    datePublished,
    authorName = "Bhavesh",
    keywords = [],
  }: SEOProps) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      datePublished,
      author: {
        "@type": "Person",
        name: authorName,
      },
      url,
      image,
    };
  
    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords.length > 0 && (
          <meta name="keywords" content={keywords.join(", ")} />
        )}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
  
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
  
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
  
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
    );
  }
  