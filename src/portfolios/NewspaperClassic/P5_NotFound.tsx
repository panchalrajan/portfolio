const P5_NotFound = () => {
  return (
    <main className="h-full flex flex-col items-center justify-center px-6 bg-[#faf8f5] font-instrument">
      <div className="max-w-lg w-full text-center">
        <p className="text-xs tracking-[0.5em] text-gray-400 uppercase border-b border-t border-gray-300 py-2">
          404 • Missing Edition
        </p>
        <h1
          className="mt-8 text-5xl md:text-6xl font-bold text-black tracking-tighter"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Page Not Found
        </h1>
        <p
          className="mt-6 text-gray-600 leading-relaxed italic max-w-sm mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          "The story you sought is missing from today’s issue."
        </p>
        <a href="/" className="mt-8 inline-flex text-sm text-gray-600 hover:text-black transition-colors">
          Return to the front page
        </a>
      </div>
    </main>
  );
};

export default P5_NotFound;
