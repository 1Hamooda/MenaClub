"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Check, X, ChevronDown, ChevronUp, Search,
  Users, Calendar, MapPin, Filter, Eye
} from "lucide-react";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const AVAILABLE_ROLES = ["Coordinator", "Volunteer", "Facilitator", "Photographer", "Registration", "Logistics", "MC", "Usher"];

type AppStatus = "pending" | "approved" | "rejected";

type Application = {
  id: number;
  name: string;
  email: string;
  event: string;
  eventDate: string;
  location: string;
  requestedRole: string;
  assignedRole: string | null;
  status: AppStatus;
  appliedDate: string;
  note: string;
  initials: string;
};

const INITIAL_APPS: Application[] = [
  { id: 1, name: "Ahmad Khalil",     email: "ahmad@example.com",   event: "Afaq Forum — Youth Clubs Meetup",    eventDate: "Apr 12, 2026", location: "PPU, Hebron",    requestedRole: "Coordinator",   assignedRole: null,           status: "pending",  appliedDate: "Mar 1, 2026",  note: "Experienced coordinator with 3 previous events.",     initials: "AK" },
  { id: 2, name: "Layla Mohammed",   email: "layla@example.com",   event: "Afaq Forum — Youth Clubs Meetup",    eventDate: "Apr 12, 2026", location: "PPU, Hebron",    requestedRole: "Facilitator",   assignedRole: "Facilitator",  status: "approved", appliedDate: "Mar 2, 2026",  note: "Great communication skills, approved quickly.",       initials: "LM" },
  { id: 3, name: "Omar Hassan",      email: "omar@example.com",    event: "Feed & Benefit Initiative",           eventDate: "Ongoing",      location: "Hebron",         requestedRole: "Mentor",        assignedRole: null,           status: "pending",  appliedDate: "Mar 3, 2026",  note: "First-time volunteer, keen to contribute.",           initials: "OH" },
  { id: 4, name: "Fatima Al-Sayed",  email: "fatima@example.com",  event: "MENA Reads — Reading Club",           eventDate: "Ongoing",      location: "Hebron Library", requestedRole: "Facilitator",   assignedRole: null,           status: "pending",  appliedDate: "Mar 4, 2026",  note: "Avid reader, strong presenter.",                      initials: "FA" },
  { id: 5, name: "Nour Khalil",      email: "nour@example.com",    event: "Afaq Forum — Youth Clubs Meetup",    eventDate: "Apr 12, 2026", location: "PPU, Hebron",    requestedRole: "Photographer",  assignedRole: "Photographer", status: "approved", appliedDate: "Feb 28, 2026", note: "Professional photographer with portfolio.",           initials: "NK" },
  { id: 6, name: "Youssef Ali",      email: "youssef@example.com", event: "Feed & Benefit Initiative",           eventDate: "Ongoing",      location: "Hebron",         requestedRole: "Logistics",     assignedRole: null,           status: "rejected", appliedDate: "Feb 25, 2026", note: "Unavailable for required dates.",                     initials: "YA" },
  { id: 7, name: "Sara Nasser",      email: "sara@example.com",    event: "Afaq Forum — Youth Clubs Meetup",    eventDate: "Apr 12, 2026", location: "PPU, Hebron",    requestedRole: "Usher",         assignedRole: null,           status: "pending",  appliedDate: "Mar 5, 2026",  note: "Reliable and punctual, attended orientation.",        initials: "SN" },
  { id: 8, name: "Kareem Mansour",   email: "kareem@example.com",  event: "MENA Reads — Reading Club",           eventDate: "Ongoing",      location: "Hebron Library", requestedRole: "Coordinator",   assignedRole: "Coordinator",  status: "approved", appliedDate: "Mar 1, 2026",  note: "Club veteran, trusted with coordination.",            initials: "KM" },
];

const STATUS_CONFIG: Record<AppStatus, { bg: string; color: string; dot: string; label: string }> = {
  pending:  { bg: "#fef9c3", color: "#a16207", dot: "#eab308", label: "Pending" },
  approved: { bg: "#dcfce7", color: "#15803d", dot: "#22c55e", label: "Approved" },
  rejected: { bg: "#fee2e2", color: "#b91c1c", dot: "#ef4444", label: "Rejected" },
};

const EVENTS = ["All Events", "Afaq Forum — Youth Clubs Meetup", "Feed & Benefit Initiative", "MENA Reads — Reading Club"];

