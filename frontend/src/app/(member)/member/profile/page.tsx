"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Upload, Check, User } from "lucide-react";
import { useState } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedInput from "@/components/ui/AnimatedInput";
import PageWrapper from "@/components/ui/PageWrapper";

const allSkills = ["Leadership", "Communication", "Design", "Programming", "Marketing", "Event Planning", "Photography", "Writing"];

export default function MemberProfile() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Leadership", "Communication", "Design"]);
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <PageWrapper>
      <div style={{ maxWidth: "680px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "8px" }}>

        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.875rem", fontWeight: "800", color: "#0d0b08" }}>Complete Your Profile</h1>
          <p style={{ color: "#6b7280", marginTop: "4px", marginBottom: "32px" }}>Help us match you with the right opportunities.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "32px", border: "1px solid #f0f0f0", display: "flex", flexDirection: "column", gap: "28px" }}
        >
          {/* Avatar */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <motion.div whileHover={{ scale: 1.05 }} style={{ height: "80px", width: "80px", borderRadius: "50%", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "800", color: "#2e8673", flexShrink: 0, cursor: "pointer", border: "3px solid #e0f2ee" }}>
              AK
            </motion.div>
            <div>
              <AnimatedButton variant="outline" style={{ padding: "8px 16px", fontSize: "0.875rem", borderRadius: "10px" }}>
                Change Photo
              </AnimatedButton>
              <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "6px" }}>JPG, PNG. Max 2MB.</p>
            </div>
          </div>

          {/* Name + Phone */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <AnimatedInput label="Full Name" defaultValue="Ahmad Khalil" placeholder="Your full name" />
            <AnimatedInput label="Phone" placeholder="+970 5X XXX XXXX" />
          </div>

          {/* City + Country */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <AnimatedInput label="City" placeholder="e.g. Nablus" />
            <AnimatedInput label="Country" placeholder="e.g. Palestine" />
          </div>

          {/* Education */}
          <AnimatedInput label="Education" placeholder="e.g. BSc Computer Science, An-Najah University" />

          {/* Bio */}
          <div>
            <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>Bio</label>
            <textarea placeholder="A short introduction about yourself..." rows={3}
              style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box", resize: "vertical", fontFamily: "inherit", transition: "border-color 0.2s" }}
              onFocus={(e) => { e.target.style.borderColor = "#2e8673"; e.target.style.boxShadow = "0 0 0 3px rgba(46,134,115,0.1)"; }}
              onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }}
            />
          </div>

          {/* Skills */}
          <div>
            <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "12px" }}>Skills</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {allSkills.map((skill, i) => {
                const selected = selectedSkills.includes(skill);
                return (
                  <motion.button key={skill}
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.04 }}
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    onClick={() => toggleSkill(skill)}
                    style={{
                      padding: "6px 14px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600", cursor: "pointer",
                      border: selected ? "1.5px solid #2e8673" : "1.5px solid #e5e7eb",
                      backgroundColor: selected ? "#f0f9f7" : "#ffffff",
                      color: selected ? "#2e8673" : "#6b7280",
                      display: "flex", alignItems: "center", gap: "6px", transition: "all 0.2s",
                    }}
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

          {/* Experience */}
          <div>
            <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>Experience</label>
            <textarea placeholder="Brief summary of your relevant experience..." rows={3}
              style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box", resize: "vertical", fontFamily: "inherit" }}
              onFocus={(e) => { e.target.style.borderColor = "#2e8673"; e.target.style.boxShadow = "0 0 0 3px rgba(46,134,115,0.1)"; }}
              onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.boxShadow = "none"; }}
            />
          </div>

          {/* CV Upload */}
          <div>
            <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>Upload CV</label>
            <motion.div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) setUploadedFile(f.name); }}
              onClick={() => { const input = document.createElement("input"); input.type = "file"; input.accept = ".pdf,.doc,.docx"; input.onchange = (e) => { const f = (e.target as HTMLInputElement).files?.[0]; if (f) setUploadedFile(f.name); }; input.click(); }}
              animate={{ borderColor: dragOver ? "#2e8673" : "#d1d5db", backgroundColor: dragOver ? "#f0f9f7" : "#fafafa" }}
              whileHover={{ backgroundColor: "#f5faf9", borderColor: "#66bdab" }}
              style={{ border: "2px dashed #d1d5db", borderRadius: "14px", padding: "32px", textAlign: "center", cursor: "pointer", transition: "all 0.2s" }}
            >
              <AnimatePresence mode="wait">
                {uploadedFile ? (
                  <motion.div key="uploaded" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                    <div style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                      <Check size={20} style={{ color: "#15803d" }} />
                    </div>
                    <p style={{ fontSize: "0.875rem", fontWeight: "600", color: "#15803d" }}>{uploadedFile}</p>
                    <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "4px" }}>Click to replace</p>
                  </motion.div>
                ) : (
                  <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Upload size={32} style={{ color: "#9ca3af", margin: "0 auto 8px" }} />
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                      Drag & drop your CV here, or{" "}
                      <span style={{ color: "#2e8673", fontWeight: "600" }}>browse</span>
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "4px" }}>PDF, DOC. Max 5MB.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", paddingTop: "8px", borderTop: "1px solid #f0f0f0" }}>
            <AnimatedButton variant="outline" style={{ padding: "11px 24px", fontSize: "0.95rem", borderRadius: "12px" }}>
              Skip for now
            </AnimatedButton>
            <AnimatedButton variant="primary" style={{ padding: "11px 28px", fontSize: "0.95rem", borderRadius: "12px" }}>
              Save Profile
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}