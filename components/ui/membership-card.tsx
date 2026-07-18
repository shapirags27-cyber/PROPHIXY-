import { ArrowRight, Sparkles } from "lucide-react";

// membership-card.tsx
import { BadgeCheck } from "lucide-react";

interface MembershipCardProps {
  benefits?: string[];
}

export function MembershipCard({ benefits = [
  "Exclusive Intelligence",
  "Premium Research",
  // ... default benefits
] }: MembershipCardProps) {
  return (
    <div className="...">
      <h3 className="text-2xl font-bold">Soulbound Member Benefits</h3>
      
      <ul className="mt-6 space-y-3">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3">
            <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
