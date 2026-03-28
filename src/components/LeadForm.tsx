"use client";

import { useMemo, useState } from "react";

type LeadFormProps = {
  source?: string;
  category?: string;
  compact?: boolean;
};

type Status = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  phone: "",
  category: "",
  message: "",
};

export function LeadForm({ source = "website", category = "", compact = false }: LeadFormProps) {
  const [form, setForm] = useState({ ...initialForm, category });
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const title = useMemo(
    () => (compact ? "Tezkor so'rov" : "Moto bo'yicha bepul konsultatsiya oling"),
    [compact],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("Yuborilmoqda...");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source,
          category: form.category || category || "Umumiy",
        }),
      });

      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "So'rov yuborilmadi");
      }

      setStatus("success");
      setFeedback("Rahmat! So'rovingiz qabul qilindi. Tez orada bog'lanamiz.");
      setForm({ ...initialForm, category });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Xatolik yuz berdi";
      setStatus("error");
      setFeedback(message);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur md:p-8">
      <div className="mb-6">
        <p className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
          Lead form
        </p>
        <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
          Ma&apos;lumotlaringiz Telegram va amoCRM ga yuboriladi. Menejer siz bilan savdo, narx va mavjudlik bo&apos;yicha bog&apos;lanadi.
        </p>
      </div>

      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm text-slate-300">
          Ismingiz
          <input
            required
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-red-500/50 focus:bg-white/8"
            placeholder="Masalan, Sardorbek"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-300">
          Telefon
          <input
            required
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-red-500/50 focus:bg-white/8"
            placeholder="+998 90 123 45 67"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-300">
          Kategoriya
          <select
            value={form.category}
            onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
            className="h-12 rounded-xl border border-white/10 bg-slate-900 px-4 text-white outline-none transition focus:border-red-500/50"
          >
            <option value="">Tanlang</option>
            <option value="Sport moto">Sport moto</option>
            <option value="Yuk tashuvchi moto">Yuk tashuvchi moto</option>
            <option value="Elektron moto">Elektron moto</option>
            <option value="Mini mashina">Mini mashina</option>
            <option value="Bolalar motolari">Bolalar motolari</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm text-slate-300">
          Aloqa turi
          <input
            value={source}
            disabled
            className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-slate-500 outline-none"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-300 md:col-span-2">
          Qo&apos;shimcha izoh
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-red-500/50 focus:bg-white/8"
            placeholder="Qaysi model qiziqtiryapti, muddatli to'lov kerakmi va hokazo"
          />
        </label>

        <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-red-600 px-8 font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Yuborilmoqda..." : "So'rov yuborish"}
          </button>
          <p
            className={`text-sm ${
              status === "success"
                ? "text-green-400"
                : status === "error"
                  ? "text-red-400"
                  : "text-slate-500"
            }`}
          >
            {feedback || "Mijoz leadi CRM tizimiga avtomatik tushadi."}
          </p>
        </div>
      </form>
    </div>
  );
}
