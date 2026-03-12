<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
import { Download, Award, Eye } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};
=======
import { Download, Award, Eye } from "lucide-react";
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9

const certificates = [
  { title: "Youth Leadership Summit 2026", date: "Mar 25, 2026", role: "Registration Desk", hours: 8 },
  { title: "Community Clean-up Drive", date: "Feb 15, 2026", role: "Team Captain", hours: 6 },
  { title: "Tech Mentorship Program", date: "Jan 10, 2026", role: "Facilitator", hours: 12 },
  { title: "Cultural Exchange Night", date: "Dec 5, 2025", role: "Event Host", hours: 5 },
];

export default function VolunteerCertificates() {
  return (
<<<<<<< HEAD
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Certificates</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Download your participation certificates.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {certificates.map((cert, i) => (
            <motion.div key={cert.title} custom={i} initial="hidden" animate="visible" variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "16px", overflow: "hidden", border: "1px solid #f0f0f0" }}
            >
              {/* Certificate Preview */}
              <div style={{ background: "linear-gradient(135deg, #f0f9f7 0%, #e8f5f2 100%)", padding: "32px", textAlign: "center", borderBottom: "1px solid #f0f0f0" }}>
                <div style={{ border: "2px solid rgba(46,134,115,0.2)", borderRadius: "16px", padding: "24px", backgroundColor: "rgba(255,255,255,0.8)" }}>
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} style={{ display: "inline-block", marginBottom: "12px" }}>
                    <Award size={40} style={{ color: "#2e8673" }} />
                  </motion.div>
                  <p style={{ fontSize: "0.7rem", color: "#6b7280", marginBottom: "4px" }}>Certificate of Participation</p>
                  <p style={{ fontWeight: "700", fontSize: "0.875rem", color: "#0d0b08" }}>MENA Club</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#0d0b08", marginTop: "8px" }}>{cert.title}</p>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "8px" }}>Awarded to Layla Hassan</p>
                </div>
              </div>

              {/* Card Footer */}
              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "0.75rem", padding: "3px 10px", borderRadius: "20px", border: "1px solid #e5e7eb", color: "#374151" }}>{cert.role}</span>
                  <span style={{ fontSize: "0.75rem", padding: "3px 10px", borderRadius: "20px", backgroundColor: "#f0f9f7", color: "#2e8673", fontWeight: "600" }}>{cert.hours}h</span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: "16px" }}>{cert.date}</p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <AnimatedButton variant="outline" style={{ flex: 1, padding: "9px", fontSize: "0.8rem", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                    <Eye size={14} /> Preview
                  </AnimatedButton>
                  <AnimatedButton variant="primary" style={{ flex: 1, padding: "9px", fontSize: "0.8rem", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                    <Download size={14} /> Download
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
=======
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Certificates</h1>
        <p className="text-gray-500">Download your participation certificates.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div key={cert.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

            {/* Certificate Preview */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center border-b border-gray-200">
              <div className="border-2 border-blue-200 rounded-2xl p-6 bg-white/80">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="text-xs text-gray-500 mb-1">Certificate of Participation</p>
                <p className="font-bold text-sm">MENA Club</p>
                <p className="text-lg font-semibold mt-2">{cert.title}</p>
                <p className="text-xs text-gray-500 mt-2">Awarded to Layla Hassan</p>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs border border-gray-300 text-gray-600 px-2 py-0.5 rounded-full">
                  {cert.role}
                </span>
                <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
                  {cert.hours}h
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              <div className="flex gap-2">
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition flex items-center justify-center gap-1">
                  <Eye className="h-3.5 w-3.5" /> Preview
                </button>
                <button className="flex-1 bg-primary text-white py-2 rounded-xl text-sm font-medium hover:bg-primary transition flex items-center justify-center gap-1">
                  <Download className="h-3.5 w-3.5" /> Download
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
  );
}