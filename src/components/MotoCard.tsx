import Image from "next/image";
import Link from "next/link";
import type { MotoCategory } from "@/data/motos";

type MotoCardProps = {
  moto: MotoCategory;
};

export function MotoCard({ moto }: MotoCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/3 shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 ${moto.accentBorder}`}
    >
      <div className={`relative overflow-hidden bg-linear-to-br ${moto.accent}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_40%)]" />
        <Image
          src={moto.image}
          alt={moto.name}
          width={720}
          height={480}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-white">{moto.name}</h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-slate-400">{moto.tagline}</p>
          </div>
          <span className="shrink-0 rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-400">
            {moto.shortName}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          {moto.specs.slice(0, 4).map((spec) => (
            <div key={spec.label} className="rounded-xl border border-white/8 bg-slate-950/60 px-3 py-2.5">
              <p className="text-[11px] text-slate-500">{spec.label}</p>
              <p className="mt-0.5 font-medium text-white">{spec.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <Link
            href={`/moto/${moto.slug}`}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-xl bg-red-600 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
          >
            Batafsil ko&apos;rish
          </Link>
          <a
            href="#aloqa"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            So&apos;rov →
          </a>
        </div>
      </div>
    </article>
  );
}
