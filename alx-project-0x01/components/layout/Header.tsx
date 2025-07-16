import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              ALX Project
            </Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-blue-200 transition-colors">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/users" className="hover:text-blue-200 transition-colors">
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
