"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Pin, ArrowRight } from "lucide-react";

const data: Record<string, any> = {
  "1": {
    title: "Afaq Forum Registration Now Open",
    category: "Events",
    date: "Mar 1, 2026",
    pinned: true,
    emoji: "🌍",
    gradient: "linear-gradient(135deg, #0d0b08 0%, #211f21 50%, #2e8673 100%)",
    content: [
      { type: "paragraph", text: "Registration for the Afaq Forum — Youth Clubs Meetup at Palestine Polytechnic University is now officially open. This is the flagship annual gathering bringing together youth club representatives from across Palestine." },
      { type: "heading", text: "What to expect" },
      { type: "list", items: ["Keynote speakers from leading Palestinian organizations", "Panel discussions on youth development", "Inter-club networking sessions", "Awards ceremony recognizing outstanding contributors", "Workshop sessions on leadership and community building"] },
      { type: "heading", text: "Eligibility" },
      { type: "paragraph", text: "Open to all active members and volunteers of MENA Club. Priority registration is given to members who have participated in at least one previous event." },
      { type: "heading", text: "Registration Deadline" },
      { type: "paragraph", text: "April 1, 2026. Spots are limited to 110 participants. Register early to secure your place." },
    ],
    related: [
      { id: "2", title: "Feed & Benefit Initiative — New Sessions", category: "Workshop", emoji: "🤝" },
      { id: "3", title: "MENA Reads — New Book Announced", category: "General", emoji: "📚" },
    ],
  },
  "2": {
    title: "Feed & Benefit Initiative — New Sessions",
    category: "Workshop",
    date: "Feb 20, 2026",
    pinned: false,
    emoji: "🤝",
    gradient: "linear-gradient(135deg, #2e8673 0%, #469d8b 100%)",
    content: [
      { type: "paragraph", text: "We're excited to announce new sessions for our Feed & Benefit Initiative. This recurring program combines food distribution with practical skill-building workshops for community members." },
      { type: "heading", text: "Upcoming Sessions" },
      { type: "list", items: ["Every Saturday starting March 8, 2026", "10:00 AM – 1:00 PM", "Multiple locations across Hebron", "No prior experience required"] },
      { type: "heading", text: "How to Participate" },
      { type: "paragraph", text: "Sign up through your volunteer dashboard or contact us directly. Volunteers are needed for both the workshop facilitation and food distribution parts of the program." },
    ],
    related: [
      { id: "1", title: "Afaq Forum Registration Now Open", category: "Events", emoji: "🌍" },
      { id: "4", title: "Volunteer Appreciation Week", category: "General", emoji: "🌟" },
    ],
  },
  "3": {
    title: "MENA Reads — New Book Announced",
    category: "General",
    date: "Feb 15, 2026",
    pinned: false,
    emoji: "📚",
    gradient: "linear-gradient(135deg, #0d0b08 0%, #2e8673 100%)",
    content: [
      { type: "paragraph", text: "Our reading club has selected its next title for the spring cycle. Join us every Friday afternoon at the Hebron Central Library for group readings and open discussions." },
      { type: "heading", text: "Session Details" },
      { type: "list", items: ["Every Friday at 4:00 PM", "Hebron Central Library", "Open to all members and the public", "Bring your own copy or borrow from us"] },
      { type: "heading", text: "What We Do" },
      { type: "paragraph", text: "Each session includes a reading segment, group discussion led by a facilitator, and a closing reflection. Sessions are designed to build critical thinking and communication skills." },
    ],
    related: [
      { id: "2", title: "Feed & Benefit Initiative — New Sessions", category: "Workshop", emoji: "🤝" },
      { id: "4", title: "Volunteer Appreciation Week", category: "General", emoji: "🌟" },
    ],
  },
  "4": {
    title: "Volunteer Appreciation Week",
    category: "General",
    date: "Feb 10, 2026",
    pinned: false,
    emoji: "🌟",
    gradient: "linear-gradient(135deg, #211f21 0%, #469d8b 100%)",
    content: [
      { type: "paragraph", text: "This week, we pause to celebrate and recognize the incredible volunteers who make MENA Club possible. Every event, every initiative, every impact — it all starts with you." },
      { type: "heading", text: "Week Schedule" },
      { type: "list", items: ["Monday: Social media shoutouts for top volunteers", "Wednesday: Certificate distribution ceremony", "Friday: Appreciation dinner and informal gathering", "Online: Special recognition posts all week"] },
      { type: "heading", text: "Thank You" },
      { type: "paragraph", text: "To every volunteer who has given their time, energy, and heart to MENA Club — this week is for you. We see you, and we are deeply grateful." },
    ],
    related: [
      { id: "1", title: "Afaq Forum Registration Now Open", category: "Events", emoji: "🌍" },
      { id: "3", title: "MENA Reads — New Book Announced", category: "General", emoji: "📚" },
    ],
  },
};

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  Events:   { bg: "#dbeafe", color: "#1d4ed8" },
  Workshop: { bg: "#f0f9f7", color: "#2e8673" },
  General:  { bg: "#f3f4f6", color: "#374151" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
  }),
};

