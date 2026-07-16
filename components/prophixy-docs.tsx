"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
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
  { label: "Reputation", href: "#reputation" },
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
  { label: "How Predictions Work", href:"#predictions-work" },
  { label: "Ecosystem", href:"#ecosystem" },
  { label: "Reputation System", href:"#reputation" },
  { label: "Soulbound Membership", href:"#membership" },
  { label: "Rewards", href:"#rewards" },
  { label: "Roadmap", href:"#roadmap" },
  { label: "Security", href:"#security" },
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


const features = [
  {
    title:"Community Intelligence",
    icon:Users,
  },
  {
    title:"Data-Driven Insights",
    icon:BrainCircuit,
  },
  {
    title:"Decentralized Participation",
    icon:Globe2,
  },
  {
    title:"On-chain Identity",
    icon:ShieldCheck,
  },
  {
    title:"Reward-Based Engagement",
    icon:Sparkles,
  },
];


const predictionPillars = [
  {
    title:"💱 Multi-Currency Intelligence",
    detail:
    "Monitor and forecast African currencies against global markets including Naira, Kenyan Shilling, Rand, and other regional currencies.",
  },

  {
    title:"📊 Economic Intelligence",
    detail:
    "Understand inflation trends, fuel prices, food prices, commodities, and economic movements affecting everyday Africans.",
  },

  {
    title:"📈 Business & Technology",
    detail:
    "Discover innovation trends including mobile money adoption, fintech growth, startups, digital payments, and AI adoption.",
  },

  {
    title:"🪙 Crypto Intelligence",
    detail:
    "Track stablecoin adoption, crypto payments, Web3 growth, DeFi expansion, and blockchain innovation across Africa.",
  },

  {
    title:"🌍 Cultural & Social Trends",
    detail:
    "Forecast music trends, sports outcomes, entertainment movements, viral communities, and youth innovation.",
  },
];


const platform = [
  {
    title:"Community Intelligence",
    icon:Users,
  },
  {
    title:"Data-Driven Insights",
    icon:BrainCircuit,
  },
  {
    title:"Decentralized Participation",
    icon:Globe2,
  },
  {
    title:"On-chain Identity",
    icon:ShieldCheck,
  },
  {
    title:"Reward-Based Engagement",
    icon:Sparkles,
  },
];


