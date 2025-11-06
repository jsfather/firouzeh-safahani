import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "فیروزه صفاهانی - هنرمند حرفه‌ای ناخن",
  description:
    "هنر ناخن زیبا و خدمات حرفه‌ای مراقبت از ناخن توسط فیروزه صفاهانی. طراحی‌های زیبا، کیفیت استثنایی و توجه به جزئیات.",
  keywords: [
    "طراحی ناخن",
    "سالن ناخن",
    "مانیکور",
    "ناخن هنری",
    "فیروزه صفاهانی",
    "ناخن حرفه‌ای",
    "کاشت ناخن",
    "ناخن ژل",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} antialiased font-vazirmatn`}>{children}</body>
    </html>
  );
}
