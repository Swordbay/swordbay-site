// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BodyWrapper from "@/components/BodyWrapper";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// ✅ SEO + Meta 信息
export const metadata: Metadata = {
  title: "Swordbay | Quantitative Research & Infrastructure",
  description:
    "Swordbay合同会社は、独立系クオンツ研究機関として市場データ、AIモデル、リスク管理を研究・実装しています。",
  openGraph: {
    title: "Swordbay | Quantitative Research & Infrastructure",
    description:
      "Swordbay合同会社は、独立系クオンツ研究機関として市場データ、AIモデル、リスク管理を研究・実装しています。",
    url: "https://swordbay.com", // 你绑定的主域名
    siteName: "Swordbay",
    images: [
      {
        url: "/og.png", // 👉 记得在 public/ 里放一张 1200x630 的图
        width: 1200,
        height: 630,
        alt: "Swordbay Open Graph Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  // 👉 你要求追加的简写写法（和上面详细写法并存也没问题）
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" }, // v=2 强制刷新缓存
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>
        <BodyWrapper>
          <Nav />
          <main className="pt-20">{children}</main>
          <Footer />
        </BodyWrapper>
      </body>
    </html>
  );
}
