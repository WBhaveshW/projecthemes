// app/page.tsx (or any other page or component)
'use client';

import React from 'react';
import Image from 'next/image';

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b pb-2">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-4">
              Welcome to <span className="font-semibold">CodeVerse</span> — your digital home for tech tips, tutorials, and tools.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              We believe in making development simple, creative, and enjoyable. Whether you’re a beginner or an experienced coder, our goal is to provide content that helps you grow your skills and stay inspired.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Created by Bhavesh, CodeVerse is a passion project built with 💻, ☕, and a sprinkle of ✨.
            </p>
          </div>

          <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/472998841_18391668016097239_4160982039699515104_n.jpg" // Replace with your image in public/
              alt="About us illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">What We Cover</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Frontend & Backend Development (React, Next.js, Spring Boot)</li>
            <li>Java, DSA, and Interview Preparation</li>
            <li>AI Tools & Integration</li>
            <li>Productivity Tips for Developers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

