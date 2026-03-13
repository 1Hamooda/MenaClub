"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ArrowLeft, ArrowRight, Share2, Bookmark, Check } from "lucide-react";
import { useState } from "react";

const eventData: Record<string, any> = {
  "1": {
    title: "Bisawa3dina Environmental Initiative",
    date: "February 2023",
    time: "9:00 AM – 4:00 PM",
    location: "Palestine Polytechnic University, Hebron",
    category: "Community",
    spots: 40,
    emoji: "🌱",
    gradient: "linear-gradient(135deg, #2e8673 0%, #469d8b 100%)",
    status: "Closed",
    description: "A community-driven environmental initiative bringing together students and volunteers to clean and beautify the campus and surrounding areas. Participants will plant trees, collect waste, and raise awareness about environmental sustainability.",
    roles: ["Coordinator", "Volunteer", "Photographer", "Logistics"],
    highlights: ["Tree planting drive", "Campus clean-up", "Awareness campaign", "Community networking"],
  },
  "2": {
    title: "Iftar for International Students",
    date: "Ramadan 2024",
    time: "6:00 PM – 9:00 PM",
    location: "Palestine Polytechnic University, Hebron",
    category: "Social",
    spots: 70,
    emoji: "🌙",
    gradient: "linear-gradient(135deg, #211f21 0%, #2e8673 100%)",
    status: "Closed",
    description: "A warm Iftar gathering welcoming international students studying in Palestine. An evening of food, culture sharing, and community building across borders.",
    roles: ["Organizer", "Host", "Chef Volunteer", "Greeter"],
    highlights: ["Multi-cultural food", "Cultural exchange", "Guest speakers", "Entertainment"],
  },
  "3": {
    title: "MENA Reads — Reading Club",
    date: "Ongoing",
    time: "Every Friday, 4:00 PM",
    location: "Hebron Central Library",
    category: "Workshop",
    spots: 30,
    emoji: "📚",
    gradient: "linear-gradient(135deg, #0d0b08 0%, #2e8673 100%)",
    status: "Open",
    description: "A weekly reading club for curious minds. Each session focuses on a new chapter or book, followed by open discussion and critical thinking exercises. All reading levels welcome.",
    roles: ["Facilitator", "Speaker", "Note-taker", "Coordinator"],
    highlights: ["Weekly sessions", "Open discussion", "Critical thinking", "Book recommendations"],
  },
  "4": {
    title: "Tawjihi Celebration Day",
    date: "Summer 2024",
    time: "10:00 AM – 8:00 PM",
    location: "Hebron Cultural Center",
    category: "Social",
    spots: 50,
    emoji: "🎓",
    gradient: "linear-gradient(135deg, #469d8b 0%, #57ad9b 100%)",
    status: "Closed",
    description: "Celebrating the hard work and achievements of Tawjihi graduates across Hebron. A full day of festivities, recognition ceremonies, and community pride.",
    roles: ["Coordinator", "Volunteer", "MC", "Setup Crew"],
    highlights: ["Recognition ceremony", "Live entertainment", "Community celebration", "Photography"],
  },
  "5": {
    title: "Feed & Benefit Initiative",
    date: "Ongoing",
    time: "Saturdays, 10:00 AM",
    location: "Various locations, Hebron",
    category: "Workshop",
    spots: 35,
    emoji: "🤝",
    gradient: "linear-gradient(135deg, #2e8673 0%, #0d0b08 100%)",
    status: "Open",
    description: "A recurring initiative combining food distribution with skill-building workshops. Volunteers teach practical skills to community members while sharing meals.",
    roles: ["Mentor", "Presenter", "Logistics", "Volunteer"],
    highlights: ["Skill workshops", "Food distribution", "Community impact", "Recurring program"],
  },
  "6": {
    title: "Afaq Forum — Youth Clubs Meetup",
    date: "2025",
    time: "9:00 AM – 6:00 PM",
    location: "Palestine Polytechnic University, Hebron",
    category: "Conference",
    spots: 110,
    emoji: "🌍",
    gradient: "linear-gradient(135deg, #0d0b08 0%, #333133 40%, #2e8673 100%)",
    status: "Upcoming",
    description: "The flagship annual forum bringing together youth club representatives from across Palestine. A day of panels, workshops, and inter-club networking to align on youth development goals.",
    roles: ["Moderator", "Coordinator", "Usher", "Media Team", "Registration"],
    highlights: ["Keynote speakers", "Panel discussions", "Inter-club networking", "Awards ceremony"],
  },
};

