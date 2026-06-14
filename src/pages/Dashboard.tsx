import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../lib/animations';

interface GitHubStats {
  repos: number;
  followers: number;
  gists: number;
}

interface Language {
  name: string;
  percentage: number;
  active?: boolean;
}

const languages: Language[] = [
  { name: 'Kotlin', percentage: 28, active: true },
  { name: 'PHP (Laravel)', percentage: 22 },
  { name: 'TypeScript', percentage: 15 },
  { name: 'JavaScript', percentage: 10 },
  { name: 'Python', percentage: 8 },
  { name: 'SQL (PostgreSQL)', percentage: 6 },
  { name: 'Java', percentage: 4 },
  { name: 'HTML / CSS', percentage: 3 },
  { name: 'Go (Golang)', percentage: 2 },
  { name: 'HCL (Terraform)', percentage: 2 },
];

export default function Dashboard() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from GitHub API
    fetch('https://api.github.com/users/yourusername')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error');
        return res.json();
      })
      .then((data) => {
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          gists: data.public_gists,
        });
      })
      .catch(() => {
        // Fallback data if API fails
        setStats({ repos: 0, followers: 0, gists: 0 });
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="pt-28 lg:pt-36 pb-20 overflow-hidden">
      <section className="py-20 lg:py-32 relative">
        <motion.div
          className="container mx-auto px-4 lg:px-8 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="max-w-3xl mx-auto text-center mb-16 space-y-4" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian-surface border border-obsidian-border rounded-full">
              <span className="text-xs font-semibold font-mono tracking-widest text-text-secondary uppercase">
                System Telemetry
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
              Real-time GitHub & WakaTime Telemetry
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Profile Card */}
            <motion.div className="lg:col-span-4 space-y-6" variants={slideInLeft}>
              <SpotlightCard className="p-6 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-obsidian-elevated border border-obsidian-border flex items-center justify-center mx-auto">
                  <i className="bx bx-user text-3xl text-text-muted" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-text-primary">Your Name</h3>
                  <p className="text-xs text-text-muted font-mono">Lampung, Indonesia</p>
                </div>
                {loading ? (
                  <p className="text-xs text-text-muted font-mono animate-pulse">Loading telemetry trace...</p>
                ) : (
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    <div>
                      <div className="text-lg font-bold text-text-primary font-mono">{stats?.repos ?? '--'}</div>
                      <div className="text-[10px] text-text-muted font-mono uppercase">Repos</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-text-primary font-mono">{stats?.followers ?? '--'}</div>
                      <div className="text-[10px] text-text-muted font-mono uppercase">Followers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-text-primary font-mono">{stats?.gists ?? '--'}</div>
                      <div className="text-[10px] text-text-muted font-mono uppercase">Gists</div>
                    </div>
                  </div>
                )}
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-electric-indigo hover:text-text-primary transition-colors"
                >
                  <i className="bx bxl-github text-sm" />
                  <span>Open GitHub</span>
                </a>
              </SpotlightCard>

              {/* Status Cards */}
              <div className="space-y-3">
                <div className="flex items-center justify-between px-4 py-3 bg-obsidian-surface border border-obsidian-border rounded-lg">
                  <span className="text-xs font-mono text-text-secondary">GitHub API Gateway</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-electric-emerald">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-emerald" />
                    ONLINE [12ms]
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-obsidian-surface border border-obsidian-border rounded-lg">
                  <span className="text-xs font-mono text-text-secondary">WakaTime Sync Engine</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-electric-emerald">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-emerald" />
                    ONLINE [54ms]
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-obsidian-surface border border-obsidian-border rounded-lg">
                  <span className="text-xs font-mono text-text-secondary">Telemetry Proxy</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-electric-emerald">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-emerald" />
                    SECURE [15ms]
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div className="lg:col-span-8 space-y-6" variants={slideInRight}>
              {/* Top Languages */}
              <SpotlightCard className="p-6">
                <h3 className="text-sm font-bold text-text-primary mb-4 tracking-tight font-mono uppercase">
                  Top Programming Languages
                </h3>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-text-secondary font-medium">{lang.name}</span>
                          {lang.active && (
                            <span className="text-[9px] font-mono text-electric-emerald">(Active)</span>
                          )}
                        </div>
                        <span className="font-mono text-text-muted">{lang.percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-obsidian-elevated rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            lang.active
                              ? 'bg-gradient-to-r from-electric-indigo to-electric-cyan'
                              : 'bg-slate-700'
                          }`}
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>

              {/* Environment Telemetry */}
              <SpotlightCard className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-[10px] font-mono text-text-muted uppercase mb-1">Active Editor</div>
                    <div className="text-sm font-semibold text-text-primary">VS Code</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-mono text-text-muted uppercase mb-1">Active Platform</div>
                    <div className="text-sm font-semibold text-text-primary">Windows 11</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-mono text-text-muted uppercase mb-1">Today's Focus</div>
                    <div className="text-sm font-semibold text-text-primary">Kotlin & PHP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-mono text-text-muted uppercase mb-1">Weekly Average</div>
                    <div className="text-sm font-semibold text-text-primary">3.2 hrs/day</div>
                  </div>
                </div>
              </SpotlightCard>

              {/* Goal Progress */}
              <SpotlightCard className="p-6">
                <h3 className="text-sm font-bold text-text-primary mb-4 tracking-tight font-mono uppercase">
                  Real-time Progress
                </h3>
                <div className="text-center py-4">
                  <div className="text-3xl font-bold text-text-primary font-mono">0.0h</div>
                  <div className="text-xs text-text-muted font-mono mt-1">of 4.0h goal</div>
                </div>
                <div className="w-full h-2 bg-obsidian-elevated rounded-full overflow-hidden">
                  <div className="w-0 h-full bg-gradient-to-r from-electric-indigo to-electric-cyan rounded-full transition-all duration-500" />
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}