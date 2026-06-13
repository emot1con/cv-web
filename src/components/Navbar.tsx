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
    { label: 'Projects', href: isHome ? '#project' : '/#project' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Dashboard', href: '/dashboard' },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050607]/85 backdrop-blur-md border-b border-[#181C24] shadow-lg shadow-black/20'
          : ''
      }`}
    >
      {/* Scroll Progress */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-obsidian-border/30">
        <div
          className="h-full bg-electric-indigo origin-left transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-sm font-bold font-mono tracking-tight text-white hover:text-electric-indigo transition-colors"
          >
            ~/portfolio
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 text-xs font-semibold font-mono rounded-lg transition-all duration-200 ${
                  link.active
                    ? 'text-white bg-obsidian-elevated border border-obsidian-border'
                    : 'text-slate-400 hover:text-white hover:bg-obsidian-elevated/50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-2 pl-2 border-l border-obsidian-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              id="menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-[3px] rounded-lg bg-obsidian-elevated border border-obsidian-border hover:border-obsidian-border-active transition-all"
            >
              <span
                className={`block w-4 h-[1.5px] bg-slate-400 rounded transition-all duration-200 ${
                  mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                }`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-slate-400 rounded transition-all duration-200 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-slate-400 rounded transition-all duration-200 ${
                  mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen
              ? 'max-h-[75vh] opacity-100 pointer-events-auto'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-3 space-y-1 border-t border-obsidian-border">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block px-3 py-2.5 text-xs font-semibold font-mono rounded-lg transition-all ${
                  link.active
                    ? 'text-white bg-obsidian-elevated border border-obsidian-border'
                    : 'text-slate-400 hover:text-white hover:bg-obsidian-elevated/50'
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