import { latestItems } from "@/content/latest";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "最新情報 / Latest — Swordbay",
};

export default function LatestPage() {
  return (
    <main className="relative min-h-screen bg-[#0B0C0E] text-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[360px] w-[360px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-indigo-600/40 via-fuchsia-500/30 to-sky-500/25" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-15 bg-gradient-to-tr from-cyan-500/25 via-purple-500/25 to-pink-500/25" />
      <div className="pointer-events-none absolute inset-0 opacity-[.04] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.9)_1px,transparent_1.6px)] [background-size:26px_26px]" />

      {/* 页头 */}
      <section className="relative mx-auto max-w-6xl px-6 pt-6 pb-2">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">最新情報 / Latest</h1>
        <p className="mt-2 text-white/70">
          ここに最新のお知らせや記事を掲載します。Updates and announcements will appear here.
        </p>
      </section>

      {/* 照片墙 */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestItems.map((it) => (
            <Link
              key={it.slug}
              href={`/latest/${it.slug}`}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              {/* 封面：1:1 容器 + Image fill */}
              <div className="relative w-full aspect-square">
                <Image
                  src={it.cover}
                  alt={it.titleEn}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
                {/* 顶部角标 */}
                <div className="absolute left-3 top-3 text-[11px] px-2 py-0.5 rounded-full bg-black/45 border border-white/15">
                  {new Date(it.date).toLocaleDateString("ja-JP")}
                </div>
              </div>

              {/* 文本块 */}
              <div className="p-4">
                <h3 className="text-lg font-semibold leading-snug group-hover:opacity-90 line-clamp-2">
                  {it.titleJp}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2 mt-1">{it.titleEn}</p>
                {/* tags */}
                {it.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {it.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
