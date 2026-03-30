import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { getMotoBySlug, motoCategories } from "@/data/motos";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return motoCategories.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const moto = getMotoBySlug(slug);

  if (!moto) {
    return { title: "Kategoriya topilmadi | VodiyMoto" };
  }

  return {
    title: `${moto.name} | VodiyMoto`,
    description: moto.description,
  };
}

export default async function MotoCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const moto = getMotoBySlug(slug);

  if (!moto) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className={`absolute inset-0 bg-linear-to-br ${moto.accent}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              {moto.shortName} yo&apos;nalishi
            </p>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl">{moto.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200/80">{moto.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#lead"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-red-600 px-7 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-500"
              >
                Ma&apos;lumot olish uchun
              </a>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Mototsikllar bo&apos;yicha ma&apos;lumot
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/20 p-3 backdrop-blur">
            <Image
              src={moto.image}
              alt={moto.name}
              width={1200}
              height={900}
              className="h-auto w-full rounded-2xl border border-white/10 bg-slate-950/60 object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Specs + Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/8 bg-white/3 p-7">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">Texnik ko&apos;rsatkichlar</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {moto.specs.map((spec) => (
                <div key={spec.label} className="rounded-xl border border-white/8 bg-slate-950/60 p-4">
                  <p className="text-xs text-slate-500">{spec.label}</p>
                  <p className="mt-1.5 text-lg font-bold text-white">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/3 p-7">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">Afzalliklar</p>
            <div className="mt-5 grid gap-3">
              {moto.features.map((feature, index) => (
                <div key={feature} className="flex gap-4 rounded-xl border border-white/8 bg-slate-950/60 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-sm font-bold text-red-400">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Models catalog */}
      {/* <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
              Modellar
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white">{moto.name} katalogi</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {moto.models.map((model) => (
              <article key={model.name} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/60 transition hover:border-red-500/20">
                <div className={`bg-gradient-to-br ${moto.accent} p-3`}>
                  <Image src={model.image} alt={model.name} width={1200} height={800} className="h-56 w-full rounded-xl object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-white">{model.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{model.description}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-red-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-400">
                      {model.badge}
                    </span>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-2xl font-black text-white">{model.price}</p>
                    <a
                      href="#lead"
                      className="inline-flex h-10 items-center justify-center rounded-xl bg-red-600 px-5 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
                    >
                      Narx so&apos;rash
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* Other categories nav */}
      {/* <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-slate-500">Boshqa kategoriyalar</p>
        <div className="flex flex-wrap gap-3">
          {motoCategories
            .filter((cat) => cat.slug !== moto.slug)
            .map((cat) => (
              <Link
                key={cat.slug}
                href={`/moto/${cat.slug}`}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
              >
                {cat.name}
              </Link>
            ))}
        </div>
      </section> */}

      {/* Lead form */}
      {/* <section id="lead" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <LeadForm source={`category:${moto.slug}`} category={moto.name} />
      </section> */}

      <Footer />
    </main>
  );
}
