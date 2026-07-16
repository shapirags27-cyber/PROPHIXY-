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
import { SectionCard } from "@/components/ui/section-card";

const navItems = [
  { label: "Introduction", href: "#introduction", active: true },
  { label: "Vision", href: "#vision" },
  { label: "Mission", href: "#mission" },
  { label: "Platform", href: "#platform" },
  { label: "AI Intelligence", href: "#ai" },
  { label: "Predictions", href: "#predictions" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Membership", href: "#membership" },
  { label: "Rewards", href: "#rewards" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Security", href: "#security" },
  { label: "Commitment", href: "#commitment" },
];

const sidebarItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Platform", href: "#platform" },
  { label: "AI Intelligence", href: "#ai" },
  { label: "Prediction Categories", href: "#predictions" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Reputation System", href: "#reputation" },
  { label: "Soulbound Membership", href: "#membership" },
  { label: "Rewards", href: "#rewards" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Security", href: "#security" },
];

const stats = [
  { value: "Africa", label: "Intelligence Network" },
  { value: "100%", label: "Community Powered" },
  { value: "24/7", label: "Prediction Insights" },
  { value: "Global", label: "African Markets" },
];

const platformFeatures = [
  { title: "Community Intelligence", icon: Users },
  { title: "Data-Driven Insights", icon: BrainCircuit },
  { title: "Decentralized Participation", icon: Globe2 },
  { title: "On-chain Identity", icon: ShieldCheck },
  { title: "Reward-Based Engagement", icon: Sparkles },
];

const predictionPillars = [
  {
    title: "Multi-Currency Intelligence",
    detail: "Monitor and forecast African currencies against global markets including Naira, Kenyan Shilling, Rand, and other regional currencies.",
  },
  {
    title: "Economic Intelligence",
    detail: "Understand inflation trends, fuel prices, food prices, commodities, and economic movements affecting Africa.",
  },
  {
    title: "Business & Technology",
    detail: "Discover future trends in fintech, mobile money, startups, digital payments, and artificial intelligence adoption.",
  },
  {
    title: "Crypto Intelligence",
    detail: "Track stablecoin adoption, crypto payments, Web3 growth, DeFi expansion, and blockchain innovation across Africa.",
  },
  {
    title: "Cultural & Social Trends",
    detail: "Forecast music trends, sports outcomes, entertainment movements, viral communities, and youth innovation.",
  },
];

const ecosystemPillars = [
  {
    title: "Intelligence",
    copy: "Generate valuable predictions backed by community participation, transparent forecasting, and data-driven insights.",
  },
  {
    title: "Community",
    copy: "Build a trusted network where members contribute knowledge, analysis, and insights.",
  },
  {
    title: "Rewards",
    copy: "Reward active participation with reputation, benefits, and ecosystem opportunities.",
  },
];

const memberBenefits = [
  "Exclusive Intelligence",
  "Premium Research",
  "Early Product Access",
  "Beta Testing Opportunities",
  "Partner Rewards",
  "Community Recognition",
  "TGE Participation Opportunities",
  "Long-Term Ecosystem Benefits",
  "Market Creation",
];

const roadmap = [
  {
    title: "Phase 1 — Foundation",
    items: ["Brand Launch✓", "Documentation✓", "Community Building✓", "Website Launch✓"],
  },
  {
    title: "Phase 2 — Membership",
    items: ["Soulbound Badge Mint", "Discord Verification", "Reward Points System", "Member Dashboard"],
  },
  {
    title: "Phase 3 — Platform Intelligence",
    items: ["Live Prediction Platform", "Community Forecasting", "Analytics Dashboard", "Beta Testing Program", "Partner Campaigns"],
  },
  {
    title: "Phase 4 — Ecosystem Expansion",
    items: ["Mobile Application", "AI-Powered Intelligence", "Additional African Markets", "Strategic Partnerships", "Token Generation Event"],
  },
];

export function ProphixyDocsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(0,230,118,0.16),transparent_24%),linear-gradient(135deg,#040404_0%,#090909_50%,#030303_100%)] text-white">
      {/* Navigation */}
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
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-zinc-950/90 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm text-zinc-300">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className={item.active ? "text-emerald-300" : ""}>
                  {item.label}
                </Link>
              ))}
              {/* Mobile search + wallet */}
              <div className="mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-400">
                <Search className="h-4 w-4" />
                <input placeholder="Search docs" className="w-full bg-transparent outline-none placeholder:text-zinc-500" />
              </div>
              <button className="mt-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </nav>

      <main id="home" className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)_270px]">
          {/* Left Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {/* Documentation nav */}
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

              {/* Call to action */}
              <div className="rounded-[24px] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 to-zinc-900/70 p-4 shadow-[0_0_60px_rgba(0,230,118,0.12)]">
                <p className="text-sm font-semibold text-white">Ready to join the future of intelligence?</p>
                <div className="mt-3 flex flex-col gap-2">
                  <button className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:scale-[1.01]">
                    Mint Membership
                  </button>
                  <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100">Discord</button>
                  <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100">Telegram</button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="space-y-6 lg:col-span-2">
            {/* Hero */}
            <motion.div
              id="introduction"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_120px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">PROPHIXY DOCUMENTATION</p>
                  <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    Predict Smarter. Decide Better. Shape Africa&apos;s Future.
                  </h1>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-400">
                    Explore how Prophixy empowers Africa with collective intelligence, transparent predictions, and actionable insights across multiple sectors.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:shadow-[0_0_40px_rgba(0,230,118,0.35)]">
                      Mint Membership
                    </button>
                    <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:text-emerald-300">
                      Explore Roadmap
                    </button>
                  </div>
                </div>
                <div className="w-full max-w-[440px]">
                  <AfricaIllustration />
                </div>
              </div>
            </motion.div>

            {/* Introduction Details */}
            <motion.section
              id="introduction-detail"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Introduction</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">What is Prophixy?</h2>
              <div className="prose prose-zinc mt-6 text-zinc-400">
                <p>PROPHIXY is a decentralized prediction and decision intelligence platform built for Africa.</p>
                <p>
                  We empower individuals, communities, businesses, and organizations to anticipate real-world outcomes through collective intelligence and transparent forecasting.
                </p>
                <p>
                  By combining community insights with data-driven analysis, Prophixy transforms predictions into actionable intelligence that helps people make better decisions.
                </p>
                <p>From currencies to commodities, crypto to culture, Prophixy is creating Africa&apos;s intelligence network.</p>
              </div>

              <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-300">
                This is not betting. This is collective intelligence for Africa.
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-[20px] border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-3xl font-semibold text-emerald-300">{stat.value}</p>
                    <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Vision & Mission */}
            <motion.section
              id="vision"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid gap-4 md:grid-cols-2"
            >
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-800/70 p-6 shadow-[0_0_45px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">Vision</h3>
                <p className="mt-3 text-sm leading-8 text-zinc-400">
                  To become Africa&apos;s leading decentralized prediction and decision intelligence ecosystem...
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-800/70 p-6 shadow-[0_0_45px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">Mission</h3>
                <p className="mt-3 text-sm leading-8 text-zinc-400">
                  To democratize access to predictive intelligence...
                </p>
              </div>
            </motion.section>

            {/* Platform + Predictions */}
            <motion.section
              id="platform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">What Makes Prophixy Different?</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">A platform that turns collective insight into actionable intelligence.</h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                {platformFeatures.map((feature) => (
                  <motion.div key={feature.title} whileHover={{ y: -4, scale: 1.01 }}>
                    <SectionCard
                      title={feature.title}
                      description="Core feature of the Prophixy intelligence network."
                      icon={feature.icon}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Prediction Categories */}
              <div id="predictions" className="mt-12">
                <h3 className="mb-6 text-2xl font-semibold text-white">Prediction Categories</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {predictionPillars.map((pillar, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
                    >
                      <h4 className="text-xl font-semibold text-emerald-300">{pillar.title}</h4>
                      <p className="mt-3 text-zinc-400">{pillar.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Membership */}
            <motion.section
              id="membership"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Soulbound Membership</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Join the Inner Circle</h2>
              <p className="mt-4 max-w-2xl text-lg text-zinc-400">
                Become a soulbound member and gain exclusive access to premium intelligence, governance rights, and long-term rewards.
              </p>
              <div className="mt-8">
                <MembershipCard benefits={memberBenefits} />
              </div>
            </motion.section>

              {/* Ecosystem */}
            <motion.section
              id="ecosystem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">The Prophixy Ecosystem</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Built on Three Pillars</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {ecosystemPillars.map((pillar, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8"
                  >
                    <BadgeCheck className="h-10 w-10 text-emerald-400" />
                    <h3 className="mt-6 text-2xl font-semibold">{pillar.title}</h3>
                    <p className="mt-4 text-zinc-400">{pillar.copy}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Roadmap */}
            <motion.section
              id="roadmap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Roadmap</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Our Journey Ahead</h2>
              <div className="mt-10 space-y-8">
                {roadmap.map((phase, index) => (
                  <div key={index} className="border-l-2 border-emerald-500/30 pl-8">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                      <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-zinc-400">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-emerald-400" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>
          </section>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
                <h4 className="font-semibold text-emerald-300">Quick Links</h4>
                <div className="mt-4 space-y-3 text-sm">
                  <Link href="#rewards" className="block hover:text-emerald-300">→ Rewards System</Link>
                  <Link href="#security" className="block hover:text-emerald-300">→ Security &amp; Transparency</Link>
                  <Link href="#ai" className="block hover:text-emerald-300">→ AI Intelligence</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}