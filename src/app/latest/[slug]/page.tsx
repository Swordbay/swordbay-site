import { latestItems } from "@/content/latest";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return latestItems.map((it) => ({ slug: it.slug }));
}

export const dynamicParams = false;

export default function LatestDetailPage({ params }: Props) {
  const item = latestItems.find((x) => x.slug === params.slug);
  if (!item) return notFound();

  return (
    <main className="relative min-h-screen bg-[#0B0C0E] text-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[360px] w-[360px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-indigo-600/40 via-fuchsia-500/30 to-sky-500/25" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-15 bg-gradient-to-tr from-cyan-500/25 via-purple-500/25 to-pink-500/25" />

      {/* 头图区 */}
      <section className="relative">
        <div className="relative h-[42vh] w-full">
          <Image
            src={item.cover}
            alt={item.titleEn}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent" />
        </div>

        <div className="mx-auto max-w-5xl px-6 -mt-16 relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-5">
            <div className="text-[12px] opacity-80">
              {new Date(item.date).toLocaleDateString("ja-JP")}
            </div>
            <h1 className="mt-1 text-2xl md:text-3xl font-extrabold leading-tight">
              {item.titleJp}
            </h1>
            <p className="text-white/80">{item.titleEn}</p>
            <p className="mt-3 text-white/85">{item.excerptJp}</p>
            <p className="text-white/75">{item.excerptEn}</p>
            {item.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((t) => (
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
        </div>
      </section>

      {/* 正文占位（以后填富文本） */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <article className="prose prose-invert prose-sm md:prose-base max-w-none">
          <p className="opacity-80">
            （本文の詳細は後日公開予定 / Full article to follow.）
          </p>
          <hr />
          <p className="opacity-70 text-sm">
            ※ 本ページは情報提供のみを目的とし、投資勧誘や投資助言を構成しません。/
            For information purposes only; not investment advice or solicitation.
          </p>
        </article>
      </section>
    </main>
  );
}
