'use client';
import { useEffect, useRef, useState } from 'react';

const CHAT_WEBHOOK = '/api/chat';
const ESCALATE_WEBHOOK = '/api/escalate';

const QUICK_REPLIES = [
  {
    question: 'Wat is Flow-as-a-Service precies?',
    answer:
      'Flow-as-a-Service is ons model waarbij wij complete, autonome workflows bouwen, implementeren en beheren voor uw bedrijf. U betaalt een vaste Setup Fee voor de bouw en een maandelijks abonnement voor onderhoud en optimalisatie. Geen uurtje-factuurtje, maar resultaatgericht werken.',
  },
  {
    question: 'Hoe lang duurt het voordat een flow operationeel is?',
    answer:
      'De meeste standaard flows zijn binnen 2–4 weken volledig operationeel. Dit omvat de initiële setup, integratie met uw bestaande systemen, testen en finetuning. Complexere maatwerkoplossingen kunnen 4–8 weken duren.',
  },
  {
    question: 'Welke systemen kunt u integreren?',
    answer:
      'Wij integreren met vrijwel alle gangbare bedrijfssoftware, waaronder Exact, AFAS, Salesforce, HubSpot, LinkedIn, WhatsApp Business, Slack, Gmail, en vele anderen. Heeft u een specifiek systeem? Stel gerust uw vraag.',
  },
  {
    question: 'Is mijn data veilig bij SequenceFlow?',
    answer:
      'Databeveiliging staat voorop. Wij werken volgens de AVG-richtlijnen, gebruiken versleutelde verbindingen en slaan geen onnodige data op. Uw bedrijfsgegevens blijven te allen tijde van u.',
  },
];

