import { ArrowRight, type LucideIcon } from "lucide-react";

type SectionCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: string;
};

export function SectionCard({ title, description, icon: Icon, accent = "text-emerald-400" }: SectionCardProps) {
  return (
    <div className="flex h-full min-h-[220px] w-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <div className={`inline-flex w-fit rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 ${accent}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-base font-semibold leading-6 text-white [overflow-wrap:anywhere] sm:text-lg">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">{description}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
        Explore <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}
