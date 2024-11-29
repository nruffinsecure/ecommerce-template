// src/components/Header.tsx
import React from 'react';

interface NavItem {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Cart', path: '/cart' }
  ];

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-semibold">NR</a>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.path}
                href={item.path}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
