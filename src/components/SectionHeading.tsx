export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-ember">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">{title}</h2>
      <div className="h-px flex-1 bg-ink-line" />
    </div>
  );
}
