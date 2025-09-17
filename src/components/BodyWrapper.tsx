"use client";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-sans bg-[#0B0C0E] text-white"
      onContextMenu={(e) => e.preventDefault()} // 禁止右键菜单
    >
      {children}
    </div>
  );
}
