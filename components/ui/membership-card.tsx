import { ArrowRight, Sparkles } from "lucide-react";

type MembershipCardProps = {
  title: string;
  gradient: string;
  badge: string;
  benefits: string[];
  accent: string;
};

export function MembershipCard({ title, gradient, badge, benefits, accent }: MembershipCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-[24px] border border-white/10 p-7 shadow-[0_0_60px_rgba(0,0,0,0.3)] backdrop-blur-xl ${gradient}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%)]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-300">Membership</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
          </div>
          <div className={`rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${accent}`}>
            {badge}
          </div>
        </div>
        <div className="mt-6 space-y-3 text-sm leading-7 text-zinc-200">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm font-medium text-white">
          Mint Membership <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
