"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Award, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedInput from "@/components/ui/AnimatedInput";
import PageWrapper from "@/components/ui/PageWrapper";

const allSkills = ["Leadership", "Communication", "Design", "Programming", "Marketing", "Event Planning", "Photography", "Writing"];

const stats = [
  { icon: Calendar, label: "Events Attended", value: 8 },
  { icon: Clock,    label: "Volunteer Hours",  value: "64h" },
  { icon: Award,    label: "Certificates",     value: 3 },
];

export default function VolunteerProfile() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Communication", "Event Planning"]);
  const [showToast, setShowToast] = useState(false);

  const toggleSkill = (skill: string) =>
    setSelectedSkills((prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <PageWrapper>
      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            style={{ position: "fixed", top: "24px", right: "24px", zIndex: 100, backgroundColor: "#ffffff", borderRadius: "14px", padding: "14px 20px", boxShadow: "0 8px 32px rgba(46,134,115,0.18)", border: "1px solid #dcfce7", display: "flex", alignItems: "center", gap: "10px" }}
          >
            <div style={{ height: "28px", width: "28px", borderRadius: "50%", backgroundColor: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Check size={14} style={{ color: "#15803d" }} />
            </div>
            <div>
              <p style={{ fontSize: "0.875rem", fontWeight: "700", color: "#0d0b08" }}>Profile saved!</p>
              <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>Your changes have been updated.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ maxWidth: "680px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "8px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.875rem", fontWeight: "800", color: "#0d0b08" }}>Profile & Settings</h1>
          <p style={{ color: "#6b7280", marginTop: "4px", marginBottom: "24px" }}>Manage your account details.</p>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.5 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "8px" }}
        >
          {stats.map((s) => (
            <motion.div key={s.label} whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(46,134,115,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "14px", padding: "18px", border: "1px solid #f0f0f0", textAlign: "center" }}
            >
              <div style={{ height: "36px", width: "36px", borderRadius: "10px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                <s.icon size={18} style={{ color: "#2e8673" }} />
              </div>
              <p style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0d0b08" }}>{s.value}</p>
              <p style={{ fontSize: "0.72rem", color: "#6b7280", marginTop: "2px" }}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "32px", border: "1px solid #f0f0f0", display: "flex", flexDirection: "column", gap: "28px" }}
        >
          {/* Avatar */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <motion.div whileHover={{ scale: 1.05 }}
              style={{ height: "80px", width: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #2e8673, #469d8b)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "800", color: "#ffffff", flexShrink: 0, cursor: "pointer", border: "3px solid #e0f2ee" }}>
              LM
            </motion.div>
            <div>
              <AnimatedButton variant="outline" style={{ padding: "8px 16px", fontSize: "0.875rem", borderRadius: "10px" }}>Change Photo</AnimatedButton>
              <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "6px" }}>JPG, PNG. Max 2MB.</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <AnimatedInput label="Full Name" defaultValue="Layla Mohammed" placeholder="Your full name" />
            <AnimatedInput label="Phone" placeholder="+970 5X XXX XXXX" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <AnimatedInput label="City" placeholder="e.g. Ramallah" />
            <AnimatedInput label="Country" placeholder="e.g. Palestine" />
          </div>

          <div>
            <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>Bio</label>
            <textarea placeholder="A short introduction about yourself..." rows={3}
              style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box", resize: "vertical", fontFamily: "inherit" }}
              onFocus={(e) => { e.target.style.borderColor = "#2e8673"; e.target.style.boxShadow = "0 0 0 3px rgba(46,134,115,0.1)"; }}
              onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }} />
          </div>

          {/* Skills */}
          <div>
            <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "12px" }}>Skills</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {allSkills.map((skill, i) => {
                const selected = selectedSkills.includes(skill);
                return (
                  <motion.button key={skill}
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 + i * 0.04 }}
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    onClick={() => toggleSkill(skill)}
                    style={{ padding: "6px 14px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600", cursor: "pointer", border: selected ? "1.5px solid #2e8673" : "1.5px solid #e5e7eb", backgroundColor: selected ? "#f0f9f7" : "#ffffff", color: selected ? "#2e8673" : "#6b7280", display: "flex", alignItems: "center", gap: "6px", transition: "all 0.2s" }}
                  >
                    <AnimatePresence>
                      {selected && (
                        <motion.span initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.15 }}>
                          <Check size={12} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {skill}
                  </motion.button>
                );
              })}
            </div>
            <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "8px" }}>{selectedSkills.length} skill{selectedSkills.length !== 1 ? "s" : ""} selected</p>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", paddingTop: "8px", borderTop: "1px solid #f0f0f0" }}>
            <AnimatedButton variant="outline" style={{ padding: "11px 24px", fontSize: "0.95rem", borderRadius: "12px" }}>Discard</AnimatedButton>
            <AnimatedButton variant="primary" onClick={handleSave} style={{ padding: "11px 28px", fontSize: "0.95rem", borderRadius: "12px" }}>Save Profile</AnimatedButton>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}