import { useEffect, useState } from 'react';
import SpotlightCard from '../components/SpotlightCard';

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
    <main className="pt-28 lg:pt-36 pb-20">
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B0D10] border border-[#181C24] rounded-full">
              <span className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase">
                System Telemetry
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Real-time GitHub & WakaTime Telemetry
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Profile Card */}
            <div className="lg:col-span-4 space-y-6">
              <SpotlightCard className="p-6 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#11141B] border border-[#181C24] flex items-center justify-center mx-auto">
                  <i className="bx bx-user text-3xl text-slate-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Your Name</h3>
                  <p className="text-xs text-slate-500 font-mono">Lampung, Indonesia</p>
                </div>
                {loading ? (
                  <p className="text-xs text-slate-500 font-mono animate-pulse">Loading telemetry trace...</p>
                ) : (
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    <div>
                      <div className="text-lg font-bold text-white font-mono">{stats?.repos ?? '--'}</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Repos</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white font-mono">{stats?.followers ?? '--'}</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Followers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white font-mono">{stats?.gists ?? '--'}</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Gists</div>
                    </div>
                  </div>
                )}
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-electric-indigo hover:text-white transition-colors"
                >
                  <i className="bx bxl-github text-sm" />
                  <span>Open GitHub</span>
                </a>
              </SpotlightCard>

              {/* Status Cards */}
              <div className="space-y-3">
                <div className="flex items-center justify-between px-4 py-3 bg-[#0B0D10] border border-[#181C24] rounded-lg">
                  <span className="text-xs font-mono text-slate-400">GitHub API Gateway</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-electric-emerald">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-emerald" />
                    ONLINE [12ms]
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-[#0B0D10] border border-[#181C24] rounded-lg">
                  <span className="text-xs font-mono text-slate-400">WakaTime Sync Engine</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-electric-emerald">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-emerald" />
                    ONLINE [54ms]
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-[#0B0D10] border border-[#181C24] rounded-lg">
                  <span className="text-xs font-mono text-slate-400">Telemetry Proxy</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-electric-emerald">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-emerald" />
                    SECURE [15ms]
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Top Languages */}
              <SpotlightCard className="p-6">
                <h3 className="text-sm font-bold text-white mb-4 tracking-tight font-mono uppercase">
                  Top Programming Languages
                </h3>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-300 font-medium">{lang.name}</span>
                          {lang.active && (
                            <span className="text-[9px] font-mono text-electric-emerald">(Active)</span>
                          )}
                        </div>
                        <span className="font-mono text-slate-500">{lang.percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#11141B] rounded-full overflow-hidden">
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
                    <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Active Editor</div>
                    <div className="text-sm font-semibold text-white">VS Code</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Active Platform</div>
                    <div className="text-sm font-semibold text-white">Windows 11</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Today's Focus</div>
                    <div className="text-sm font-semibold text-white">Kotlin & PHP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Weekly Average</div>
                    <div className="text-sm font-semibold text-white">3.2 hrs/day</div>
                  </div>
                </div>
              </SpotlightCard>

              {/* Goal Progress */}
              <SpotlightCard className="p-6">
                <h3 className="text-sm font-bold text-white mb-4 tracking-tight font-mono uppercase">
                  Real-time Progress
                </h3>
                <div className="text-center py-4">
                  <div className="text-3xl font-bold text-white font-mono">0.0h</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">of 4.0h goal</div>
                </div>
                <div className="w-full h-2 bg-[#11141B] rounded-full overflow-hidden">
                  <div className="w-0 h-full bg-gradient-to-r from-electric-indigo to-electric-cyan rounded-full transition-all duration-500" />
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}