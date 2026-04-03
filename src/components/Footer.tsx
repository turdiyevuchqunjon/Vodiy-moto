import Link from "next/link";
import AmoCrmForm from "./AmoCrmForm";

export function Footer() {
  return (
    <>
      {/* ─── LEAD FORM ─── */}
      <section id="aloqa" className="mx-auto max-w-7xl px-4 py-4 ">
        <div className="flex items-center justify-center">
    
          {/* <LeadForm source="homepage" /> */}
          <AmoCrmForm />
        </div>
      </section>

    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm text-slate-400 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-red-500 to-red-700 text-sm font-black text-white">
              VM
            </div>
            <p className="text-lg font-semibold text-white">VodiyMoto</p>
          </div>
          <p className="mt-4 max-w-sm leading-6">
            Zamonaviy mototsikllar savdosi uchun premium veb-sayti. Next.js App Router + TypeScript.
          </p>
        </div>
        <div>
          <p className="font-medium text-white">Kategoriyalar</p>
          <ul className="mt-3 space-y-2">
            <li><Link className="transition hover:text-red-400" href="/moto/sport">Sport moto</Link></li>
            <li><Link className="transition hover:text-red-400" href="/moto/cargo">Yuk tashuvchi</Link></li>
            <li><Link className="transition hover:text-red-400" href="/moto/electric">Elektron moto</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-white">Yana</p>
          <ul className="mt-3 space-y-2">
            <li><Link className="transition hover:text-red-400" href="/moto/mini-car">Mini mashina</Link></li>
            <li><Link className="transition hover:text-red-400" href="/moto/kids">Bolalar motolari</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-white">CRM integratsiya</p>
          <ul className="mt-3 space-y-2 leading-6">
            <li>Telegram bot orqali xabarnoma</li>
            <li>amoCRM ga avtomatik lead</li>
            <li>Source va kategoriya segmentatsiya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
          © 2026 VodiyMoto. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>

    </>

  );
}
