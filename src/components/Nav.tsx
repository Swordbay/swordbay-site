"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { home } from "@/content/home";

export default function Nav() {
  const HEADER_H_MOBILE = 64;
  const HEADER_H_DESKTOP = 76;
  const [open, setOpen] = useState(false);

  // 小交互：按 ESC / 滚动时关闭菜单
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onScroll = () => setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-[#0B0C0E]/70 backdrop-blur-md border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 py-3 md:py-4 flex items-center justify-between">
          {/* 左：Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Home" className="flex items-center" onClick={() => setOpen(false)}>
              <Image
                src={home.hero.logoSrc}
                alt="Swordbay"
                width={240}
                height={72}
                priority
                className="cursor-pointer object-contain"
              />
            </Link>
          </div>

          {/* 右：桌面导航（≥md 显示） */}
          <div className="hidden md:flex items-center gap-12 text-sm font-semibold">
            {home.nav.map((n, i) => (
              <Link
                key={`${n.path}-${i}`}
                href={n.path}
                className="group leading-tight tracking-wide"
              >
                <span className="block group-hover:text-white/90">{n.jp}</span>
                <span className="block text-[12px] text-white/60 group-hover:text-white/80">
                  {n.en}
                </span>
              </Link>
            ))}
          </div>

          {/* 右：手机端汉堡按钮（<md 显示） */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/15 px-3 py-2 text-white/80 hover:text-white hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            {/* 三道杠 / 叉号 */}
            <svg className={`h-5 w-5 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg className={`h-5 w-5 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </nav>

        {/* 手机端下拉菜单 */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 pb-4">
            <div className="rounded-2xl border border-white/10 bg-[#0B0C0E]/90">
              <ul className="py-2">
                {home.nav.map((n, i) => (
                  <li key={`m-${n.path}-${i}`}>
                    <Link
                      href={n.path}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between px-4 py-3 border-b border-white/5 last:border-0"
                    >
                      <span className="text-base">{n.jp}</span>
                      <span className="text-xs text-white/60">{n.en}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 合规一句话（可删） */}
            <p className="mt-3 px-1 text-[11px] text-white/50">
              本サイトは情報提供のみ。投資助言・勧誘を行いません。
            </p>
          </div>
        </div>
      </header>

      {/* Spacer：为 fixed header 预留高度，避免遮挡正文 */}
      <div
        aria-hidden
        className="w-full"
        style={{ height: `clamp(${HEADER_H_MOBILE}px, 7.5vh, ${HEADER_H_DESKTOP}px)` }}
      />
    </>
  );
}
