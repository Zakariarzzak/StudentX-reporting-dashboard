import React, { useState, useEffect } from 'react';
import { Exercise, ChatMessage } from '../types';
import { Terminal, Play, HelpCircle, Bot, CheckCircle, AlertCircle, ArrowLeft, Code2, Sparkles, Send } from 'lucide-react';
import { getAIHint, validateWithAI } from '../services/aiService';

interface Props {
  exercise: Exercise;
  onBack: () => void;
  onComplete: (xp: number) => void;
}

export const ExercisePlayer: React.FC<Props> = ({ exercise, onBack, onComplete }) => {
  const [code, setCode] = useState(exercise.starterCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Reset state when exercise changes
    setCode(exercise.starterCode);
    setOutput('');
    setStatus('idle');
    setFeedback('');
    setChatMessages([]);
  }, [exercise]);

  const handleRun = async () => {
    setIsRunning(true);
    setStatus('idle');
    setOutput('Initializing sandbox environment...\nCompiling script...');

    // Simulate network delay for realism
    setTimeout(async () => {
      const result = await validateWithAI(exercise, code);
      
      setIsRunning(false);
      setOutput(result.output || '');
      setFeedback(result.feedback);
      
      if (result.isCorrect) {
        setStatus('success');
        onComplete(exercise.xpReward);
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  const requestHint = async () => {
    if (!isChatOpen) setIsChatOpen(true);
    const userMsg: ChatMessage = { role: 'user', text: "I need a hint." };
    setChatMessages(prev => [...prev, userMsg]);
    
    // Show typing indicator or similar if desired, here we just wait
    const hint = await getAIHint(exercise, code);
    const aiMsg: ChatMessage = { role: 'model', text: hint };
    setChatMessages(prev => [...prev, aiMsg]);
  };

  return (
    <div className="flex flex-col h-full bg-[#050505] text-hacker-text overflow-hidden">
      {/* Header */}
      <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0a0a0a]/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack} 
            className="p-2 hover:bg-white/5 rounded-full text-hacker-muted hover:text-white transition-colors duration-200"
            title="Go Back"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
              <Code2 size={20} className="text-hacker-primary" />
              {exercise.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 text-xs bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
              <span className={`w-2 h-2 rounded-full ${exercise.difficulty === 'easy' ? 'bg-green-500' : exercise.difficulty === 'medium' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
              <span className="uppercase font-semibold tracking-wider opacity-80">{exercise.difficulty}</span>
              <span className="w-px h-3 bg-white/10 mx-1"></span>
              <span className="text-hacker-primary font-mono font-bold">+{exercise.xpReward} XP</span>
            </div>

          <div className="flex gap-2">
            <button 
              onClick={requestHint}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 hover:border-white/10 text-sm font-medium transition-all duration-200 text-hacker-muted hover:text-white"
            >
              <Sparkles size={16} className="text-hacker-secondary" />
              AI Hint
            </button>
            <button 
              onClick={handleRun}
              disabled={isRunning}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-black transition-all duration-200 shadow-lg shadow-hacker-primary/20 ${
                isRunning 
                  ? 'bg-hacker-muted cursor-not-allowed opacity-50' 
                  : 'bg-hacker-primary hover:bg-[#00c070] hover:scale-105 active:scale-95'
              }`}
            >
              {isRunning ? 'Compiling...' : (
                <>
                  <Play size={16} fill="currentColor" />
                  Run Code
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Description & Chat */}
        <div className="w-1/3 border-r border-white/5 flex flex-col bg-[#080808]">
          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
            <div className="mb-8 animate-fade-in">
              <h3 className="text-sm font-bold uppercase tracking-wider text-hacker-muted mb-4 flex items-center gap-2">
                <HelpCircle size={14} /> Mission Brief
              </h3>
              <p className="text-gray-300 leading-7 text-sm">
                {exercise.description}
              </p>
            </div>
            
            <div className="bg-blue-500/5 border border-blue-500/10 p-5 rounded-xl mb-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Bot size={64} />
              </div>
              <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2 text-sm">
                 Instructions
              </h4>
              <ul className="list-disc list-inside text-sm text-blue-200/70 space-y-2 font-light">
                <li>Write Python code to solve the task.</li>
                <li>Check for edge cases in your logic.</li>
                <li>Execute your script to verify against tests.</li>
              </ul>
            </div>

            {isChatOpen && (
              <div className="mt-4 border-t border-white/5 pt-4 flex flex-col h-[300px] animate-slide-in">
                <h4 className="font-bold text-hacker-secondary mb-3 flex items-center gap-2 text-sm">
                  <Bot size={16} /> AI Tutor
                </h4>
                <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-3">
                  {chatMessages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3 rounded-2xl text-sm max-w-[90%] ${
                        msg.role === 'user' 
                          ? 'bg-white/5 border border-white/10 ml-auto text-right rounded-br-none' 
                          : 'bg-hacker-secondary/10 border border-hacker-secondary/20 mr-auto rounded-bl-none text-gray-200'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Editor & Output */}
        <div className="w-2/3 flex flex-col bg-[#0c0c0e]">
          {/* Editor Area */}
          <div className="flex-1 relative font-mono text-sm group">
            <div className="absolute top-0 left-0 w-12 h-full bg-[#111] border-r border-white/5 flex flex-col items-center pt-4 text-xs text-gray-700 select-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="leading-6">{i + 1}</div>
              ))}
            </div>
            <textarea
              spellCheck={false}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="code-editor w-full h-full bg-transparent text-gray-300 p-4 pl-16 resize-none focus:outline-none leading-6 font-mono text-[13px]"
              style={{ tabSize: 4 }}
            />
            <div className="absolute top-2 right-4 text-[10px] bg-white/5 px-2 py-1 rounded border border-white/5 text-gray-500 select-none flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              Python 3.11
            </div>
          </div>

          {/* Console/Output Area */}
          <div className="h-[35%] border-t border-white/5 bg-[#050505] flex flex-col shadow-2xl">
            <div className="h-9 bg-[#0a0a0a] border-b border-white/5 flex items-center px-4 gap-2 text-xs text-hacker-muted select-none justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={12} className="text-hacker-primary" />
                <span className="font-mono tracking-wide">TERMINAL</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              </div>
            </div>
            <div className="flex-1 p-4 font-mono text-sm overflow-y-auto custom-scrollbar">
              {isRunning && (
                <div className="flex items-center gap-2 text-yellow-500/80 animate-pulse">
                  <span className="text-lg">›</span> Executing script...
                </div>
              )}
              {!isRunning && output && (
                <div className="whitespace-pre-wrap text-gray-400 font-light">
                  <span className="text-hacker-primary mr-2">➜</span>
                  {output}
                </div>
              )}
              {!isRunning && status === 'success' && (
                <div className="mt-4 p-4 bg-green-500/5 border border-green-500/20 rounded-lg text-green-400 flex items-start gap-3 animate-fade-in backdrop-blur-sm">
                  <CheckCircle size={20} className="mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold tracking-wide">Mission Accomplished</div>
                    <div className="text-xs opacity-70 mt-1 leading-relaxed">{feedback}</div>
                  </div>
                </div>
              )}
              {!isRunning && status === 'error' && (
                <div className="mt-4 p-4 bg-red-500/5 border border-red-500/20 rounded-lg text-red-400 flex items-start gap-3 animate-fade-in backdrop-blur-sm">
                  <AlertCircle size={20} className="mt-0.5 shrink-0" />
                   <div>
                    <div className="font-bold tracking-wide">Execution Failed</div>
                    <div className="text-xs opacity-70 mt-1 leading-relaxed">{feedback}</div>
                  </div>
                </div>
              )}
              {/* Cursor Blinker */}
              {!isRunning && status === 'idle' && !output && (
                 <span className="inline-block w-2 h-4 bg-gray-600 animate-pulse align-middle ml-1"></span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};