"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, Calendar, Award, Sparkles, ChevronRight, Heart, Lightbulb, Handshake, MapPin } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";
import api from "@/services/api";

interface PublicStats {
  members:             number;
  volunteers:          number;
  events_hosted:       number;
  certificates_issued: number;
}

interface UpcomingEvent {
  id:        number;
  title:     string;
  date:      string;
  location:  string;
  image_url: string | null;
  emoji:     string;
  category:  string;
}

const pillars = [
  { icon: Heart,     title: "Community",  desc: "Building bridges across the MENA region through shared purpose and belonging." },
  { icon: Lightbulb, title: "Leadership", desc: "Developing the next generation of changemakers through mentorship and real-world experience." },
  { icon: Handshake, title: "Impact",     desc: "Creating measurable positive change in communities through volunteer-driven initiatives." },
];

const gallery = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&q=80",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500&q=80",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  community:  "linear-gradient(135deg, #2e8673 0%, #469d8b 100%)",
  social:     "linear-gradient(135deg, #469d8b 0%, #57ad9b 100%)",
  workshop:   "linear-gradient(135deg, #0d0b08 0%, #2e8673 100%)",
  conference: "linear-gradient(135deg, #0d0b08 0%, #333133 40%, #2e8673 100%)",
  leadership: "linear-gradient(135deg, #1d4ed8 0%, #2e8673 100%)",
  other:      "linear-gradient(135deg, #2e8673 0%, #211f21 100%)",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function AnimatedCounter({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value === 0) { setDisplay(0); return; }
    const duration  = 1200;
    const startTime = performance.now();
    let rafId: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(value * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [value]);

  return <>{display.toLocaleString()}+</>;
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [stats,         setStats]         = useState<PublicStats | null>(null);
  const [events,        setEvents]        = useState<UpcomingEvent[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const { data } = await api.get("/api/stats/public/");
        setStats(data);
      } catch {
        setStats({ members: 0, volunteers: 0, events_hosted: 0, certificates_issued: 0 });
      }
    }
    loadStats();
  }, []);

  useEffect(() => {
    async function loadEvents() {
      try {
        const { data } = await api.get("/api/events/");
        const list: UpcomingEvent[] = data.results ?? data;
        const today = new Date(); today.setHours(0, 0, 0, 0);
        const upcoming = list
          .filter((e) => new Date(e.date) >= today)
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
          .slice(0, 3);
        setEvents(upcoming);
      } catch { /* show empty state */ }
      finally { setEventsLoading(false); }
    }
    loadEvents();
  }, []);

  const statsConfig = [
    { icon: Users,    value: stats?.members             ?? 0, label: "Active Members"      },
    { icon: Calendar, value: stats?.events_hosted       ?? 0, label: "Events Hosted"       },
    { icon: Award,    value: stats?.volunteers          ?? 0, label: "Volunteers"          },
    { icon: Sparkles, value: stats?.certificates_issued ?? 0, label: "Certificates Earned" },
  ];

  return (
    <PageWrapper>
      <div style={{ overflow: "hidden" }}>

        {/* ── Hero ── */}
        <section ref={heroRef} style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(33,31,33,0.72)" }} />
          </div>

          <motion.div style={{ y: heroY, opacity: heroOpacity, position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "80px 24px" }}>
            <div style={{ maxWidth: "640px" }}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: "800", color: "#ffffff", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}
              >
                Empowering Youth<br />Across the{" "}
                <span style={{ color: "#66bdab" }}>MENA</span> Region
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", marginBottom: "40px", maxWidth: "480px", lineHeight: "1.7" }}
              >
                Join a vibrant community of changemakers. Volunteer, lead, and grow through impactful events and meaningful connections.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
                style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
              >
                <Link href="/register">
                  <AnimatedButton variant="primary" style={{ padding: "14px 32px", fontSize: "1rem", borderRadius: "16px" }}>
                    Join MENA Club <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                  </AnimatedButton>
                </Link>
                <Link href="/about">
                  <AnimatedButton variant="outline" style={{ padding: "14px 32px", fontSize: "1rem", borderRadius: "16px", backgroundColor: "transparent", color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}>
                    Learn More
                  </AnimatedButton>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
            style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)" }}
          >
            <div style={{ width: "24px", height: "40px", borderRadius: "12px", border: "2px solid rgba(255,255,255,0.4)", display: "flex", justifyContent: "center", paddingTop: "8px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.6)" }} />
            </div>
          </motion.div>
        </section>

        {/* ── Stats floating bar (DYNAMIC) ── */}
        <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            style={{ marginTop: "-48px", position: "relative", zIndex: 20, backgroundColor: "#ffffff", borderRadius: "20px", boxShadow: "0 8px 40px rgba(0,0,0,0.12)", border: "1px solid #f0f0f0", padding: "32px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}
          >
            {statsConfig.map((stat, i) => (
              <motion.div key={stat.label} custom={i} variants={fadeUp} style={{ textAlign: "center" }}>
                <div style={{ height: "40px", width: "40px", borderRadius: "12px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                  <stat.icon size={20} style={{ color: "#2e8673" }} />
                </div>
                <p style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08", marginBottom: "2px" }}>
                  {stats === null ? "—" : <AnimatedCounter value={stat.value} />}
                </p>
                <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Pillars ── */}
        <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 24px" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} style={{ textAlign: "center", marginBottom: "64px" }}>
            <motion.p variants={fadeUp} custom={0} style={{ color: "#2e8673", fontWeight: "600", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}>
              What We Stand For
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: "800", color: "#0d0b08" }}>
              Built on Three Pillars
            </motion.h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i} variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(46,134,115,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ backgroundColor: "#f9fafb", borderRadius: "20px", padding: "40px 32px", cursor: "default", border: "1px solid #f0f0f0" }}
              >
                <div style={{ height: "48px", width: "48px", borderRadius: "16px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <p.icon size={24} style={{ color: "#2e8673" }} />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#0d0b08", marginBottom: "12px" }}>{p.title}</h3>
                <p style={{ color: "#6b7280", lineHeight: "1.7" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Gallery strip ── */}
        <section style={{ backgroundColor: "#f9fafb", padding: "80px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", marginBottom: "40px" }}>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              style={{ color: "#2e8673", fontWeight: "600", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}>
              Our Community
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: "800", color: "#0d0b08" }}>
              Real People, Real Impact
            </motion.h2>
          </div>
          <div style={{ display: "flex", gap: "16px", padding: "0 24px 8px", justifyContent: "center", flexWrap: "wrap" }}>
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                style={{ flexShrink: 0, width: "300px", height: "240px", borderRadius: "20px", overflow: "hidden" }}
              >
                <img src={img} alt="Community" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Upcoming Events (DYNAMIC) ── */}
        <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 24px" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <motion.p variants={fadeUp} custom={0} style={{ color: "#2e8673", fontWeight: "600", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}>
                Don&apos;t Miss Out
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: "800", color: "#0d0b08" }}>
                Upcoming Events
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link href="/events" style={{ color: "#2e8673", fontSize: "0.9rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                View all <ChevronRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {eventsLoading ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ backgroundColor: "#f9fafb", borderRadius: "20px", height: "320px" }} />
              ))}
            </div>
          ) : events.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 24px", backgroundColor: "#f9fafb", borderRadius: "20px" }}>
              <Calendar size={32} style={{ color: "#9ca3af", margin: "0 auto 12px" }} />
              <p style={{ fontSize: "1rem", fontWeight: "600", color: "#374151" }}>No upcoming events yet</p>
              <p style={{ fontSize: "0.875rem", color: "#9ca3af", marginTop: "4px" }}>Check back soon — exciting events are on the way.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {events.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i} variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid #f0f0f0" }}
                >
                  <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                    {event.image_url ? (
                      <img src={event.image_url} alt={event.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: CATEGORY_GRADIENTS[event.category] || CATEGORY_GRADIENTS.other, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "4rem", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))" }}>{event.emoji}</span>
                      </div>
                    )}
                  </div>
                  <div style={{ padding: "24px" }}>
                    <p style={{ fontSize: "0.8rem", color: "#2e8673", fontWeight: "600", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                      {formatDate(event.date)} <span style={{ color: "#d1d5db" }}>·</span>
                      <MapPin size={11} /> {event.location}
                    </p>
                    <h3 style={{ fontWeight: "700", fontSize: "1.1rem", color: "#0d0b08", marginBottom: "12px", lineHeight: "1.4", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                      {event.title}
                    </h3>
                    <Link href={`/events/${event.id}`} style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "0.875rem", color: "#2e8673", fontWeight: "600", textDecoration: "none" }}>
                      Learn more <ChevronRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* ── CTA ── */}
        <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px 96px" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
            <div style={{ position: "relative", borderRadius: "28px", overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1400&q=80"
                alt=""
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(33,31,33,0.82)" }} />
              <div style={{ position: "relative", zIndex: 10, padding: "80px 48px", textAlign: "center" }}>
                <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: "800", color: "#ffffff", marginBottom: "16px" }}>
                  Ready to Make a Difference?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "40px", maxWidth: "480px", margin: "0 auto 40px", fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Whether you want to volunteer your time or grow as a member, there&apos;s a place for you here.
                </p>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href="/register">
                    <AnimatedButton variant="primary" style={{ padding: "14px 32px", fontSize: "1rem", borderRadius: "16px" }}>
                      Get Started
                    </AnimatedButton>
                  </Link>
                  <Link href="/contact">
                    <AnimatedButton variant="outline" style={{ padding: "14px 32px", fontSize: "1rem", borderRadius: "16px", backgroundColor: "transparent", color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}>
                      Contact Us
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </PageWrapper>
  );
}