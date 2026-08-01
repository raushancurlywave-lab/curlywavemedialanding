import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Bell, PlayCircle, Check, MessageCircle, ShieldCheck, TrendingUp, DollarSign, Bot,
  Instagram, Facebook, Star, Search, Award, Zap, Users, Store, Stethoscope, UtensilsCrossed,
  GraduationCap, ShoppingBag, User, Palette, Home, Trophy, ArrowRight, Sparkles, Clock,
  Camera, PenTool, BarChart3, Megaphone, Video, Target,
} from "lucide-react";
import logoAsset from "@/assets/curlywave-logo.jpeg.asset.json";
import demoVideo from "@/assets/curlywave-demo.mp4.asset.json";
import demoVideoWebm from "@/assets/curlywave-demo.webm.asset.json";
import demoPoster from "@/assets/curlywave-poster.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CurlyWave Media — Social Media Management & Automation for Growing Brands" },
      {
        name: "description",
        content:
          "CurlyWave Media & Automation Pvt. Ltd. — done-for-you Instagram, Facebook & WhatsApp management. Plans from ₹499/mo. Book a free strategy call.",
      },
      { property: "og:title", content: "CurlyWave Media — Social Media Management & Automation for Growing Brands" },
      { property: "og:description", content: "CurlyWave Media & Automation Pvt. Ltd. — done-for-you Instagram, Facebook & WhatsApp management. Plans from ₹499/mo. Book a free strategy call." },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "CurlyWave Media — Social Media Management & Automation for Growing Brands" },
      { name: "twitter:description", content: "CurlyWave Media & Automation Pvt. Ltd. — done-for-you Instagram, Facebook & WhatsApp management. Plans from ₹499/mo. Book a free strategy call." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const LOGO = logoAsset.url;

function useCountdown(minutes: number) {
  const [remaining, setRemaining] = useState(minutes * 60);
  useEffect(() => {
    const id = setInterval(() => setRemaining((r) => (r > 0 ? r - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const d = Math.floor(remaining / 86400);
  const h = Math.floor((remaining % 86400) / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;
  return { d, h, m, s };
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`px-4 sm:px-6 py-14 sm:py-20 ${className}`}>{children}</section>;
}


function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">{title}</h2>
    </div>
  );
}

function CTAButton({ label = "Book Free Strategy Call", full = false }: { label?: string; full?: boolean }) {
  return (
    <a href="#contact" className={full ? "block" : "inline-block"}>
      <Button
        size="lg"
        className={`h-14 px-8 text-base sm:text-lg font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow ${full ? "w-full" : ""}`}
      >
        {label} <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </a>
  );
}

function LandingPage() {
  const { d, h, m, s } = useCountdown(60 * 24 * 3);
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", plan: "Growth" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in name, email and phone.");
      return;
    }
    toast.success("Thanks! Our team will call you within 24 hours.");
  };

  const services = [
    { icon: Instagram, title: "Instagram Management", desc: "Daily posting, reels, stories, hashtag strategy and DM handling that grows real followers." },
    { icon: Facebook, title: "Facebook Growth", desc: "Page management, community building and boosted posts that drive local footfall & leads." },
    { icon: MessageCircle, title: "WhatsApp Automation", desc: "Green Tick, catalog, broadcast & chatbot flows that turn chats into paying customers." },
    { icon: PenTool, title: "Content Creation", desc: "Scroll-stopping graphics, captions and short-form video written by humans, not templates." },
    { icon: Video, title: "Reels & Video Editing", desc: "Cinematic reels and product videos edited to trend — 12–20 pieces every month." },
    { icon: Camera, title: "Photoshoots On-Location", desc: "Professional product & lifestyle shoots at your store, clinic or restaurant." },
    { icon: Megaphone, title: "Meta & Google Ads", desc: "Full-funnel paid campaigns with clear ROAS reporting — no guesswork, no fluff." },
    { icon: Search, title: "SEO & Google Reviews", desc: "Rank higher on local search and stack authentic 5-star reviews on Google." },
    { icon: Target, title: "Lead Generation", desc: "Qualified leads delivered to your WhatsApp — pay for outcomes, not vanity metrics." },
    { icon: Bot, title: "Chatbot & CRM Setup", desc: "24/7 auto-replies, appointment booking & lead capture on WhatsApp and Instagram." },
    { icon: BarChart3, title: "Analytics & Reporting", desc: "Weekly dashboards that show what's working — reach, engagement, leads and sales." },
    { icon: Palette, title: "Brand Identity", desc: "Logo refresh, brand kit and templates that make your feed instantly recognisable." },
  ];

  const forYou = [
    { icon: ShieldCheck, title: "You're Invisible Online", desc: "Customers can't find you on Instagram or Google — competitors are eating your lunch." },
    { icon: Trophy, title: "You Post But Nothing Grows", desc: "Random posts, zero strategy, followers stuck at the same number for months." },
    { icon: DollarSign, title: "Ads Are Burning Cash", desc: "Running Meta ads without a funnel and watching the budget vanish with no leads." },
    { icon: Bot, title: "Replies Are Killing You", desc: "You're glued to WhatsApp answering the same 10 questions from every customer." },
  ];

  const outcomes = [
    "A feed that actually looks like a brand",
    "Consistent daily posting on autopilot",
    "Qualified leads in your WhatsApp inbox",
    "24/7 automated customer replies",
    "Higher Google rank & 5-star reviews",
    "Clear monthly ROI reports — no jargon",
  ];

  const perfectFor = [
    { icon: Store, label: "Small Business Owners" },
    { icon: Stethoscope, label: "Doctors, Dentists & Lawyers" },
    { icon: UtensilsCrossed, label: "Hotels & Restaurants" },
    { icon: GraduationCap, label: "Coaches & Consultants" },
    { icon: ShoppingBag, label: "D2C & E-commerce Brands" },
    { icon: User, label: "Solopreneurs & Freelancers" },
    { icon: Palette, label: "Salons, Makeup & Bakers" },
    { icon: Home, label: "Real Estate Agents" },
  ];

  const plans = [
    {
      name: "Starter",
      price: 499,
      tagline: "For businesses starting their page",
      badge: null,
      details: [
        { label: "Accounts", value: "3 accounts (Facebook + Instagram)" },
        { label: "Posts", value: "15 / month" },
        { label: "Billing", value: "Minimum 3 months" },
        { label: "Content calendar", value: "Monthly, approved by you" },
        { label: "Reporting", value: "Monthly growth report" },
        { label: "Support", value: "Email, 48h response" },
      ],
      features: [
        "3 accounts (Facebook + Instagram)",
        "15 posts / month",
        "Minimum 3 months billing",
        "Captions, hashtags & posting handled",
        "Monthly content calendar for approval",
        "Profile / bio optimisation",
        "Monthly growth report",
      ],
    },
    {
      name: "Growth",
      price: 999,
      tagline: "Most-loved plan for growing pages",
      badge: "Most Popular",
      details: [
        { label: "Accounts", value: "3 accounts (Instagram + Facebook + X / YouTube)" },
        { label: "Posts", value: "10 / month" },
        { label: "Video reels", value: "5 / month (reel format, edited by us)" },
        { label: "Billing", value: "Minimum 3 months" },
        { label: "Engagement", value: "Comment & DM replies, daily" },
        { label: "Reporting", value: "Weekly performance report" },
        { label: "Support", value: "WhatsApp, same-day" },
      ],
      features: [
        "3 accounts (Instagram + Facebook + X / YouTube)",
        "10 posts + 5 video reels / month",
        "Minimum 3 months billing",
        "Daily comment & DM management",
        "Trend-based reel scripting & editing",
        "Weekly performance report",
      ],
    },

    {
      name: "Business",
      price: 5999,
      tagline: "Full social media desk for your brand",
      badge: "Best Value",
      details: [
        { label: "Platforms", value: "Instagram + Facebook + 1 more (LinkedIn / YouTube Shorts)" },
        { label: "Static posts", value: "30+ / month" },
        { label: "Reels", value: "20+ / month, custom shot list" },
        { label: "Stories", value: "Daily" },
        { label: "Engagement", value: "Full inbox & comment handling" },
        { label: "Extras", value: "Monthly content shoot day" },
        { label: "Reporting", value: "Weekly report + live dashboard" },
        { label: "Support", value: "Dedicated manager, WhatsApp group" },
      ],
      features: [
        "3 platforms managed end-to-end",
        "30+ posts, 20+ reels, daily stories",
        "Monthly content shoot day",
        "Full inbox, comment & DM handling",
        "Dedicated social media manager",
        "Weekly strategy call + live dashboard",
      ],
    },
  ];


  const faqs = [
    { q: "How soon do you start after I sign up?", a: "Onboarding takes 48 hours. You'll get a dedicated WhatsApp group, brand questionnaire and content calendar within 3 working days." },
    { q: "Do I need to give access to my accounts?", a: "Yes — we use secure Meta Business Suite access. You stay the owner at all times; we never change passwords." },
    { q: "Is there a lock-in contract?", a: "No lock-in. Plans are billed monthly and you can pause or cancel anytime with 7 days notice." },
    { q: "Do you handle ads budget separately?", a: "Yes. Management fee is what you see; the ad spend goes directly to Meta/Google from your card and is fully transparent." },
    { q: "Which cities do you serve?", a: "We serve clients across India. On-location shoots (Business plan) are available in top 10 metros; other cities on request." },
    { q: "How do I pay?", a: "Secure payments via Razorpay — UPI, cards, netbanking. GST invoice provided every month." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-center py-3 px-4 text-sm sm:text-base font-semibold">
        <Bell className="inline h-4 w-4 mr-2 animate-pulse" />
        Onboarding just 5 new brands this month — Book your free strategy call today.
      </div>

      {/* HERO */}
      <Section className="hero-bg">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm mb-6 shadow-glow">
              <Sparkles className="h-4 w-4" /> A Startup Doing Social Media Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              We Grow Your <span className="text-primary">Instagram</span>, <span className="text-primary">Facebook</span> & <span className="text-primary">WhatsApp</span> — So You Can Focus On Running The Business
            </h1>
            <p className="mt-5 text-lg text-muted-foreground font-medium">
              Done-for-you content, ads and automation for small businesses, doctors, restaurants & D2C brands. Plans starting at <span className="font-bold text-foreground">₹499/mo</span>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <CTAButton />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <img src={LOGO} alt="CurlyWave Media logo" className="h-10 w-10 rounded-lg object-cover" />
                <div>
                  <div className="font-bold text-foreground">CurlyWave Media</div>
                  <div>& Automation Pvt. Ltd.</div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground font-semibold">
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <span>Rated 4.9/5 by 500+ Indian brands</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden bg-card shadow-card border border-border">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-gold" />
                <span className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <div className="aspect-video bg-secondary relative">
                <video
                  poster={demoPoster.url}
                  controls
                  playsInline
                  muted
                  autoPlay
                  loop
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  <source src={demoVideoWebm.url} type="video/webm" />
                  <source src={demoVideo.url} type="video/mp4" />
                </video>
                <div className="absolute bottom-4 right-4 text-xs font-semibold pointer-events-none">
                  <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5" /> +312% Reach
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </Section>

      {/* Featured In / Stats */}
      <Section className="bg-secondary/50 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Trusted By Growing Indian Brands</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center opacity-80 mb-10">
            {["Metropolis Labs", "OZiva", "The Local Kitchen", "Skin Story"].map((n) => (
              <div key={n} className="font-display text-lg sm:text-xl font-bold text-foreground/70">{n}</div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { n: "500+", l: "Brands Managed" },
              { n: "12M+", l: "Monthly Reach" },
              { n: "38K+", l: "Leads Delivered" },
              { n: "4.9★", l: "Client Rating" },
            ].map((st) => (
              <div key={st.l} className="bg-card border border-border rounded-2xl p-5 shadow-card">
                <div className="text-3xl font-bold text-primary">{st.n}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-1">{st.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Us */}
      <Section>
        <SectionTitle eyebrow="Why CurlyWave" title={<>Everything Your Brand Needs — <span className="text-primary">Under One Roof</span></>} />
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "Dedicated content team — no interns, no AI-only slop",
            "Green Tick WhatsApp with catalog + chatbot",
            "Transparent monthly reports with real ROI",
            "No lock-in — cancel anytime after 30 days",
            "Meta & Google certified ad managers",
            "GST invoice & secure Razorpay payments",
          ].map((b) => (
            <div key={b} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card">
              <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5" strokeWidth={3} />
              </div>
              <p className="font-semibold text-foreground">{b}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10"><CTAButton /></div>
      </Section>

      {/* Services */}
      <Section className="bg-secondary/40">
        <SectionTitle eyebrow="Services" title={<>What We <span className="text-primary">Do For You</span></>} />
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:shadow-glow transition"
            >
              <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <l.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{l.title}</h3>
              <p className="text-sm text-muted-foreground font-medium">{l.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10"><CTAButton /></div>
      </Section>

      {/* Is This You */}
      <Section>
        <SectionTitle eyebrow="Sound Familiar?" title={<>You Need Us <span className="text-primary">If…</span></>} />
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5">
          {forYou.map((f) => (
            <div key={f.title} className="flex gap-5 bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="h-14 w-14 rounded-2xl bg-gold/20 text-primary flex items-center justify-center flex-shrink-0">
                <f.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                <p className="text-muted-foreground font-medium">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-3">Simple, Transparent Pricing</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-3">Pick The Plan That <span className="text-gold">Fits Your Growth</span></h2>
            <p className="opacity-80 font-medium">All plans include content, posting & monthly reporting. No hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => {
              const highlight = p.name === "Growth";
              return (
                <div
                  key={p.name}
                  className={`relative rounded-2xl p-7 border shadow-card flex flex-col ${
                    highlight
                      ? "bg-gold text-gold-foreground border-gold scale-[1.02]"
                      : "bg-primary-foreground/10 backdrop-blur border-primary-foreground/20"
                  }`}
                >
                  {p.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      highlight ? "bg-primary text-primary-foreground" : "bg-gold text-gold-foreground"
                    }`}>
                      {p.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className={`text-sm font-medium mt-1 ${highlight ? "opacity-80" : "opacity-70"}`}>{p.tagline}</p>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-5xl font-bold">₹{p.price.toLocaleString("en-IN")}</span>
                    <span className="font-semibold opacity-70">/mo</span>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm font-semibold">
                        <Check className="h-5 w-5 flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-7">
                    <Button
                      size="lg"
                      className={`w-full h-12 rounded-xl font-bold ${
                        highlight
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      }`}
                    >
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm font-medium opacity-80 mt-8">
            <ShieldCheck className="inline h-4 w-4 mr-1" /> Secure payment via Razorpay · GST invoice · No lock-in
          </p>
        </div>
      </Section>

      {/* PLAN DETAILS */}
      <Section id="plan-details">
        <SectionTitle
          eyebrow="Every Detail, In Writing"
          title={<>What's Inside Each <span className="text-primary">Plan</span></>}
        />
        <p className="text-center text-muted-foreground font-medium max-w-2xl mx-auto -mt-6 mb-10">
          Only social media management — no vague retainers, no hidden add-ons. This is exactly what we deliver every month.
        </p>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
              <div className="bg-secondary px-6 py-5 border-b border-border">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <span className="text-lg font-bold text-primary">₹{p.price.toLocaleString("en-IN")}<span className="text-sm font-semibold text-muted-foreground">/mo</span></span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mt-1">{p.tagline}</p>
              </div>
              <dl className="divide-y divide-border">
                {p.details.map((d) => (
                  <div key={d.label} className="px-6 py-3 flex gap-4 justify-between items-start">
                    <dt className="text-sm font-bold text-muted-foreground whitespace-nowrap">{d.label}</dt>
                    <dd className="text-sm font-semibold text-right">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <p className="text-center text-sm font-medium text-muted-foreground mt-8 max-w-3xl mx-auto">
          Every plan includes account setup, content approval before publishing, and monthly reporting. Ad spend, if you choose to run ads, is always paid directly by you to Meta.
        </p>
      </Section>


      {/* Outcomes */}
      <Section>
        <SectionTitle eyebrow="What You Get" title={<>What Changes In <span className="text-primary">90 Days With Us</span></>} />
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
          {outcomes.map((o) => (
            <div key={o} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-card">
              <Check className="h-6 w-6 text-primary flex-shrink-0" strokeWidth={3} />
              <p className="font-semibold">{o}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10"><CTAButton /></div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-secondary/40">
        <SectionTitle eyebrow="Client Love" title={<>What Our <span className="text-primary">Clients Say</span></>} />
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { name: "Rohan Sharma", biz: "Restaurant Owner, Pune", q: "CurlyWave rebuilt our Instagram from scratch. Weekend footfall is up 60% in 4 months." },
            { name: "Dr. Meera Iyer", biz: "Dental Clinic, Mumbai", q: "WhatsApp reminders + Google reviews — appointment no-shows dropped by half." },
            { name: "Aditi Verma", biz: "D2C Skincare, Delhi", q: "Green tick + catalog + reels combo pushed us to 3x monthly orders." },
            { name: "Kabir Malhotra", biz: "Coaching Institute", q: "Their lead-gen ads bring us 200+ qualified enquiries every month like clockwork." },
            { name: "Nisha Kapoor", biz: "Makeup Artist, Jaipur", q: "Bookings on autopilot. Best decision I've made for my studio this year." },
            { name: "Vikram Rao", biz: "Real Estate, Bengaluru", q: "Closure rate on WhatsApp leads went from 8% to 22%. Team is genuinely sharp." },
          ].map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-semibold mb-4">"{t.q}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.biz}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Meet Founder */}
      <Section>
        <SectionTitle eyebrow="The Team" title={<>Meet Your <span className="text-primary">Growth Partner</span></>} />
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-gold/30 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl p-2 border border-border shadow-card">
              <img src={LOGO} alt="Founder" className="w-full aspect-square object-cover rounded-2xl" />
            </div>
          </div>
          <div>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: Award, t: "Founder — CurlyWave Media" },
                { icon: Clock, t: "10+ Yrs Marketing Experience" },
                { icon: Users, t: "Worked With 500+ Brands & MNCs" },
                { icon: Bot, t: "Scaled 10,000+ SMBs On Automation" },
              ].map((s) => (
                <div key={s.t} className="flex items-center gap-3 bg-card border border-border rounded-xl p-3 shadow-card">
                  <s.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-sm">{s.t}</span>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-3"><span className="text-primary">Abhinav Dubey</span> — Founder, CurlyWave Media & Automation Pvt. Ltd.</h3>
            <p className="text-muted-foreground font-medium mb-3">
              A marketing professional with 10+ years working with top MNCs and Indian startups. CurlyWave is his own young startup — a small, hands-on team that treats every brand's page like its own, with one focus: measurable growth.
            </p>
            <p className="text-muted-foreground font-medium">
              Our promise: no jargon, no lock-ins, no vanity metrics. Just content that looks premium, ads that convert, and automation that works while you sleep.
            </p>
          </div>
        </div>
      </Section>

      {/* Perfect For */}
      <Section className="bg-secondary/40">
        <SectionTitle eyebrow="Who We Serve" title={<>Built For <span className="text-primary">Ambitious SMBs</span></>} />
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {perfectFor.map((p) => (
            <div key={p.label} className="bg-card border border-border rounded-2xl p-5 text-center shadow-card hover:-translate-y-1 transition">
              <div className="h-12 w-12 mx-auto rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-3">
                <p.icon className="h-6 w-6" />
              </div>
              <p className="font-bold text-sm">{p.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10"><CTAButton /></div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionTitle eyebrow="FAQs" title={<>Frequently Asked <span className="text-primary">Questions</span></>} />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`} className="bg-card border border-border rounded-xl px-5 shadow-card">
                <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-medium">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Contact / Lead form */}
      <Section id="contact" className="bg-primary text-primary-foreground scroll-mt-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase mb-4">
              <Zap className="h-3.5 w-3.5" /> Only 5 Slots Left This Month
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Book Your Free Strategy Call</h2>
            <p className="mb-6 font-semibold opacity-90 max-w-md">
              A 20-minute audit of your Instagram, Facebook & WhatsApp — with a custom growth plan you can keep, even if you don't sign up.
            </p>
            <p className="mb-4 font-semibold opacity-90">Offer expires in:</p>
            <div className="grid grid-cols-4 gap-3 max-w-md">
              {[
                { v: d, l: "Days" }, { v: h, l: "Hours" }, { v: m, l: "Minutes" }, { v: s, l: "Seconds" },
              ].map((c) => (
                <div key={c.l} className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-xl py-3 text-center">
                  <div className="text-3xl font-bold">{String(c.v).padStart(2, "0")}</div>
                  <div className="text-xs uppercase opacity-70 font-bold">{c.l}</div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-card text-foreground rounded-2xl p-6 sm:p-8 shadow-card border border-border"
          >
            <h3 className="text-2xl font-bold mb-1">Talk To Our Growth Team</h3>
            <p className="text-sm text-muted-foreground font-medium mb-6">Fill in your details — we'll call you within 24 hours.</p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="font-bold">Full Name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="h-12 mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email" className="font-bold">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@business.com" className="h-12 mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone" className="font-bold">WhatsApp Number</Label>
                <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98xxxxxxxx" className="h-12 mt-1.5" />
              </div>
              <div>
                <Label htmlFor="biz" className="font-bold">Business Type</Label>
                <Input id="biz" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder="Restaurant, Clinic, D2C, etc." className="h-12 mt-1.5" />
              </div>
              <div>
                <Label htmlFor="plan" className="font-bold">Interested Plan</Label>
                <select
                  id="plan"
                  value={form.plan}
                  onChange={(e) => setForm({ ...form, plan: e.target.value })}
                  className="w-full h-12 mt-1.5 rounded-md border border-input bg-background px-3 font-semibold"
                >
                  <option>Starter — ₹499/mo</option>
                  <option>Growth — ₹999/mo</option>
                  <option>Business — ₹5,999/mo</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                Request My Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-muted-foreground font-medium">
                <ShieldCheck className="inline h-3.5 w-3.5 mr-1" /> Your details are safe. No spam, ever.
              </p>
            </div>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="CurlyWave Media logo" className="h-10 w-10 rounded-lg object-cover" />
            <div>
              <div className="font-bold">CurlyWave Media & Automation Pvt. Ltd.</div>
              <div className="text-xs opacity-70">© {new Date().getFullYear()} All rights reserved.</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm opacity-80">
            <a href="#" className="hover:opacity-100">Privacy</a>
            <a href="#" className="hover:opacity-100">Terms</a>
            <a href="#" className="hover:opacity-100">Refund Policy</a>
            <a href="#" className="hover:opacity-100">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
