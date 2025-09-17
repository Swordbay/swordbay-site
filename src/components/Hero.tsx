"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { home } from "@/content/home";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1.0;
  }, []);

  return (
    <section className="relative min-h-[72vh] md:min-h-[88vh] flex items-center justify-center text-white overflow-hidden">
      {/* PC/平板：背景视频；手机：隐藏 */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 hidden md:block h-full w-full object-cover pointer-events-none select-none"
        controls={false}
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
        aria-hidden
        poster="/hero-fallback.jpg"
        style={{ userSelect: "none", WebkitUserSelect: "none", WebkitTouchCallout: "none" }}
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* 手机：静态图（更快更稳） */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/hero-fallback.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* 顶/底 渐变遮罩，提升文字可读性 */}
      <div className="pointer-events-none absolute inset-0 [background:linear-gradient(to_bottom,rgba(0,0,0,.55),rgba(0,0,0,.25)_25%,rgba(0,0,0,.25)_60%,rgba(0,0,0,.65))]" />

      {/* 文案主体（居中） */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* 主标题（先 EN 再 JP）—— 手机更小，>=md 放大 */}
        <h1 className="mt-2 font-extrabold tracking-tight leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]">
          <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            {home.hero.title.en}
          </span>
          <span className="mt-2 block text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white/95">
            {home.hero.title.jp}
          </span>
        </h1>

        {/* 副标题 —— 手机更紧凑 */}
        <p className="mt-3 text-[13px] sm:text-sm md:text-base lg:text-lg text-white/85 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
          <span className="block mt-1 text-white/80">{home.hero.subtitle.jp}</span>
          <span className="block">{home.hero.subtitle.en}</span>
        </p>
      </div>

      {/* 无 JS 的后备占位（SEO/可访问性） */}
      <noscript>
        <style>{`.hero-fallback{position:absolute;inset:0;background:url('/hero-fallback.jpg') center/cover no-repeat;}`}</style>
        <div className="hero-fallback" aria-hidden="true" />
      </noscript>
    </section>
  );
}
