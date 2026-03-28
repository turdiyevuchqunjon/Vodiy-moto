"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export function AmoCrmForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let inserted = false;

    const observer = new MutationObserver(() => {
      const iframe = document.querySelector<HTMLIFrameElement>(
        'iframe[src*="forms.amocrm.ru"]'
      );

      if (iframe && !inserted) {
        inserted = true;

        iframe.style.position = "static";
        iframe.style.width = "100%";
        iframe.style.height = "520px";
        iframe.style.border = "none";
        iframe.style.borderRadius = "16px";
        iframe.style.display = "block";

        container.innerHTML = "";
        container.appendChild(iframe);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur md:p-8">
      <div className="mb-6">
        <p className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
          Lead form
        </p>
        <h3 className="mt-4 text-2xl font-bold text-white">
          Moto bo&apos;yicha bepul konsultatsiya oling
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
          Ma&apos;lumotlaringiz to&apos;g&apos;ridan-to&apos;g&apos;ri
          amoCRM ga yuboriladi. Menejer siz bilan bog&apos;lanadi.
        </p>
      </div>

      {/* amoCRM iframe SHU YERGA tushadi */}
      <div
        ref={containerRef}
        className="overflow-hidden rounded-2xl bg-white"
        style={{ minHeight: 480 }}
      />

      <Script id="amo-init" strategy="afterInteractive">
        {`
          !function(a,m,o,c,r,m){
            a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},
            a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},
            a[o+r]({
              id:"1689430",
              hash:"07dce6d85acc925a4bc4a0eeb313d64a",
              locale:"ru"
            }),
            a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}
          }(window,0,"amo_forms_","params","load","loaded");
        `}
      </Script>

      <Script
        src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1774593744"
        strategy="afterInteractive"
      />
    </div>
  );
}
