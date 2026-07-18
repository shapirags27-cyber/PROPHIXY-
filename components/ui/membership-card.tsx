import { BadgeCheck } from "lucide-react";

interface MembershipCardProps {
  benefits?: string[];
}

const defaultBenefits = [
  "Exclusive Intelligence",
  "Premium Research",
  "Early Product Access",
  "Beta Testing",
  "Partner Rewards",
  "Community Recognition",
  "TGE Participation",
  "Long-Term Benefits",
];

export function MembershipCard({ benefits = defaultBenefits }: MembershipCardProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
      <h3 className="text-2xl font-bold text-white">Soulbound Member Benefits</h3>

      <ul className="mt-6 space-y-3">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3">
            <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
            <span className="text-sm text-zinc-300">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}