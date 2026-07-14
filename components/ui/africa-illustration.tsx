export function AfricaIllustration() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-[420px] items-center justify-center">
      <div className="absolute inset-0 rounded-[32px] border border-emerald-400/30 bg-emerald-400/10 shadow-[0_0_120px_rgba(0,230,118,0.22)]" />
      <div className="absolute inset-6 rounded-[28px] border border-white/10 bg-zinc-950/80" />
      <svg viewBox="0 0 420 320" className="relative h-full w-full p-6 text-emerald-400">
        <defs>
          <linearGradient id="gridGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E676" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00C853" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect x="44" y="46" width="332" height="228" rx="24" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <path d="M112 88 L148 62 L182 88 L182 122 L158 146 L128 138 L112 112 Z" fill="none" stroke="url(#gridGlow)" strokeWidth="4" />
        <path d="M182 88 L220 66 L250 90 L246 132 L214 150 L190 138 L182 122 Z" fill="none" stroke="url(#gridGlow)" strokeWidth="4" />
        <path d="M250 90 L294 78 L312 106 L292 138 L252 142 L236 120 Z" fill="none" stroke="url(#gridGlow)" strokeWidth="4" />
        <path d="M158 146 L188 170 L208 210 L176 234 L142 210 L128 176 Z" fill="none" stroke="url(#gridGlow)" strokeWidth="4" />
        <circle cx="214" cy="124" r="10" fill="#00E676" />
        <circle cx="274" cy="120" r="8" fill="#00E676" opacity="0.8" />
        <circle cx="166" cy="188" r="8" fill="#00E676" opacity="0.8" />
        <path d="M74 240 C132 214 186 208 236 220 C286 232 316 244 354 270" stroke="url(#gridGlow)" strokeWidth="2" strokeDasharray="6 6" />
      </svg>
    </div>
  );
}
