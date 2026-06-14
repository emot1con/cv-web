import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname.startsWith('/#');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/#home', active: location.pathname === '/' },
    { label: 'About', href: isHome ? '#profile' : '/#profile' },
    { label: 'Skills', href: isHome ? '#skills' : '/#skills' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
    { label: 'Projects', href: '/projects' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-neo-bg border-b-3 border-neo-border shadow-[0_4px_0px_var(--color-neo-shadow)]'
          : ''
      }`}
    >
      {/* Scroll Progress */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-neo-border/20">
        <div
          className="h-full bg-neo-accent origin-left transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-base font-bold font-mono tracking-tight text-neo-text-primary hover:text-neo-accent transition-colors"
          >
            <span className="border-b-3 border-neo-accent pb-0.5">~/portfolio</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 text-xs font-bold font-mono rounded-md transition-all duration-150 border-2 ${
                  link.active
                    ? 'text-neo-text-primary bg-neo-accent border-neo-border shadow-[2px_2px_0px_var(--color-neo-shadow)]'
                    : 'text-neo-text-secondary border-transparent hover:text-neo-text-primary hover:bg-neo-elevated hover:border-neo-border hover:shadow-[2px_2px_0px_var(--color-neo-shadow)]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-2 pl-2 border-l-2 border-neo-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              id="menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-[4px] rounded-md bg-neo-surface border-2 border-neo-border transition-all"
              style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
            >
              <span
                className={`block w-5 h-[2px] bg-neo-text-primary rounded-none transition-all duration-200 ${
                  mobileOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-neo-text-primary rounded-none transition-all duration-200 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-neo-text-primary rounded-none transition-all duration-200 ${
                  mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-200 overflow-hidden ${
            mobileOpen
              ? 'max-h-[75vh] opacity-100 pointer-events-auto'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-3 space-y-2 border-t-2 border-neo-border">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block px-3 py-2.5 text-sm font-bold font-mono rounded-md transition-all border-2 ${
                  link.active
                    ? 'text-neo-text-primary bg-neo-accent border-neo-border shadow-[2px_2px_0px_var(--color-neo-shadow)]'
                    : 'text-neo-text-secondary border-transparent hover:text-neo-text-primary hover:bg-neo-elevated hover:border-neo-border'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}