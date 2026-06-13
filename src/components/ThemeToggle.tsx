import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-obsidian-elevated border border-obsidian-border hover:border-obsidian-border-active text-slate-400 hover:text-white transition-all duration-200"
      aria-label="Toggle theme"
    >
      <i
        id="theme-icon-sun"
        className={`bx bx-sun text-base absolute transition-all duration-300 ${
          theme === 'light' ? 'scale-100' : 'scale-0'
        }`}
      />
      <i
        id="theme-icon-moon"
        className={`bx bx-moon text-base absolute transition-all duration-300 ${
          theme === 'dark' ? 'scale-100' : 'scale-0'
        }`}
      />
    </button>
  );
}