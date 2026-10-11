"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" title="Projects" />
        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className={cn(p.featured && "md:col-span-2")}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-xl border border-ink-line bg-ink-raised p-6 transition-colors hover:border-ember/50",
        p.featured && "bg-gradient-to-br from-ember/10 via-ink-raised to-ink-raised"
      )}
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className={cn("font-semibold text-zinc-50", p.featured ? "text-2xl" : "text-lg")}>
          {p.title}
        </h3>
        <span className="shrink-0 rounded-full border border-ink-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
          {p.status}
        </span>
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">{p.blurb}</p>

      <ul className="mb-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <li key={s} className="rounded bg-ink px-2 py-0.5 font-mono text-[11px] text-zinc-400">
            {s}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 text-sm">
        {p.url ? (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-ember hover:text-ember-glow"
          >
            Visit <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <span className="font-mono text-xs text-zinc-600">coming soon</span>
        )}
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-200"
          >
            <Github className="h-4 w-4" /> Source
          </a>
        )}
      </div>
    </article>
  );
}
