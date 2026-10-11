"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-ember/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-ember">
            {SITE.role}
          </p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
            Hi, I&apos;m {SITE.name.split(" ")[0]}.
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-zinc-400">{SITE.tagline}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-ember px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ember-glow"
            >
              See my work <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="rounded-md border border-ink-line p-2 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-md border border-ink-line p-2 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-md border border-ink-line p-2 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-ember/60 to-transparent opacity-60 blur-sm" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt={SITE.name}
            width={176}
            height={205}
            className="relative h-36 w-36 rounded-2xl object-cover object-top sm:h-44 sm:w-44"
          />
        </motion.div>
      </div>
    </section>
  );
}
