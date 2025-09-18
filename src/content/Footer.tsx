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

// Footer 内容数据
export const footer: FooterContent = {
  disclaimer: {
    jp: "本サイトの情報は研究・教育目的であり、投資勧誘や投資助言を目的とするものではありません。",
    en: "The information on this site is for research and educational purposes only and does not constitute investment advice or solicitation.",
  },
  links: [
    { path: "/legal", labelJp: "免責事項", labelEn: "Legal" },
    { path: "/privacy", labelJp: "プライバシー", labelEn: "Privacy" },
    { path: "/contact", labelJp: "お問い合わせ", labelEn: "Contact" },
  ],
  copyrightJP: "© 2025 Swordbay合同会社",
};
