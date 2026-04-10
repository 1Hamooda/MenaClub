<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
import { Send, Users } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";

const groups = ["All Members", "All Volunteers", "Event Participants", "Pending Applications"];

export default function AdminSendNotifications() {
  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Send Notifications</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Compose and send targeted notifications.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "32px", border: "1px solid #f0f0f0", maxWidth: "640px", display: "flex", flexDirection: "column", gap: "24px" }}
        >
          {/* Target Group */}
          <div>
            <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "12px" }}>Target Group</label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {groups.map((g, i) => (
                <motion.label key={g}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05 }}
                  whileHover={{ backgroundColor: "#f0f9f7", borderColor: "#2e8673" }}
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", borderRadius: "12px", border: "1px solid #e5e7eb", cursor: "pointer", transition: "all 0.2s" }}
                >
                  <input type="checkbox" style={{ accentColor: "#2e8673" }} />
                  <Users size={16} style={{ color: "#6b7280" }} />
                  <span style={{ fontSize: "0.875rem", color: "#374151" }}>{g}</span>
                </motion.label>
=======
import { Send, Users } from "lucide-react";

const groups = ["All Members", "All Volunteers", "Event Participants", "Pending Applications"];

export default function AdminNotifications() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Send Notifications</h1>
        <p className="text-gray-500">Compose and send targeted notifications.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-2xl shadow-sm">
        <div className="space-y-5">

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-3">Target Group</label>
            <div className="space-y-2">
              {groups.map((g) => (
                <label key={g} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                  <input type="checkbox" className="accent-blue-700 h-4 w-4" />
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{g}</span>
                  </div>
                </label>
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Type */}
          <div>
            <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>Notification Type</label>
            <select style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}>
              <option>Select type</option>
              <option>General Update</option>
              <option>Event Reminder</option>
              <option>Urgent Notice</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>Message</label>
            <textarea placeholder="Write your notification message..." rows={4}
              style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box", resize: "vertical" }} />
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <AnimatedButton variant="primary" style={{ padding: "12px 24px", fontSize: "0.95rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Send size={15} /> Send Notification
            </AnimatedButton>
            <AnimatedButton variant="outline" style={{ padding: "12px 24px", fontSize: "0.95rem", borderRadius: "12px" }}>Preview</AnimatedButton>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
=======
          <div>
            <label className="text-sm font-medium text-gray-700">Notification Type</label>
            <select className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select type</option>
              <option value="general">General Update</option>
              <option value="event">Event Reminder</option>
              <option value="urgent">Urgent Notice</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={4}
              placeholder="Write your notification message..."
              className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
              <Send className="h-4 w-4" /> Send Notification
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
              Preview
            </button>
          </div>

        </div>
      </div>

    </div>
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
  );
}