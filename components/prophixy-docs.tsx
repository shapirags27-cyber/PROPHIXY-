"use client";

import Link from "next/link";
import {
  Menu,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Platform", href: "#platform" },
  { label: "AI Intelligence", href: "#ai" },
  { label: "Prediction Categories", href: "#predictions" },
  { label: "How Predictions Work", href: "#predictions-work" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Reputation System", href: "#reputation" },
  { label: "Soulbound Membership", href: "#membership" },
  { label: "Rewards", href: "#rewards" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Security", href: "#security" },
];

const stats = [
  {
    value: "Africa",
    label: "Intelligence Network",
  },
  {
    value: "100%",
    label: "Community Powered",
  },
  {
    value: "24/7",
    label: "Future Insights",
  },
  {
    value: "Global",
    label: "African Markets",
  },
];

export function ProphixyDocsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(0,230,118,0.16),transparent_24%),linear-gradient(135deg,#040404_0%,#090909_50%,#030303_100%)] text-white">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-[0.28em]">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-300">
              <img src="/logo.png" alt="Prophixy logo" className="h-full w-full object-cover" />
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent font-bold">
              PROPHIXY
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Search className="h-4 w-4" />
              <input placeholder="Search docs..." className="bg-transparent outline-none w-48 placeholder:text-zinc-500" />
            </div>

            <a
              href="https://discord.gg/tRHf4cGTjY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#5865F2] hover:bg-[#4752C4] px-5 py-2.5 text-sm font-semibold text-white transition"
            >
              Join Discord
            </a>

            <button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2.5 font-semibold hover:opacity-90 transition">
              Connect Wallet
            </button>
          </div>

          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 text-zinc-300 hover:text-white">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Main Container with Sidebar & Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex gap-12 py-10">
        
        {/* Sidebar Navigation */}
        <aside className={`fixed inset-y-0 left-0 z-45 w-72 bg-zinc-950/95 p-6 border-r border-white/10 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:block lg:w-64 lg:bg-transparent lg:border-none lg:p-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="sticky top-28 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400">Documentation</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              {sidebarItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className="block rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-purple-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 max-w-4xl mx-auto px-2 space-y-32 text-lg leading-relaxed">
          
          {/* Homepage Hero View Only */}
          <div id="home" className="text-center space-y-12 pt-6 min-h-[75vh] flex flex-col justify-center items-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Predict Smarter. Decide Better. Shape Africa&apos;s Future.
            </h1>

            <div className="mx-auto max-w-md rounded-3xl border border-purple-500/30 bg-purple-950/20 p-4 shadow-2xl backdrop-blur-xl">
              <img
                src="/africa-map.png"
                alt="Africa Intelligence Network Map"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 w-full">
              {stats.map((stat, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 text-center backdrop-blur-md">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation Sections (Hidden until clicked via sidebar anchor links) */}
          <div className="space-y-32 pt-16 border-t border-white/10">
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-28">
              <h2 className="text-4xl font-semibold mb-8">Introduction</h2>
              <p>PROPHIXY is a decentralized prediction and decision intelligence platform built for Africa.</p>
              <p>We empower individuals, communities, businesses, and organizations to anticipate real-world outcomes through collective intelligence and transparent forecasting.</p>
              <p>By combining community insights with data-driven analysis, Prophixy transforms predictions into actionable intelligence that helps people make better decisions.</p>
              <p>From currencies to commodities, crypto to culture, Prophixy is creating Africa&apos;s intelligence network.</p>
              <div className="mt-10 p-8 rounded-3xl bg-purple-950/30 border border-purple-500/30 text-purple-300 text-center text-xl font-medium">
                This is not betting. This is collective intelligence for Africa.
              </div>
            </section>

            {/* Vision & Mission */}
            <section id="vision" className="scroll-mt-28 space-y-12">
              <div>
                <h2 className="text-4xl font-semibold mb-6">Our Vision</h2>
                <p className="text-zinc-300">To become Africa&apos;s leading decentralized prediction and decision intelligence ecosystem, enabling millions of people to make informed decisions through transparent, community-powered forecasting.</p>
              </div>

              <div>
                <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
                <p className="text-zinc-300">To democratize access to predictive intelligence by building an open platform where African communities can collectively forecast trends, analyze markets, and unlock opportunities before they happen.</p>
              </div>
            </section>

            {/* Platform */}
            <section id="platform" className="scroll-mt-28">
              <h2 className="text-4xl font-semibold mb-8">What Makes Prophixy Different?</h2>
              <p className="text-zinc-400">Unlike traditional prediction platforms that focus on speculation or betting, Prophixy focuses on generating valuable intelligence.</p>
              <ul className="mt-6 list-disc pl-6 space-y-3 text-zinc-300">
                <li>Community Intelligence</li>
                <li>Data-Driven Insights</li>
                <li>Decentralized Participation</li>
                <li>On-chain Identity</li>
                <li>Reward-Based Engagement</li>
              </ul>
            </section>

            {/* AI */}
            <section id="ai" className="scroll-mt-28">
              <h2 className="text-4xl font-semibold mb-8">AI-Assisted Intelligence</h2>
              <p className="text-zinc-400">As the Prophixy ecosystem evolves, artificial intelligence will work alongside community intelligence to provide deeper market insights, identify emerging trends, and support better decision-making.</p>
            </section>

            {/* Predictions */}
            <section id="predictions" className="scroll-mt-28">
              <h2 className="text-4xl font-semibold mb-10">What Can You Predict?</h2>
              <div className="space-y-12">
                <div><strong>💱 Multi-Currency Intelligence</strong><p>Monitor and forecast African currencies against global markets...</p></div>
                <div><strong>📊 Economic Intelligence</strong><p>Understand important economic movements affecting everyday Africans...</p></div>
                <div><strong>📈 Business & Technology</strong><p>Discover where innovation is heading...</p></div>
                <div><strong>🪙 Crypto Intelligence</strong><p>Track Africa&apos;s growing blockchain ecosystem...</p></div>
                <div><strong>🌍 Cultural & Social Trends</strong><p>Community-driven forecasting beyond finance...</p></div>
              </div>

              <div id="predictions-work" className="scroll-mt-28 pt-12">
                <h3 className="text-3xl font-semibold mb-8">How Predictions Work</h3>
                <ol className="list-decimal pl-6 space-y-4 text-zinc-400">
                  <li>Browse available prediction markets.</li>
                  <li>Review available information and community insights.</li>
                  <li>Submit your prediction.</li>
                  <li>Share the reasoning behind your forecast.</li>
                  <li>Predictions remain open until the market closes.</li>
                  <li>Once outcomes are verified, participants earn reputation and reward points based on prediction accuracy and community participation.</li>
                </ol>
              </div>
            </section>

            {/* Ecosystem */}
            <section id="ecosystem" className="scroll-mt-28">
              <h2 className="text-4xl font-semibold mb-8">The Prophixy Ecosystem</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Intelligence", desc: "Generate valuable predictions backed by community participation." },
                  { title: "Community", desc: "Build a trusted network where members contribute knowledge and insights." },
                  { title: "Rewards", desc: "Reward active participation with exclusive benefits, reputation, and ecosystem opportunities." },
                ].map((p) => (
                  <div key={p.title} className="bg-zinc-900/70 p-8 rounded-3xl">
                    <h3 className="text-2xl font-semibold mb-4">{p.title}</h3>
                    <p className="text-zinc-400">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Reputation */}
            <section id="reputation" className="scroll-mt-28">
              <h2 className="text-4xl font-semibold mb-8">Reputation System</h2>
              <p className="text-zinc-400">Every prediction contributes to your on-chain reputation. Members build reputation through accurate predictions, community participation, market creation, and more.</p>
            </section>

            {/* Soulbound Membership - Full Details */}
            <section id="membership" className="scroll-mt-28 space-y-20">
              <div>
                <h2 className="text-4xl font-semibold mb-8">Soulbound Membership</h2>
                <p className="text-xl text-zinc-300">Prophixy Membership is powered by Soulbound Tokens (SBTs) — permanently linked to your wallet and non-transferable.</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-6">Why Mint an SBT?</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li>• Creates a true, non-transferable on-chain identity</li>
                  <li>• Prevents Sybil attacks and fake accounts</li>
                  <li>• Aligns incentives for long-term participation</li>
                  <li>• Enables trusted delivery of exclusive benefits (TGE priority, beta access, premium intelligence)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-6">Membership Tiers</h3>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="bg-zinc-900/70 p-8 rounded-3xl border border-purple-500/30">
                    <h4 className="text-2xl font-bold">Market Creator</h4>
                    <p className="text-purple-400">Limited Supply: 1,500</p>
                    <ul className="mt-6 space-y-2 text-sm">
                      <li>• Premium Prediction Insights</li>
                      <li>• Create Prediction Markets</li>
                      <li>• Eligible for TGE Allocation</li>
                      <li>• Discord Market Creator Role</li>
                      <li>• Advanced Research Reports</li>
                      <li>• Market Watchlists</li>
                      <li>• Early Campaign Access</li>
                      <li>• Beta Tester Access</li>
                      <li>• Partner Ecosystem Benefits</li>
                      <li>• Soulbound (Non-transferable)</li>
                    </ul>
                  </div>
                  <div className="bg-zinc-900/70 p-8 rounded-3xl border border-purple-500/30">
                    <h4 className="text-2xl font-bold">Top Forecaster</h4>
                    <p className="text-purple-400">Limited Supply: 500</p>
                    <ul className="mt-6 space-y-2 text-sm">
                      <li>• Everything in Market Creator</li>
                      <li>• Priority TGE Allocation</li>
                      <li>• Exclusive Intelligence Briefings</li>
                      <li>• Top Forecaster Discord Role</li>
                      <li>• Private Strategy Discussions</li>
                      <li>• Premium Partner Benefit</li>
                      <li>• Premium Community Access</li>
                      <li>• Partner Ecosystem Benefits</li>
                      <li>• Premium Partner Benefit</li>
                      <li>• Priority Beta Tester Access</li>
                      <li>• Soulbound (Non-transferable)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Rewards */}
            <section id="rewards" className="scroll-mt-28 space-y-6">
              <h2 className="text-4xl font-semibold mb-8">Rewards &amp; Points</h2>
              <p className="text-zinc-400">Market Creator: 15,000 points • Top Forecaster: 20,000 points after minting and verification.</p>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="scroll-mt-28">
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
                      {item.items.map((i, idx) => <li key={idx}>• {i}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Security & Commitment */}
            <section id="security" className="scroll-mt-28 space-y-12">
              <div>
                <h2 className="text-4xl font-semibold mb-8">Security &amp; Transparency</h2>
                <p className="text-zinc-400">Prophixy is committed to maintaining a transparent and trustworthy ecosystem through wallet-based authentication, on-chain Soulbound identities, transparent prediction records, decentralized verification, and privacy-first infrastructure.</p>
              </div>

              <div className="text-center py-20 border-t border-white/10">
                <h2 className="text-4xl font-semibold mb-6">Our Commitment</h2>
                <p className="text-xl text-zinc-300">Prophixy is committed to building an open, transparent, and community-driven intelligence platform that empowers Africans to make better decisions through decentralized forecasting and collective knowledge.</p>

                <div className="mt-16 text-4xl font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Join the Intelligence Revolution</div>
                <p className="mt-6 text-xl text-zinc-400">Africa&apos;s future will be shaped by informed decisions—not guesswork.</p>
              </div>
            </section>
          </div>

          {/* Social Links + Copyright */}
          <div className="mt-12 text-center text-sm text-zinc-600 flex flex-col items-center gap-4 pt-12 border-t border-white/10">
            <div className="flex gap-6">
              <a 
                href="https://x.com/Prophixy_win" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                X (Twitter)
              </a>
              <a 
                href="https://discord.gg/tRHf4cGTjY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Discord
              </a>
            </div>
            <div>© 2026 PROPHIXY. All rights reserved.</div>
          </div>
        </main>
      </div>
    </div>
  );
}
