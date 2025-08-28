import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.classes'), href: '#classes' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? `${isDark ? 'bg-black' : 'bg-white'} shadow-md border-b border-border/50 rounded-3xl` 
        : `${isDark ? 'bg-black' : 'bg-white'} border-b border-border/30 rounded-3xl`
    }`}>
      <div className="px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`p-2 font-medium ${isDark ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'}`}
            >
              <Languages className="h-5 w-5" />
              <span className="ml-1 text-sm">{language === 'en' ? 'हिं' : 'EN'}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`p-2 ${isDark ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'}`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Logo - Centered */}
          <div className="flex-shrink-0 flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2">
            <img 
              src={isDark ? "/logoonblack.png" : "/transparentbg.png"} 
              alt="Dhyandeep Yog Foundation" 
              className="h-20 w-20 object-contain" 
            />
            <h1 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              Dhyandeep Yog Foundation
            </h1>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className={`mr-2 font-semibold ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'}`}>
              {t('nav.login')}
            </Button>
            <Button className="bg-accent text-accent-foreground hover:opacity-90">
              {t('nav.trial')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="p-2"
            >
              <Languages className="h-4 w-4" />
              <span className="ml-1 text-xs">{language === 'en' ? 'हिं' : 'EN'}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card border-t border-border/20">
            <div className="px-6 pt-2 pb-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block py-2 transition-colors duration-200 font-medium ${
                    isDark 
                      ? 'text-white/80 hover:text-white' 
                      : 'text-black/80 hover:text-black'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full">
                  {t('nav.login')}
                </Button>
                <Button className="w-full bg-accent text-accent-foreground">
                  {t('nav.trial')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;