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
  { label: "Introduction", href:"#introduction" },
  { label: "Vision & Mission", href:"#vision" },
  { label: "Platform", href:"#platform" },
  { label: "AI Intelligence", href:"#ai" },
  { label: "Prediction Categories", href:"#predictions" },
  { label: "Ecosystem", href:"#ecosystem" },
  { label: "Reputation System", href:"#reputation" },
  { label: "Soulbound Membership", href:"#membership" },
  { label: "Rewards", href:"#rewards" },
  { label: "Roadmap", href:"#roadmap" },
  { label: "Security", href:"#security" },
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

const platform = [
 {
 title:"Community Intelligence",
 icon:Users
 },
 {
 title:"Data-Driven Insights",
 icon:BrainCircuit
 },
 {
 title:"Decentralized Participation",
 icon:Globe2
 },
 {
 title:"On-chain Identity",
 icon:ShieldCheck
 },
 {
 title:"Reward-Based Engagement",
 icon:Sparkles
 }
];

const ecosystemPillars = [
  {
    title:"Intelligence",
    copy:
    "Generate valuable predictions backed by community participation, transparent forecasting, and data-driven insights."
  },
  {
    title:"Community",
    copy:
    "Build a trusted network where members contribute knowledge, analysis, and insights."
  },
  {
    title:"Rewards",
    copy:
    "Reward active participation with reputation, benefits, and ecosystem opportunities."
  }
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
    items: [
      "Brand Launch✓",
      "Documentation✓",
      "Community Building✓",
      "Website Launch✓",
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
              id="introduction"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Introduction</p>

  <h2 className="mt-2 text-3xl font-semibold text-white">
Introduction
</h2>

<p className="mt-4 leading-8 text-zinc-400">
PROPHIXY is a decentralized prediction and decision intelligence platform built for Africa.
</p>

<p className="mt-4 leading-8 text-zinc-400">
We empower individuals, communities, businesses, and organizations to anticipate real-world outcomes through collective intelligence and transparent forecasting.
</p>

<p className="mt-4 leading-8 text-zinc-400">
By combining community insights with data-driven analysis, Prophixy transforms predictions into actionable intelligence that helps people make better decisions.
</p>

<p className="mt-4 leading-8 text-zinc-400">
From currencies to commodities, crypto to culture, Prophixy is creating Africa's intelligence network.
</p>

<div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-300">
This is not betting. This is collective intelligence for Africa.
</div>
  
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
                  To become Africa's leading decentralized prediction and decision intelligence ecosystem, enabling millions of people to make informed decisions through transparent, community-powered forecasting.

                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-800/70 p-6 shadow-[0_0_45px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">Mission</h3>
                <p className="mt-3 text-sm leading-8 text-zinc-400">
                  To democratize access to predictive intelligence by building an open platform where African communities can collectively forecast trends, analyze markets, and unlock opportunities before they happen.
                </p>
              </div>
            </motion.section>

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
                {platform.map((platform) => (
                  <motion.div key={platform.title} whileHover={{ y: -4, scale: 1.01 }}>
                    <SectionCard title={platform.title} description="Unlike traditional prediction platforms that focus on speculation or betting, Prophixy focuses on generating valuable intelligence.

Every prediction contributes to a larger knowledge network that helps users understand future trends across multiple sectors.

Our platform combines:

• Community Intelligence

• Data-Driven Insights

• Decentralized Participation

• On-chain Identity

• Reward-Based Engagement



---

AI-Assisted Intelligence:

As the Prophixy ecosystem evolves, artificial intelligence will work alongside community intelligence to provide deeper market insights, identify emerging trends, and support better decision-making.

Rather than replacing human judgment, AI enhances community forecasting by analyzing large datasets, identifying patterns, and helping users understand the factors influencing future outcomes.


---

What Can You Predict?

 Multi-Currency Intelligence:

Monitor and forecast African currencies against global markets.

Examples:

Will the Nigerian Naira strengthen this month?

Will the Kenyan Shilling outperform the US Dollar?

Which African currency will perform best this quarter?



---

 Economic Intelligence:

Understand important economic movements affecting everyday Africans.

Examples:

Inflation trends

Fuel price movements

Food price changes

Commodity performance



---

 Business & Technology:

Discover where innovation is heading.

Examples:

Mobile money adoption

Fintech growth

Startup ecosystems

Digital payments

Artificial Intelligence adoption



---

 Crypto Intelligence:

Track Africa's growing blockchain ecosystem.

Examples:

Stablecoin adoption

Crypto payment growth

Web3 adoption

DeFi expansion

Blockchain innovation



---

 Cultural & Social Trends:

Community-driven forecasting beyond finance.

Examples:

Music trends

Sports outcomes

Entertainment

Viral movements

Youth-driven innovation



---

How Predictions Work:

1. Browse available prediction markets.


2. Review available information and community insights.


3. Submit your prediction.


4. Share the reasoning behind your forecast.


5. Predictions remain open until the market closes.


6. Once outcomes are verified, participants earn reputation and reward points based on prediction accuracy and community participation.
" icon={platform.icon} />
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
                badge="Limited Supply 1500"
                accent="text-emerald-300"
                benefits={[
     

Designed for members seeking premium intelligence and early ecosystem opportunities.

Benefits:

• Premium Prediction Insights

• Advanced Research Reports

• Market Watchlists

• Early Campaign Access

• Beta Tester Access

• Partner Ecosystem Benefits

• Create Prediction Markets

• Discord Market Creator Role

• Eligible for TGE Allocation

Soulbound (Non-transferable)

Soulbound (Non-transferable)

                ]}
              />
              <MembershipCard
                title="Top Forecaster"
                gradient="bg-gradient-to-br from-violet-500/20 via-zinc-900/70500 to-zinc-900/80"
                

Limited Supply: 500

Built for members who want the highest level of access within the ecosystem.

Benefits:

• Everything included in Market Creator, plus:

• Priority TGE Allocation

• Exclusive Intelligence Briefings

• Private Strategy Discussions

• Premium Community Access

• Priority Beta Tester Access

• Premium Partner Benefits

• Top Forecaster Discord Role"
                benefits={[
                  "Everything in Market Creator",
                  "Priority TGE Allocation",
                  "Exclusive Intelligence Briefings",
                  "Private Strategy Discussions",
                  "Premium Community Access",
                  "Priority Beta Access",
                  "Top Forecaster Role",
                  "Soulbound NFT",
              <MembershipCard
                title="Soulbound Membership"description=Soulbound Membership:

Prophixy Membership is powered by Soulbound Tokens (SBTs).

Soulbound Tokens are permanently linked to your wallet and cannot be bought, sold, or transferred.

They represent your verified identity within the Prophixy ecosystem.

Why Soulbound Tokens (SBTs)?

Soulbound Tokens are at the heart of PROPHIXY’s membership system because:

• They create a true, non-transferable on-chain identity that reflects your real contributions and reputation.

• They prevent Sybil attacks and gaming by making it difficult to create multiple fake accounts.

• They align incentives toward long-term participation rather than short-term speculation.

• They enable trusted delivery of exclusive benefits such as TGE priority, beta access, and premium intelligence.

• They represent a step toward genuine decentralized reputation without relying on centralized KYC.


In simple terms: Regular tokens are tradeable assets, Soulbound Tokens are your permanent passport and reputation in the PROPHIXY ecosystem.

              <MembershipCard
                title="Why Become a Member?"

Membership is more than access.

It is your identity within the Prophixy ecosystem.

Members receive:

• Exclusive intelligence

• Premium research

• Early product access

• Beta testing opportunities

• Partner rewards

• Community recognition

• TGE participation opportunities

• Long-term ecosystem benefits

• Market creation



---

              <MembershipCard
                title="Beta Tester Program:"

All Soulbound Membership holders become official Prophixy Beta Testers.

Beta Testers receive:

• First access to new platform features

• Early testing of products before public release

• Direct feedback opportunities with the Prophixy team

• Invitations to private testing campaigns

• Recognition as early contributors to the ecosystem

• Ability to create prediction markets



---

              <MembershipCard
                title="Partnership Benefits:"

Prophixy collaborates with leading Web3 projects and ecosystem partners.

Membership holders may receive:

• Exclusive campaigns

• Early access opportunities

• Community collaborations

• Partner rewards

• Whitelist opportunities

• Educational events

• Premium ecosystem experiences


Partner benefits will continue to expand as the ecosystem grows.


---

              <MembershipCard
                title="Reward Points:"

Membership holders receive welcome reward points automatically after successfully:

• Connecting Wallet

• Connecting Discord

• Minting their Soulbound Badge

• Completing Verification


• Market Creator members receive 15,000 Welcome Points.

• Top Forecaster members receive 20,000 Welcome Points.

Reward points may be used in future ecosystem campaigns, beta testing rewards, partner rewards, community incentives, exclusive platform activities, and future ecosystem benefits.


---

              <MembershipCard
                title="Future Token Utility:"

The Prophixy ecosystem token is expected to support:

• Community incentives

• Reward distribution

• Premium platform features

• Partner campaigns

• Ecosystem participation

• Future governance initiatives


Additional utility will be announced before the Token Generation Event.


---

              <MembershipCard
                title="Token Generation Event (TGE)"

Membership holders receive eligibility for participation in the Prophixy Token Generation Event.

Allocation opportunities may vary depending on:

• Membership Tier

• Snapshot Eligibility

• Community Participation

• Platform Requirements


Top Forecaster members receive priority consideration where applicable.


---
              <MembershipCard
                title="How Membership Works"

1. Connect Wallet


2. Connect Discord


3. Mint Your Soulbound Membership


4. Verify Ownership


5. Receive Discord Role Automatically


6. Welcome Points Are Credited


7. Membership Benefits Become Active

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
              <p className="text-sm font-semibold

              <ecosystem
                title="The Prophixy Ecosystem:

The ecosystem is built around three core pillars.

1. Intelligence



Generate valuable predictions backed by community participation.

2. Community



Build a trusted network where members contribute knowledge and insights.

3. Rewards



Reward active participation with exclusive benefits, reputation, and ecosystem opportunities.
              <ecosystem
                title="Reputation System:

Every prediction contributes to your on-chain reputation within the Prophixy ecosystem.

Members build reputation through:

• Accurate predictions

• Community participation

• Market creation

• Helpful analysis

• Beta testing contributions

• Ecosystem engagement


A stronger reputation unlocks greater recognition, exclusive opportunities, and future ecosystem benefits.
                </p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">our commitment</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Prophixy is committed to building an open, transparent, and community-driven intelligence platform that empowers Africans to make better decisions through decentralized forecasting and collective knowledge.

Together, we are creating the future of predictive intelligence in Africa.

              <our commitment
                title=Join the Intelligence Revolution"
Africa's future will be shaped by informed decisions—not guesswork.

Become part of a community that transforms knowledge into opportunity through collective intelligence.

Predict Smarter. Decide Better. Shape
</h2></p>
              </div>
            </motion.section>

            <motion.section
              id="commitment"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                {Security.map( security) => (
                  <motion.div key={Security.title} whileHover={{ y: -4, scale: 1.01 }}>
                    <securityCard title="security"Prophixy is committed to maintaining a transparent and trustworthy ecosystem through:

• Wallet-based authentication

• On-chain Soulbound identities

• Transparent prediction records

• Decentralized verification

• Community-driven participation

• Privacy-first infrastructure