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
  { label: "Introduction", href: "#introduction" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "What Makes Prophixy Different", href: "#features" },
  { label: "What Can You Predict?", href: "#predictions" },
  { label: "The Prophixy Ecosystem", href: "#ecosystem" },
  { label: "Soulbound Membership", href: "#soulbound" },
  { label: "Membership Tiers", href: "#membership" },
  { label: "Why Become a Member?", href: "#why-member" },
  { label: "Beta Tester Program", href: "#beta" },
  { label: "Partnership Benefits", href: "#community" },
  { label: "Reward Points", href: "#rewards" },
  { label: "Token Generation Event (TGE)", href: "#tge" },
  { label: "How Membership Works", href: "#membership-flow" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Our Commitment", href: "#commitment" },
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
                  <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100">Telegram</button>
                </div>
              </div>
            </div>
          </aside>

          <section className="space-y-6">
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

            <motion.section
              id="about"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Introduction</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">PROPHIXY is a decentralized prediction and decision intelligence platform built for Africa.</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                  This is not betting. This is collective intelligence for Africa.
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
                We empower individuals, communities, businesses, and organizations to anticipate real-world outcomes through collective intelligence and transparent forecasting. By combining community insights with data-driven analysis, Prophixy transforms predictions into actionable intelligence that helps people make better decisions.
              </p>

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
                  Become Africa&apos;s leading decentralized prediction and decision intelligence ecosystem that enables millions of people to make informed decisions through transparent, community-powered forecasting.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-800/70 p-6 shadow-[0_0_45px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">Mission</h3>
                <p className="mt-3 text-sm leading-8 text-zinc-400">
                  Democratize access to predictive intelligence by building an open platform where African communities can collectively forecast trends, analyze markets, and unlock opportunities before they happen.
                </p>
              </div>
            </motion.section>

            <motion.section
              id="features"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">What Makes Prophixy Different?</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">A platform that turns collective insight into actionable intelligence.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                {features.map((feature) => (
                  <motion.div key={feature.title} whileHover={{ y: -4, scale: 1.01 }}>
                    <SectionCard title={feature.title} description="Designed to combine transparent forecasts, trusted identity, and community rewards into one experience." icon={feature.icon} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="membership"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid gap-4 lg:grid-cols-2"
            >
              <MembershipCard
                title="Market Creator"
                gradient="bg-gradient-to-br from-emerald-500/20 via-zinc-900/70 to-zinc-900/80"
                badge="Limited Supply"
                accent="text-emerald-300"
                benefits={[
                  "Premium Prediction Insights",
                  "Advanced Research",
                  "Market Watchlists",
                  "Early Campaign Access",
                  "Discord Access",
                  "Beta Tester",
                  "Partner Benefits",
                  "Soulbound NFT",
                ]}
              />
              <MembershipCard
                title="Top Forecaster"
                gradient="bg-gradient-to-br from-violet-500/20 via-zinc-900/70 to-zinc-900/80"
                badge="Limited Supply"
                accent="text-violet-300"
                benefits={[
                  "Everything in Market Creator",
                  "Priority TGE Allocation",
                  "Exclusive Intelligence Briefings",
                  "Private Strategy Discussions",
                  "Premium Community Access",
                  "Priority Beta Access",
                  "Top Forecaster Role",
                  "Soulbound NFT",
                ]}
              />
            </motion.section>

            <motion.section
              id="predictions"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">What Can You Predict?</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">A wide range of signals and sectors are now forecastable.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {predictionPillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[20px] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-2 text-emerald-300">
                      <CircleDollarSign className="h-5 w-5" />
                      <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{pillar.detail}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="ecosystem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">The Prophixy Ecosystem</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">An ecosystem built on intelligence, community, and rewards.</h2>
              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {ecosystemPillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[20px] border border-white/10 bg-white/5 p-6">
                    <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{pillar.copy}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="soulbound"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-gradient-to-br from-emerald-400/12 to-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Soulbound Membership</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">A non-transferable identity that represents your place in the ecosystem.</h2>
                </div>
                <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                  Wallet-bound • Non-transferable
                </div>
              </div>
            </motion.section>

            <motion.section
              id="roadmap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Roadmap</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">A phased path from launch to ecosystem expansion.</h2>
              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {roadmap.map((phase) => (
                  <div key={phase.title} className="rounded-[20px] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <BadgeCheck className="h-4 w-4 text-emerald-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="commitment"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Our Commitment</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Building an open, transparent, and community-driven intelligence platform for Africa.</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
                Prophixy is committed to empowering Africans to make better decisions through decentralized forecasting and collective knowledge. Together, we are creating the future of predictive intelligence in Africa.
              </p>
            </motion.section>
          </section>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-[24px] border border-white/10 bg-zinc-900/70 p-4 shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <p className="text-sm font-semibold text-white">What Can You Predict?</p>
                <div className="mt-4 space-y-3 text-sm text-zinc-400">
                  {predictionPillars.map((pillar) => (
                    <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="font-medium text-white">{pillar.title}</p>
                      <p className="mt-1 text-xs leading-6">{pillar.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-zinc-900/70 p-4 shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <p className="text-sm font-semibold text-white">Why Become a Member?</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {reasons.map((reason) => (
                    <div key={reason} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-zinc-300">
                      {reason}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-zinc-900/70 p-4 shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <p className="text-sm font-semibold text-white">Community</p>
                <div className="mt-4 space-y-3 text-sm text-zinc-400">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <MessageCircleMore className="h-4 w-4 text-emerald-300" />
                    Discord
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Send className="h-4 w-4 text-emerald-300" />
                    Telegram
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Send className="h-4 w-4 text-emerald-300" />
                    GitHub
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-zinc-950/90">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-zinc-400 sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-white">PROPHIXY</p>
              <p className="text-xs">Predict Smarter. Decide Better.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-end">
            <Link href="#home" className="transition hover:text-emerald-300">Home</Link>
            <Link href="#about" className="transition hover:text-emerald-300">About</Link>
            <Link href="#membership" className="transition hover:text-emerald-300">Membership</Link>
            <Link href="#community" className="transition hover:text-emerald-300">Community</Link>
          </div>
          <p>© 2026 Prophixy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
