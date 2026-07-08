import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageSquare, FiSend, FiX } from "react-icons/fi";
import { EASE } from "../lib/motion";

/**
 * Floating assistant widget. Keeps the original demo-response behaviour,
 * wrapped in a premium glass UI with animated transitions.
 */
const getBotResponse = (msg) => {
  const m = msg.toLowerCase();
  if (m.includes("hello") || m.includes("hi")) return "Hey there! 👋 Ask me about Shashidhar's skills, experience or projects.";
  if (m.includes("skill")) return "Shashidhar works across React, Next.js, Node.js, PostgreSQL, TypeScript and AWS. Check the Skills section!";
  if (m.includes("project")) return "Head to the Projects section — each card has a live demo and a quick case study.";
  if (m.includes("contact") || m.includes("hire") || m.includes("email"))
    return "You can reach him via the Contact form below, or on LinkedIn / GitHub. 🚀";
  if (m.includes("help")) return "Sure! Try asking about skills, experience, projects or contact.";
  return "I'm a lightweight demo assistant. Try asking about skills, projects or how to get in touch!";
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm Shashidhar's assistant. How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputValue("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: getBotResponse(text) }]);
    }, 700);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3)] text-black shadow-[0_10px_30px_-6px_rgba(var(--accent-rgb),0.6)]"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isOpen ? "x" : "chat"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <FiX size={22} /> : <FiMessageSquare size={22} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed bottom-24 right-6 z-[60] flex h-[26rem] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-[var(--border-strong)] glass-strong shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-[var(--border)] bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent-3)]/10 p-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3)] text-black">
                <FiMessageSquare size={16} />
              </span>
              <div>
                <div className="text-sm font-semibold text-[var(--text)]">Assistant</div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${
                      msg.sender === "user"
                        ? "rounded-br-sm bg-[var(--text)] text-[var(--bg)]"
                        : "rounded-bl-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-[var(--border)] bg-[var(--surface)] px-3.5 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-[var(--text-muted)]"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-[var(--border)] p-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-faint)] focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                aria-label="Send"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--text)] text-[var(--bg)] transition-transform hover:scale-105"
              >
                <FiSend size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
