// src/content/latest.ts
export type LatestItem = {
  slug: string;          // 用于 URL: /latest/[slug]
  date: string;          // ISO: 2025-09-14
  cover: string;         // /latest/xxx.jpg
  titleJp: string;
  titleEn: string;
  excerptJp: string;
  excerptEn: string;
  tags?: string[];
};

// 先占位三四条，随时加减
export const latestItems: LatestItem[] = [
  {
    slug: "open-house",
    date: "2025-09-10",
    cover: "/latest/event.jpg",
    titleJp: "社内オープンセッション開催",
    titleEn: "Internal Open Session",
    excerptJp: "研究ノート・実装例の共有と Q&A の予告。",
    excerptEn: "Sharing research notes & implementations; Q&A announced.",
    tags: ["Event"]
  }
];
