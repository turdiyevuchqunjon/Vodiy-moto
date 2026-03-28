import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-400">404</p>
        <h1 className="mt-4 text-4xl font-black">Sahifa topilmadi</h1>
        <p className="mt-4 text-slate-400">Qidirayotgan sahifa mavjud emas yoki manzil o&apos;zgargan.</p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-red-600 px-6 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </main>
  );
}
