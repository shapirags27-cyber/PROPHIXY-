"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Compass,
  Flame,
  Globe2,
  Menu,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { AfricaIllustration } from "@/components/ui/africa-illustration";
import { MembershipCard } from "@/components/ui/membership-card";

export function ProphixyDocsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(0,230,118,0.16),transparent_24%),linear-gradient(135deg,#040404_0%,#090909_50%,#030303_100%)] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-3 text-2xl font-bold tracking-widest">
            <span className="h-11 w-11 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 flex items-center justify-center">
              <Flame className="h-6 w-6 text-emerald-300" />
            </span>
            PROPHIXY
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm">
            {["Introduction", "Vision", "Mission", "Platform", "AI", "Predictions", "Ecosystem", "Reputation", "Membership", "Roadmap", "Security"].map((label) => (
              <Link key={label} href={`#${label.toLowerCase()}`} className="hover:text-emerald-300 transition">
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Search className="h-4 w-4" />
              <input placeholder="Search docs..." className="bg-transparent outline-none w-48 placeholder:text-zinc-500" />
            </div>
            <button className="rounded-full bg-emerald-400 text-black px-6 py-2.5 font-semibold hover:bg-emerald-300 transition">
              Connect Wallet
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24 text-lg">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">Predict Smarter. Decide Better. Shape Africa&apos;s Future.</h1>
        </div>

        {/* Introduction */}
        <section id="introduction">
          <h2 className="text-4xl font-semibold mb-8">Introduction</h2>
          <p>PROPHIXY is a decentralized prediction and decision intelligence platform built for Africa.</p>
          <p>We empower individuals, communities, businesses, and organizations to anticipate real-world outcomes through collective intelligence and transparent forecasting.</p>
          <div className="mt-8 p-8 rounded-3xl bg-emerald-900/30 border border-emerald-400/30 text-emerald-300 text-center text-xl font-medium">
            This is not betting. This is collective intelligence for Africa.
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision">
          <h2 className="text-4xl font-semibold mb-6">Our Vision</h2>
          <p className="text-zinc-300">To become Africa&apos;s leading decentralized prediction and decision intelligence ecosystem...</p>
        </section>

        <section id="mission">
          <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
          <p className="text-zinc-300">To democratize access to predictive intelligence...</p>
        </section>

        {/* Platform & AI */}
        <section id="platform">
          <h2 className="text-4xl font-semibold mb-8">What Makes Prophixy Different?</h2>
          <ul className="list-disc pl-6 space-y-3 text-zinc-300">
            <li>Community Intelligence</li>
            <li>Data-Driven Insights</li>
            <li>Decentralized Participation</li>
            <li>On-chain Identity</li>
            <li>Reward-Based Engagement</li>
          </ul>
        </section>

        <section id="ai">
          <h2 className="text-4xl font-semibold mb-6">AI-Assisted Intelligence</h2>
          <p className="text-zinc-400">AI works alongside community intelligence to provide deeper insights...</p>
        </section>

        <section id="predictions">
          <h2 className="text-4xl font-semibold mb-8">What Can You Predict?</h2>
          {/* Add your prediction categories here */}
          <h3 className="text-2xl font-semibold mt-12 mb-6">How Predictions Work</h3>
          <ol className="list-decimal pl-6 space-y-4 text-zinc-400">
            <li>Browse available prediction markets.</li>
            <li>Review information and community insights.</li>
            <li>Submit your prediction and reasoning.</li>
            <li>Wait for market close and verification.</li>
            <li>Earn reputation and reward points.</li>
          </ol>
        </section>

        {/* Ecosystem & Reputation */}
        <section id="ecosystem">
          <h2 className="text-4xl font-semibold mb-8">The Prophixy Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Intelligence", "Community", "Rewards"].map((p) => (
              <div key={p} className="bg-zinc-900/70 p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-3">{p}</h3>
                <p className="text-zinc-400">Core pillar of the Prophixy network.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reputation">
          <h2 className="text-4xl font-semibold mb-8">Reputation System</h2>
          <p className="text-zinc-400">Build on-chain reputation through accurate predictions, participation, and contributions.</p>
        </section>

        {/* === MEMBERSHIP SECTION === */}
        <section id="membership" className="space-y-16">
          <div>
            <h2 className="text-4xl font-semibold mb-6">Soulbound Membership</h2>
            <p className="text-xl text-zinc-300">Powered by non-transferable Soulbound Tokens (SBTs) that represent your permanent identity and contributions.</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Why Mint an SBT?</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>• Creates true, non-transferable on-chain identity</li>
              <li>• Prevents Sybil attacks</li>
              <li>• Aligns incentives for long-term participation</li>
              <li>• Enables trusted delivery of exclusive benefits</li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Membership Tiers</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/70 p-8 rounded-3xl border border-emerald-400/30">
                <h4 className="text-2xl font-bold">Market Creator</h4>
                <p className="text-sm text-emerald-400">Limited Supply: 1,500</p>
                <p className="mt-6">Premium intelligence, market creation rights, TGE eligibility.</p>
              </div>
              <div className="bg-zinc-900/70 p-8 rounded-3xl border border-emerald-400/30">
                <h4 className="text-2xl font-bold">Top Forecaster</h4>
                <p className="text-sm text-emerald-400">Limited Supply: 500</p>
                <p className="mt-6">Highest access level with priority benefits.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Why Become a Member?</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-zinc-400">
              {["Exclusive Intelligence", "Premium Research", "Early Product Access", "Beta Testing", "Partner Rewards", "TGE Participation", "Market Creation"].map((b) => (
                <li key={b} className="flex items-center gap-2">• {b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Beta Tester Program</h3>
            <p className="text-zinc-400">All Soulbound members become official Beta Testers with early access to new features.</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Partnership Benefits</h3>
            <p className="text-zinc-400">Exclusive campaigns, whitelist opportunities, and partner rewards.</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Reward Points</h3>
            <p className="text-zinc-400">Welcome points (15,000 – 20,000) after minting and verification.</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Future Token Utility &amp; TGE</h3>
            <p className="text-zinc-400">Membership holders get priority in the Token Generation Event.</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">How Membership Works</h3>
            <ol className="list-decimal pl-6 space-y-3 text-zinc-400">
              <li>Connect Wallet</li>
              <li>Connect Discord</li>
              <li>Mint Your Soulbound Membership</li>
              <li>Verify Ownership</li>
              <li>Receive Discord Role + Welcome Points</li>
            </ol>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap">
          <h2 className="text-4xl font-semibold mb-10">Roadmap</h2>
          <div className="space-y-12">
            {[
              { phase: "Phase 1 — Foundation", items: ["Brand Launch✓", "Documentation✓", "Community Building✓", "Website Launch✓"] },
              { phase: "Phase 2 — Membership", items: ["Soulbound Badge Mint", "Discord Verification", "Reward Points System", "Member Dashboard"] },
              { phase: "Phase 3 — Platform Intelligence", items: ["Live Prediction Platform", "Community Forecasting", "Analytics Dashboard", "Beta Testing Program", "Partner Campaigns"] },
              { phase: "Phase 4 — Ecosystem Expansion", items: ["Mobile Application", "AI-Powered Intelligence", "Additional African Markets", "Strategic Partnerships", "Token Generation Event"] },
            ].map((item) => (
              <div key={item.phase}>
                <h3 className="text-2xl font-semibold mb-4">{item.phase}</h3>
                <ul className="space-y-2 text-zinc-400">
                  {item.items.map((i) => <li key={i}>• {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section id="security">
          <h2 className="text-4xl font-semibold mb-8">Security &amp; Transparency</h2>
          <p className="text-zinc-400">Wallet-based authentication, on-chain identities, transparent records, and privacy-first infrastructure.</p>
        </section>

        {/* Commitment & Join */}
        <section className="text-center py-16 border-t border-white/10">
          <h2 className="text-4xl font-semibold mb-6">Our Commitment</h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Prophixy is committed to building an open, transparent, and community-driven intelligence platform that empowers Africans.
          </p>

          <div className="mt-16 text-3xl font-medium text-emerald-300">
            Join the Intelligence Revolution
          </div>
          <p className="mt-4 text-xl text-zinc-400">Africa&apos;s future will be shaped by informed decisions — not guesswork.</p>
        </section>

   <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:text-emerald-300">
        X
      </button>

    </div>

  </div>


  <div className="mt-6 text-center text-sm text-zinc-600">
    © {new Date(2026).getFullYear()} PROPHIXY. All rights reserved.
  </div>
      </main>
    </div>
  );
}