const STATUS_CONFIG: Record<string, { bg: string; color: string; dot: string }> = {
  Upcoming: { bg: "#dbeafe", color: "#1d4ed8", dot: "#3b82f6" },
  Open:     { bg: "#dcfce7", color: "#15803d", dot: "#22c55e" },
  Closed:   { bg: "#f3f4f6", color: "#6b7280", dot: "#9ca3af" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
  }),
};

export default function EventDetail({ params }: { params: { id: string } }) {
  const event = eventData[params.id] || eventData["1"];
  const statusCfg = STATUS_CONFIG[event.status];
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleApply = () => {
    if (selectedRole) setApplied(true);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>

      {/* Hero Banner */}
      <div style={{ background: event.gradient, padding: "48px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* bg decoration */}
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)" }} />

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/events" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", textDecoration: "none", marginBottom: "28px" }}>
              <ArrowLeft size={15} /> Back to Events
            </Link>
          </motion.div>

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
              <div style={{ fontSize: "4rem", marginBottom: "16px", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))" }}>{event.emoji}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                <span style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff", fontSize: "0.72rem", fontWeight: "700", padding: "4px 12px", borderRadius: "20px", letterSpacing: "0.06em", backdropFilter: "blur(4px)" }}>
                  {event.category.toUpperCase()}
                </span>
                <span style={{ backgroundColor: statusCfg.bg, color: statusCfg.color, fontSize: "0.72rem", fontWeight: "700", padding: "4px 12px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ height: "6px", width: "6px", borderRadius: "50%", backgroundColor: statusCfg.dot }} />
                  {event.status}
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: "900", color: "#ffffff", lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: "600px" }}>
                {event.title}
              </h1>
            </motion.div>

            {/* Bookmark */}
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={() => setBookmarked(!bookmarked)}
              style={{ padding: "10px", borderRadius: "12px", border: "none", backgroundColor: bookmarked ? "#ffffff" : "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", cursor: "pointer", color: bookmarked ? "#2e8673" : "#ffffff", flexShrink: 0 }}>
              <Bookmark size={20} fill={bookmarked ? "#2e8673" : "none"} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "900px", margin: "-32px auto 0", padding: "0 24px 80px", position: "relative" }}>

        {/* Info cards row */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "32px" }}
        >
          {[
            { icon: Calendar, label: "Date", value: event.date },
            { icon: Clock,    label: "Time", value: event.time },
            { icon: MapPin,   label: "Location", value: event.location },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "18px", border: "1px solid #f0f0f0", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ height: "40px", width: "40px", borderRadius: "12px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <item.icon size={18} style={{ color: "#2e8673" }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: "0.7rem", color: "#9ca3af", fontWeight: "600", letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                <p style={{ fontSize: "0.85rem", fontWeight: "600", color: "#0d0b08", marginTop: "2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "28px", alignItems: "start" }}>

          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* About */}
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}
              style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "28px", border: "1px solid #f0f0f0" }}
            >
              <h2 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#0d0b08", marginBottom: "14px" }}>About This Event</h2>
              <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.75 }}>{event.description}</p>
            </motion.div>

            {/* Highlights */}
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}
              style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "28px", border: "1px solid #f0f0f0" }}
            >
              <h2 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#0d0b08", marginBottom: "16px" }}>What to Expect</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {event.highlights.map((h: string, i: number) => (
                  <motion.div key={h} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", borderRadius: "12px", backgroundColor: "#f0f9f7" }}
                  >
                    <div style={{ height: "22px", width: "22px", borderRadius: "50%", backgroundColor: "#2e8673", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check size={12} style={{ color: "#ffffff" }} />
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "#0d0b08" }}>{h}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — Apply card */}
          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}
            style={{ position: "sticky", top: "24px", backgroundColor: "#ffffff", borderRadius: "20px", padding: "24px", border: "1px solid #f0f0f0", boxShadow: "0 8px 32px rgba(46,134,115,0.08)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
              <Users size={16} style={{ color: "#2e8673" }} />
              <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                <strong style={{ color: "#0d0b08" }}>{event.spots}</strong> spots remaining
              </span>
            </div>

            <h3 style={{ fontSize: "1rem", fontWeight: "800", color: "#0d0b08", marginBottom: "14px" }}>Choose a Role</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {event.roles.map((role: string) => (
                <motion.button key={role}
                  whileHover={{ x: 3 }} whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedRole(role)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 14px", borderRadius: "12px", cursor: "pointer",
                    border: selectedRole === role ? "1.5px solid #2e8673" : "1.5px solid #e5e7eb",
                    backgroundColor: selectedRole === role ? "#f0f9f7" : "#ffffff",
                    color: selectedRole === role ? "#2e8673" : "#4b5563",
                    fontSize: "0.875rem", fontWeight: selectedRole === role ? "700" : "500",
                    transition: "all 0.2s",
                  }}
                >
                  {role}
                  <AnimatePresence>
                    {selectedRole === role && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                        style={{ height: "20px", width: "20px", borderRadius: "50%", backgroundColor: "#2e8673", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Check size={11} style={{ color: "#ffffff" }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {applied ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  style={{ textAlign: "center", padding: "20px 0" }}
                >
                  <div style={{ height: "48px", width: "48px", borderRadius: "50%", backgroundColor: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                    <Check size={22} style={{ color: "#15803d" }} />
                  </div>
                  <p style={{ fontWeight: "800", color: "#0d0b08", fontSize: "0.95rem" }}>Application Sent!</p>
                  <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "4px" }}>We'll notify you once reviewed.</p>
                </motion.div>
              ) : (
                <motion.div key="apply" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {event.status === "Closed" ? (
                    <div style={{ textAlign: "center", padding: "14px", borderRadius: "14px", backgroundColor: "#f3f4f6" }}>
                      <p style={{ fontSize: "0.875rem", fontWeight: "600", color: "#6b7280" }}>Applications Closed</p>
                    </div>
                  ) : (
                    <motion.button
                      whileHover={selectedRole ? { scale: 1.02, boxShadow: "0 8px 24px rgba(46,134,115,0.25)" } : {}}
                      whileTap={selectedRole ? { scale: 0.97 } : {}}
                      onClick={handleApply}
                      style={{
                        width: "100%", padding: "14px", borderRadius: "14px", border: "none",
                        background: selectedRole ? "linear-gradient(135deg, #2e8673, #469d8b)" : "#f3f4f6",
                        color: selectedRole ? "#ffffff" : "#9ca3af",
                        fontSize: "0.95rem", fontWeight: "700", cursor: selectedRole ? "pointer" : "not-allowed",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                        transition: "all 0.2s",
                      }}
                    >
                      Apply Now <ArrowRight size={15} />
                    </motion.button>
                  )}
                  {!selectedRole && event.status !== "Closed" && (
                    <p style={{ fontSize: "0.75rem", color: "#9ca3af", textAlign: "center", marginTop: "8px" }}>Select a role to continue</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Share */}
            <motion.button whileHover={{ backgroundColor: "#f0f9f7" }} whileTap={{ scale: 0.97 }}
              style={{ width: "100%", marginTop: "12px", padding: "10px", borderRadius: "12px", border: "1px solid #e5e7eb", backgroundColor: "#ffffff", color: "#6b7280", fontSize: "0.8rem", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", transition: "background-color 0.2s" }}>
              <Share2 size={14} /> Share Event
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}