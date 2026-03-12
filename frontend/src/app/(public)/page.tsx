"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, Calendar, Award, Globe, ChevronRight, Heart, Lightbulb, Handshake } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";

const stats = [
  { icon: Users, value: "2,500+", label: "Active Members" },
  { icon: Calendar, value: "150+", label: "Events Hosted" },
  { icon: Award, value: "800+", label: "Volunteers" },
  { icon: Globe, value: "12", label: "Countries" },
];

const pillars = [
  { icon: Heart, title: "Community", desc: "Building bridges across the MENA region through shared purpose and belonging." },
  { icon: Lightbulb, title: "Leadership", desc: "Developing the next generation of changemakers through mentorship and real-world experience." },
  { icon: Handshake, title: "Impact", desc: "Creating measurable positive change in communities through volunteer-driven initiatives." },
];

const events = [
  { title: "Youth Leadership Summit 2026", date: "Mar 25, 2026", location: "Riyadh", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
  { title: "Tech for Good Hackathon", date: "Apr 10, 2026", location: "Dubai", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" },
  { title: "Community Clean-up Drive", date: "Apr 18, 2026", location: "Amman", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" },
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

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                
              </motion.div>

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

        {/* ── Stats floating bar ── */}
        <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            style={{ marginTop: "-48px", position: "relative", zIndex: 20, backgroundColor: "#ffffff", borderRadius: "20px", boxShadow: "0 8px 40px rgba(0,0,0,0.12)", border: "1px solid #f0f0f0", padding: "32px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.label} custom={i} variants={fadeUp} style={{ textAlign: "center" }}>
                <div style={{ height: "40px", width: "40px", borderRadius: "12px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                  <stat.icon size={20} style={{ color: "#2e8673" }} />
                </div>
                <p style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08", marginBottom: "2px" }}>{stat.value}</p>
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

        {/* ── Upcoming Events ── */}
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i} variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ backgroundColor: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid #f0f0f0" }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img src={event.image} alt={event.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <p style={{ fontSize: "0.8rem", color: "#2e8673", fontWeight: "600", marginBottom: "8px" }}>
                    {event.date} · {event.location}
                  </p>
                  <h3 style={{ fontWeight: "700", fontSize: "1.1rem", color: "#0d0b08", marginBottom: "12px", lineHeight: "1.4" }}>{event.title}</h3>
                  <Link href="/events" style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "0.875rem", color: "#2e8673", fontWeight: "600", textDecoration: "none" }}>
                    Learn more <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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