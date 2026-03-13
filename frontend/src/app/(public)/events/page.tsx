"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, MapPin, Search, ArrowRight } from "lucide-react";

type Event = {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  spots: number;
  roles: string[];
  status: "Upcoming" | "Open" | "Closed";
  emoji: string;
};

const DUMMY_EVENTS: Event[] = [
  {
    id: 1,
    title: "Bisawa3dina Environmental Initiative",
    category: "Community",
    date: "Feb 2023",
    location: "Palestine Polytechnic University",
    spots: 40,
    roles: ["Coordinator", "Volunteer"],
    status: "Closed",
    emoji: "🌱",
  },
  {
    id: 2,
    title: "Iftar for International Students",
    category: "Social",
    date: "Ramadan 2024",
    location: "Palestine Polytechnic University",
    spots: 70,
    roles: ["Organizer", "Host"],
    status: "Closed",
    emoji: "🌙",
  },
  {
    id: 3,
    title: "MENA Reads — Reading Club",
    category: "Workshop",
    date: "Ongoing",
    location: "Hebron",
    spots: 30,
    roles: ["Facilitator", "Speaker"],
    status: "Open",
    emoji: "📚",
  },
  {
    id: 4,
    title: "Tawjihi Celebration Day",
    category: "Social",
    date: "Summer 2024",
    location: "Hebron",
    spots: 50,
    roles: ["Coordinator", "Volunteer"],
    status: "Closed",
    emoji: "🎓",
  },
  {
    id: 5,
    title: "Feed & Benefit Initiative",
    category: "Workshop",
    date: "Ongoing",
    location: "Hebron",
    spots: 35,
    roles: ["Mentor", "Presenter"],
    status: "Open",
    emoji: "🤝",
  },
  {
    id: 6,
    title: "Afaq Forum — Youth Clubs Meetup",
    category: "Conference",
    date: "2025",
    location: "Palestine Polytechnic University",
    spots: 110,
    roles: ["Moderator", "Coordinator", "Usher"],
    status: "Upcoming",
    emoji: "🌍",
  },
];

const CATEGORIES = ["All", "Conference", "Workshop", "Social", "Community"];