export default function AdminApplications() {
  const [apps, setApps] = useState<Application[]>(INITIAL_APPS);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | AppStatus>("all");
  const [eventFilter, setEventFilter] = useState("All Events");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [roleAssigning, setRoleAssigning] = useState<Record<number, string>>({});

  const updateStatus = (id: number, status: AppStatus) =>
    setApps((prev) => prev.map((a) => a.id === id ? { ...a, status } : a));

  const assignRole = (id: number) => {
    const role = roleAssigning[id];
    if (!role) return;
    setApps((prev) => prev.map((a) => a.id === id ? { ...a, assignedRole: role, status: "approved" } : a));
    setRoleAssigning((prev) => { const n = { ...prev }; delete n[id]; return n; });
  };

  const filtered = apps.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.event.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || a.status === statusFilter;
    const matchEvent = eventFilter === "All Events" || a.event === eventFilter;
    return matchSearch && matchStatus && matchEvent;
  });

  const counts = {
    pending:  apps.filter((a) => a.status === "pending").length,
    approved: apps.filter((a) => a.status === "approved").length,
    rejected: apps.filter((a) => a.status === "rejected").length,
  };

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Applications</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Review event applications and assign volunteer roles.</p>
        </motion.div>

        {/* Summary Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
          {(["pending", "approved", "rejected"] as AppStatus[]).map((s, i) => {
            const cfg = STATUS_CONFIG[s];
            return (
              <motion.div key={s} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(46,134,115,0.1)" }}
                onClick={() => setStatusFilter(statusFilter === s ? "all" : s)}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ backgroundColor: statusFilter === s ? cfg.bg : "#ffffff", borderRadius: "14px", padding: "18px 20px", border: `1.5px solid ${statusFilter === s ? cfg.color : "#f0f0f0"}`, cursor: "pointer", transition: "all 0.2s" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ height: "8px", width: "8px", borderRadius: "50%", backgroundColor: cfg.dot, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.78rem", fontWeight: "700", color: cfg.color, letterSpacing: "0.04em" }}>{cfg.label.toUpperCase()}</span>
                </div>
                <p style={{ fontSize: "1.75rem", fontWeight: "900", color: "#0d0b08" }}>{counts[s]}</p>
                <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "2px" }}>application{counts[s] !== 1 ? "s" : ""}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
        >
          <div style={{ position: "relative", flex: 1, minWidth: "200px" }}>
            <Search size={15} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
            <input placeholder="Search by name or event..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%", padding: "10px 12px 10px 34px", border: "1px solid #e5e7eb", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box", backgroundColor: "#ffffff" }}
              onFocus={(e) => { e.target.style.borderColor = "#2e8673"; e.target.style.boxShadow = "0 0 0 3px rgba(46,134,115,0.1)"; }}
              onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
            />
          </div>
          <div style={{ position: "relative" }}>
            <Filter size={14} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
            <select value={eventFilter} onChange={(e) => setEventFilter(e.target.value)}
              style={{ padding: "10px 16px 10px 32px", border: "1px solid #e5e7eb", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff", cursor: "pointer" }}>
              {EVENTS.map((e) => <option key={e}>{e}</option>)}
            </select>
          </div>
        </motion.div>

        {/* Applications List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <AnimatePresence>
            {filtered.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ textAlign: "center", padding: "60px 0", color: "#9ca3af" }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>📭</div>
                <p>No applications match your filters.</p>
              </motion.div>
            ) : filtered.map((app, i) => {
              const cfg = STATUS_CONFIG[app.status];
              const isExpanded = expandedId === app.id;
              return (
                <motion.div key={app.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                  layout
                  style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: `1px solid ${isExpanded ? "#2e8673" : "#f0f0f0"}`, overflow: "hidden", transition: "border-color 0.2s" }}
                >
                  {/* Row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 20px", cursor: "pointer" }}
                    onClick={() => setExpandedId(isExpanded ? null : app.id)}
                  >
                    {/* Avatar */}
                    <div style={{ height: "40px", width: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #2e8673, #469d8b)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "0.75rem", fontWeight: "800", flexShrink: 0 }}>
                      {app.initials}
                    </div>

                    {/* Name + Event */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0d0b08" }}>{app.name}</p>
                      <p style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: "2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{app.event}</p>
                    </div>

                    {/* Requested role */}
                    <span style={{ fontSize: "0.75rem", fontWeight: "600", padding: "4px 12px", borderRadius: "20px", backgroundColor: "#f0f9f7", color: "#2e8673", flexShrink: 0 }}>
                      {app.requestedRole}
                    </span>

                    {/* Status */}
                    <span style={{ backgroundColor: cfg.bg, color: cfg.color, fontSize: "0.72rem", fontWeight: "700", padding: "4px 12px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
                      <span style={{ height: "6px", width: "6px", borderRadius: "50%", backgroundColor: cfg.dot }} />
                      {cfg.label}
                    </span>

                    {/* Expand */}
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={16} style={{ color: "#9ca3af" }} />
                    </motion.div>
                  </div>

                  {/* Expanded detail */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ padding: "0 20px 20px", borderTop: "1px solid #f0f0f0" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", paddingTop: "18px" }}>

                            {/* Left: info */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                {[
                                  { icon: Users,    label: "Email",       value: app.email },
                                  { icon: Calendar, label: "Event Date",  value: app.eventDate },
                                  { icon: MapPin,   label: "Location",    value: app.location },
                                  { icon: Eye,      label: "Applied",     value: app.appliedDate },
                                ].map((item) => (
                                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <div style={{ height: "28px", width: "28px", borderRadius: "8px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                      <item.icon size={13} style={{ color: "#2e8673" }} />
                                    </div>
                                    <span style={{ fontSize: "0.75rem", color: "#9ca3af", width: "70px", flexShrink: 0 }}>{item.label}</span>
                                    <span style={{ fontSize: "0.8rem", fontWeight: "600", color: "#374151" }}>{item.value}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Note */}
                              <div style={{ backgroundColor: "#f9fafb", borderRadius: "10px", padding: "12px 14px", borderLeft: "3px solid #2e8673" }}>
                                <p style={{ fontSize: "0.72rem", color: "#9ca3af", fontWeight: "600", marginBottom: "4px" }}>NOTE</p>
                                <p style={{ fontSize: "0.82rem", color: "#4b5563", lineHeight: 1.5 }}>{app.note}</p>
                              </div>
                            </div>

                            {/* Right: actions */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                              {/* Assign Role */}
                              <div>
                                <p style={{ fontSize: "0.78rem", fontWeight: "700", color: "#374151", marginBottom: "8px" }}>Assign Role</p>
                                <div style={{ display: "flex", gap: "8px" }}>
                                  <select
                                    value={roleAssigning[app.id] || app.assignedRole || ""}
                                    onChange={(e) => setRoleAssigning((prev) => ({ ...prev, [app.id]: e.target.value }))}
                                    style={{ flex: 1, padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: "10px", fontSize: "0.8rem", outline: "none", backgroundColor: "#ffffff", cursor: "pointer" }}
                                  >
                                    <option value="">Select role...</option>
                                    {AVAILABLE_ROLES.map((r) => <option key={r}>{r}</option>)}
                                  </select>
                                  <motion.button
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    onClick={() => assignRole(app.id)}
                                    style={{ padding: "9px 16px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, #2e8673, #469d8b)", color: "#ffffff", fontSize: "0.8rem", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" }}
                                  >
                                    Assign
                                  </motion.button>
                                </div>
                                {app.assignedRole && (
                                  <p style={{ fontSize: "0.72rem", color: "#2e8673", marginTop: "6px", fontWeight: "600" }}>
                                    ✓ Currently assigned: {app.assignedRole}
                                  </p>
                                )}
                              </div>

                              {/* Approve / Reject */}
                              {app.status === "pending" && (
                                <div>
                                  <p style={{ fontSize: "0.78rem", fontWeight: "700", color: "#374151", marginBottom: "8px" }}>Decision</p>
                                  <div style={{ display: "flex", gap: "8px" }}>
                                    <motion.button
                                      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                                      onClick={() => updateStatus(app.id, "approved")}
                                      style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "10px", borderRadius: "10px", border: "none", backgroundColor: "#dcfce7", color: "#15803d", fontSize: "0.8rem", fontWeight: "700", cursor: "pointer" }}
                                    >
                                      <Check size={14} /> Approve
                                    </motion.button>
                                    <motion.button
                                      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                                      onClick={() => updateStatus(app.id, "rejected")}
                                      style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "10px", borderRadius: "10px", border: "none", backgroundColor: "#fee2e2", color: "#b91c1c", fontSize: "0.8rem", fontWeight: "700", cursor: "pointer" }}
                                    >
                                      <X size={14} /> Reject
                                    </motion.button>
                                  </div>
                                </div>
                              )}

                              {/* Undo for approved/rejected */}
                              {app.status !== "pending" && (
                                <motion.button
                                  whileHover={{ backgroundColor: "#f9fafb" }} whileTap={{ scale: 0.97 }}
                                  onClick={() => updateStatus(app.id, "pending")}
                                  style={{ padding: "10px", borderRadius: "10px", border: "1px solid #e5e7eb", backgroundColor: "#ffffff", color: "#6b7280", fontSize: "0.8rem", fontWeight: "600", cursor: "pointer", transition: "background-color 0.2s" }}
                                >
                                  ↩ Move back to Pending
                                </motion.button>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  );
}