import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VodiyMoto | Mototsikl savdo veb-sayti",
  description:
    "Sport, yuk tashuvchi va elektr mototsikllar uchun premium savdo veb-sayti. Leadlar Telegram va amoCRM ga tushadi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
