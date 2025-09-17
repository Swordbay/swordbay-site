<section className="relative min-h-[70vh] flex flex-col justify-center text-white">
  {/* 背景视频 */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/hero.webm" type="video/webm" />
    <source src="/hero.mp4" type="video/mp4" />
  </video>

  {/* 半透明遮罩 */}
  <div className="absolute inset-0 bg-black/50" />

  {/* 左上 LOGO */}
  <div className="absolute top-6 left-6 z-10">
    <Image src={home.hero.logoSrc} alt="Swordbay" width={140} height={40} priority />
  </div>

  {/* 主文案 */}
  <div className="relative z-10 mx-auto max-w-4xl px-6 text-center space-y-6">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
      <span className="block mt-2 text-white/85">{home.hero.title.jp}</span>
      <span className="block">{home.hero.title.en}</span>
    </h1>
    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      <span className="block mt-1 text-white/75">{home.hero.subtitle.jp}</span>
      <span className="block">{home.hero.subtitle.en}</span>
    </p>
  </div>
</section>
