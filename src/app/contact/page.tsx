// src/app/contact/page.tsx
"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";

type FormState = "idle" | "submitting" | "ok" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError("");

    const form = e.currentTarget;
    // FormData -> Record<string, string>
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // 尝试读取服务端返回文本；取不到就给默认提示
        const txt = await res.text().catch(() => "");
        throw new Error(txt || "送信に失敗しました。再度お試しください。");
      }

      setState("ok");
      form.reset();
    } catch (err: unknown) {
      setState("error");
      const errorMessage =
        err instanceof Error ? err.message : "送信に失敗しました。再度お試しください。";
      setError(errorMessage);
    }
  }

  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      {/* タイトル */}
      <section className="px-6 pt-20 pb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Contact</h1>
        <p className="mt-2 text-white/75">お問い合わせ</p>
      </section>

      {/* Founder カード */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-8 items-start">
            {/* 方形写真 */}
            <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden border border-white/15 bg-black/30">
              <Image
                src="/founder.jpg"
                alt="Founder portrait"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* 文案 */}
            <div className="space-y-4">
              <div className="leading-tight">
                <div className="text-[12px] text-white/70">ガオ　テツゲン</div>
                <div className="text-2xl font-semibold">高 鉄源</div>
                <div className="text-white/80 mt-1">
                  Nathan Gao — 数量的システムアーキテクト・独立研究者
                </div>
              </div>

              <p className="text-white/85">
                学際的な視点から金融市場のモデリングに取り組み、デリバティブや有価証券における
                量的取引システムを開発。現在は AI 垂直モデルを中核とした自己学習型クローズドループ
                システム「Turbulence」を構築中。
              </p>

              <p className="text-white/85">
                Dedicated to interdisciplinary approaches to financial market modeling,
                developing quantitative trading systems for derivatives and securities.
                Currently building “Turbulence,” a self-learning closed-loop system driven by
                AI vertical models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フォーム */}
      <section className="px-6 pb-24">
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
        >
          {/* 第一行：業種 / お問い合わせ種別 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/80 mb-2">業種*</label>
              <select
                name="business"
                required
                className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-white/30"
                defaultValue=""
              >
                <option value="" disabled>
                  選択してください
                </option>
                <option>一般</option>
                <option>メディア</option>
                <option>協業</option>
                <option>採用</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">お問い合わせ種別*</label>
              <select
                name="reason"
                required
                className="w-full rounded-lg bg黑/30 border border-white/15 px-3 py-2 outline-none focus:border-white/30"
                defaultValue="一般的なお問い合わせ"
              >
                <option>一般的なお問い合わせ</option>
                <option>メディア関連</option>
                <option>スポンサーシップ</option>
                <option>パートナーシップ</option>
              </select>
            </div>
          </div>

          {/* 第二行：名前 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm text-white/80 mb-2">名*</label>
              <input
                name="firstName"
                required
                className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-white/30"
              />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-2">姓*</label>
              <input
                name="lastName"
                required
                className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-white/30"
              />
            </div>
          </div>

          {/* 第三行：メール / 電話 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm text-white/80 mb-2">メールアドレス*</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-white/30"
              />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-2">電話番号</label>
              <input
                name="phone"
                className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-white/30"
              />
            </div>
          </div>

          {/* 第四行：会社 */}
          <div className="mt-6">
            <label className="block text-sm text-white/80 mb-2">会社名</label>
            <input
              name="company"
              className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-white/30"
            />
          </div>

          {/* メッセージ */}
          <div className="mt-6">
            <label className="block text-sm text-white/80 mb-2">お問い合わせ内容*</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-white/30"
              placeholder="ご用件をご記入ください"
            />
          </div>

          {/* 送信状態 */}
          <div className="mt-6 flex items-center gap-4">
            <button
              disabled={state === "submitting"}
              className="rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-white/90 disabled:opacity-60"
            >
              {state === "submitting" ? "送信中…" : "送信"}
            </button>

            {state === "ok" && (
              <span className="text-sm text-emerald-400">
                送信が完了しました。ありがとうございます。
              </span>
            )}
            {state === "error" && (
              <span className="text-sm text-rose-400">送信に失敗しました: {error}</span>
            )}
          </div>

          {/* 合規提示 */}
          <p className="mt-6 text-xs text-white/60 text-center">
            本サイトは情報提供のみを目的としています。当社は自己勘定のみで運用します。 /
            Information only. We operate solely with proprietary capital.
          </p>
        </form>
      </section>
    </main>
  );
}
