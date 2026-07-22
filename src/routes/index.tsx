import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, MessageCircle, Check, Sparkles, Instagram, Facebook, Linkedin, Youtube,
  Twitter, Star, PenLine, Palette, Calendar, Film, Video, Type, UserRound, Hash,
  BarChart3, Globe, Layout, Building2, Megaphone, ShieldCheck, Zap, Clock, TrendingUp,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CurlyWave Media — Social Media Management That Actually Grows Your Business" },
      {
        name: "description",
        content:
          "Full-stack social media management, content, design and Meta Ads for small businesses, doctors, restaurants and startups. Plans from ₹499/month. Trusted by 100+ brands.",
      },
      { property: "og:title", content: "CurlyWave Media — Social Media Management That Grows Businesses" },
      { property: "og:description", content: "Content, design, reels, ads and reporting — handled by a dedicated team. Plans from ₹499/month. Trusted by 100+ brands." },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "CurlyWave Media — Social Media Management" },
      { name: "twitter:description", content: "Full-stack social media, content, design and Meta Ads. Plans from ₹499/month." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CurlyWave Media & Automation Pvt. Ltd.",
          url: "/",
          description:
            "Social media management agency helping small businesses, startups and local brands grow with content, design, reels and Meta Ads.",
          sameAs: [],
        }),
      },
    ],
  }),
  component: LandingPage,
});