export default function AnnouncementDetail({ params }: { params: { id: string } }) {
  const item = data[params.id] || data["1"];
  const catStyle = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.General;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>

      {/* Hero */}
      <div style={{ background: item.gradient, padding: "48px 24px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)" }} />

        <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/announcements" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", textDecoration: "none", marginBottom: "28px" }}>
              <ArrowLeft size={15} /> Back to Announcements
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
            <div style={{ fontSize: "3.5rem", marginBottom: "16px", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))" }}>{item.emoji}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
              {item.pinned && (
                <span style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff", fontSize: "0.72rem", fontWeight: "700", padding: "4px 12px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "4px", backdropFilter: "blur(4px)" }}>
                  <Pin size={10} /> Pinned
                </span>
              )}
              <span style={{ backgroundColor: catStyle.bg, color: catStyle.color, fontSize: "0.72rem", fontWeight: "700", padding: "4px 12px", borderRadius: "20px" }}>
                {item.category}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.65)", fontSize: "0.8rem" }}>
                <Calendar size={13} /> {item.date}
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: "900", color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: "600px" }}>
              {item.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: "820px", margin: "-28px auto 0", padding: "0 24px 80px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "32px", alignItems: "start" }}>

          {/* Article content */}
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}
            style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "36px", border: "1px solid #f0f0f0", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {item.content.map((block: any, i: number) => {
              if (block.type === "heading") return (
                <motion.h2 key={i} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                  style={{ fontSize: "1.1rem", fontWeight: "800", color: "#0d0b08", marginTop: "8px", paddingBottom: "8px", borderBottom: "2px solid #f0f9f7" }}>
                  {block.text}
                </motion.h2>
              );
              if (block.type === "paragraph") return (
                <motion.p key={i} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                  style={{ fontSize: "0.975rem", color: "#4b5563", lineHeight: 1.8 }}>
                  {block.text}
                </motion.p>
              );
              if (block.type === "list") return (
                <motion.ul key={i} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                  style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {block.items.map((item: string, j: number) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.6 }}>
                      <span style={{ height: "20px", width: "20px", borderRadius: "50%", backgroundColor: "#f0f9f7", border: "1.5px solid #2e8673", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                        <span style={{ height: "6px", width: "6px", borderRadius: "50%", backgroundColor: "#2e8673" }} />
                      </span>
                      {item}
                    </li>
                  ))}
                </motion.ul>
              );
              return null;
            })}
          </motion.div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Meta card */}
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}
              style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "20px", border: "1px solid #f0f0f0" }}
            >
              <h3 style={{ fontSize: "0.8rem", fontWeight: "700", color: "#9ca3af", letterSpacing: "0.06em", marginBottom: "14px" }}>DETAILS</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>Category</span>
                  <span style={{ backgroundColor: catStyle.bg, color: catStyle.color, fontSize: "0.72rem", fontWeight: "700", padding: "3px 10px", borderRadius: "20px" }}>{item.category}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>Published</span>
                  <span style={{ fontSize: "0.8rem", fontWeight: "600", color: "#0d0b08" }}>{item.date}</span>
                </div>
                {item.pinned && (
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>Status</span>
                    <span style={{ backgroundColor: "#f0f9f7", color: "#2e8673", fontSize: "0.72rem", fontWeight: "700", padding: "3px 10px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Pin size={10} /> Pinned
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Related */}
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}
              style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "20px", border: "1px solid #f0f0f0" }}
            >
              <h3 style={{ fontSize: "0.8rem", fontWeight: "700", color: "#9ca3af", letterSpacing: "0.06em", marginBottom: "14px" }}>RELATED</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {item.related.map((r: any) => (
                  <Link key={r.id} href={`/announcements/${r.id}`} style={{ textDecoration: "none" }}>
                    <motion.div whileHover={{ x: 3, backgroundColor: "#f0f9f7" }}
                      style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "12px", backgroundColor: "#f9fafb", transition: "background-color 0.2s", cursor: "pointer" }}
                    >
                      <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{r.emoji}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: "0.8rem", fontWeight: "600", color: "#0d0b08", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.title}</p>
                        <p style={{ fontSize: "0.7rem", color: "#9ca3af", marginTop: "2px" }}>{r.category}</p>
                      </div>
                      <ArrowRight size={13} style={{ color: "#d1d5db", flexShrink: 0 }} />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}
              style={{ borderRadius: "16px", background: "linear-gradient(135deg, #0d0b08, #2e8673)", padding: "22px", textAlign: "center" }}
            >
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", marginBottom: "6px" }}>Want to get involved?</p>
              <p style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: "700", marginBottom: "14px" }}>Join an upcoming event</p>
              <Link href="/events" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#ffffff", color: "#2e8673", fontSize: "0.8rem", fontWeight: "700", padding: "9px 18px", borderRadius: "10px", textDecoration: "none" }}>
                Browse Events <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}