const STATUS_CONFIG = {
  Upcoming: { bg: "#dbeafe", color: "#1d4ed8", dot: "#3b82f6" },
  Open:     { bg: "#dcfce7", color: "#15803d", dot: "#22c55e" },
  Closed:   { bg: "#f3f4f6", color: "#6b7280", dot: "#9ca3af" },
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  Community:  "linear-gradient(135deg, #2e8673 0%, #469d8b 100%)",
  Social:     "linear-gradient(135deg, #469d8b 0%, #57ad9b 100%)",
  Workshop:   "linear-gradient(135deg, #0d0b08 0%, #2e8673 100%)",
  Conference: "linear-gradient(135deg, #211f21 0%, #2e8673 100%)",
  default:    "linear-gradient(135deg, #2e8673 0%, #211f21 100%)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
  }),
};

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = DUMMY_EVENTS.filter((e) => {
    const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || e.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0d0b08 0%, #2e8673 60%, #469d8b 100%)", padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", fontSize: "0.78rem", fontWeight: "700", padding: "5px 14px", borderRadius: "20px", letterSpacing: "0.08em", backdropFilter: "blur(4px)" }}>
              OUR EVENTS
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "900", color: "#ffffff", marginTop: "16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Discover &amp; Join<br />
              <span style={{ color: "#66bdab" }}>MENA Initiatives</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", marginTop: "14px", maxWidth: "480px" }}>
              From community clean-ups to youth forums — find the event that matches your passion.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            style={{ marginTop: "32px", display: "flex", alignItems: "center", backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "14px", padding: "12px 18px", maxWidth: "420px", gap: "10px" }}
          >
            <Search size={18} style={{ color: "rgba(255,255,255,0.6)", flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ background: "transparent", border: "none", outline: "none", color: "#ffffff", fontSize: "0.95rem", width: "100%" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ borderBottom: "1px solid #f0f0f0", backgroundColor: "#ffffff", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none" }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
                style={{
                  padding: "14px 20px", fontSize: "0.875rem", fontWeight: isActive ? "700" : "500",
                  border: "none", background: "transparent", cursor: "pointer", flexShrink: 0,
                  color: isActive ? "#2e8673" : "#6b7280",
                  borderBottom: isActive ? "2px solid #2e8673" : "2px solid transparent",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Events Grid */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Showing <strong style={{ color: "#0d0b08" }}>{filteredEvents.length}</strong> event{filteredEvents.length !== 1 ? "s" : ""}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {filteredEvents.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ textAlign: "center", padding: "80px 0", color: "#9ca3af" }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🔍</div>
              <p style={{ fontSize: "1rem" }}>No events found for "<strong>{search}</strong>"</p>
            </motion.div>
          ) : (
            <motion.div key="grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}
            >
              {filteredEvents.map((event, i) => {
                const statusCfg = STATUS_CONFIG[event.status];
                const gradient = CATEGORY_GRADIENTS[event.category] || CATEGORY_GRADIENTS.default;
                return (
                  <motion.div key={event.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                    whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(46,134,115,0.14)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid #f0f0f0", cursor: "pointer" }}
                  >
                    {/* Card Header */}
                    <div style={{ background: gradient, height: "140px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                      <span style={{ fontSize: "3.5rem", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))" }}>{event.emoji}</span>
                      <span style={{
                        position: "absolute", top: "14px", right: "14px",
                        backgroundColor: statusCfg.bg, color: statusCfg.color,
                        fontSize: "0.72rem", fontWeight: "700", padding: "4px 12px", borderRadius: "20px",
                        display: "flex", alignItems: "center", gap: "5px",
                      }}>
                        <span style={{ height: "6px", width: "6px", borderRadius: "50%", backgroundColor: statusCfg.dot, flexShrink: 0 }} />
                        {event.status}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div style={{ padding: "20px" }}>
                      <span style={{ backgroundColor: "#f0f9f7", color: "#2e8673", fontSize: "0.72rem", fontWeight: "700", padding: "3px 10px", borderRadius: "20px", letterSpacing: "0.04em" }}>
                        {event.category.toUpperCase()}
                      </span>

                      <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0d0b08", marginTop: "10px", lineHeight: 1.3 }}>{event.title}</h3>

                      <div style={{ display: "flex", gap: "14px", marginTop: "10px", flexWrap: "wrap" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.8rem", color: "#6b7280" }}>
                          <Calendar size={13} style={{ color: "#2e8673" }} /> {event.date}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.8rem", color: "#6b7280" }}>
                          <MapPin size={13} style={{ color: "#2e8673" }} /> {event.location}
                        </span>
                      </div>

                      {/* Roles */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
                        {event.roles.map((role) => (
                          <span key={role} style={{ fontSize: "0.72rem", fontWeight: "600", padding: "3px 10px", borderRadius: "20px", backgroundColor: "#f3f4f6", color: "#374151" }}>
                            {role}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid #f5f5f5" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.8rem", color: "#6b7280" }}>
                          <Users size={13} style={{ color: "#2e8673" }} /> {event.spots} spots
                        </span>
                        <Link href={`/events/${event.id}`}>
                          <motion.button
                            whileHover={{ gap: "10px" }} whileTap={{ scale: 0.96 }}
                            style={{
                              display: "flex", alignItems: "center", gap: "6px",
                              background: "linear-gradient(135deg, #2e8673, #469d8b)",
                              color: "#ffffff", fontSize: "0.8rem", fontWeight: "700",
                              padding: "8px 16px", borderRadius: "10px", border: "none", cursor: "pointer",
                              transition: "gap 0.2s",
                            }}
                          >
                            View Details <ArrowRight size={13} />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}