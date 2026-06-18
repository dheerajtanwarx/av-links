/**
 * Decorative divider inspired by Jaipuri block-print / jharokha motifs.
 * Pure inline SVG — no images, no requests, scales crisply on any screen.
 */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-gold ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70 sm:w-20" />
      <svg
        width="64"
        height="20"
        viewBox="0 0 64 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-coral"
      >
        {/* central lotus / mandala motif */}
        <circle cx="32" cy="10" r="3.2" className="fill-gold/30" />
        <path d="M32 3.5c1.8 1.7 1.8 4.9 0 6.5-1.8-1.6-1.8-4.8 0-6.5Z" />
        <path d="M32 16.5c-1.8-1.7-1.8-4.9 0-6.5 1.8 1.6 1.8 4.8 0 6.5Z" />
        <path d="M25.5 10c1.7-1.8 4.9-1.8 6.5 0-1.6 1.8-4.8 1.8-6.5 0Z" />
        <path d="M38.5 10c-1.7 1.8-4.9 1.8-6.5 0 1.6-1.8 4.8-1.8 6.5 0Z" />
        {/* paisley flanks */}
        <path d="M14 10c0-3 2.4-5 5-5 1.6 0 2.8.9 2.8 2.3 0 1.2-.9 2-2 2-.8 0-1.4-.4-1.4-1.1" />
        <path d="M50 10c0-3-2.4-5-5-5-1.6 0-2.8.9-2.8 2.3 0 1.2.9 2 2 2 .8 0 1.4-.4 1.4-1.1" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70 sm:w-20" />
    </div>
  );
}
