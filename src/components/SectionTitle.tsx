type SectionTitleProps = {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionTitle({ badge, title, description, align = "left" }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
        {badge}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}
