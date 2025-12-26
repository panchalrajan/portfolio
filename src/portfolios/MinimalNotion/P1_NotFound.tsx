const P1_NotFound = () => {
  return (
    <main className="h-full flex flex-col items-center justify-center px-6 bg-white font-mono-jb">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
          404
        </h1>
        <p className="text-sm text-gray-500">Page not found.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Return home
        </a>
      </div>
    </main>
  );
};

export default P1_NotFound;
