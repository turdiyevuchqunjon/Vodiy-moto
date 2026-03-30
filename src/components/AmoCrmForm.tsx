'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function AmoFormCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    // Agar iframe allaqachon konteyner ichida bo'lsa, qayta ishga tushirmaymiz
    if (containerRef.current?.querySelector('iframe')) return;

    const lookForIframe = () => {
      // Yangi form ID si bo'yicha qidiramiz
      const iframe = document.querySelector<HTMLIFrameElement>(
        'iframe[src*="forms.amocrm.ru"]'
      );

      if (iframe && containerRef.current) {
        // === IFRAME STYLISTICS ===
        iframe.style.position = 'static';
        iframe.style.width = '100%';
        iframe.style.height = '550px'; // Formaga qarab balandlikni mosladik
        iframe.style.border = 'none';
        iframe.style.borderRadius = '15px';
        iframe.style.overflow = 'hidden';
        iframe.style.display = 'block';
        iframe.style.background = 'transparent';

        // Konteynerni tozalab, iframe-ni uning ichiga ko'chiramiz
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(iframe);

        // Kuzatuvchini to'xtatamiz
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    };

    // Dastlabki tekshirish
    lookForIframe();

    // Sahifada iframe paydo bo'lishini kuzatish
    observerRef.current = new MutationObserver(lookForIframe);
    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div 
        className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-white text-2xl font-semibold mb-2">
            Ma&apos;lumot uchun
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed">
            Telefon raqamingizni qoldiring — siz bilan tez orada bog&apos;lanamiz
          </p>
        </div>

        {/* Form Container */}
        <div
          ref={containerRef}
          className="px-4 pb-6"
          style={{ minHeight: '560px' }}
        >
          <div className="flex items-center justify-center h-64 text-gray-400 text-sm animate-pulse">
            Forma yuklanmoqda...
          </div>
        </div>

        <div className="text-center pb-4">
          <span className="text-xs text-gray-500">
            Powered by amoCRM
          </span>
        </div>
      </div>

      {/* --- YANGI AMO CRM SCRIPTS --- */}
      <Script id="amo-form-init" strategy="afterInteractive">
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
        id="amoforms_script_1689430"
        src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1774593744"
        strategy="afterInteractive"
        async
      />
    </div>
  );
}