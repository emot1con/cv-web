import { useState, useRef, useEffect } from 'react';

interface Command {
  input: string;
  output: string;
}

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  about     — Display profile information
  skills    — List technical skills
  projects  — View featured projects  
  contact   — Show contact information
  clear     — Clear terminal screen
  help      — Show this help message`,
  about: `Fadhil Abdul Fattah
  Informatics Engineering Student @ University of Lampung
  Passionate about software engineering & system architecture.
  Type 'skills' to see my tech stack.`,
  skills: `Languages:    JavaScript, TypeScript, Java, Python, C++, Dart, PHP, Kotlin
  Frameworks:   React, Node.js, Next.js, Flutter, Tailwind, Laravel
  Tools:        Git, Docker, Redis, Figma, Postman, Neovim
  Databases:    MySQL, PostgreSQL, MongoDB`,
  projects: `Featured Projects: 20+ completed projects.
  Navigate to the Projects section above for full details.`,
  contact: `Email:   fadhil@example.com
  WhatsApp: +62 813-6905-1268
  LinkedIn: /in/fadhil-abdul-fattah`,
};

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [commands]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;

    const trimmed = input.trim().toLowerCase();
    let output = '';

    if (trimmed === '') {
      output = '';
    } else if (trimmed === 'clear') {
      setCommands([]);
      setInput('');
      return;
    } else if (COMMANDS[trimmed]) {
      output = COMMANDS[trimmed];
    } else {
      output = `bash: ${input}: command not found. Type 'help' for available commands.`;
    }

    setCommands(prev => [...prev, { input: trimmed, output }]);
    setInput('');
  };

  return (
    <div className="relative w-full max-w-lg group">
      <div className="absolute -inset-px rounded-2xl bg-electric-indigo/10 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
      <div className="relative bg-[#0B0D10] border border-[#181C24] rounded-2xl shadow-2xl overflow-hidden shadow-black/80">
        {/* Header Bar */}
        <div className="bg-[#11141B]/80 px-4 py-3 flex items-center justify-between text-xs text-slate-400 border-b border-[#181C24] select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <span className="font-mono font-medium opacity-80">fadhil@bash:~</span>
          <div className="w-8" />
        </div>

        {/* Terminal Output */}
        <div
          ref={historyRef}
          className="p-6 h-[320px] text-xs font-mono leading-relaxed overflow-y-auto text-slate-300 flex flex-col justify-between scroll-smooth scrollbar-thin"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="space-y-3">
            {commands.length === 0 && (
              <div>
                Type <span className="text-electric-indigo font-bold">help</span> to explore available commands.
              </div>
            )}
            {commands.map((cmd, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-electric-indigo font-bold whitespace-nowrap">fadhil@bash:~$</span>
                  <span>{cmd.input}</span>
                </div>
                {cmd.output && (
                  <pre className="text-slate-400 whitespace-pre-wrap font-mono text-[11px] leading-relaxed">
                    {cmd.output}
                  </pre>
                )}
              </div>
            ))}
          </div>

          {/* Prompt */}
          <div className="flex items-center gap-2 pt-2 border-t border-[#181C24]/30 mt-4">
            <span className="text-electric-indigo font-bold whitespace-nowrap">fadhil@bash:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none text-white flex-1 caret-electric-indigo font-mono text-xs w-full"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder="Type help..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}