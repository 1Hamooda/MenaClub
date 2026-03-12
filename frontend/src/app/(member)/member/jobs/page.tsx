"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Star, ArrowRight, Sparkles } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedInput from "@/components/ui/AnimatedInput";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const jobMatches = [
  { title: "Event Coordinator", company: "UNDP Youth", match: 95, type: "Full-time", location: "Riyadh" },
  { title: "Community Manager", company: "Google MENA", match: 88, type: "Full-time", location: "Dubai" },
  { title: "Social Media Intern", company: "UNICEF", match: 82, type: "Internship", location: "Amman" },
  { title: "Program Associate", company: "World Bank", match: 78, type: "Contract", location: "Cairo" },
];

const fields = ["Technology", "Marketing", "Education", "Healthcare", "Social Impact", "Finance"];
const opTypes = ["Full-time", "Part-time", "Internship", "Remote"];
const expLevels = ["0-1 years", "1-3 years", "3-5 years", "5+ years"];

export default function MemberJobs() {
  const [showResults, setShowResults] = useState(false);

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08", display: "flex", alignItems: "center", gap: "10px" }}>
            <Sparkles size={24} style={{ color: "#2e8673" }} /> AI Job Recommendations
          </h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Answer a few questions and we&apos;ll match you with relevant opportunities.</p>
        </motion.div>

        {!showResults ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "32px", border: "1px solid #f0f0f0", maxWidth: "640px", display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151", display: "block", marginBottom: "8px" }}>What field are you interested in?</label>
              <select style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}>
                <option value="">Select field</option>
                {fields.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151", display: "block", marginBottom: "10px" }}>What type of opportunity?</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {opTypes.map((o) => (
                  <label key={o} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "0.875rem", color: "#374151" }}>
                    <input type="radio" name="optype" value={o} /> {o}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151", display: "block", marginBottom: "8px" }}>Years of experience</label>
              <select style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}>
                <option value="">Select</option>
                {expLevels.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <AnimatedInput label="Preferred location" placeholder="e.g. Riyadh, Dubai, Remote" />
            <AnimatedButton variant="primary" onClick={() => setShowResults(true)} style={{ padding: "12px 24px", fontSize: "0.95rem", borderRadius: "12px", alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "8px" }}>
              <Sparkles size={16} /> Find Matches
            </AnimatedButton>
          </motion.div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "640px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Found {jobMatches.length} matches</p>
              <button onClick={() => setShowResults(false)} style={{ fontSize: "0.875rem", color: "#2e8673", background: "none", border: "none", cursor: "pointer", fontWeight: "500" }}>
                Retake Quiz
              </button>
            </div>
            {jobMatches.map((job, i) => (
              <motion.div key={job.title} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(46,134,115,0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "20px", border: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div style={{ height: "48px", width: "48px", borderRadius: "12px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Briefcase size={22} style={{ color: "#2e8673" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontWeight: "700", color: "#0d0b08", fontSize: "0.95rem" }}>{job.title}</h3>
                  <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "2px" }}>{job.company} · {job.location}</p>
                  <span style={{ fontSize: "0.75rem", padding: "3px 10px", borderRadius: "20px", border: "1px solid #e5e7eb", color: "#374151", display: "inline-block", marginTop: "8px" }}>{job.type}</span>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "8px", justifyContent: "flex-end" }}>
                    <Star size={15} style={{ color: "#2e8673", fill: "#2e8673" }} />
                    <span style={{ fontWeight: "800", color: "#2e8673", fontSize: "1rem" }}>{job.match}%</span>
                  </div>
                  <AnimatedButton variant="outline" style={{ padding: "7px 14px", fontSize: "0.8rem", borderRadius: "10px", display: "flex", alignItems: "center", gap: "4px" }}>
                    View <ArrowRight size={12} />
                  </AnimatedButton>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}