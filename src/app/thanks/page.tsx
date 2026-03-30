"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ThanksPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(15);
  const TELEGRAM_URL = "https://t.me/sizning_botingiz"; // O'zingizning Telegram manzilingizni yozing

  useEffect(() => {
    // 15 soniyadan so'ng Telegram-ga yuborish
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = TELEGRAM_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Meta Pixel Purchase event (ixtiyoriy)
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", { currency: "USD", value: 10.0 });
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
      >
        {/* Yashil doira va Check animatsiyasi */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-green-500 p-4 rounded-full shadow-lg shadow-green-200">
            <svg 
              className="w-16 h-16 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </motion.div>
        
        <h1 className="text-3xl font-extrabold text-slate-800 mb-4">
          Muvaffaqiyatli!
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Ma&apos;lumotlaringiz qabul qilindi. Sizni <span className="font-bold text-blue-600">{countdown}</span> soniyadan so&apos;ng Telegram kanalimizga yo&apos;naltiramiz.
        </p>

        {/* Taymer Progress Bar */}
        <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 15, ease: "linear" }}
            className="h-full bg-blue-500"
          />
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={TELEGRAM_URL}
            className="w-full bg-[#229ED9] hover:bg-[#1e8dbf] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          >
            Hozir o&apos;tish (Telegram)
          </a>
          <button
            onClick={() => router.push("/")}
            className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
          >
            Asosiy sahifaga qaytish
          </button>
        </div>
      </motion.div>
    </div>
  );
}