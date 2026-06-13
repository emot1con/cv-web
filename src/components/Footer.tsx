export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1e293b] bg-[#090e17]/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
            <i className="bx bx-copyright" />
            <span>{new Date().getFullYear()} — Built with React & Tailwind</span>
            <span className="hidden sm:inline-block w-px h-3 bg-[#1e293b]" />
            <span id="footer-version-badge" className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 bg-[#111827] border border-[#1e293b] rounded">
              v1.0.0
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors text-lg"
            >
              <i className="bx bxl-github" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors text-lg"
            >
              <i className="bx bxl-linkedin" />
            </a>
            <a
              href="mailto:youremail@gmail.com"
              className="text-slate-500 hover:text-white transition-colors text-lg"
            >
              <i className="bx bx-envelope" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}