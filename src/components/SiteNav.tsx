import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/content";

const LINKS = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
];

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-ink-line/80 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-zinc-100"
        >
          <span className="h-2 w-2 rounded-full bg-ember" />
          <span className="hidden sm:inline">austingregory.tech</span>
          <span className="sm:hidden">AG</span>
        </Link>

        <ul className="flex items-center gap-1 text-sm sm:gap-2">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="rounded-md px-2.5 py-1.5 text-zinc-400 transition-colors hover:text-zinc-100 sm:px-3"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={SITE.studio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 rounded-md border border-ember/40 px-2.5 py-1.5 text-ember transition-colors hover:border-ember hover:bg-ember/10 sm:px-3"
            >
              <span className="hidden sm:inline">{SITE.studio.name}</span>
              <span className="sm:hidden">DGF</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
