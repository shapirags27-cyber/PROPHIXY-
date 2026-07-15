"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CircleDollarSign,
  Compass,
  Flame,
  Globe2,
  Menu,
  MessageCircleMore,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { AfricaIllustration } from "@/components/ui/africa-illustration";
import { MembershipCard } from "@/components/ui/membership-card";
import { SectionCard } from "@/components/ui/section-card";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Membership", href: "#membership" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Docs", href: "#introduction", active: true },
  { label: "Community", href: "#community" },
];

const sidebarItems = [
  { label: "📖 Introduction", href: "#introduction" },
  { label: "🎯 Vision & Mission", href: "#vision" },
  { label: "✨ Platform", href: "#platform" },
  { label: "🌍 Ecosystem", href: "#ecosystem" },
  { label: "🎖 Membership", href: "#membership" },
  { label: "🗺 Roadmap", href: "#roadmap" },
  { label: "🔒 Security", href: "#security" },
  { label: "🤝 Our Commitment", href: "#commitment" },
];

const stats = [
  { value: "Africa", label: "Intelligence Network" },
  { value: "100%", label: "Community Powered" },
  { value: "24/7", label: "Prediction Insights" },
  { value: "Global", label: "African Markets" },
];

const features = [
  { title: "Community Intelligence", icon: Users },
  { title: "Data-Driven Insights", icon: BrainCircuit },
  { title: "Decentralized Participation", icon: Globe2 },
  { title: "On-chain Identity", icon: ShieldCheck },
  { title: "Reward-Based Engagement", icon: Sparkles },
];

const predictionPillars = [
  {
    title: "Multi-Currency Intelligence",
    detail:
      "Monitor and forecast African currencies against global markets including Naira, Kenyan Shilling, Rand, and other regional currencies.",
  },
  {
    title: "Economic Intelligence",
    detail:
      "Understand inflation trends, fuel prices, food prices, commodities, and economic movements affecting Africa.",
  },
  {
    title: "Business & Technology",
    detail:
      "Discover future trends in fintech, mobile money, startups, digital payments, and artificial intelligence adoption.",
  },
  {
    title: "Crypto Intelligence",
    detail:
      "Track stablecoin adoption, crypto payments, Web3 growth, DeFi expansion, and blockchain innovation across Africa.",
  },
  {
    title: "Cultural & Social Trends",
    detail:
      "Forecast music trends, sports outcomes, entertainment movements, viral communities, and youth innovation.",
  },
];

const ecosystemPillars = [
  {
    title: "Intelligence",
    copy:
      "Generate valuable predictions backed by community participation, transparent forecasting, and data-driven insights.",
  },
  {
    title: "Community",
    copy:
      "Build a trusted network where individuals contribute knowledge, analysis, and predictions that create collective intelligence.",
  },
  {
    title: "Rewards",
    copy:
      "Reward participation through reputation, points, exclusive benefits, ecosystem opportunities, and recognition.",
  },
];

const reasons = [
  "Exclusive Intelligence",
  "Premium Research",
  "Early Product Access",
  "Beta Testing Opportunities",
  "Partner Rewards",
  "Community Recognition",
  "TGE Participation Opportunities",
  "Long-Term Ecosystem Benefits",
  "Prediction Market Creation",
];

const roadmap = [
  {
    title: "Phase 1 — Foundation",
    items: [
      "Brand Launch",
      "Documentation",
      "Community Building",
      "Website Launch",
    ],
  },
  {
    title: "Phase 2 — Membership",
    items: [
      "Soulbound Badge Mint",
      "Discord Verification",
      "Reward Points System",
      "Member Dashboard",
    ],
  },
  {
    title: "Phase 3 — Platform Intelligence",
    items: [
      "Live Prediction Platform",
      "Community Forecasting",
      "Analytics Dashboard",
      "Beta Testing Program",
      "Partner Campaigns",
    ],
  },
  {
    title: "Phase 4 — Ecosystem Expansion",
    items: [
      "Mobile Application",
      "AI-Powered Intelligence",
      "Additional African Markets",
      "Strategic Partnerships",
      "Token Generation Event",
    ],
  },
];

export function ProphixyDocsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(0,230,118,0.16),transparent_24%),linear-gradient(135deg,#040404_0%,#090909_50%,#030303_100%)] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-[0.28em] text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
              <Flame className="h-5 w-5" />
            </span>
            PROPHIXY
          </Link>

          <div className="hidden items-center gap-7 text-sm text-zinc-300 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition hover:text-emerald-300 ${item.active ? "text-emerald-300" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              <Search className="h-4 w-4" />
              <input
                aria-label="Search documentation"
                placeholder="Search docs"
                className="w-36 bg-transparent outline-none placeholder:text-zinc-500"
              />
            </label>
            <button className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/20">
              Connect Wallet
            </button>
          </div>

          <button
            className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-200 lg:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-white/10 bg-zinc-950/90 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm text-zinc-300">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className={`${item.active ? "text-emerald-300" : ""}`}>
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-400">
                <Search className="h-4 w-4" />
                <input placeholder="Search docs" className="w-full bg-transparent outline-none placeholder:text-zinc-500" />
              </div>
              <button className="mt-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                Connect Wallet
              </button>
            </div>
          </div>
        ) : null}
      </nav>

      <main id="home" className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)_270px]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-[24px] border border-white/10 bg-zinc-900/70 p-4 shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Documentation</p>
                <div className="mt-4 space-y-2">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-2xl border border-transparent px-3 py-2 text-sm text-zinc-300 transition hover:border-emerald-400/20 hover:bg-emerald-400/10 hover:text-emerald-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 to-zinc-900/70 p-4 shadow-[0_0_60px_rgba(0,230,118,0.12)]">
                <p className="text-sm font-semibold text-white">Ready to join the future of intelligence?</p>
                <div className="mt-3 flex flex-col gap-2">
                  <button className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:scale-[1.01]">Mint Membership</button>
                  <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100">Discord</button>
                  <button className="rounded-full border border