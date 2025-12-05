import React, { useState, useEffect } from 'react';
import { 
  Terminal, Shield, Cpu, Lock, Globe, 
  Menu, X, Award, TrendingUp, ChevronRight,
  RefreshCw, AlertTriangle, BarChart, Zap, LayoutDashboard
} from 'lucide-react';
import { SKILLS } from './constants';
import { AppView, NavigationState, Skill, Level, Exercise } from './types';
import { ExercisePlayer } from './components/ExercisePlayer';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, YAxis, CartesianGrid } from 'recharts';

const UserAvatar = () => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-hacker-primary to-blue-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-500 blur-[2px]"></div>
    <img 
      src="https://picsum.photos/100/100" 
      alt="User" 
      className="relative w-9 h-9 rounded-full border-2 border-[#0a0a0a] object-cover" 
    />
    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-hacker-primary border-2 border-[#0a0a0a] rounded-full"></div>
  </div>
);

const App: React.FC = () => {
  const [navState, setNavState] = useState<NavigationState>({ view: AppView.DASHBOARD });
  const [userXP, setUserXP] = useState(1250);
  const [streak, setStreak] = useState(5);
  const [rank, setRank] = useState(42);
  const [completedEx, setCompletedEx] = useState<string[]>(['py-1-1', 'py-1-2']);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showResetModal, setShowResetModal] = useState(false);

  // Mock Data for Chart
  const activityData = [
    { day: 'Mon', xp: 120 }, { day: 'Tue', xp: 200 }, { day: 'Wed', xp: 150 },
    { day: 'Thu', xp: 320 }, { day: 'Fri', xp: 180 }, { day: 'Sat', xp: 450 },
    { day: 'Sun', xp: userXP > 2000 ? 500 : 300 } 
  ];

  const handleExerciseComplete = (xp: number) => {
    setUserXP(prev => prev + xp);
    if (navState.activeExerciseId) {
      setCompletedEx(prev => [...prev, navState.activeExerciseId!]);
    }
  };

  const handleResetProgress = () => {
    setUserXP(0);
    setStreak(0);
    setRank(999);
    setCompletedEx([]);
    setShowResetModal(false);
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Terminal': return <Terminal size={24} />;
      case 'Globe': return <Globe size={24} />;
      case 'Monitor': return <Terminal size={24} />; // Fallback reused
      case 'Cpu': return <Cpu size={24} />;
      case 'Lock': return <Lock size={24} />;
      default: return <Shield size={24} />;
    }
  };

  // --- Views ---

  const renderDashboard = () => (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-hacker-primary to-blue-500">Operator</span>.
          </h1>
          <p className="text-hacker-muted text-lg font-light">Your systems are online. 5 training modules available.</p>
        </div>
        <div className="text-right hidden md:block">
           <div className="text-xs text-hacker-muted uppercase tracking-widest mb-1">System Status</div>
           <div className="flex items-center gap-2 text-hacker-primary bg-hacker-primary/10 px-3 py-1 rounded-full text-xs font-bold border border-hacker-primary/20">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hacker-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-hacker-primary"></span>
              </span>
             OPERATIONAL
           </div>
        </div>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<Zap size={24} />} 
          value={`${userXP} XP`} 
          label="Total Experience" 
          color="text-hacker-primary" 
          bg="bg-hacker-primary/10"
          border="hover:border-hacker-primary/40"
        />
        <StatCard 
          icon={<Award size={24} />} 
          value={`${streak} Days`} 
          label="Current Streak" 
          color="text-hacker-accent" 
          bg="bg-hacker-accent/10"
          border="hover:border-hacker-accent/40"
        />
        <StatCard 
          icon={<Shield size={24} />} 
          value={`Level ${Math.floor(userXP / 1000) + 1}`} 
          label="Security Clearance" 
          color="text-hacker-secondary" 
          bg="bg-hacker-secondary/10"
          border="hover:border-hacker-secondary/40"
        />
        <StatCard 
          icon={<BarChart size={24} />} 
          value={`#${rank}`} 
          label="Global Rank" 
          color="text-blue-400" 
          bg="bg-blue-500/10"
          border="hover:border-blue-500/40"
        />
      </div>

      {/* Activity Chart */}
      <div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <TrendingUp size={20} className="text-hacker-muted" /> Activity Log
            </h3>
            <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-hacker-primary/20"></span>
                <span className="w-3 h-3 rounded-full bg-hacker-primary/50"></span>
                <span className="w-3 h-3 rounded-full bg-hacker-primary"></span>
            </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={userXP === 0 ? [] : activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00dc82" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00dc82" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" opacity={0.3} />
              <XAxis 
                dataKey="day" 
                stroke="#52525b" 
                tick={{fill: '#71717a', fontSize: 12}} 
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                stroke="#52525b" 
                tick={{fill: '#71717a', fontSize: 12}} 
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                    backgroundColor: '#18181b', 
                    border: '1px solid #27272a',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                }}
                itemStyle={{ color: '#00dc82' }}
                cursor={{ stroke: '#00dc82', strokeWidth: 1, strokeDasharray: '5 5' }}
              />
              <Area 
                type="monotone" 
                dataKey="xp" 
                stroke="#00dc82" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorXp)" 
              />
            </AreaChart>
          </ResponsiveContainer>
          {userXP === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-hacker-muted/50 backdrop-blur-sm bg-black/20">
              <BarChart size={48} className="mb-2 opacity-20" />
              <span className="text-sm">No activity data recorded yet.</span>
            </div>
          )}
        </div>
      </div>

      {/* Skills Grid */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Training Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill) => {
            const totalExercises = skill.levels.reduce((acc, lvl) => acc + lvl.exercises.length, 0);
            const completedInSkill = skill.levels.reduce((acc, lvl) => {
               return acc + lvl.exercises.filter(ex => completedEx.includes(ex.id)).length;
            }, 0);
            const progress = totalExercises > 0 ? (completedInSkill / totalExercises) * 100 : 0;

            return (
              <div 
                key={skill.id}
                onClick={() => setNavState({ view: AppView.SKILL_DETAILS, activeSkillId: skill.id })}
                className="group glass-card rounded-2xl p-6 cursor-pointer relative overflow-hidden flex flex-col h-full"
              >
                {/* Background Glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl ${skill.color.replace('text', 'bg')}`}></div>
                
                <div className="flex items-start justify-between mb-4">
                     <div className={`p-3 rounded-xl bg-white/5 ${skill.color}`}>
                        {getIcon(skill.icon)}
                    </div>
                    <div className="text-hacker-muted group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-300">
                        <ChevronRight />
                    </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-hacker-primary transition-colors">{skill.title}</h4>
                <p className="text-sm text-hacker-muted mb-6 line-clamp-2 leading-relaxed flex-1">{skill.description}</p>
                
                <div className="mt-auto">
                    <div className="flex justify-between mb-2 text-xs font-medium text-gray-400">
                        <span>Progress</span>
                        <span className="text-white">{Math.round(progress)}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div 
                        className="bg-hacker-primary h-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(0,220,130,0.5)]" 
                        style={{ width: `${progress}%` }}
                    ></div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderSkillDetails = () => {
    const skill = SKILLS.find(s => s.id === navState.activeSkillId);
    if (!skill) return <div>Skill not found</div>;

    return (
      <div className="p-6 md:p-10 max-w-5xl mx-auto min-h-screen animate-fade-in pb-20">
        <button 
          onClick={() => setNavState({ view: AppView.DASHBOARD })}
          className="flex items-center gap-2 text-hacker-muted hover:text-white mb-8 transition group w-fit"
        >
          <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 transition">
             <ChevronRight className="rotate-180" size={16} /> 
          </div>
          <span className="font-medium">Back to Dashboard</span>
        </button>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 border-b border-white/5 pb-8">
          <div className={`p-6 glass-panel rounded-3xl ${skill.color} shadow-lg shadow-black/40`}>
            {getIcon(skill.icon)}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">{skill.title}</h1>
            <p className="text-hacker-muted text-lg max-w-2xl leading-relaxed">{skill.description}</p>
          </div>
        </div>

        <div className="space-y-12">
          {skill.levels.map((level, idx) => (
            <div key={level.id} className="relative pl-8 md:pl-12 border-l-2 border-white/5">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#050505] border-2 border-hacker-primary flex items-center justify-center text-[10px] text-hacker-primary font-bold shadow-[0_0_10px_rgba(0,220,130,0.3)] z-10">
                {idx + 1}
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{level.title}</h3>
                <p className="text-sm text-hacker-muted mb-6 font-mono opacity-70">{level.description}</p>
                
                <div className="grid grid-cols-1 gap-3">
                  {level.exercises.map((ex) => {
                    const isCompleted = completedEx.includes(ex.id);
                    return (
                      <div 
                        key={ex.id}
                        onClick={() => setNavState({ 
                          view: AppView.EXERCISE, 
                          activeSkillId: skill.id, 
                          activeLevelId: level.id, 
                          activeExerciseId: ex.id 
                        })}
                        className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isCompleted 
                            ? 'bg-green-500/5 border-green-500/20 hover:bg-green-500/10' 
                            : 'bg-white/[0.02] border-white/5 hover:border-hacker-primary/30 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-2.5 h-2.5 rounded-full transition-colors ${isCompleted ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-gray-700 group-hover:bg-hacker-primary'}`}></div>
                          <span className={`font-medium ${isCompleted ? 'text-green-400' : 'text-gray-300 group-hover:text-white'}`}>{ex.title}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-black/40 border border-white/5 ${
                              ex.difficulty === 'easy' ? 'text-green-400' : ex.difficulty === 'medium' ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                              {ex.difficulty}
                          </span>
                          <span className="text-xs font-mono text-hacker-primary bg-hacker-primary/10 px-2 py-1 rounded border border-hacker-primary/20">{ex.xpReward} XP</span>
                          {isCompleted && <Award size={18} className="text-hacker-primary animate-pulse-slow" />}
                          <ChevronRight size={16} className="text-gray-600 group-hover:text-white transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderView = () => {
    switch(navState.view) {
      case AppView.EXERCISE:
        const skill = SKILLS.find(s => s.id === navState.activeSkillId);
        const level = skill?.levels.find(l => l.id === navState.activeLevelId);
        const exercise = level?.exercises.find(e => e.id === navState.activeExerciseId);
        
        if (!exercise) return <div>Exercise Not Found</div>;
        
        return (
          <ExercisePlayer 
            exercise={exercise} 
            onBack={() => setNavState({ view: AppView.SKILL_DETAILS, activeSkillId: navState.activeSkillId })}
            onComplete={handleExerciseComplete}
          />
        );
      case AppView.SKILL_DETAILS:
        return (
          <div className="flex flex-col md:flex-row min-h-screen bg-hacker-bg selection:bg-hacker-primary selection:text-black">
            <Sidebar 
              active={navState.view} 
              onChange={(v) => setNavState({ view: v })} 
              isOpen={sidebarOpen} 
              toggle={() => setSidebarOpen(!sidebarOpen)}
              onResetRequest={() => setShowResetModal(true)}
            />
             <div className="flex-1 overflow-auto h-screen relative custom-scrollbar">
                <MobileHeader toggle={() => setSidebarOpen(!sidebarOpen)} />
                {renderSkillDetails()}
             </div>
             {showResetModal && (
              <ResetModal 
                onConfirm={handleResetProgress} 
                onCancel={() => setShowResetModal(false)} 
              />
            )}
          </div>
        );
      case AppView.DASHBOARD:
      default:
        return (
          <div className="flex flex-col md:flex-row min-h-screen bg-hacker-bg selection:bg-hacker-primary selection:text-black">
            <Sidebar 
              active={navState.view} 
              onChange={(v) => setNavState({ view: v })} 
              isOpen={sidebarOpen} 
              toggle={() => setSidebarOpen(!sidebarOpen)}
              onResetRequest={() => setShowResetModal(true)}
            />
            <div className="flex-1 overflow-auto h-screen relative custom-scrollbar">
              <MobileHeader toggle={() => setSidebarOpen(!sidebarOpen)} />
              {renderDashboard()}
            </div>
            {showResetModal && (
              <ResetModal 
                onConfirm={handleResetProgress} 
                onCancel={() => setShowResetModal(false)} 
              />
            )}
          </div>
        );
    }
  };

  return renderView();
};

const StatCard = ({ icon, value, label, color, bg, border }: any) => (
  <div className={`glass-card rounded-xl p-6 flex items-center gap-5 transition duration-300 hover:-translate-y-1 ${border}`}>
    <div className={`p-4 rounded-xl ${bg} ${color} shadow-lg shadow-black/20`}>
      {icon}
    </div>
    <div>
      <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
      <div className="text-sm text-hacker-muted font-medium">{label}</div>
    </div>
  </div>
);

const ResetModal = ({ onConfirm, onCancel }: { onConfirm: () => void, onCancel: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in">
    <div className="bg-[#0f0f11] border border-red-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-red-900/10 relative overflow-hidden">
        {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
      
      <div className="flex items-center gap-4 text-red-500 mb-6">
        <div className="p-3 bg-red-500/10 rounded-full border border-red-500/20">
            <AlertTriangle size={32} />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-white">Danger Zone</h3>
      </div>
      
      <div className="space-y-4 mb-8">
        <p className="text-gray-300 leading-relaxed">
            You are about to <span className="text-red-400 font-bold">RESET ALL PROGRESS</span>.
        </p>
        <div className="bg-red-950/20 border border-red-500/20 rounded-lg p-4 text-sm text-red-200/80">
            <ul className="list-disc list-inside space-y-1">
                <li>XP will return to 0</li>
                <li>Streak will reset</li>
                <li>Rank will drop to default</li>
                <li>All completed exercises will be lost</li>
            </ul>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button 
          onClick={onCancel}
          className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition border border-white/10"
        >
          Cancel
        </button>
        <button 
          onClick={onConfirm}
          className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold transition shadow-lg shadow-red-900/30 flex items-center gap-2"
        >
          <RefreshCw size={18} />
          Reset Everything
        </button>
      </div>
    </div>
  </div>
);

const MobileHeader = ({ toggle }: { toggle: () => void }) => (
  <div className="md:hidden h-16 border-b border-white/5 flex items-center px-4 justify-between bg-[#050505]/80 backdrop-blur-md sticky top-0 z-20">
    <div className="flex items-center gap-2 font-bold text-white tracking-wider">
      <span className="text-hacker-primary">Student</span>X
    </div>
    <button onClick={toggle} className="text-white p-2">
      <Menu />
    </button>
  </div>
);

const Sidebar = ({ 
  active, 
  onChange, 
  isOpen, 
  toggle,
  onResetRequest 
}: { 
  active: AppView, 
  onChange: (v: AppView) => void, 
  isOpen: boolean, 
  toggle: () => void,
  onResetRequest: () => void
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 md:hidden animate-fade-in" onClick={toggle} />}
      
      <div className={`
        fixed md:static inset-y-0 left-0 z-40 w-72 bg-[#08080a] border-r border-white/5 flex flex-col transition-transform duration-300 transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <div className="h-20 flex items-center px-6 border-b border-white/5">
           <div className="flex items-center gap-2 font-bold text-xl text-white tracking-tight">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-hacker-primary to-blue-600 flex items-center justify-center text-black font-mono shadow-[0_0_15px_rgba(0,220,130,0.4)]">
                &gt;_
            </div>
            <span>Student<span className="text-hacker-primary">X</span></span>
          </div>
          <button onClick={toggle} className="ml-auto md:hidden text-hacker-muted">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <NavButton 
            active={active === AppView.DASHBOARD} 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            onClick={() => { onChange(AppView.DASHBOARD); if(window.innerWidth < 768) toggle(); }} 
          />
          
          <div className="mt-8 mb-2 px-3 text-[10px] font-bold text-hacker-muted uppercase tracking-widest opacity-60">Academy</div>
          <NavButton 
            active={active === AppView.SKILL_DETAILS || active === AppView.EXERCISE} // Highlight if in sub-views
            icon={<Terminal size={20} />} 
            label="Curriculum" 
            onClick={() => { onChange(AppView.DASHBOARD); if(window.innerWidth < 768) toggle(); }} 
          />
          <NavButton 
            active={active === AppView.CERTIFICATES} 
            icon={<Award size={20} />} 
            label="Certificates" 
            onClick={() => { /* Mock */ }} 
          />
        </nav>

        <div className="p-4 bg-[#050505] border-t border-white/5">
           {/* Reset Button */}
           <button 
            onClick={onResetRequest}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:text-white hover:bg-red-500/10 transition-colors border border-transparent hover:border-red-500/20 mb-4 group"
          >
            <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
            Reset Progress
          </button>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
            <UserAvatar />
            <div className="overflow-hidden flex-1">
              <div className="text-sm font-bold text-white truncate group-hover:text-hacker-primary transition-colors">HackerOne</div>
              <div className="text-xs text-hacker-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-hacker-primary"></span>
                  Online
              </div>
            </div>
            <div className="p-1 rounded bg-hacker-primary/20 text-[10px] font-bold text-hacker-primary px-2">PRO</div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavButton = ({ active, icon, label, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
      active 
        ? 'bg-hacker-primary/10 text-hacker-primary border border-hacker-primary/20 shadow-[0_0_10px_rgba(0,220,130,0.1)]' 
        : 'text-hacker-muted hover:text-white hover:bg-white/5 border border-transparent'
    }`}
  >
    {icon}
    {label}
  </button>
);

export default App;