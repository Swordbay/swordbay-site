import Link from "next/link";
import { home } from "@/content/home";

export default function Footer() {
  // 容错：没有 footer 或 links 也不报错
  const linksRaw = home?.footer?.links ?? [];

  // 去重：按 path 去重（避免出现同一个 /legal 被写两次导致 key 冲突）
  const links = Array.from(new Map(linksRaw.map((l: any) => [l.path, l])).values());

  return (
    <footer className="bg-[#0B0C0E] text-white/80 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center space-y-4">

        {/* 免责声明：JP 在前，EN 在后 */}
        <p className="text-sm">{home.footer.disclaimer.jp}</p>
        <p className="text-sm">{home.footer.disclaimer.en}</p>

        {/* 链接：日英并列显示，JP 在前 */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {links.map((l, i) => (
            <Link
              key={`${l.path}-${i}`} // 即使 path 重复也不会再报警
              href={l.path}
              className="hover:underline whitespace-nowrap"
            >
              {/* 如果没有 labelJp/labelEn 时的兜底 */}
              {l.labelJp ? l.labelJp : (l.labelEn || "リンク")}
              {l.labelEn ? ` / ${l.labelEn}` : ""}
            </Link>
          ))}
        </div>

        <p className="mt-4 text-xs text-white/60">{home.footer.copyrightJP}</p>
      </div>
    </footer>
  );
}
