import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import Login from './Login';
import RequestDemo from './RequestDemo';
import ThemeToggle from './ui/ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-purple-600" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">VentasPro AI</span>
            </a>

            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                Características
              </a>
              <a href="#levels" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                Niveles
              </a>
              <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                Testimonios
              </a>
              <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                Precios
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" onClick={() => setIsLoginOpen(true)}>
                Iniciar sesión
              </Button>
              <Button variant="primary" onClick={() => setIsDemoOpen(true)}>
                Solicitar Demo
              </Button>
            </div>

            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 p-4 shadow-md">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Características
              </a>
              <a
                href="#levels"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Niveles
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </a>
              <div className="flex items-center py-2">
                <ThemeToggle />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                  Cambiar tema
                </span>
              </div>
              <Button variant="outline" onClick={() => {
                setIsLoginOpen(true);
                setIsMenuOpen(false);
              }}>
                Iniciar sesión
              </Button>
              <Button variant="primary" onClick={() => {
                setIsDemoOpen(true);
                setIsMenuOpen(false);
              }}>
                Solicitar Demo
              </Button>
            </nav>
          </div>
        )}
      </header>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RequestDemo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default Header;