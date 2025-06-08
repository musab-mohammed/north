import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'المرشدين', href: '/mentors' },
    { name: 'من نحن', href: '/about' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-gradient-to-br from-northstar-blue to-northstar-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MN</span>
            </div>
            <span className="text-xl font-bold text-northstar-blue">MentorLink Nexus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-northstar-gold ${
                  isActive(item.href)
                    ? 'text-northstar-gold border-b-2 border-northstar-gold pb-1'
                    : 'text-gray-700 hover:text-northstar-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-northstar-blue">
                <LogIn className="w-4 h-4 ml-2" />
                تسجيل الدخول
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-northstar-gold hover:bg-northstar-gold/90 text-northstar-blue">
                <UserPlus className="w-4 h-4 ml-2" />
                إنشاء حساب
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-northstar-gold'
                      : 'text-gray-700 hover:text-northstar-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-gray-700">
                    <LogIn className="w-4 h-4 ml-2" />
                    تسجيل الدخول
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full bg-northstar-gold hover:bg-northstar-gold/90 text-northstar-blue">
                    <UserPlus className="w-4 h-4 ml-2" />
                    إنشاء حساب
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;