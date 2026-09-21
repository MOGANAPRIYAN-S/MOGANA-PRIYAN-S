import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  Bot,
  User,
  RefreshCw,
  Terminal,
  HelpCircle,
  Copy,
  Check,
  Zap,
  MessageSquare
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface AIAssistantProps {
  profile: ProfileInfo;
}

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ profile }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I am the personal AI representative for **Mogana Priyan S** (AI & Data Science Student | SIH 2026 Best Performer | Innovator). 

How can I help you explore Mogana's background, hackathon solutions, skills, or research projects today?`,
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    'Tell me about Mogana Priyan',
    'Show skills',
    'Show projects',
    'Show certificates',
    'Show achievements',
    'Contact details'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input.trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!queryText) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend })
      });

      const data = await response.json();
      const replyText =
        data.reply ||
        'I am currently experiencing network latency. Please check Mogana Priyan’s projects and skills directly in the sections above!';

      const assistantMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'assistant',
          text: `Mogana Priyan S is an AI & Data Science undergraduate, SIH 2026 Best Performer, and builder of the Blockchain-Based Blue Carbon MRV and AI Material Harmonization systems. Feel free to contact him directly at priyansai2008@gmail.com!`,
          timestamp: 'Just now'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="ai-assistant" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Aurora Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-gradient-to-r from-[#00E5FF]/10 via-[#8B5CF6]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>09 // PORTFOLIO INTELLIGENCE ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Conversational AI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">
              Assistant
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interact with an AI agent with comprehensive context on Mogana Priyan's technical proficiencies, project architectures, and hackathon honors.
          </p>
        </div>

        {/* Chatbot Interface Window */}
        <div className="rounded-3xl bg-[#090C15] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-2xl">
          {/* HUD Window Header */}
          <div className="px-6 py-4 bg-[#0c101c] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#8B5CF6] p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-[#050505] rounded-[9px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#00E5FF]" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-white flex items-center gap-2">
                  <span>Mogana's AI Agent</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
                <p className="text-[11px] font-mono text-slate-400">
                  Model: Gemini 3.8 Flash • Real-Time Grounding
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setMessages([
                  {
                    id: 'welcome-reset',
                    sender: 'assistant',
                    text: `Chat reset! Ask me anything about Mogana Priyan's AI projects, hackathon accomplishments, or technical skills.`,
                    timestamp: 'Just now'
                  }
                ])
              }
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-all cursor-pointer"
              title="Reset Conversation"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Prompt Pills from Prompt */}
          <div className="p-4 bg-[#080b13] border-b border-white/5 flex flex-wrap gap-2">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mr-2">
              <Zap className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Quick Inquiries:</span>
            </span>
            {sampleQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                disabled={isLoading}
                className="px-3 py-1 rounded-xl text-xs font-mono bg-white/5 hover:bg-[#00E5FF]/10 text-slate-300 hover:text-[#00E5FF] border border-white/10 hover:border-[#00E5FF]/30 transition-all cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="p-6 h-[380px] overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-8 h-8 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-[#00E5FF]" />
                  </div>
                )}

                <div
                  className={`relative max-w-xl rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] text-slate-900 font-medium'
                      : 'bg-white/[0.03] border border-white/10 text-slate-200 shadow-md'
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.text}</div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/10 sm:border-white/5 text-[10px] font-mono opacity-70">
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'assistant' && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="hover:opacity-100 flex items-center gap-1 cursor-pointer"
                        title="Copy Response"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4 text-[#8B5CF6]" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#00E5FF] animate-spin" />
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
                  <span>Synthesizing portfolio knowledge with Gemini...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 bg-[#0a0d17] border-t border-white/10 flex items-center gap-3"
          >
            <input
              type="text"
              placeholder="Ask anything about Mogana Priyan S (e.g., Explain the Blue Carbon MRV project)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-900 bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] hover:brightness-110 disabled:opacity-40 transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Ask</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
