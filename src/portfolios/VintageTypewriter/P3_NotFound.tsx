const P3_NotFound = () => {
  return (
    <main className="h-full flex flex-col items-center justify-center px-6 bg-[#f4f1ea] font-mono-jb relative">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="max-w-md w-full relative z-10">
        <div className="border-2 border-[#2c2c2c] p-8 bg-[#fffef9] shadow-md text-center">
          <p className="text-sm text-[#8b7355] italic">404</p>
          <h1 className="mt-3 text-3xl font-bold text-[#2c2c2c] tracking-tight">
            Page Missing
          </h1>
          <a
            href="/"
            className="mt-6 inline-flex text-[#2c2c2c] hover:text-[#8b7355] transition-colors text-sm"
          >
            Return home
          </a>
        </div>
      </div>
    </main>
  );
};

export default P3_NotFound;
