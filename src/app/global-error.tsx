"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="mt-3 text-sm text-gray-600">
            {error?.message || "An unexpected error occurred while loading this page."}
          </p>
          {error?.digest && (
            <p className="mt-2 text-xs text-gray-500">Error ID: {error.digest}</p>
          )}
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