type Message = { role: 'user' | 'bot'; text: string };
type View = 'chat' | 'escalate' | 'success';

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<View>('chat');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hoi! Ik ben de SequenceFlow assistent. Hoe kan ik u helpen?' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [quickRepliesVisible, setQuickRepliesVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const addMessage = (msg: Message) => setMessages((prev) => [...prev, msg]);

  const handleQuickReply = (q: (typeof QUICK_REPLIES)[0]) => {
    setQuickRepliesVisible(false);
    addMessage({ role: 'user', text: q.question });
    addMessage({ role: 'bot', text: q.answer });
  };

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || loading) return;
    setInputValue('');
    setQuickRepliesVisible(false);
    addMessage({ role: 'user', text });
    setLoading(true);
    try {
      const res = await fetch(CHAT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages }),
      });
      const data = await res.json();
      addMessage({ role: 'bot', text: data.reply ?? 'Er is iets misgegaan. Probeer het opnieuw.' });
    } catch {
      addMessage({ role: 'bot', text: 'Er is iets misgegaan. Probeer het opnieuw of neem direct contact op via hallo@sequenceflow.io.' });
    } finally {
      setLoading(false);
    }
  };

  const handleEscalate = async () => {
    if (!email.trim() || loading) return;
    setLoading(true);
    const chatLog = messages.map((m) => `${m.role === 'user' ? 'Bezoeker' : 'Bot'}: ${m.text}`).join('\n');
    try {
      await fetch(ESCALATE_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, chatLog }),
      });
    } finally {
      setLoading(false);
      setView('success');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {/* Chat panel */}
      {isOpen && (
        <div className="flex h-[540px] w-[340px] flex-col overflow-hidden rounded-3xl border border-stroke-3 bg-white shadow-2xl dark:border-stroke-7 dark:bg-background-6 sm:w-[360px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-secondary px-5 py-4 dark:bg-background-8">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-[#C7F56F]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-accent">SequenceFlow</p>
                <p className="text-xs text-accent/60">Assistent</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-accent/60 transition-opacity hover:opacity-100"
              aria-label="Sluiten">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          {view === 'chat' && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#C7F56F]/30 text-secondary dark:text-secondary'
                          : 'bg-background-1 text-secondary dark:bg-background-5 dark:text-accent'
                      }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Quick reply buttons */}
                {quickRepliesVisible && (
                  <div className="flex flex-col gap-2 pt-1">
                    {QUICK_REPLIES.map((q) => (
                      <button
                        key={q.question}
                        onClick={() => handleQuickReply(q)}
                        className="rounded-2xl border border-stroke-3 bg-white px-4 py-2.5 text-left text-xs text-secondary transition-colors hover:border-[#C7F56F] hover:bg-[#C7F56F]/10 dark:border-stroke-7 dark:bg-background-5 dark:text-accent dark:hover:border-[#C7F56F]">
                        {q.question}
                      </button>
                    ))}
                  </div>
                )}

                {/* Loading indicator */}
                {loading && (
                  <div className="flex justify-start">
                    <div className="flex gap-1 rounded-2xl bg-background-1 px-4 py-3 dark:bg-background-5">
                      <span className="size-1.5 animate-bounce rounded-full bg-secondary/40 dark:bg-accent/40" style={{ animationDelay: '0ms' }} />
                      <span className="size-1.5 animate-bounce rounded-full bg-secondary/40 dark:bg-accent/40" style={{ animationDelay: '150ms' }} />
                      <span className="size-1.5 animate-bounce rounded-full bg-secondary/40 dark:bg-accent/40" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Escalate link */}
              <div className="border-t border-stroke-3 px-4 py-2 dark:border-stroke-7">
                <button
                  onClick={() => setView('escalate')}
                  className="w-full text-center text-xs text-secondary/50 transition-colors hover:text-secondary dark:text-accent/50 dark:hover:text-accent">
                  Verbinden met een medewerker →
                </button>
              </div>

              {/* Input */}
              <div className="border-t border-stroke-3 px-4 py-3 dark:border-stroke-7">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Stel een vraag..."
                    className="h-10 flex-1 rounded-full border border-stroke-3 bg-background-1 px-4 text-sm text-secondary placeholder:text-secondary/50 focus:border-secondary focus:outline-none dark:border-stroke-7 dark:bg-background-5 dark:text-accent dark:placeholder:text-accent/50 dark:focus:border-accent/40"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || loading}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary transition-opacity hover:opacity-80 disabled:opacity-30 dark:bg-accent/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="dark:stroke-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}

          {view === 'escalate' && (
            <div className="flex flex-1 flex-col justify-between px-5 py-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-secondary dark:text-accent">Verbinden met een medewerker</p>
                  <p className="mt-1 text-xs text-secondary/60 dark:text-accent/60">
                    Vul uw e-mailadres in. Wij sturen u het chatgesprek toe en nemen contact op.
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-secondary dark:text-accent">E-mailadres</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleEscalate()}
                    placeholder="uw@email.nl"
                    className="h-10 w-full rounded-full border border-stroke-3 bg-background-1 px-4 text-sm text-secondary placeholder:text-secondary/50 focus:border-secondary focus:outline-none dark:border-stroke-7 dark:bg-background-5 dark:text-accent dark:placeholder:text-accent/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <button
                  onClick={handleEscalate}
                  disabled={!email.trim() || loading}
                  className="w-full rounded-full bg-secondary py-2.5 text-sm font-medium text-accent transition-opacity hover:opacity-80 disabled:opacity-40 dark:bg-[#C7F56F] dark:text-secondary">
                  {loading ? 'Versturen...' : 'Verstuur chatgesprek'}
                </button>
                <button
                  onClick={() => setView('chat')}
                  className="w-full rounded-full border border-stroke-3 py-2.5 text-sm text-secondary/60 transition-colors hover:text-secondary dark:border-stroke-7 dark:text-accent/60 dark:hover:text-accent">
                  ← Terug naar chat
                </button>
              </div>
            </div>
          )}

          {view === 'success' && (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-[#C7F56F]/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" className="dark:stroke-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-secondary dark:text-accent">Bedankt!</p>
                <p className="mt-1 text-sm text-secondary/60 dark:text-accent/60">
                  Wij hebben uw chatgesprek ontvangen en nemen zo snel mogelijk contact op via uw e-mail.
                </p>
              </div>
              <button
                onClick={() => { setView('chat'); setEmail(''); }}
                className="text-xs text-secondary/50 hover:text-secondary dark:text-accent/50 dark:hover:text-accent">
                Terug naar chat
              </button>
            </div>
          )}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex size-14 items-center justify-center rounded-full bg-secondary shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-background-8"
        aria-label="Open support chat">
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
