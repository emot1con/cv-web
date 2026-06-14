import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-md bg-neo-surface border-2 border-neo-border text-neo-text-primary transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_var(--color-neo-shadow)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--color-neo-shadow)]"
      style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
      aria-label="Toggle theme"
    >
      <i
        id="theme-icon-sun"
        className={`bx bx-sun text-lg absolute transition-all duration-200 ${
          theme === 'light' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
        }`}
      />
      <i
        id="theme-icon-moon"
        className={`bx bx-moon text-lg absolute transition-all duration-200 ${
          theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'
        }`}
      />
    </button>
  );
}