export default function Footer() {
  return (
    <footer className="py-8 border-t-3 border-neo-border bg-neo-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3 text-xs font-mono text-neo-text-muted font-bold">
            <i className="bx bx-copyright" />
            <span>{new Date().getFullYear()} numpyh. All rights reserved.</span>
            <span className="hidden sm:inline-block w-[2px] h-3 bg-neo-border" />
            <span
              id="footer-version-badge"
              className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 bg-neo-elevated border-2 border-neo-border rounded-md font-bold"
              style={{ boxShadow: '1px 1px 0px var(--color-neo-shadow)' }}
            >
              v1.0.0
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/emot1con"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-neo-text-muted hover:text-neo-text-primary border-2 border-neo-border rounded-md transition-all duration-150 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_var(--color-neo-shadow)] text-lg"
              style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
            >
              <i className="bx bxl-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/arqan-purusa-eryan/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-neo-text-muted hover:text-neo-text-primary border-2 border-neo-border rounded-md transition-all duration-150 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_var(--color-neo-shadow)] text-lg"
              style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
            >
              <i className="bx bxl-linkedin" />
            </a>
            <a
              href="mailto:arqanpurusa@gmail.com"
              className="w-9 h-9 flex items-center justify-center text-neo-text-muted hover:text-neo-text-primary border-2 border-neo-border rounded-md transition-all duration-150 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_var(--color-neo-shadow)] text-lg"
              style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
            >
              <i className="bx bx-envelope" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}