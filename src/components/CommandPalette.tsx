import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { CommandItem } from '../types';

const items: CommandItem[] = [
  { title: 'Jump to Home', category: 'Navigation', href: '/#home', icon: 'bx-home' },
  { title: 'Jump to About / Profile', category: 'Navigation', href: '/#profile', icon: 'bx-user' },
  { title: 'Jump to Technical Skills', category: 'Navigation', href: '/#skills', icon: 'bx-code-alt' },
  { title: 'Jump to Featured Projects', category: 'Navigation', href: '/#project', icon: 'bx-briefcase' },
  { title: 'Jump to Contact Form', category: 'Navigation', href: '/#contact', icon: 'bx-mail-send' },
  { title: 'Go to Certifications Portal', category: 'Sub-Portal', href: '/certificates', icon: 'bx-medal' },
  { title: 'Go to Live Developer Dashboard', category: 'Sub-Portal', href: '/dashboard', icon: 'bx-grid-alt' },
  { title: 'Direct WhatsApp Message', category: 'External', href: 'https://wa.me/6281369051268', icon: 'bxl-whatsapp', isExternal: true },
  { title: 'Send direct Email', category: 'External', href: 'mailto:youremail@gmail.com', icon: 'bx-envelope', isExternal: true },
  { title: 'Review LinkedIn Profile', category: 'External', href: 'https://linkedin.com/in/yourusername', icon: 'bxl-linkedin', isExternal: true },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Navigation': 'text-electric-indigo border-electric-indigo/30',
  'Sub-Portal': 'text-electric-cyan border-electric-cyan/30',
  'External': 'text-electric-emerald border-electric-emerald/30',
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] flex items-center justify-center gap-2.5 p-3.5 sm:px-4 sm:py-3 bg-[#0B0D10]/95 backdrop-blur-md border border-[#181C24] hover:border-electric-indigo/40 rounded-full shadow-lg shadow-black/40 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 text-xs font-semibold select-none"
      >
        <i className="bx bx-terminal text-xl sm:text-sm text-electric-indigo" />
        <span className="hidden sm:inline">Command Center</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 font-mono text-[9px] text-slate-400 bg-[#050607] border border-[#181C24] rounded">
          Ctrl+K
        </kbd>
      </button>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 opacity-100 pointer-events-auto transition-all duration-300 backdrop-blur-sm bg-black/60"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        {/* Palette Box */}
        <div className="w-full max-w-lg bg-[#0B0D10]/95 border border-[#181C24] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[450px] animate-fade-in-down">
          {/* Search */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#181C24]/50 bg-[#11141B]/40">
            <i className="bx bx-search text-slate-500 text-lg" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search navigation shortcuts... (Arrow keys to traverse)"
              className="bg-transparent border-none outline-none text-sm text-white placeholder-slate-500 flex-1 font-sans"
              autoComplete="off"
              spellCheck="false"
            />
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 font-mono text-[10px] text-slate-400 bg-[#0B0D10] border border-[#181C24] rounded">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1 scroll-smooth scrollbar-thin">
            {filtered.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-500 font-mono">
                No shortcuts matched your search query.
              </div>
            ) : (
              filtered.map((item, idx) => (
                <div
                  key={item.title}
                  onClick={() => handleSelect(item)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg border text-xs font-semibold cursor-pointer transition-all duration-150 ${
                    idx === selectedIndex
                      ? 'bg-electric-indigo/10 border-electric-indigo/35 text-white'
                      : 'border-transparent text-slate-400 hover:text-white hover:bg-[#0B0D10]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <i
                      className={`bx ${item.icon} text-base ${
                        idx === selectedIndex ? 'text-electric-indigo' : 'text-slate-500'
                      }`}
                    />
                    <span>{item.title}</span>
                  </div>
                  <span
                    className={`text-[9px] font-mono tracking-widest uppercase bg-[#0B0D10] px-1.5 py-0.5 rounded border ${
                      CATEGORY_COLORS[item.category] || 'text-slate-500 border-[#181C24]'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-[#11141B]/20 border-t border-[#181C24]/30 flex items-center justify-between text-[10px] text-slate-500 font-mono">
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