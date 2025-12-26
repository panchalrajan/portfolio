const P4_NotFound = () => {
  return (
    <main className="h-full flex flex-col items-center justify-center px-6 bg-white font-outfit">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
          <span className="text-white font-bold text-xl">404</span>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-black tracking-tight">
          Page not found
        </h1>
        <a
          href="/"
          className="mt-6 inline-flex text-sm text-black hover:text-gray-500 transition-colors"
        >
          Back to home
        </a>
      </div>
    </main>
  );
};

export default P4_NotFound;
