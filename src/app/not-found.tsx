import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-14 text-center">
      <p className="mb-2 font-mono text-sm text-ember">404</p>
      <h1 className="mb-6 text-3xl font-semibold text-zinc-50">Page not found</h1>
      <Link href="/" className="text-sm text-zinc-400 underline-offset-4 hover:text-zinc-100 hover:underline">
        Back home
      </Link>
    </main>
  );
}
