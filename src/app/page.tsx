import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotoCard } from "@/components/MotoCard";
import { SectionTitle } from "@/components/SectionTitle";
import { companyStats, motoCategories } from "@/data/motos";
import { AmoCrmForm } from "@/components/AmoCrmForm";

const advantages = [
  {
    icon: "🏍️",
    title: "Premium showroom dizayn",
    text: "Qorong'i fon, qizil aksent ranglar, katta hero blok va premium kartalar orqali ishonchli sotuv interfeysi yaratildi.",
  },
  {
    icon: "📄",
    title: "5 ta alohida kategoriya sahifasi",
    text: "Sport, yuk tashuvchi, elektron, mini mashina va bolalar motolari — har biri alohida landing sahifa sifatida ishlaydi.",
  },
  {
    icon: "📲",
    title: "Lead → Telegram → amoCRM",
    text: "Formadan tushgan so'rovlar API route orqali Telegram bot va amoCRM ga yuboriladi. Menejer real vaqt rejimida leadni oladi.",
  },
];

const workflow = [
  { step: "01", text: "Mijoz formani to'ldiradi" },
  { step: "02", text: "Telegram kanalga xabar boradi" },
  { step: "03", text: "amoCRM da lead yaratiladi" },
  { step: "04", text: "Menejer lead bilan ishlaydi" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(220,38,38,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(220,38,38,0.1),transparent_30%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div>
            <p className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-400">
              Next.js App Router + TypeScript
            </p>
            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              VodiyMoto —{" "}
              <span className="bg-linear-to-r from-red-400 via-red-500 to-rose-500 bg-clip-text text-transparent">
                mukammal savdo sayti
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Asosiy panelda brend, kategoriyalar va modellar joylashgan. Har bir yo&apos;nalish uchun alohida sahifa: sport, yuk, elektron, mini mashina va bolalar motolari.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#turlar"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-red-600 px-7 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-500"
              >
                Turlarni ko&apos;rish
              </a>
              <a
                href="#aloqa"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                CRM uchun lead olish
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {companyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/8 bg-white/3 px-4 py-4"
                >
                  <p className="text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="rounded-2xl bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500">Featured</p>
                    <h2 className="mt-1 text-lg font-bold text-white">Sport + Electric line-up</h2>
                  </div>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    New
                  </span>
                </div>
                <Image
                  src="/motos/hero.svg"
                  alt="VodiyMoto premium hero"
                  width={1200}
                  height={900}
                  className="h-auto w-full rounded-2xl border border-white/10 bg-slate-950/60 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY NAV PILLS ─── */}
      <section className="border-y border-white/5 bg-white/2">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-6 sm:px-6 lg:px-8">
          {motoCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/moto/${cat.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ─── MOTO TURLAR GRID ─── */}
      <section id="turlar" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Moto turlari"
          title="Har bir segment uchun alohida sahifa"
          description="Sayt ichida har bir moto turi alohida sahifa ko'rinishida ishlaydi. SEO va reklama kampaniyalar uchun qulay."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {motoCategories.map((moto) => (
            <MotoCard key={moto.slug} moto={moto} />
          ))}
        </div>
      </section>

      {/* ─── AFZALLIKLAR ─── */}
      <section id="afzalliklar" className="border-y border-white/5 bg-white/2">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionTitle
            badge="Afzalliklar"
            title="Sotuvni oshirish uchun tayyor landing"
            description="Premium dizayn, CTA bloklar va marketing oqimiga mos arxitektura. Formadan kelgan lidlar avtomatik CRM jarayoniga tushadi."
          />
          <div className="grid gap-4">
            {advantages.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/8 bg-white/3 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-400">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CRM WORKFLOW ─── */}
      <section id="modellar" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Integratsiya"
          title="Lidlar savdo bo'limiga yo'qolmasdan tushadi"
          description="Form yuborilgach, Telegram ga xabar, amoCRM da lead yaratiladi. Menejerlar qo'lda ko'chirib yurmaydi."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {workflow.map((item) => (
            <div key={item.step} className="rounded-2xl border border-white/8 bg-white/3 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-xl font-black text-red-400">
                {item.step}
              </div>
              <p className="mt-4 text-sm font-medium leading-6 text-slate-200">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LEAD FORM ─── */}
      <section id="aloqa" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-white/8 bg-white/3 p-8">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Savdo bo&apos;limi
            </p>
            <h2 className="mt-5 text-3xl font-bold text-white">Lid yig&apos;ish bloki</h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Foydalanuvchi ism, telefon, kategoriya va izoh qoldiradi. Lead marketing manbasi bilan CRM ga yoziladi.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-400">
              <div className="rounded-xl border border-white/8 bg-slate-950/60 p-4">
                <p className="font-semibold text-white">Telegram integratsiya</p>
                <p className="mt-1.5 leading-6">Har bir yangi so&apos;rov menejerga real vaqt rejimida yuboriladi.</p>
              </div>
              <div className="rounded-xl border border-white/8 bg-slate-950/60 p-4">
                <p className="font-semibold text-white">amoCRM integratsiya</p>
                <p className="mt-1.5 leading-6">Lead nomi, telefon, kategoriya va source bilan yaratiladi.</p>
              </div>
            </div>
          </div>
          {/* <LeadForm source="homepage" /> */}
          <AmoCrmForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
