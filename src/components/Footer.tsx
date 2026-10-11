import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${SITE.email}`} aria-label="Email" className="transition-colors hover:text-ember">
            <Mail className="h-4 w-4" />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ember">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-ember">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
