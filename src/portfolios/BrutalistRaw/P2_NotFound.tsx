const P2_NotFound = () => {
  return (
    <main className="h-full flex flex-col items-center justify-center px-6 bg-yellow-300 font-space">
      <div className="max-w-xl w-full">
        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-sm font-bold uppercase">404</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold uppercase tracking-tighter text-black">
            Page Not Found
          </h1>
          <a
            href="/"
            className="mt-6 inline-flex border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-yellow-300 transition-colors uppercase text-sm"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
};

export default P2_NotFound;
