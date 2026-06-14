import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { CommandItem } from '../types';

const items: CommandItem[] = [
  { title: 'Jump to Home', category: 'Navigation', href: '/#home', icon: 'bx-home' },
  { title: 'Jump to About / Profile', category: 'Navigation', href: '/#profile', icon: 'bx-user' },
  { title: 'Jump to Technical Skills', category: 'Navigation', href: '/#skills', icon: 'bx-code-alt' },
  { title: 'Jump to Contact Form', category: 'Navigation', href: '/#contact', icon: 'bx-mail-send' },
  { title: 'Go to Projects & Certifications Portal', category: 'Sub-Portal', href: '/projects', icon: 'bx-briefcase' },
  { title: 'Direct WhatsApp Message', category: 'External', href: 'https://wa.me/6281369051268', icon: 'bxl-whatsapp', isExternal: true },
  { title: 'Send direct Email', category: 'External', href: 'mailto:youremail@gmail.com', icon: 'bx-envelope', isExternal: true },
  { title: 'Review LinkedIn Profile', category: 'External', href: 'https://linkedin.com/in/yourusername', icon: 'bxl-linkedin', isExternal: true },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Navigation': 'text-neo-accent border-neo-accent',
  'Sub-Portal': 'text-neo-accent-tertiary border-neo-accent-tertiary',
  'External': 'text-neo-success border-neo-success',
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const filtered = query
    ? items.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  // Reset selection when filter changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Global keyboard shortcut
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
      if (open) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filtered.length);
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
        }
        if (e.key === 'Enter' && filtered[selectedIndex]) {
          e.preventDefault();
          handleSelect(filtered[selectedIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, filtered, selectedIndex]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleSelect = (item: CommandItem) => {
    setOpen(false);
    if (item.isExternal) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.href);
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Floating FAB */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] flex items-center justify-center gap-2.5 p-3.5 sm:px-4 sm:py-3 bg-neo-surface border-2 border-neo-border rounded-md text-neo-text-secondary hover:text-neo-text-primary transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] text-xs font-bold select-none"
        style={{ boxShadow: '3px 3px 0px var(--color-neo-shadow)' }}
      >
        <i className="bx bx-terminal text-xl sm:text-sm text-neo-accent" />
        <span className="hidden sm:inline">Command Center</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 font-mono text-[9px] text-neo-text-secondary bg-neo-bg border-2 border-neo-border rounded-md font-bold">
          Ctrl+K
        </kbd>
      </button>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 opacity-100 pointer-events-auto transition-all duration-200 bg-black/70"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        {/* Palette Box */}
        <div
          className="w-full max-w-lg bg-neo-surface border-3 border-neo-border rounded-lg overflow-hidden flex flex-col max-h-[450px] animate-fade-in-down"
          style={{ boxShadow: '6px 6px 0px var(--color-neo-shadow)' }}
        >
          {/* Search */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b-3 border-neo-border bg-neo-elevated">
            <i className="bx bx-search text-neo-text-muted text-lg" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search navigation shortcuts..."
              className="bg-transparent border-none outline-none text-sm text-neo-text-primary placeholder-neo-text-muted flex-1 font-body font-bold"
              autoComplete="off"
              spellCheck="false"
            />
            <kbd
              className="hidden sm:inline-block px-1.5 py-0.5 font-mono text-[10px] text-neo-text-secondary bg-neo-surface border-2 border-neo-border rounded-md font-bold"
            >
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1 scroll-smooth scrollbar-thin">
            {filtered.length === 0 ? (
              <div className="text-center py-8 text-xs text-neo-text-muted font-mono font-bold">
                No shortcuts matched your search query.
              </div>
            ) : (
              filtered.map((item, idx) => (
                <div
                  key={item.title}
                  onClick={() => handleSelect(item)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md border-2 text-xs font-bold cursor-pointer transition-all duration-100 ${
                    idx === selectedIndex
                      ? 'bg-neo-accent/10 border-neo-accent text-neo-text-primary shadow-[2px_2px_0px_var(--color-neo-shadow)]'
                      : 'border-transparent text-neo-text-secondary hover:text-neo-text-primary hover:bg-neo-elevated hover:border-neo-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <i
                      className={`bx ${item.icon} text-base ${
                        idx === selectedIndex ? 'text-neo-accent' : 'text-neo-text-muted'
                      }`}
                    />
                    <span>{item.title}</span>
                  </div>
                  <span
                    className={`text-[9px] font-mono tracking-widest uppercase bg-neo-surface px-1.5 py-0.5 rounded-md border-2 font-bold ${
                      CATEGORY_COLORS[item.category] || 'text-neo-text-muted border-neo-border'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-neo-elevated border-t-2 border-neo-border flex items-center justify-between text-[10px] text-neo-text-muted font-mono font-bold">
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
            </div>
            <span>Ctrl + K to toggle</span>
          </div>
        </div>
      </div>
    </>
  );
}