"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedInput from "@/components/ui/AnimatedInput";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@menaclub.org",
    sub: "We reply within 24 hours",
    href: "mailto:info@menaclub.org",
    gradient: "linear-gradient(135deg, #2e8673, #469d8b)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+970 2 222 3456",
    sub: "Sun – Thu, 9am – 5pm",
    href: "tel:+97022223456",
    gradient: "linear-gradient(135deg, #211f21, #2e8673)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hebron, Palestine",
    sub: "Palestine Polytechnic University",
    href: "#",
    gradient: "linear-gradient(135deg, #0d0b08, #333133)",
  },
];

const requestTypes = [
  { value: "support", label: "General Support" },
  { value: "partnership", label: "Partnership Proposal" },
  { value: "event", label: "Event Suggestion" },
  { value: "feedback", label: "Feedback" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [requestType, setRequestType] = useState("");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0d0b08 0%, #211f21 50%, #2e8673 100%)", padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", fontSize: "0.78rem", fontWeight: "700", padding: "5px 14px", borderRadius: "20px", letterSpacing: "0.08em", backdropFilter: "blur(4px)" }}>
              GET IN TOUCH
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "900", color: "#ffffff", marginTop: "16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              We'd love to<br />
              <span style={{ color: "#66bdab" }}>hear from you</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", marginTop: "14px", maxWidth: "480px" }}>
              Have a question, idea, or want to partner with us? Reach out and we'll get back to you shortly.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px", alignItems: "start" }}>

          {/* Form */}
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}
            style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "40px", border: "1px solid #f0f0f0", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
          >
            <h2 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#0d0b08", marginBottom: "6px" }}>Send a Message</h2>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "28px" }}>Fill in the form and we'll respond as soon as possible.</p>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}
                style={{ textAlign: "center", padding: "48px 24px" }}
              >
                <div style={{ fontSize: "3.5rem", marginBottom: "16px" }}>✅</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0d0b08", marginBottom: "8px" }}>Message Sent!</h3>
                <p style={{ color: "#6b7280", marginBottom: "24px" }}>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <AnimatedButton variant="outline" onClick={() => setSubmitted(false)}
                  style={{ padding: "10px 24px", borderRadius: "12px", fontSize: "0.875rem" }}>
                  Send another message
                </AnimatedButton>
              </motion.div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <AnimatedInput label="Full Name" placeholder="Ahmad Khalil" />
                  <AnimatedInput label="Email" type="email" placeholder="you@example.com" />
                </div>

                {/* Request Type */}
                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>Request Type</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {requestTypes.map((t) => (
                      <motion.button key={t.value}
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        onClick={() => setRequestType(t.value)}
                        style={{
                          padding: "7px 16px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600",
                          border: requestType === t.value ? "1.5px solid #2e8673" : "1.5px solid #e5e7eb",
                          backgroundColor: requestType === t.value ? "#f0f9f7" : "#ffffff",
                          color: requestType === t.value ? "#2e8673" : "#6b7280",
                          cursor: "pointer", transition: "all 0.2s",
                        }}
                      >
                        {t.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <AnimatedInput label="Subject" placeholder="Brief subject line" />

                {/* Message */}
                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>Message</label>
                  <textarea placeholder="Tell us more about what you need..." rows={5}
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box", resize: "vertical", fontFamily: "inherit", lineHeight: 1.6 }}
                    onFocus={(e) => { e.target.style.borderColor = "#2e8673"; e.target.style.boxShadow = "0 0 0 3px rgba(46,134,115,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <AnimatedButton variant="primary" onClick={() => setSubmitted(true)}
                  style={{ padding: "14px 28px", fontSize: "1rem", borderRadius: "14px", display: "flex", alignItems: "center", gap: "8px", width: "fit-content" }}>
                  <Send size={16} /> Send Message
                </AnimatedButton>
              </div>
            )}
          </motion.div>

          {/* Contact Info + Map */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {contactInfo.map((item, i) => (
              <motion.a key={item.label} href={item.href}
                custom={i + 1} initial="hidden" animate="visible" variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(46,134,115,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "20px", border: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", cursor: "pointer" }}
              >
                <div style={{ height: "48px", width: "48px", borderRadius: "14px", background: item.gradient, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.icon size={20} style={{ color: "#ffffff" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: "0.72rem", color: "#9ca3af", fontWeight: "600", letterSpacing: "0.05em", textTransform: "uppercase" }}>{item.label}</p>
                  <p style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0d0b08", marginTop: "2px" }}>{item.value}</p>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "2px" }}>{item.sub}</p>
                </div>
                <ArrowRight size={14} style={{ color: "#d1d5db", flexShrink: 0 }} />
              </motion.a>
            ))}

            {/* Map placeholder */}
            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}
              style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #f0f0f0", height: "200px", background: "linear-gradient(135deg, #f0f9f7 0%, #e0f2ee 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}
            >
              <MapPin size={28} style={{ color: "#2e8673" }} />
              <p style={{ fontSize: "0.875rem", fontWeight: "600", color: "#2e8673" }}>Hebron, Palestine</p>
              <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>Palestine Polytechnic University</p>
            </motion.div>

            {/* Social / CTA */}
            <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp}
              style={{ borderRadius: "16px", background: "linear-gradient(135deg, #0d0b08, #2e8673)", padding: "24px", textAlign: "center" }}
            >
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", marginBottom: "6px" }}>Want to join the team?</p>
              <p style={{ color: "#ffffff", fontSize: "1rem", fontWeight: "700", marginBottom: "16px" }}>Become a volunteer today</p>
              <motion.a href="/register" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#ffffff", color: "#2e8673", fontSize: "0.875rem", fontWeight: "700", padding: "10px 20px", borderRadius: "12px", textDecoration: "none" }}
              >
                Get Started <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}