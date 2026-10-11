import { ABOUT } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" title="About" />
        <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-base leading-relaxed text-zinc-400">
            {ABOUT.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Toolbox
            </h3>
            <ul className="flex flex-wrap gap-2">
              {ABOUT.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-ink-line bg-ink-raised px-2.5 py-1 font-mono text-xs text-zinc-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
