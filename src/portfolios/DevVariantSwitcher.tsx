import { useState } from "react";

type DevVariantSwitcherProps = {
  count: number;
  currentIndex: number;
};

const DevVariantSwitcher = ({ count, currentIndex }: DevVariantSwitcherProps) => {
  const [copyLabel, setCopyLabel] = useState("Copy URL");

  const copyCurrentUrl = async () => {
    const baseUrl = "https://www.swiftninjadev.com";
    const url = `${baseUrl}${window.location.pathname}${window.location.search}${window.location.hash}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopyLabel("Copied");
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopyLabel("Copied");
    }
    window.setTimeout(() => setCopyLabel("Copy URL"), 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-2 text-xs uppercase tracking-[0.2em] shadow-sm">
      <button
        type="button"
        onClick={copyCurrentUrl}
        className="h-7 rounded-full border border-black/20 px-3 text-[11px] tracking-[0.2em] text-black hover:border-black/60"
        aria-label="Copy page URL"
      >
        {copyLabel}
      </button>
      {Array.from({ length: count }).map((_, index) => {
        const isActive = index === currentIndex;
        return (
          <button
            key={index}
            type="button"
            onClick={() => {
              sessionStorage.setItem("portfolio-variant-index", String(index));
              window.location.reload();
            }}
            className={
              isActive
                ? "h-7 w-7 rounded-full bg-black text-white"
                : "h-7 w-7 rounded-full border border-black/20 text-black hover:border-black/60"
            }
            aria-label={`Switch to variant ${index + 1}`}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default DevVariantSwitcher;
