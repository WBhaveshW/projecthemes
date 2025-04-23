'use client';

import Navbar from '@/components/Navbar';
import TypingText from '@/components/TypingText';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {

  // Define dynamic menu items
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    // Add more items as needed
  ];
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar menuItems={menuItems} />

      {/* Hero Section */}
      <main className="flex flex-col justify-center items-center text-center py-24 px-4">
        <h2 className="text-4xl font-bold mb-4 whitespace-nowrap border-r-4 border-blue-600 animate-typing overflow-hidden">
        <TypingText
        staticText="Hi, I’m "
        texts={['Bhavesh 👨‍💻', 'a Fullstack Developer 💻', 'a Tech Blogger ✍️ who writes tutorials for devs']}
        variant="heading"
        color="text-purple-700"
        speed={90}
        delay={1600}
      />
</h2>

        <p className="text-lg text-gray-600 max-w-xl">
          This is a modern Next.js + Tailwind CSS theme powered by TypeScript. Explore the pages and customize your design easily.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
