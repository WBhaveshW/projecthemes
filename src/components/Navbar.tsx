'use client';  // If using Next.js 13+

import Link from 'next/link';

interface MenuItem {
  name: string;
  link: string;
}

interface NavbarProps {
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MySite</h1>
        <nav className="space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="text-gray-700 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