const ecosystemPillars = [
  {
    title:"Intelligence",
    copy:
    "Generate valuable predictions backed by community participation, transparent forecasting, and data-driven insights.",
  },

  {
    title:"Community",
    copy:
    "Build a trusted network where members contribute knowledge, analysis, and insights.",
  },

  {
    title:"Rewards",
    copy:
    "Reward active participation with reputation, exclusive benefits, and ecosystem opportunities.",
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
    title:"Phase 1 — Foundation",
    items:[
      "Brand Launch ✓",
      "Documentation ✓",
      "Community Building ✓",
      "Website Launch ✓",
    ],
  },

  {
    title:"Phase 2 — Membership",
    items:[
      "Soulbound Badge Mint",
      "Discord Verification",
      "Reward Points System",
      "Member Dashboard",
    ],
  },

  {
    title:"Phase 3 — Platform Intelligence",
    items:[
      "Live Prediction Platform",
      "Community Forecasting",
      "Analytics Dashboard",
      "Beta Testing Program",
      "Partner Campaigns",
    ],
  },

  {
    title:"Phase 4 — Ecosystem Expansion",
    items:[
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

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <Link
            href="#home"
            className="flex items-center gap-3 text-lg font-bold tracking-[0.25em]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
              <Flame className="h-5 w-5 text-emerald-300"/>
            </span>

            PROPHIXY
          </Link>


          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-zinc-300">

            {navItems.map((item)=>(
              <Link
                key={item.label}
                href={item.href}
                className={`transition hover:text-emerald-300 ${
                  item.active ? "text-emerald-300" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

          </div>


          <div className="hidden lg:flex items-center gap-3">

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">

              <Search className="h-4 w-4 text-zinc-400"/>

              <input
                placeholder="Search docs"
                className="w-32 bg-transparent text-sm outline-none placeholder:text-zinc-500"
              />

            </div>


            <button
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm font-semibold text-emerald-300"
            >
              Connect Wallet
            </button>

          </div>


          {/* MOBILE BUTTON */}

          <button
            onClick={()=>setIsMenuOpen(!isMenuOpen)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 lg:hidden"
          >

            {
              isMenuOpen ?
              <X className="h-5 w-5"/>
              :
              <Menu className="h-5 w-5"/>
            }

          </button>


        </div>



        {/* MOBILE MENU */}

        {
          isMenuOpen && (

          <div className="border-t border-white/10 bg-zinc-950 px-4 py-5 lg:hidden">

            <div className="flex flex-col gap-4">

              {
                navItems.map((item)=>(
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={()=>setIsMenuOpen(false)}
                    className="text-sm text-zinc-300 hover:text-emerald-300"
                  >
                    {item.label}
                  </Link>
                ))
              }


              <button className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm font-semibold text-emerald-300">
                Connect Wallet
              </button>


            </div>

          </div>

          )
        }


      </nav>





      {/* PAGE LAYOUT */}

      <main
        id="home"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >


        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)_260px]">


          {/* LEFT SIDEBAR */}

          <aside className="hidden lg:block">

            <div className="sticky top-24 space-y-5">


              <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-5 backdrop-blur-xl">

                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                  Documentation
                </p>


                <div className="mt-5 space-y-2">

                {
                  sidebarItems.map((item)=>(
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-sm text-zinc-300 transition hover:bg-emerald-400/10 hover:text-emerald-300"
                    >
                      {item.label}
                    </Link>
                  ))
                }

                </div>


              </div>



              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5">

                <p className="font-semibold">
                  Join the Intelligence Revolution
                </p>


                <button className="mt-4 w-full rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-black">
                  Mint Membership
                </button>


                <button className="mt-3 w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                  Discord
                </button>


                <button className="mt-3 w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                  Telegram
                </button>


              </div>


            </div>

          </aside>




          {/* MAIN CONTENT START */}

          <section className="space-y-6">

{/* HERO SECTION */}

<motion.section
  id="introduction"
  initial={{opacity:0,y:20}}
  whileInView={{opacity:1,y:0}}
  viewport={{once:true}}
  className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-xl sm:p-10"
>

<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">


<div className="max-w-2xl">

<p className="text-sm uppercase tracking-[0.35em] text-emerald-300">
PROPHIXY DOCUMENTATION
</p>


<h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
Predict Smarter.
<br/>
Decide Better.
<br/>
Shape Africa&apos;s Future.
</h1>


<p className="mt-5 text-lg leading-8 text-zinc-400">
A decentralized prediction and decision intelligence platform built for Africa, powered by collective intelligence, transparent forecasting, and community knowledge.
</p>



<div className="mt-7 flex flex-wrap gap-4">


<button className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black">
Mint Membership
</button>


<button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold">
Explore Documentation
</button>


</div>


</div>



<div className="w-full max-w-md">

<AfricaIllustration />

</div>



</div>


</motion.section>





{/* INTRODUCTION */}


<motion.section
  id="overview"
  initial={{opacity:0,y:20}}
  whileInView={{opacity:1,y:0}}
  viewport={{once:true}}
  className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-xl sm:p-8"
>


<p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
Introduction
</p>


<h2 className="mt-3 text-3xl font-bold">
Building Africa&apos;s Intelligence Network
</h2>



<div className="mt-6 space-y-5 text-zinc-400 leading-8">


<p>
PROPHIXY is a decentralized prediction and decision intelligence platform built for Africa.
</p>


<p>
We empower individuals, communities, businesses, and organizations to anticipate real-world outcomes through collective intelligence and transparent forecasting.
</p>


<p>
By combining community insights with data-driven analysis, Prophixy transforms predictions into actionable intelligence that helps people make better decisions.
</p>


<p>
From currencies to commodities, crypto to culture, Prophixy is creating Africa&apos;s intelligence network.
</p>



<div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-300">

This is not betting.
<br/>
This is collective intelligence for Africa.

</div>


</div>





<div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">


{
stats.map((stat)=>(
<motion.div
key={stat.label}
whileHover={{y:-5}}
className="rounded-2xl border border-white/10 bg-white/5 p-5"
>


<p className="text-3xl font-bold text-emerald-300">
{stat.value}
</p>


<p className="mt-2 text-sm text-zinc-400">
{stat.label}
</p>


</motion.div>
))
}


</div>


</motion.section>






{/* VISION & MISSION */}



<motion.section
id="vision"
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="grid gap-6 md:grid-cols-2"
>


<div className="rounded-[30px] border border-white/10 bg-zinc-900/70 p-7">

<div className="inline-flex rounded-xl bg-emerald-400/10 p-3 text-emerald-300">

<Compass className="h-6 w-6"/>

</div>


<h3 className="mt-5 text-2xl font-bold">
Our Vision
</h3>


<p className="mt-4 leading-8 text-zinc-400">

To become Africa&apos;s leading decentralized prediction and decision intelligence ecosystem, enabling millions of people to make informed decisions through transparent, community-powered forecasting.

</p>


</div>




<div
id="mission"
className="rounded-[30px] border border-white/10 bg-zinc-900/70 p-7"
>


<div className="inline-flex rounded-xl bg-emerald-400/10 p-3 text-emerald-300">

<Rocket className="h-6 w-6"/>

</div>


<h3 className="mt-5 text-2xl font-bold">
Our Mission
</h3>


<p className="mt-4 leading-8 text-zinc-400">

To democratize access to predictive intelligence by building an open platform where African communities can collectively forecast trends, analyze markets, and unlock opportunities before they happen.

</p>


</div>



</motion.section>
<section className="space-y-6">

{/* =========================
    WHAT MAKES PROPHIXY DIFFERENT
========================= */}

<motion.section
  id="platform"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-xl sm:p-8"
>
  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
    What Makes Prophixy Different?
  </p>

  <h2 className="mt-3 text-3xl font-bold text-white">
    Collective Intelligence, Not Speculation.
  </h2>

  <p className="mt-5 max-w-4xl leading-8 text-zinc-400">
    Unlike traditional prediction platforms that focus on speculation or
    betting, PROPHIXY is designed to generate valuable intelligence.
    Every prediction strengthens a transparent knowledge network that helps
    communities understand future trends, identify opportunities, and make
    better decisions across Africa.
  </p>

  <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    {platform.map((item) => {
      const descriptions: Record<string, string> = {
        "Community Intelligence":
          "Forecasts are powered by thousands of community members sharing knowledge, experience, and insights.",

        "Data-Driven Insights":
          "Community predictions are strengthened with structured data, research, and emerging trends.",

        "Decentralized Participation":
          "Anyone can contribute intelligence openly while maintaining transparency and fairness.",

        "On-chain Identity":
          "Build a permanent blockchain reputation through meaningful participation and verified contributions.",

        "Reward-Based Engagement":
          "Members earn reputation, ecosystem recognition, exclusive opportunities, and future benefits.",
      };

      return (
        <motion.div
          key={item.title}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <SectionCard
            title={item.title}
            description={descriptions[item.title]}
            icon={item.icon}
          />
        </motion.div>
      );
    })}
  </div>

  <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
    <h3 className="text-xl font-semibold text-white">
      Why It Matters
    </h3>

    <p className="mt-4 leading-8 text-zinc-300">
      Every prediction contributes to a larger intelligence ecosystem.
      Instead of simply forecasting outcomes, PROPHIXY helps individuals,
      businesses, organizations, and communities understand where Africa is
      heading and make informed decisions with greater confidence.
    </p>
  </div>
</motion.section>

{/* =========================
    AI-ASSISTED INTELLIGENCE
========================= */}

<motion.section
  id="ai"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-xl sm:p-8"
>
  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
        AI-Assisted Intelligence
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Human Intelligence Enhanced by Artificial Intelligence
      </h2>

      <p className="mt-6 leading-8 text-zinc-400">
        As the PROPHIXY ecosystem evolves, Artificial Intelligence will work
        alongside community intelligence to deliver deeper market insights,
        identify emerging trends, and support better decision-making across
        Africa.
      </p>

      <p className="mt-4 leading-8 text-zinc-400">
        Rather than replacing human judgment, AI strengthens community
        forecasting by analyzing large datasets, recognizing meaningful
        patterns, highlighting market signals, and helping members understand
        the factors influencing future outcomes.
      </p>
    </div>

    <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 to-zinc-900/70 p-6 lg:max-w-sm">

      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-400/10 p-3">
          <BrainCircuit className="h-6 w-6 text-emerald-300" />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            AI + Community Intelligence
          </h3>

          <p className="text-sm text-zinc-400">
            Better insights through collaboration.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          Analyze market trends
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          Detect emerging patterns
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          Support community forecasting
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          Improve decision intelligence
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          Surface actionable insights
        </div>

      </div>
    </div>

  </div>

  <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">

    <p className="text-center text-lg font-medium text-emerald-300">
      AI does not replace community wisdom—it amplifies it.
    </p>

  </div>

</motion.section>

{/* =========================
    WHAT CAN YOU PREDICT?
========================= */}

<motion.section
  id="predictions"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-2xl sm:p-8"
>
  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
    What Can You Predict?
  </p>

  <h2 className="mt-3 text-3xl font-bold text-white">
    Intelligence Across Africa's Fastest Growing Sectors
  </h2>

  <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
    PROPHIXY enables communities to collectively forecast trends across
    finance, technology, crypto, economics, and culture. Every prediction
    contributes to Africa's decentralized intelligence network.
  </p>

  <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    {predictionPillars.map((pillar) => (
      <motion.div
        key={pillar.title}
        whileHover={{ y: -6, scale: 1.02 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all"
      >
        <div className="mb-4 inline-flex rounded-2xl bg-emerald-400/10 p-3">
          <BadgeCheck className="h-6 w-6 text-emerald-300" />
        </div>

        <h3 className="text-xl font-semibold text-white">
          {pillar.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {pillar.detail}
        </p>
      </motion.div>
    ))}
  </div>

  <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-gradient-to-r from-emerald-400/10 to-transparent p-6">
    <h3 className="text-xl font-semibold text-white">
      Community Intelligence First
    </h3>

    <p className="mt-3 leading-8 text-zinc-400">
      Every prediction submitted helps strengthen the PROPHIXY knowledge
      network. By combining community participation with transparent
      forecasting and data-driven insights, members gain a clearer
      understanding of future trends across Africa.
    </p>
  </div>
</motion.section>

{/* =========================
    HOW PREDICTIONS WORK
========================= */}

<motion.section
  id="how-it-works"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-2xl sm:p-8"
>
  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
    How Predictions Work
  </p>

  <h2 className="mt-3 text-3xl font-bold text-white">
    Community-Powered Forecasting
  </h2>

  <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
    Every prediction contributes to Africa's growing decentralized intelligence
    network. Members participate by sharing forecasts and reasoning, helping
    build transparent, community-driven insights.
  </p>

  <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        step: "01",
        title: "Browse Prediction Markets",
        description:
          "Explore available prediction topics across multiple sectors."
      },
      {
        step: "02",
        title: "Review Information",
        description:
          "Analyze available data and community insights before participating."
      },
      {
        step: "03",
        title: "Submit Your Prediction",
        description:
          "Choose your forecast based on your own research and understanding."
      },
      {
        step: "04",
        title: "Explain Your Reasoning",
        description:
          "Share why you believe your prediction is the most likely outcome."
      },
      {
        step: "05",
        title: "Market Closes",
        description:
          "Predictions remain open until the event or forecasting period ends."
      },
      {
        step: "06",
        title: "Earn Reputation & Rewards",
        description:
          "Verified outcomes contribute to your reputation and future ecosystem rewards."
      }
    ].map((item) => (
      <motion.div
        key={item.step}
        whileHover={{ y: -5 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6"
      >
        <span className="text-4xl font-bold text-emerald-300">
          {item.step}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-white">
          {item.title}
        </h3>

        <p className="mt-3 leading-7 text-zinc-400">
          {item.description}
        </p>
      </motion.div>
    ))}

  </div>

  <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
    <p className="text-center text-lg font-medium text-emerald-300">
      Every contribution helps strengthen Africa's collective intelligence.
    </p>
  </div>
</motion.section>

{/* =========================
    ECOSYSTEM & REPUTATION
========================= */}

<motion.section
  id="ecosystem"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="space-y-8"
>
  <div className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-2xl sm:p-8">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
      The PROPHIXY Ecosystem
    </p>

    <h2 className="mt-3 text-3xl font-bold text-white">
      Three Pillars. One Intelligence Network.
    </h2>

    <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
      The PROPHIXY ecosystem is built around three core pillars that work
      together to create a trusted, community-powered intelligence platform
      for Africa.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {ecosystemPillars.map((pillar) => (
        <motion.div
          key={pillar.title}
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div className="mb-4 inline-flex rounded-2xl bg-emerald-400/10 p-3">
            <Globe2 className="h-6 w-6 text-emerald-300" />
          </div>

          <h3 className="text-2xl font-semibold text-white">
            {pillar.title}
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            {pillar.copy}
          </p>
        </motion.div>
      ))}
    </div>
  </div>

  <div
    id="reputation"
    className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-2xl sm:p-8"
  >
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
      Reputation System
    </p>

    <h2 className="mt-3 text-3xl font-bold text-white">
      Build Your On-Chain Reputation
    </h2>

    <p className="mt-5 leading-8 text-zinc-400">
      Every prediction contributes to your on-chain reputation within the
      PROPHIXY ecosystem. Reputation reflects your participation,
      contributions, and long-term commitment to helping build Africa's
      intelligence network.
    </p>

    <div className="mt-8 grid gap-4 md:grid-cols-2">

      {[
        "Accurate Predictions",
        "Community Participation",
        "Market Creation",
        "Helpful Analysis",
        "Beta Testing Contributions",
        "Ecosystem Engagement",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <BadgeCheck className="h-5 w-5 text-emerald-300" />

          <span className="text-zinc-200">
            {item}
          </span>
        </div>
      ))}

    </div>

    <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
      <p className="text-center text-emerald-300">
        A stronger reputation unlocks greater recognition, exclusive
        opportunities, and future ecosystem benefits.
      </p>
    </div>
  </div>
</motion.section>

{/* =========================
    SOULBOUND MEMBERSHIP
========================= */}

<motion.section
  id="membership"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-2xl sm:p-8"
>
  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
    Soulbound Membership
  </p>

  <h2 className="mt-3 text-3xl font-bold text-white">
    Your Permanent Identity in the PROPHIXY Ecosystem
  </h2>

  <p className="mt-5 leading-8 text-zinc-400">
    PROPHIXY Membership is powered by Soulbound Tokens (SBTs).
    Unlike regular NFTs, Soulbound Tokens are permanently linked to your
    wallet and cannot be bought, sold, or transferred.
  </p>

  <p className="mt-4 leading-8 text-zinc-400">
    Your SBT represents your verified identity, reputation, and long-term
    participation within the PROPHIXY ecosystem.
  </p>

  <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">

    <h3 className="text-2xl font-semibold text-white">
      Why Soulbound Tokens?
    </h3>

    <div className="mt-6 grid gap-4 md:grid-cols-2">

      {[
        "Creates a permanent on-chain identity.",
        "Reflects your contributions and reputation.",
        "Prevents Sybil attacks and fake accounts.",
        "Encourages long-term participation.",
        "Unlocks premium ecosystem benefits.",
        "Supports decentralized reputation without centralized KYC."
      ].map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
        >
          <BadgeCheck className="mt-1 h-5 w-5 text-emerald-300" />

          <span className="text-zinc-300">
            {item}
          </span>
        </div>
      ))}

    </div>
  </div>

  <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

    <h3 className="text-2xl font-semibold text-white">
      In Simple Terms
    </h3>

    <p className="mt-4 leading-8 text-zinc-400">
      Regular tokens are tradeable assets.
      <br /><br />
      Soulbound Tokens are your permanent passport and reputation inside the
      PROPHIXY ecosystem.
    </p>

  </div>

</motion.section>

{/* =========================
    MEMBERSHIP TIERS
========================= */}

<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="space-y-8"
>
  <div>
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
      Membership Tiers
    </p>

    <h2 className="mt-3 text-3xl font-bold text-white">
      Choose Your PROPHIXY Membership
    </h2>

    <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
      Every membership is a Soulbound Token (SBT), permanently linked to your
      wallet and representing your verified identity within the PROPHIXY
      ecosystem.
    </p>
  </div>

  <div className="grid gap-6 lg:grid-cols-2">

    <MembershipCard
      title="Market Creator"
      badge="Limited Supply • 1,500"
      accent="text-emerald-300"
      gradient="bg-gradient-to-br from-emerald-500/20 via-zinc-900/80 to-zinc-900"

      benefits={[
        "Premium Prediction Insights",
        "Advanced Research Reports",
        "Market Watchlists",
        "Early Campaign Access",
        "Beta Tester Access",
        "Partner Ecosystem Benefits",
        "Create Prediction Markets",
        "Discord Market Creator Role",
        "Eligible for TGE Allocation",
        "Soulbound (Non-transferable)",
      ]}
    />

    <MembershipCard
      title="Top Forecaster"
      badge="Limited Supply • 500"
      accent="text-yellow-300"
      gradient="bg-gradient-to-br from-yellow-500/20 via-zinc-900/80 to-zinc-900"

      benefits={[
        "Everything in Market Creator",
        "Priority TGE Allocation",
        "Exclusive Intelligence Briefings",
        "Private Strategy Discussions",
        "Premium Community Access",
        "Priority Beta Tester Access",
        "Premium Partner Benefits",
        "Top Forecaster Discord Role",
        "Soulbound (Non-transferable)",
      ]}
    />

  </div>

  <div className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-8">

    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
      Why Become a Member?
    </p>

    <h3 className="mt-3 text-2xl font-bold text-white">
      Membership Is More Than Access
    </h3>

    <p className="mt-4 leading-8 text-zinc-400">
      Membership represents your identity within the PROPHIXY ecosystem.
      As a verified member, you gain exclusive opportunities, premium
      intelligence, ecosystem recognition, and early access to future
      platform developments.
    </p>

    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

      {memberBenefits.map((benefit) => (
        <div
          key={benefit}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <BadgeCheck className="h-5 w-5 text-emerald-300" />

          <span className="text-zinc-200">
            {benefit}
          </span>
        </div>
      ))}

    </div>

  </div>

</motion.section>

{/* =========================
    MEMBER BENEFITS & REWARDS
========================= */}

<motion.section
  id="rewards"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="space-y-8"
>
  {/* Beta Tester */}

  <div className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-8">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
      Beta Tester Program
    </p>

    <h2 className="mt-3 text-3xl font-bold text-white">
      Help Build the Future of PROPHIXY
    </h2>

    <p className="mt-5 leading-8 text-zinc-400">
      Every Soulbound Membership holder automatically becomes an official
      PROPHIXY Beta Tester with early access to new products and features.
    </p>

    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {[
        "First access to platform features",
        "Early product testing",
        "Direct feedback opportunities",
        "Private testing campaigns",
        "Recognition as an early contributor",
        "Create Prediction Markets",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <BadgeCheck className="h-5 w-5 text-emerald-300" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Partnership */}

  <div className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-8">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
      Partnership Benefits
    </p>

    <p className="mt-5 leading-8 text-zinc-400">
      PROPHIXY collaborates with leading Web3 projects and ecosystem partners
      to deliver exclusive opportunities for members.
    </p>

    <div className="mt-8 grid gap-4 md:grid-cols-3">

      {[
        "Exclusive Campaigns",
        "Early Access",
        "Community Collaborations",
        "Partner Rewards",
        "Whitelist Opportunities",
        "Educational Events",
        "Premium Experiences",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
        >
          {item}
        </div>
      ))}

    </div>
  </div>

  {/* Reward Points */}

  <div className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-8">

    <h2 className="text-3xl font-bold text-white">
      Welcome Reward Points
    </h2>

    <p className="mt-4 leading-8 text-zinc-400">
      Members automatically receive welcome reward points after connecting
      their wallet, connecting Discord, minting their Soulbound Membership,
      and completing verification.
    </p>

    <div className="mt-8 grid gap-6 md:grid-cols-2">

      <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
        <h3 className="text-xl font-bold text-white">
          Market Creator
        </h3>

        <p className="mt-4 text-4xl font-bold text-emerald-300">
          15,000
        </p>

        <p className="mt-2 text-zinc-300">
          Welcome Points
        </p>
      </div>

      <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-6">
        <h3 className="text-xl font-bold text-white">
          Top Forecaster
        </h3>

        <p className="mt-4 text-4xl font-bold text-yellow-300">
          20,000
        </p>

        <p className="mt-2 text-zinc-300">
          Welcome Points
        </p>
      </div>

    </div>

  </div>

  {/* Token Utility */}

  <div className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-8">

    <h2 className="text-3xl font-bold text-white">
      Future Token Utility
    </h2>

    <div className="mt-8 grid gap-4 md:grid-cols-2">

      {[
        "Community Incentives",
        "Reward Distribution",
        "Premium Features",
        "Partner Campaigns",
        "Ecosystem Participation",
        "Future Governance",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <BadgeCheck className="h-5 w-5 text-emerald-300" />
          <span>{item}</span>
        </div>
      ))}

    </div>
  </div>

  {/* TGE */}

  <div className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-8">

    <h2 className="text-3xl font-bold text-white">
      Token Generation Event (TGE)
    </h2>

    <p className="mt-5 leading-8 text-zinc-400">
      Membership holders become eligible for participation in the PROPHIXY
      Token Generation Event. Allocation opportunities depend on membership
      tier, snapshot eligibility, community participation, and platform
      requirements.
    </p>

  </div>

  {/* How Membership Works */}

  <div className="rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-zinc-900/80 p-8">

    <h2 className="text-3xl font-bold text-white">
      How Membership Works
    </h2>

    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

      {[
        "1. Connect Wallet",
        "2. Connect Discord",
        "3. Mint SBT",
        "4. Verify Ownership",
        "5. Receive Discord Role"
        "6. Receive Welcome Points",
        "7. Membership Activated",
      ].map((step) => (
        <div
          key={step}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
        >
          {step}
        </div>
      ))}

    </div>

  </div>

</motion.section>

{/* =========================
    ROADMAP
========================= */}

<motion.section
  id="roadmap"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-2xl sm:p-8"
>
  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
    Roadmap
  </p>

  <h2 className="mt-3 text-3xl font-bold text-white">
    Building Africa's Intelligence Network
  </h2>

  <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
    Our roadmap outlines the major milestones for building PROPHIXY into
    Africa's leading decentralized prediction and decision intelligence
    ecosystem.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-2">

    {roadmap.map((phase) => (
      <motion.div
        key={phase.title}
        whileHover={{ y: -5 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10">
            <Rocket className="h-6 w-6 text-emerald-300" />
          </div>

          <h3 className="text-xl font-semibold text-white">
            {phase.title}
          </h3>
        </div>

        <div className="mt-6 space-y-3">
          {phase.items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3"
            >
              <BadgeCheck className="h-5 w-5 text-emerald-300" />
              <span className="text-zinc-300">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    ))}

  </div>

  <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-gradient-to-r from-emerald-400/10 to-transparent p-6">
    <h3 className="text-2xl font-semibold text-white">
      Long-Term Vision
    </h3>

    <p className="mt-4 leading-8 text-zinc-400">
      Every phase brings PROPHIXY closer to becoming Africa's trusted
      intelligence network, empowering communities with transparent,
      decentralized forecasting, AI-assisted insights, and a reputation-driven
      ecosystem.
    </p>
  </div>
</motion.section>

{/* =========================
    SECURITY & TRANSPARENCY
========================= */}

<motion.section
  id="security"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-2xl sm:p-8"
>
  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
    Security & Transparency
  </p>

  <h2 className="mt-3 text-3xl font-bold text-white">
    Building Trust Through Decentralization
  </h2>

  <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
    PROPHIXY is committed to creating a transparent and trustworthy ecosystem
    where participants can contribute, verify information, and build
    reputation through decentralized technology.
  </p>


  <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

    {[
      {
        title: "Wallet-Based Authentication",
        description:
          "Secure identity verification through user-controlled wallets."
      },
      {
        title: "On-Chain Soulbound Identity",
        description:
          "Membership and reputation are represented through permanent blockchain identities."
      },
      {
        title: "Transparent Records",
        description:
          "Prediction activities and ecosystem participation remain verifiable."
      },
      {
        title: "Decentralized Verification",
        description:
          "Community participation helps maintain trust and accuracy."
      },
      {
        title: "Community-Driven Participation",
        description:
          "Members contribute knowledge and insights to strengthen the network."
      },
      {
        title: "Privacy-First Infrastructure",
        description:
          "Designed with respect for user privacy and secure participation."
      }
    ].map((item) => (
      <motion.div
        key={item.title}
        whileHover={{ y: -5 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6"
      >

        <div className="inline-flex rounded-2xl bg-emerald-400/10 p-3">
          <ShieldCheck className="h-6 w-6 text-emerald-300" />
        </div>


        <h3 className="mt-5 text-xl font-semibold text-white">
          {item.title}
        </h3>


        <p className="mt-3 leading-7 text-zinc-400">
          {item.description}
        </p>

      </motion.div>
    ))}

  </div>


  <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">

    <h3 className="text-xl font-semibold text-white">
      Transparency Is Our Foundation
    </h3>

    <p className="mt-3 leading-8 text-zinc-400">
      By combining blockchain technology, decentralized identity, and
      community intelligence, PROPHIXY creates a trusted environment where
      knowledge becomes a shared resource.
    </p>

  </div>

</motion.section>

{/* =========================
    OUR COMMITMENT
========================= */}

<motion.section
  id="commitment"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-2xl sm:p-8"
>
  <div className="flex flex-col items-center text-center">

    <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-emerald-400/20 bg-emerald-400/10">
      <Sparkles className="h-8 w-8 text-emerald-300" />
    </div>


    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
      Our Commitment
    </p>


    <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white">
      Empowering Africa Through Collective Intelligence
    </h2>


    <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
      PROPHIXY is committed to building an open, transparent, and
      community-driven intelligence platform that empowers Africans to make
      better decisions through decentralized forecasting and collective
      knowledge.
    </p>


    <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
      By combining human intelligence, blockchain technology, artificial
      intelligence, and community participation, PROPHIXY is creating a new
      approach to understanding future trends across Africa.
    </p>


    <div className="mt-10 grid w-full gap-5 md:grid-cols-3">

      {[
        {
          title: "Open Intelligence",
          description:
            "Making predictive insights accessible through community participation."
        },
        {
          title: "Transparent Ecosystem",
          description:
            "Building trust through decentralized technology and verifiable records."
        },
        {
          title: "Future Focused",
          description:
            "Creating tools that help communities anticipate opportunities."
        }
      ].map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left"
        >

          <div className="mb-4 inline-flex rounded-2xl bg-emerald-400/10 p-3">
            <Globe2 className="h-6 w-6 text-emerald-300" />
          </div>


          <h3 className="text-xl font-semibold text-white">
            {item.title}
          </h3>


          <p className="mt-3 leading-7 text-zinc-400">
            {item.description}
          </p>

        </motion.div>
      ))}

    </div>


    <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-gradient-to-r from-emerald-400/10 to-transparent p-6">

      <p className="text-xl font-semibold text-emerald-300">
        Together, we are creating the future of predictive intelligence in Africa.
      </p>

    </div>

  </div>

</motion.section>

{/* =========================
    JOIN THE INTELLIGENCE REVOLUTION
========================= */}

<motion.section
  id="join"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  className="rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-zinc-900/80 to-zinc-950 p-8 text-center shadow-[0_0_80px_rgba(0,230,118,0.15)] sm:p-12"
>

  <div className="mx-auto flex max-w-3xl flex-col items-center">

    <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-emerald-400/30 bg-emerald-400/10">
      <Rocket className="h-8 w-8 text-emerald-300" />
    </div>


    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
      Join The Intelligence Revolution
    </p>


    <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
      Africa's Future Will Be Shaped By Informed Decisions
    </h2>


    <p className="mt-6 leading-8 text-zinc-400">
      Become part of a community that transforms knowledge into opportunity
      through collective intelligence, decentralized forecasting, and
      transparent decision-making.
    </p>


    <div className="mt-8 flex flex-wrap justify-center gap-4">

      <button className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-zinc-950 transition hover:scale-105">
        Mint Soulbound Membership
      </button>


      <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-emerald-400/40 hover:text-emerald-300">
        Join Community
      </button>

    </div>


    <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">

      {[
        {
          icon: BadgeCheck,
          title: "Verified Identity",
          text: "Build your reputation through Soulbound Membership."
        },
        {
          icon: Users,
          title: "Community Powered",
          text: "Contribute knowledge and intelligence with Africa."
        },
        {
          icon: BrainCircuit,
          title: "Smarter Decisions",
          text: "Use collective insights to understand the future."
        }
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/5 p-5"
        >

          <item.icon className="mx-auto h-7 w-7 text-emerald-300" />

          <h3 className="mt-4 font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {item.text}
          </p>

        </div>
      ))}

    </div>


    <p className="mt-10 text-xl font-semibold text-emerald-300">
      Predict Smarter. Decide Better. Shape Africa's Future.
    </p>

  </div>

</motion.section>


{/* =========================
    FOOTER
========================= */}

<footer className="mt-10 border-t border-white/10 py-8">

  <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

    <div>

      <h3 className="text-xl font-bold tracking-[0.25em] text-white">
        PROPHIXY
      </h3>

      <p className="mt-2 text-sm text-zinc-500">
        Africa's decentralized prediction and decision intelligence network.
      </p>

    </div>


    <div className="flex gap-3">

      <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:text-emerald-300">
        Discord
      </button>


      <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:text-emerald-300">
        Telegram
      </button>


      <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:text-emerald-300">
        X
      </button>

    </div>

  </div>


  <div className="mt-6 text-center text-sm text-zinc-600">
    © {new Date(2026).getFullYear()} PROPHIXY. All rights reserved.
  </div>

</footer>
          </section>
        </div>
      </main>
    </div>
  );
}