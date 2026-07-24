import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Bell, PlayCircle, Check, MessageCircle, ShieldCheck, TrendingUp, DollarSign, Bot,
  Instagram, Facebook, Star, Search, Award, Zap, Users, Store, Stethoscope, UtensilsCrossed,
  GraduationCap, ShoppingBag, User, Palette, Home, Trophy, ArrowRight, Sparkles, Clock,
} from "lucide-react";
import logoAsset from "@/assets/curlywave-logo.jpeg.asset.json";
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
      { title: "CurlyWave Workshop — Grow Your Business With Social Media & WhatsApp Automation" },
      {
        name: "description",
        content:
          "Join our 2-hour LIVE workshop and discover how to grow your business with Instagram, Facebook & WhatsApp automation. Register now at just ₹99.",
      },
      { property: "og:title", content: "CurlyWave Workshop — Grow Your Business On Automation" },
      { property: "og:description", content: "2-Hour LIVE Workshop. Learn WhatsApp, Instagram & Facebook automation to grow your business. Just ₹99." },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "CurlyWave Workshop — Grow On Automation" },
      { name: "twitter:description", content: "2-Hour LIVE Workshop. Just ₹99." },
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

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-4 sm:px-6 py-14 sm:py-20 ${className}`}>{children}</section>;
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

function CTAButton({ label = "Register Now at just ₹99", full = false }: { label?: string; full?: boolean }) {
  return (
    <a href="#register" className={full ? "block" : "inline-block"}>
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
  const { d, h, m, s } = useCountdown(60 * 24);
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in name, email and phone.");
      return;
    }
    toast.success("Registration received! Redirecting to payment…");
  };

  const learn = [
    { icon: MessageCircle, title: "WhatsApp Marketing Mastery", desc: "Reach thousands of customers in their WhatsApp inbox without getting banned or reported." },
    { icon: ShoppingBag, title: "Catalog Sales Simplified", desc: "Set up your WhatsApp business catalog and sell products directly — no website needed." },
    { icon: TrendingUp, title: "Social Lead Conversion", desc: "Proven methods to generate leads from Facebook & Instagram and convert them into paying customers." },
    { icon: PlayCircle, title: "Engage With Multimedia", desc: "Send promotional and reminder messages with images, videos and CTA buttons on WhatsApp." },
    { icon: ShieldCheck, title: "Get Verified Fast", desc: "Get the Green Tick on WhatsApp Business API for higher open rates and trust." },
    { icon: Facebook, title: "Automate Facebook Growth", desc: "Automated replies on Facebook comments, stories and Messenger to boost sales." },
    { icon: Instagram, title: "Automate Instagram Engagement", desc: "Auto-reply on posts, story mentions and DMs for faster customer conversion." },
    { icon: Search, title: "Boost Google Rankings", desc: "Rank higher on Google with 5-star reviews and win qualified high-paying customers." },
  ];

  const forYou = [
    { icon: ShieldCheck, title: "Prevent WhatsApp Bans", desc: "Tired of your number getting banned when sending bulk messages on WhatsApp." },
    { icon: Trophy, title: "Stay Ahead Competitively", desc: "Your competition is growing and you don't want to lose customers to them." },
    { icon: DollarSign, title: "Cost-Effective Marketing", desc: "You don't want to spend lakhs of rupees on marketing your business." },
    { icon: Bot, title: "Automate Customer Replies", desc: "You're struggling with manually replying to sales inquiries and customers." },
  ];

  const bonuses = [
    { n: 1, title: "Live Training & Video Tutorials", worth: "₹2,000" },
    { n: 2, title: "Facebook & Instagram Automation Strategy", worth: "₹3,500" },
    { n: 3, title: "Smart Methods to Increase 5-Star Google Reviews", worth: "₹1,100" },
    { n: 4, title: "Roadmap to Convert Leads into Paying Customers", worth: "₹1,200" },
  ];

  const outcomes = [
    "Satisfied and loyal customers",
    "Operational efficiency on autopilot",
    "Quality leads on automation",
    "Be available 24/7 for your customers",
    "High conversion rate",
    "Increased sales and revenue",
  ];

  const perfectFor = [
    { icon: Store, label: "Small Business Owners" },
    { icon: Stethoscope, label: "Doctors, Dentists & Lawyers" },
    { icon: UtensilsCrossed, label: "Hotel & Restaurant Owners" },
    { icon: GraduationCap, label: "Coaches & Consultants" },
    { icon: ShoppingBag, label: "E-commerce Owners" },
    { icon: User, label: "Solopreneurs / Self-employed" },
    { icon: Palette, label: "Makeup Artists & Bakers" },
    { icon: Home, label: "Real Estate Owners & Agents" },
  ];

  const faqs = [
    { q: "Is it a live or pre-recorded workshop?", a: "This is a LIVE workshop where you can ask questions at the end." },
    { q: "Will I get a recording of the workshop?", a: "We don't provide recordings. Please clear your calendar to attend live and get the best experience." },
    { q: "Is it for all types of businesses?", a: "Yes — digital automation works for every business type. It's the fastest way to grow." },
    { q: "I made the payment but didn't receive any email.", a: "Please reach out to us via email or phone and our team will get back to you immediately." },
    { q: "How will I join the workshop?", a: "You'll receive a Zoom invite a few hours before the workshop on your registered email and in our WhatsApp group." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-center py-3 px-4 text-sm sm:text-base font-semibold">
        <Bell className="inline h-4 w-4 mr-2 animate-pulse" />
        Mark Your Calendars! Join us on 15 August 2026, at 10:00 AM for an Exclusive Webinar!
      </div>

      {/* HERO */}
      <Section className="hero-bg">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm mb-6 shadow-glow">
              <PlayCircle className="h-4 w-4" /> 2 Hours LIVE Workshop
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Discover How To <span className="text-primary">Increase Sales</span>, Improve <span className="text-primary">Customer Satisfaction</span> and <span className="text-primary">Grow Your Business</span> With <span className="text-primary">WhatsApp</span>, Instagram & Facebook Automation
            </h1>
            <p className="mt-5 text-lg text-muted-foreground font-medium">
              (Without any prior experience or technical knowledge)
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
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary to-gold/20 flex items-center justify-center relative">
                <button className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow hover:scale-105 transition">
                  <PlayCircle className="h-12 w-12" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold">
                  <span className="bg-card/90 backdrop-blur px-3 py-1.5 rounded-full">Live Workshop Preview</span>
                  <span className="bg-destructive text-destructive-foreground px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> LIVE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Featured In */}
      <Section className="bg-secondary/50 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">As Featured In</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center opacity-80">
            {["The Times of India", "Dainik Bhaskar", "YourStory", "Startup Story"].map((n) => (
              <div key={n} className="font-display text-lg sm:text-xl font-bold text-foreground/70">{n}</div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Attend */}
      <Section>
        <SectionTitle eyebrow="Benefits" title={<>Why Attend This <span className="text-primary">Workshop?</span></>} />
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "Increase your credibility with the Green Tick",
            "Get more sales and repeat customers for your business",
            "Increase your business revenue and profits",
            "Automate business operations & get more freedom",
            "Attract leads & convert them into paying clients",
            "Save lakhs on manual marketing spend",
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

      {/* What You'll Learn */}
      <Section className="bg-secondary/40">
        <SectionTitle eyebrow="Curriculum" title={<>What You Will <span className="text-primary">Learn</span> In The Workshop?</>} />
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {learn.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
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

      {/* Designed For You If */}
      <Section>
        <SectionTitle eyebrow="Is This For You?" title={<>The Workshop Is <span className="text-primary">Designed For You</span> If…</>} />
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

      {/* Bonuses */}
      <Section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-3">Special Offer</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">Register Now & Claim</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mb-10">
            <span className="text-gold">4 Exclusive Bonuses</span> For FREE
          </h3>
          <div className="space-y-4 text-left">
            {bonuses.map((b) => (
              <div key={b.n} className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-xl p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold text-gold-foreground flex items-center justify-center font-bold">
                    {b.n}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase opacity-80">Bonus {b.n}</div>
                    <div className="font-bold text-lg">{b.title}</div>
                  </div>
                </div>
                <div className="text-gold font-bold whitespace-nowrap">Worth {b.worth}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-center">
            <div className="bg-primary-foreground/10 rounded-xl p-5">
              <div className="text-xs uppercase opacity-70 font-bold">Total Value</div>
              <div className="text-2xl font-bold line-through opacity-70">₹7,800</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-5">
              <div className="text-xs uppercase opacity-70 font-bold">Regular Price</div>
              <div className="text-2xl font-bold line-through opacity-70">₹999</div>
            </div>
            <div className="bg-gold text-gold-foreground rounded-xl p-5">
              <div className="text-xs uppercase opacity-80 font-bold">Today's Offer</div>
              <div className="text-3xl font-bold">₹99</div>
            </div>
          </div>
          <div className="mt-10">
            <a href="#register">
              <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-xl bg-gold text-gold-foreground hover:bg-gold/90">
                Register Now at just ₹99 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section>
        <SectionTitle eyebrow="Transformation" title={<>What Will Change In Your Business <span className="text-primary">After The Workshop?</span></>} />
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
        <SectionTitle eyebrow="Real Feedback" title={<>Feedback From Our <span className="text-primary">Previous Attendees</span></>} />
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { name: "Rohan Sharma", biz: "Restaurant Owner, Pune", q: "Automated my WhatsApp orders in a week. Sales are up 40%." },
            { name: "Dr. Meera Iyer", biz: "Dental Clinic, Mumbai", q: "Appointment no-shows dropped by half thanks to reminder automation." },
            { name: "Aditi Verma", biz: "D2C Skincare, Delhi", q: "Green tick + catalog on WhatsApp = we closed 3x more orders." },
            { name: "Kabir Malhotra", biz: "Coaching Institute", q: "Lead automation from Instagram saved my team 20 hours a week." },
            { name: "Nisha Kapoor", biz: "Makeup Artist, Jaipur", q: "Bookings on autopilot. Best ₹99 I've ever spent." },
            { name: "Vikram Rao", biz: "Real Estate, Bengaluru", q: "Qualified leads on WhatsApp — my closure rate went from 8% to 22%." },
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

      {/* Meet Your Coach */}
      <Section>
        <SectionTitle eyebrow="Your Mentor" title={<>Meet Your <span className="text-primary">Coach</span></>} />
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-gold/30 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl p-2 border border-border shadow-card">
              <img src={LOGO} alt="Coach" className="w-full aspect-square object-cover rounded-2xl" />
            </div>
          </div>
          <div>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: Award, t: "Founder — CurlyWave Media" },
                { icon: Clock, t: "10+ Yrs Marketing Experience" },
                { icon: Users, t: "Worked with 500+ Brands & MNCs" },
                { icon: Bot, t: "Scaled 10,000+ Businesses on Automation" },
              ].map((s) => (
                <div key={s.t} className="flex items-center gap-3 bg-card border border-border rounded-xl p-3 shadow-card">
                  <s.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-sm">{s.t}</span>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-3"><span className="text-primary">Abhinav Dubey</span> — Founder, CurlyWave Media & Automation Pvt. Ltd.</h3>
            <p className="text-muted-foreground font-medium mb-3">
              A marketing professional with 10+ years of experience working with top MNCs and dynamic Indian startups. He's helped over 10,000 businesses scale with digital automation.
            </p>
            <p className="text-muted-foreground font-medium">
              His mission: help business owners like you grow revenue, improve customer engagement, and automate operations with technology and smart strategy.
            </p>
          </div>
        </div>
      </Section>

      {/* Perfect For */}
      <Section className="bg-secondary/40">
        <SectionTitle eyebrow="Audience" title={<>This Workshop Is <span className="text-primary">Perfect For…</span></>} />
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

      {/* Register / Price + Countdown */}
      <Section id="register" className="bg-primary text-primary-foreground scroll-mt-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase mb-4">
              <Zap className="h-3.5 w-3.5" /> Limited Seats
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Reserve Your Seat Now</h2>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-6xl font-bold text-gold">₹99</span>
              <span className="text-2xl line-through opacity-60">₹999</span>
            </div>
            <p className="mb-4 font-semibold opacity-90">Offer Expires In:</p>
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
            <h3 className="text-2xl font-bold mb-1">Register Now</h3>
            <p className="text-sm text-muted-foreground font-medium mb-6">Fill in your details to lock your seat.</p>
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
                <Label htmlFor="biz" className="font-bold">Business Type (optional)</Label>
                <Input id="biz" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder="Restaurant, Clinic, D2C, etc." className="h-12 mt-1.5" />
              </div>
              <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                Pay ₹99 & Register <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-muted-foreground font-medium">
                <ShieldCheck className="inline h-3.5 w-3.5 mr-1" /> Secure payment via Razorpay. 100% safe.
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
