import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname.startsWith('/#');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      if (location.pathname === '/projects') setActiveSection('projects');
      return;
    }

    const sections = document.querySelectorAll('section[id], header[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location, isHome]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      const id = href.replace('/#', '#');
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', href: '/#home', icon: 'bx-home-alt' },
    { id: 'profile', label: 'About', href: isHome ? '#profile' : '/#profile', icon: 'bx-user' },
    { id: 'skills', label: 'Skills', href: isHome ? '#skills' : '/#skills', icon: 'bx-code-alt' },
    { id: 'contact', label: 'Contact', href: isHome ? '#contact' : '/#contact', icon: 'bx-envelope' },
    { id: 'projects', label: 'Projects', href: '/projects', icon: 'bx-folder' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] sm:w-auto flex justify-center">
      <motion.nav 
        className={`flex items-center justify-between sm:justify-start gap-3 sm:gap-5 px-5 sm:px-8 py-1 sm:py-1 rounded-xl transition-all duration-300 w-full sm:w-auto bg-neo-surface/90 backdrop-blur-md border border-neo-border ${
          scrolled 
            ? 'shadow-[0_8px_32px_rgba(0,0,0,0.12)]' 
            : 'shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Logo */}
        <Link 
          to="/" 
          className={`flex items-center pl-1.5 pr-4 sm:pr-5 border-r transition-colors shrink-0 ${
            theme === 'light' ? 'border-neo-border' : 'border-white/10'
          }`}
        >
          <span className={`font-bold font-mono tracking-tight text-xs sm:text-sm md:text-base ${
            theme === 'light' ? 'text-neo-text-primary' : 'text-white'
          }`}>
            <span className="text-[#fbbc05]">~/</span>portfolio
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2 shrink-0">
          {navLinks.map((link) => {
            const isActive = isHome 
              ? (link.id === activeSection || (link.id === 'profile' && activeSection === 'how-i-work'))
              : location.pathname === link.href || (location.pathname === '/' && link.href === '/#home');
            return (
              <Link
                key={link.id}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`h-7.5 sm:h-8 rounded-md text-xs sm:text-xs lg:text-sm font-bold font-mono transition-all duration-300 flex items-center justify-center ${
                  isActive ? 'px-4 sm:px-4.5' : 'w-7.5 sm:w-8.5'
                } ${
                  isActive 
                    ? (theme === 'light' ? 'bg-neo-accent text-neo-text-primary' : 'bg-neo-accent text-white') 
                    : link.id === 'projects'
                      ? 'text-[#fbbc05] hover:bg-[#fbbc05]/10'
                      : (theme === 'light' ? 'text-neo-text-secondary hover:text-neo-text-primary hover:bg-black/5' : 'text-white/70 hover:text-white hover:bg-white/10')
                }`}
              >
                <i className={`bx ${link.icon} text-base sm:text-base lg:text-lg shrink-0`} />
                <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isActive ? 'max-w-[100px] ml-1.5 opacity-100' : 'max-w-0 ml-0 opacity-0'}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile menu simple icons - since text takes too much space */}
        <div className="flex md:hidden items-center gap-1 shrink-0">
           {navLinks.map((link) => {
             const isActive = isHome 
              ? (link.id === activeSection || (link.id === 'profile' && activeSection === 'how-i-work'))
              : location.pathname === link.href || (location.pathname === '/' && link.href === '/#home');
             return (
               <Link
                key={link.id}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`w-7.5 h-7.5 rounded-md flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? (theme === 'light' ? 'bg-neo-accent text-neo-text-primary' : 'bg-neo-accent text-white')
                    : link.id === 'projects'
                      ? 'text-[#fbbc05] hover:bg-[#fbbc05]/10'
                      : (theme === 'light' ? 'text-neo-text-secondary hover:text-neo-text-primary hover:bg-black/5' : 'text-white/60 hover:text-white hover:bg-white/10')
                }`}
              >
                <i className={`bx ${link.icon} text-base`} />
               </Link>
             )
           })}
        </div>

        {/* Theme Toggle */}
        <div className={`pl-2 sm:pl-4.5 border-l transition-colors shrink-0 ${
          theme === 'light' ? 'border-neo-border' : 'border-white/10'
        }`}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-md flex items-center justify-center transition-all duration-200 ${
              theme === 'light' 
                ? 'text-neo-text-secondary hover:text-neo-text-primary hover:bg-black/5'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <i
              className={`bx bx-sun text-base sm:text-lg absolute transition-all duration-300 ${
                theme === 'light' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'
              }`}
            />
            <i
              className={`bx bx-moon text-base sm:text-lg absolute transition-all duration-300 ${
                theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
              }`}
            />
          </button>
        </div>
      </motion.nav>
    </div>
  );
}