/* ---------------- Landing Page ---------------- */
function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Pricing />
      <Process />
      <LeadForm />
      <FAQ />
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-card" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 pl-2">
            <Logo />
            <span className="font-semibold tracking-tight text-sm">CurlyWave</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
            <a href="#process" className="hover:text-foreground transition">Process</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
          <a href="#start">
            <Button size="sm" className="rounded-full bg-gold text-gold-foreground hover:opacity-90 font-medium">
              Get Started <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="relative h-8 w-8 rounded-lg bg-gold shadow-glow overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold text-sm">C</div>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      {/* floating social icons */}
      <FloatingIcons />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1 text-gold">
            <Star className="h-3.5 w-3.5 fill-current" />
          </span>
          Trusted by 100+ Brands across India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] tracking-tight font-semibold text-gradient"
        >
          Social media that turns
          <br />
          <span className="italic font-normal" style={{ fontFamily: "var(--font-display)" }}>
            followers into customers.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          A dedicated team of writers, designers and strategists managing your brand
          end-to-end — posts, reels, ads and reports. No freelancer chaos.
          No missed deadlines. Just growth you can measure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#pricing">
            <Button size="lg" className="rounded-full bg-gold text-gold-foreground hover:opacity-90 font-semibold h-12 px-7 shadow-glow">
              Start My 3-Month Plan <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            <Button size="lg" variant="outline" className="rounded-full glass-strong border-white/15 hover:bg-white/10 h-12 px-7 font-medium">
              <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-gold" /> Razorpay secured payments</span>
          <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-gold" /> Onboard in 24 hours</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-gold" /> Dedicated manager</span>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingIcons() {
  const items = [
    { Icon: Instagram, className: "top-[18%] left-[8%]", delay: 0 },
    { Icon: Facebook, className: "top-[28%] right-[10%]", delay: 1.2 },
    { Icon: Youtube, className: "top-[55%] left-[6%]", delay: 2 },
    { Icon: Linkedin, className: "top-[62%] right-[8%]", delay: 0.6 },
    { Icon: Twitter, className: "top-[38%] left-[14%]", delay: 3 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
      {items.map(({ Icon, className, delay }, i) => (
        <div
          key={i}
          className={`absolute ${className} animate-float`}
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="glass-strong rounded-2xl p-3.5 shadow-card">
            <Icon className="h-5 w-5 text-gold" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const brands = [
    "Metropolis Labs", "OZiva", "Kuiklo", "Share Market App", "Healthy Child",
    "Nuttafair", "Dry Fruit Food", "Millet Vive", "Yuki", "SBTCC",
  ];
  const row = [...brands, ...brands];
  return (
    <section className="py-14 border-y border-white/5 bg-black/20">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
        Trusted by ambitious brands
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex gap-14 animate-marquee w-max">
          {row.map((b, i) => (
            <span key={i} className="text-xl md:text-2xl font-semibold tracking-tight text-muted-foreground/80 whitespace-nowrap" style={{ fontFamily: "var(--font-display)" }}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  const stats = [
    { value: 100, suffix: "+", label: "Brands Served" },
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "M+", label: "Social Reach" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 2, ease: [0.16, 1, 0.3, 1] });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [inView, value, count, rounded]);
  return (
    <div ref={ref} className="glass rounded-3xl p-8 text-center shadow-card">
      <div className="text-4xl md:text-5xl font-semibold text-gold tracking-tight">
        {display}{suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    { Icon: PenLine, title: "Content Writing", desc: "Captions, hooks and copy that sound like your brand — not a template." },
    { Icon: Palette, title: "Graphic Design", desc: "On-brand statics and carousels designed by senior visual designers." },
    { Icon: Calendar, title: "Content Calendar", desc: "A monthly plan approved in advance. No last-minute scrambling." },
    { Icon: Layout, title: "Carousel Design", desc: "Story-driven, swipe-worthy carousels engineered for saves and shares." },
    { Icon: Film, title: "Reels Production", desc: "Trend-aware reels edited to convert, not just entertain." },
    { Icon: Video, title: "Video Editing", desc: "Professional cuts, captions and motion for YouTube and Meta." },
    { Icon: Type, title: "Copywriting", desc: "Conversion-first copy for ads, landing pages and launches." },
    { Icon: UserRound, title: "Profile Optimization", desc: "Bio, highlights and grid rebuilt so first impressions convert." },
    { Icon: Hash, title: "Hashtag Strategy", desc: "Research-backed hashtags matched to your niche and city." },
    { Icon: BarChart3, title: "Monthly Reports", desc: "Plain-English reports on what worked, what didn't and why." },
    { Icon: Globe, title: "Website Development", desc: "SEO-ready websites that load fast and rank higher." },
    { Icon: Building2, title: "Business Branding", desc: "Identity systems that make small businesses look established." },
    { Icon: Megaphone, title: "Meta Ads Support", desc: "Campaigns built to lower your cost-per-lead, not just impressions." },
  ];
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead
          eyebrow="What we do"
          title={<>Everything your brand needs to <span className="text-gold">show up daily</span></>}
          sub="One integrated team replaces four freelancers, three tools and endless follow-ups."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group relative glass rounded-2xl p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold shadow-glow">
                <s.Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
type Plan = {
  name: string;
  price: string;
  actual?: string;
  period: string;
  highlight?: boolean;
  features: string[];
  cta: string;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "₹499",
    actual: "Actual value ₹15,000",
    period: "/month · 3-month plan",
    features: [
      "Dedicated content writing team",
      "Dedicated graphic design team",
      "Dedicated social media manager",
      "Instagram + Facebook",
      "One additional platform of choice",
      "Monthly content calendar",
    ],
    cta: "Start Starter",
  },
  {
    name: "Growth",
    price: "₹999",
    period: "/month · 3-month plan",
    highlight: true,
    badge: "Most popular",
    features: [
      "Everything in Starter",
      "5 professional videos every month",
      "10 static + carousel posts",
      "Profile optimization",
      "Any 3 platforms — Instagram, Facebook, LinkedIn, Twitter, YouTube",
      "Hashtag & trend strategy",
    ],
    cta: "Start Growth",
  },
  {
    name: "Business",
    price: "₹5,999",
    period: "/month · 3-month plan",
    features: [
      "Everything in Growth",
      "Professional website",
      "High-converting landing page",
      "SEO-ready build",
      "Business email setup",
      "Priority support",
    ],
    cta: "Start Business",
  },
  {
    name: "Premium Growth",
    price: "Custom",
    period: "Business + Meta Ads",
    features: [
      "Everything in Business",
      "Meta Ads setup & strategy",
      "Complete lead funnel build",
      "Ongoing ad optimization",
      "Priority WhatsApp support",
      "Meta Ads setup: ₹2,000 + GST (optional add-on)",
    ],
    cta: "Talk to us",
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead
          eyebrow="Pricing"
          title={<>Straightforward plans. <span className="text-gold">Serious outcomes.</span></>}
          sub="Every plan runs for 3 months so we have time to build momentum — not just post."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`relative rounded-3xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-gradient-to-b from-white/10 to-white/[0.02] border border-gold/40 shadow-glow"
                  : "glass shadow-card"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {plan.badge}
                </div>
              )}
              <div className="text-sm text-muted-foreground">{plan.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{plan.period}</div>
              {plan.actual && (
                <div className="mt-2 inline-flex w-fit rounded-full bg-gold/10 text-gold px-2.5 py-0.5 text-[11px] font-medium border border-gold/20">
                  {plan.actual}
                </div>
              )}
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#start" className="mt-7">
                <Button
                  className={`w-full rounded-full h-11 font-semibold ${
                    plan.highlight
                      ? "bg-gold text-gold-foreground hover:opacity-90"
                      : "bg-white/10 hover:bg-white/15 text-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          All prices are exclusive of 18% GST. Meta Ads setup is an optional one-time add-on (₹2,000 + GST).
        </p>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Choose your plan", d: "Pick the plan that fits your stage. Everything is transparent — no hidden costs." },
    { n: "02", t: "Share your brand", d: "Fill a short brief. We map your audience, competitors and content pillars." },
    { n: "03", t: "Approve the calendar", d: "You see the entire month in advance. Nothing goes live without your nod." },
    { n: "04", t: "Grow — with reports", d: "Posts ship on time. Every month you get a report of what moved the needle." },
  ];
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead
          eyebrow="How it works"
          title={<>From sign-up to your first post — <span className="text-gold">in 7 days.</span></>}
          sub="A calm, structured onboarding. No 40-email threads. No missed dependencies."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 shadow-card"
            >
              <div className="text-gold text-sm font-mono">{s.n}</div>
              <div className="mt-3 text-lg font-semibold tracking-tight">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Lead Form ---------------- */
function LeadForm() {
  const [plan, setPlan] = useState("Growth");
  const [submitting, setSubmitting] = useState(false);
  return (
    <section id="start" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative rounded-[2rem] p-8 md:p-14 glass-strong shadow-card overflow-hidden">
          <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-gold flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> Get started
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Let's build your next
                <br />
                <span style={{ fontFamily: "var(--font-display)" }} className="italic font-normal text-gradient">
                  90 days of growth.
                </span>
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Fill this in and our team reaches out within one business day
                with a tailored plan and next steps.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-gold" /> Avg. response time: 3 hours
              </div>
            </div>
            <form
              className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  toast.success("We've received your details. Our team will reach out shortly.");
                  (e.target as HTMLFormElement).reset();
                }, 900);
              }}
            >
              <Field label="Full name" name="name" required placeholder="Priya Sharma" />
              <Field label="Business name" name="business" required placeholder="Acme Studio" />
              <Field label="Phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
              <Field label="Email" name="email" type="email" required placeholder="you@brand.com" />
              <Field label="City" name="city" placeholder="Mumbai" />
              <Field label="Business category" name="category" placeholder="Restaurant / Clinic / Retail" />
              <Field label="Website" name="website" placeholder="brand.com" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Instagram" name="instagram" placeholder="@handle" />
                <Field label="Facebook" name="facebook" placeholder="Page name" />
              </div>
              <div className="md:col-span-2">
                <Label className="text-xs text-muted-foreground mb-2 block">Selected plan</Label>
                <div className="flex flex-wrap gap-2">
                  {PLANS.map((p) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setPlan(p.name)}
                      className={`text-xs px-3 py-2 rounded-full border transition ${
                        plan === p.name
                          ? "bg-gold text-primary-foreground border-transparent font-semibold"
                          : "glass border-white/10 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 mt-2">
                <Button
                  type="submit"
                  disabled={submitting}
                  size="lg"
                  className="w-full rounded-full h-12 bg-gold text-gold-foreground hover:opacity-90 font-semibold shadow-glow"
                >
                  {submitting ? "Sending…" : `Continue with ${plan} →`}
                </Button>
                <p className="mt-3 text-[11px] text-muted-foreground text-center">
                  By continuing you agree to our terms. Payments are secured by Razorpay.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs text-muted-foreground mb-2 block">
        {label} {required && <span className="text-gold">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl bg-white/[0.04] border-white/10 focus-visible:ring-gold/60 focus-visible:border-gold/40 placeholder:text-muted-foreground/50"
      />
    </div>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "How is CurlyWave different from a freelancer?", a: "You get a coordinated team — writer, designer, video editor and manager — under one roof, with a defined process and monthly reporting. No single point of failure." },
    { q: "Why is the plan for 3 months?", a: "Social growth compounds. One month of posting rarely moves numbers; 90 days is the minimum window to test hooks, formats and audiences properly." },
    { q: "Do I need to send content or scripts?", a: "No. Once we onboard your brand, our team writes, designs and produces everything. You approve — we execute." },
    { q: "Can I upgrade my plan mid-cycle?", a: "Yes. You can move from Starter → Growth → Business at any point. We prorate the difference." },
    { q: "How are payments handled?", a: "Payments run on Razorpay with UPI, cards, netbanking and wallets. You'll get a GST invoice for every payment." },
    { q: "Which industries do you specialize in?", a: "Doctors, clinics, restaurants, real estate, retail, coaches, education institutes and D2C startups. If it's a local or small business, we've probably done it." },
  ];
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHead
          eyebrow="FAQ"
          title="Answers, before you ask."
          sub="Still curious? WhatsApp us — a human replies, usually within a few hours."
        />
        <div className="mt-12 space-y-3">
          {items.map((it, i) => (
            <details key={i} className="group glass rounded-2xl p-5 shadow-card open:shadow-glow transition">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="font-medium tracking-tight">{it.q}</span>
                <span className="text-gold text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-10 mt-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-semibold tracking-tight">CurlyWave Media</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A social media & automation studio helping small businesses in India
              show up daily, look premium and grow measurably.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-gold transition">Services</a></li>
              <li><a href="#pricing" className="hover:text-gold transition">Pricing</a></li>
              <li><a href="#faq" className="hover:text-gold transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@curlywave.in</li>
              <li>+91 99999 99999</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} CurlyWave Media & Automation Pvt. Ltd. All rights reserved.</div>
          <div>GST compliant · Payments secured by Razorpay</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Section head ---------------- */
function SectionHead({
  eyebrow, title, sub,
}: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs uppercase tracking-[0.2em] text-gold">{eyebrow}</div>
      <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}
