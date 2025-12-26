type DevVariantSwitcherProps = {
  count: number;
  currentIndex: number;
};

const DevVariantSwitcher = ({ count, currentIndex }: DevVariantSwitcherProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-2 text-xs uppercase tracking-[0.2em] shadow-sm">
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
