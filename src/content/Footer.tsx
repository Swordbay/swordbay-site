// src/content/Footer.tsx

// 链接的类型
export type FooterLink = {
  path: string;
  labelJp?: string;
  labelEn?: string;
};

// Footer 内容的类型
export type FooterContent = {
  disclaimer: {
    jp: string;
    en: string;
  };
  links: FooterLink[];
  copyrightJP: string;
};

// Footer 内容数据（恢复成你 home.ts 的版本）
export const footer: FooterContent = {
  disclaimer: {
    jp: "本サイトは情報提供のみを目的としており、投資勧誘や営業行為を構成しません。当社は自己勘定でのみ運用します。",
    en: "Information only. We operate solely with proprietary capital.",
  },
  links: [
    { path: "/disclosures", labelJp: "免責事項", labelEn: "Disclosures" },
    { path: "/privacy", labelJp: "プライバシー", labelEn: "Privacy" },
    { path: "/cookies", labelJp: "クッキー", labelEn: "Cookies" },
    { path: "/legal", labelJp: "会社情報", labelEn: "Company Info" },
  ],
  copyrightJP: "© 2025 Swordbay合同会社. All rights reserved.",
};
