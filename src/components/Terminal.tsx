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
  const [hasInteracted, setHasInteracted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  // Auto-type feature
  useEffect(() => {
    if (hasInteracted) return;

    let isCancelled = false;
    const sequence = ['about', 'skills', 'help'];

    const runSequence = async () => {
      // Initial delay before first command
      await new Promise(r => setTimeout(r, 2000));
      
      for (let currentIndex = 0; currentIndex < sequence.length; currentIndex++) {
        if (isCancelled || hasInteracted) return;
        const cmdText = sequence[currentIndex];
        
        // Simulate typing
        for (let i = 1; i <= cmdText.length; i++) {
          if (isCancelled || hasInteracted) return;
          setInput(cmdText.substring(0, i));
          await new Promise(r => setTimeout(r, 100)); // typing speed
        }
        
        // Small pause before pressing enter
        await new Promise(r => setTimeout(r, 400));
        if (isCancelled || hasInteracted) return;
        
        // Execute command
        if (cmdText === 'clear') {
          setCommands([]);
        } else {
          setCommands(prev => [...prev, { input: cmdText, output: COMMANDS[cmdText] || '' }]);
        }
        setInput('');
        
        // Wait before typing the next command
        if (currentIndex < sequence.length - 1) {
          await new Promise(r => setTimeout(r, 5000));
        }
      }
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, [hasInteracted]);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [commands]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    setHasInteracted(true);

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
    <div className="relative w-full max-w-lg">
      <div
        className="relative bg-neo-surface border-3 border-neo-border rounded-lg overflow-hidden"
        style={{ boxShadow: '6px 6px 0px var(--color-neo-shadow)' }}
      >
        {/* Header Bar */}
        <div className="bg-neo-elevated px-4 py-3 flex items-center justify-between text-xs text-neo-text-secondary border-b-3 border-neo-border select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border-2 border-neo-border" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border-2 border-neo-border" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border-2 border-neo-border" />
          </div>
          <span className="font-mono font-bold">fadhil@bash:~</span>
          <div className="w-8" />
        </div>

        {/* Terminal Output */}
        <div
          ref={historyRef}
          className="p-6 h-[320px] text-xs font-mono leading-relaxed overflow-y-auto text-neo-text-secondary flex flex-col justify-between scroll-smooth scrollbar-thin"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="space-y-3">
            {commands.length === 0 && (
              <div>
                Type <span className="text-neo-accent font-bold">help</span> to explore available commands.
              </div>
            )}
            {commands.map((cmd, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-neo-accent font-bold whitespace-nowrap">fadhil@bash:~$</span>
                  <span>{cmd.input}</span>
                </div>
                {cmd.output && (
                  <pre className="text-neo-text-secondary whitespace-pre-wrap font-mono text-[11px] leading-relaxed">
                    {cmd.output}
                  </pre>
                )}
              </div>
            ))}
          </div>

          {/* Prompt */}
          <div className="flex items-center gap-2 pt-2 border-t-2 border-neo-border/30 mt-4">
            <span className="text-neo-accent font-bold whitespace-nowrap">fadhil@bash:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => {
                setInput(e.target.value);
                setHasInteracted(true);
              }}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none text-neo-text-primary flex-1 caret-neo-accent font-mono text-xs w-full"
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