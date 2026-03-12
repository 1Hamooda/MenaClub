"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Target, Heart, Globe, ArrowRight } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const values = [
  { icon: Users, title: "Community", description: "Building bridges across borders, uniting youth from diverse backgrounds." },
  { icon: Target, title: "Impact", description: "Every initiative is designed to create measurable, lasting change." },
  { icon: Heart, title: "Inclusivity", description: "We welcome all, regardless of background, nationality, or experience." },
  { icon: Globe, title: "Global Vision", description: "Thinking globally while acting locally across the MENA region." },
];

const milestones = [
  { year: "2022", title: "Founded", desc: "MENA Club was born from a vision to unite youth across the region." },
  { year: "2023", title: "500 Members", desc: "Rapid growth as communities across 5 countries joined the movement." },
  { year: "2024", title: "100+ Events", desc: "From hackathons to clean-ups, our impact became undeniable." },
  { year: "2025", title: "Regional Recognition", desc: "Awarded Best Youth Initiative by the Arab Youth Council." },
  { year: "2026", title: "2,500+ Members", desc: "Now active in 12 countries with a growing global network." },
];

const team = [
  { name: "Sarah Al-Rashidi", role: "President", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Omar Khalil", role: "VP Operations", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Layla Hassan", role: "VP Events", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Ahmed Nouri", role: "VP Technology", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div style={{ overflow: "hidden" }}>

        {/* ── Hero ── */}
        <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(33,31,33,0.75)" }} />
          </div>
          <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "80px 24px" }}>
            <div style={{ maxWidth: "640px" }}>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "800", color: "#ffffff", lineHeight: "1.1", marginBottom: "20px" }}
              >
                About <span style={{ color: "#66bdab" }}>MENA</span> Club
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", maxWidth: "480px", lineHeight: "1.7" }}
              >
                A youth-driven movement empowering the next generation of leaders across the Middle East and North Africa since 2022.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              <motion.p variants={fadeUp} custom={0} style={{ color: "#2e8673", fontWeight: "600", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}>
                Our Story
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: "800", color: "#0d0b08", marginBottom: "24px" }}>
                From a Vision to a Movement
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} style={{ color: "#6b7280", lineHeight: "1.8", marginBottom: "16px" }}>
                Founded in 2022, MENA Club started as a small group of passionate students who believed in the power of community. Today, we're a thriving network of 2,500+ members across 12 countries.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} style={{ color: "#6b7280", lineHeight: "1.8" }}>
                Through volunteering, events, and skill-building programs, we create pathways for personal and professional growth — bridging cultures and building futures together.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: "relative" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="MENA Club community"
                style={{ borderRadius: "20px", width: "100%", height: "380px", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", bottom: "-24px", left: "-24px",
                backgroundColor: "#2e8673", color: "#ffffff",
                borderRadius: "16px", padding: "20px 24px", boxShadow: "0 8px 32px rgba(46,134,115,0.3)"
              }}>
                <p style={{ fontSize: "2rem", fontWeight: "800", lineHeight: "1" }}>12</p>
                <p style={{ fontSize: "0.875rem", opacity: 0.9, marginTop: "4px" }}>Countries</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Values ── */}
        <section style={{ backgroundColor: "#f9fafb", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} style={{ textAlign: "center", marginBottom: "64px" }}>
              <motion.p variants={fadeUp} custom={0} style={{ color: "#2e8673", fontWeight: "600", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}>
                What Drives Us
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: "800", color: "#0d0b08" }}>
                Our Core Values
              </motion.h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i} variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(46,134,115,0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "40px 24px", textAlign: "center", border: "1px solid #f0f0f0" }}
                >
                  <div style={{ height: "48px", width: "48px", borderRadius: "16px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <v.icon size={24} style={{ color: "#2e8673" }} />
                  </div>
                  <h3 style={{ fontWeight: "700", color: "#0d0b08", marginBottom: "10px" }}>{v.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: "1.6" }}>{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 24px" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} style={{ textAlign: "center", marginBottom: "64px" }}>
            <motion.p variants={fadeUp} custom={0} style={{ color: "#2e8673", fontWeight: "600", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}>
              Our Journey
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: "800", color: "#0d0b08" }}>
              Key Milestones
            </motion.h2>
          </motion.div>

          <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
            {/* vertical line */}
            <div style={{ position: "absolute", left: "23px", top: 0, bottom: 0, width: "2px", backgroundColor: "#e5e7eb" }} />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} custom={i} variants={fadeUp}
                style={{ position: "relative", display: "flex", alignItems: "flex-start", gap: "24px", marginBottom: "40px" }}
              >
                {/* dot */}
                <div style={{ position: "absolute", left: "17px", top: "4px", height: "14px", width: "14px", borderRadius: "50%", backgroundColor: "#2e8673", border: "2px solid #ffffff", zIndex: 10, boxShadow: "0 0 0 3px rgba(46,134,115,0.2)" }} />
                <div style={{ marginLeft: "52px" }}>
                  <span style={{ color: "#2e8673", fontWeight: "700", fontSize: "0.875rem" }}>{m.year}</span>
                  <h3 style={{ fontWeight: "700", color: "#0d0b08", marginBottom: "4px" }}>{m.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: "1.6" }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section style={{ backgroundColor: "#f9fafb", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} style={{ textAlign: "center", marginBottom: "64px" }}>
              <motion.p variants={fadeUp} custom={0} style={{ color: "#2e8673", fontWeight: "600", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}>
                The People Behind It
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: "800", color: "#0d0b08" }}>
                Leadership Team
              </motion.h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", maxWidth: "768px", margin: "0 auto" }}>
              {team.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i} variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid #f0f0f0", textAlign: "center" }}
                >
                  <div style={{ height: "160px", overflow: "hidden" }}>
                    <img src={t.image} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  <div style={{ padding: "16px" }}>
                    <h3 style={{ fontWeight: "700", fontSize: "0.875rem", color: "#0d0b08", marginBottom: "2px" }}>{t.name}</h3>
                    <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Arabic CTA ── */}
        <section dir="rtl" style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 24px" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
            <div style={{ position: "relative", borderRadius: "28px", overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1400&q=80"
                alt=""
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(33,31,33,0.82)" }} />
              <div style={{ position: "relative", zIndex: 10, padding: "64px 48px" }}>
                <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: "800", color: "#ffffff", marginBottom: "16px" }}>
                  <span style={{ color: "#66bdab" }}>عن</span> نادي مينا
                </h2>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.8", maxWidth: "560px", fontSize: "1.1rem", marginBottom: "32px" }}>
                  نادي مينا هو منظمة شبابية تهدف إلى تمكين الجيل القادم من القادة في منطقة الشرق الأوسط وشمال أفريقيا.
                  من خلال التطوع والفعاليات وبرامج بناء المهارات، نخلق مسارات للنمو الشخصي والمهني.
                </p>
                <Link href="/register">
                  <AnimatedButton variant="primary" style={{ padding: "14px 32px", fontSize: "1rem", borderRadius: "16px" }}>
                    انضم إلينا <ArrowRight size={16} style={{ marginRight: "8px", transform: "rotate(180deg)" }} />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </PageWrapper>
  );
}