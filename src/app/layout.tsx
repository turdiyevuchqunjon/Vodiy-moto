/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Shriftni import qilish
import "./globals.css";
import Script from "next/script";

// 2. Shriftni sozlash
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vodiy Moto",
  description: "Sifatli mototsikllar va ehtiyot qismlar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning - brauzer tarjimoni tufayli chiqadigan xatolarni yashiradi
    <html lang="uz" suppressHydrationWarning>
      <head>
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '926795840135408');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}

        {/* Noscript qismi */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=926795840135408&ev=PageView&noscript=1"
            alt="facebook-pixel"
          />
        </noscript>
      </body>
    </html>
  );
}