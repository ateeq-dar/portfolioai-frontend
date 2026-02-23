import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "user" | "ai";
  content: string;
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        role: "ai",
        content: data.answer || "Error getting response",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Open Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-2xl z-50"
      >
        <MessageCircle size={22} />
      </motion.button>

      {/* Full Screen Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-[95%] md:w-[70%] lg:w-[55%] h-[85vh] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    AI Resume Assistant
                  </h2>
                  <p className="text-xs text-gray-400">
                    Ask anything about my experience & skills
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:scale-110 transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-sm max-w-[75%] ${msg.role === "user"
                        ? "bg-blue-600 ml-auto text-white"
                        : "bg-gray-800 text-gray-300"
                      }`}
                  >
                    {msg.role === "ai" ? (
                      <ReactMarkdown>
                        {msg.content}
                      </ReactMarkdown>
                    ) : (
                      msg.content
                    )}
                  </div>
                ))}

                {loading && (
                  <div className="flex gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/10 bg-white/5 flex gap-3">
                <input
                  type="text"
                  placeholder="Ask about projects, skills, experience..."
                  className="flex-1 p-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 outline-none transition text-sm"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                  }}
                />
                <button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 rounded-xl hover:scale-105 transition"
                >
                  <Send size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chat;