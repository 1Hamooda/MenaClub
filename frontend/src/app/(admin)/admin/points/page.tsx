"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, X, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";
import api from "@/services/api";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.04, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

interface Transaction {
  id:           number;
  user_id:      number;
  user_name:    string;
  user_email:   string;
  points:       number;
  reason:       string;
  reason_label: string;
  note:         string;
  event_title:  string | null;
  created_at:   string;
}

interface UserOption {
  id:        number;
  full_name: string;
  email:     string;
  role:      string;
}

const REASON_CHOICES = [
  { value: "bonus",          label: "Bonus" },
  { value: "task_completed", label: "Task Completed" },
  { value: "cv_uploaded",    label: "CV Uploaded" },
  { value: "referral",       label: "Referral" },
  { value: "deduction",      label: "Deduction" },
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

const modalOverlay: React.CSSProperties = {
  position: "fixed", inset: 0, zIndex: 50,
  backgroundColor: "rgba(0,0,0,0.3)", backdropFilter: "blur(2px)",
  display: "flex", alignItems: "center", justifyContent: "center", padding: "24px",
};

export default function AdminPointsPage() {
  const [transactions,  setTransactions]  = useState<Transaction[]>([]);
  const [totalCount,    setTotalCount]    = useState(0);
  const [loading,       setLoading]       = useState(true);
  const [toast,         setToast]         = useState("");
  const [error,         setError]         = useState("");

  const [filterUser,   setFilterUser]   = useState("");
  const [filterReason, setFilterReason] = useState("");
  const [searchUser,   setSearchUser]   = useState("");

  const [showModal,   setShowModal]   = useState(false);
  const [modalType,   setModalType]   = useState<"award" | "deduct">("award");
  const [users,       setUsers]       = useState<UserOption[]>([]);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [selUser,     setSelUser]     = useState("");
  const [pts,         setPts]         = useState("");
  const [reason,      setReason]      = useState("bonus");
  const [note,        setNote]        = useState("");
  const [submitting,  setSubmitting]  = useState(false);

  const [stats, setStats] = useState({ total_awarded: 0, total_deducted: 0, unique_users: 0 });

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(""), 3500); }

  async function fetchTransactions() {
    setLoading(true);
    try {
      const params: Record<string, string> = {};
      if (filterUser)   params.user_id = filterUser;
      if (filterReason) params.reason  = filterReason;
      const { data } = await api.get("/api/points/admin/transactions/", { params });
      setTransactions(data.results);
      setTotalCount(data.count);

      const awarded  = data.results.filter((t: Transaction) => t.points > 0).reduce((s: number, t: Transaction) => s + t.points, 0);
      const deducted = data.results.filter((t: Transaction) => t.points < 0).reduce((s: number, t: Transaction) => s + t.points, 0);
      const unique   = new Set(data.results.map((t: Transaction) => t.user_id)).size;
      setStats({ total_awarded: awarded, total_deducted: Math.abs(deducted), unique_users: unique });
    } catch {
      setError("Failed to load transactions.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchTransactions(); }, [filterUser, filterReason]);

  async function loadUsers() {
    if (usersLoaded) return;
    try {
      const { data } = await api.get("/api/auth/admin/users/");
      setUsers(data.results);
      setUsersLoaded(true);
    } catch { showToast("Failed to load users."); }
  }

  function openModal(type: "award" | "deduct") {
    setModalType(type);
    setSelUser(""); setPts(""); setReason("bonus"); setNote("");
    setShowModal(true);
    loadUsers();
  }

  async function handleSubmit() {
    if (!selUser || !pts) { showToast("Select a user and enter points."); return; }
    const ptsNum = parseInt(pts);
    if (isNaN(ptsNum) || ptsNum <= 0) { showToast("Enter a valid positive number."); return; }

    setSubmitting(true);
    try {
      const { data } = await api.post("/api/points/admin/award/", {
        user_id: parseInt(selUser),
        points:  modalType === "deduct" ? -ptsNum : ptsNum,
        reason,
        note,
      });
      showToast(data.message);
      setShowModal(false);
      fetchTransactions();
    } catch (err: any) {
      showToast(err?.response?.data?.error || "Failed to update points.");
    } finally {
      setSubmitting(false);
    }
  }

  const filteredBySearch = searchUser
    ? transactions.filter(t =>
        t.user_name.toLowerCase().includes(searchUser.toLowerCase()) ||
        t.user_email.toLowerCase().includes(searchUser.toLowerCase())
      )
    : transactions;

  const selectStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", border: "1px solid #d1d5db",
    borderRadius: "10px", fontSize: "0.875rem", outline: "none",
    backgroundColor: "#ffffff", boxSizing: "border-box", cursor: "pointer",
  };

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ position: "fixed", top: "24px", right: "24px", zIndex: 100, backgroundColor: "#0d0b08", color: "#ffffff", padding: "12px 20px", borderRadius: "12px", fontSize: "0.875rem", fontWeight: "500", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
              {toast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal */}
        {showModal && (
          <div style={modalOverlay} onClick={() => setShowModal(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "32px", width: "100%", maxWidth: "440px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
              onClick={(e) => e.stopPropagation()}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: modalType === "award" ? "#f0f9f7" : "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {modalType === "award"
                      ? <Plus size={18} style={{ color: "#2e8673" }} />
                      : <Minus size={18} style={{ color: "#dc2626" }} />}
                  </div>
                  <h2 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#0d0b08" }}>
                    {modalType === "award" ? "Award Points" : "Deduct Points"}
                  </h2>
                </div>
                <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}><X size={18} /></button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>User</label>
                  <select value={selUser} onChange={(e) => setSelUser(e.target.value)} style={selectStyle}>
                    <option value="">Select a user...</option>
                    {users.map((u) => (
                      <option key={u.id} value={String(u.id)}>
                        {u.full_name} ({u.email}) — {u.role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>Points</label>
                  <input type="number" min="1" value={pts} onChange={(e) => setPts(e.target.value)} placeholder="e.g. 50"
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "10px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }} />
                </div>

                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>Reason</label>
                  <select value={reason} onChange={(e) => setReason(e.target.value)} style={selectStyle}>
                    {REASON_CHOICES.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "0.875rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>Note <span style={{ fontWeight: "400", color: "#9ca3af" }}>(optional)</span></label>
                  <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. Awarded for exceptional contribution"
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "10px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }} />
                </div>

                <div style={{ display: "flex", gap: "10px", paddingTop: "8px" }}>
                  <AnimatedButton variant="outline" onClick={() => setShowModal(false)} style={{ flex: 1, padding: "10px", borderRadius: "10px" }}>Cancel</AnimatedButton>
                  <AnimatedButton
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={submitting}
                    style={{ flex: 1, padding: "10px", borderRadius: "10px", backgroundColor: modalType === "deduct" ? "#dc2626" : undefined }}>
                    {submitting ? "Saving..." : modalType === "award" ? "Award Points" : "Deduct Points"}
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Points Management</h1>
            <p style={{ color: "#6b7280", marginTop: "4px" }}>Award, deduct, and track points across all users.</p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <AnimatedButton variant="outline" onClick={() => openModal("deduct")}
              style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "6px", color: "#dc2626", borderColor: "#fecaca" }}>
              <Minus size={14} /> Deduct
            </AnimatedButton>
            <AnimatedButton variant="primary" onClick={() => openModal("award")}
              style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <Plus size={14} /> Award Points
            </AnimatedButton>
          </div>
        </motion.div>

        {error && (
          <div style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "12px 16px", color: "#dc2626", fontSize: "0.875rem" }}>{error}</div>
        )}

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.4 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {[
            { icon: TrendingUp, label: "Points Awarded",  value: `+${stats.total_awarded.toLocaleString()}`,  color: "#2e8673", bg: "#f0f9f7" },
            { icon: Minus,      label: "Points Deducted", value: `-${stats.total_deducted.toLocaleString()}`, color: "#dc2626", bg: "#fef2f2" },
            { icon: Users,      label: "Users with Pts",  value: stats.unique_users,                          color: "#6366f1", bg: "#f5f3ff" },
          ].map((s) => (
            <motion.div key={s.label} whileHover={{ y: -2 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "14px", padding: "20px", border: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <div>
                <p style={{ fontSize: "1.375rem", fontWeight: "800", color: "#0d0b08" }}>{s.value}</p>
                <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "1px" }}>{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.4 }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ position: "relative", flex: 1, minWidth: "220px" }}>
            <Search size={15} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
            <input value={searchUser} onChange={(e) => setSearchUser(e.target.value)}
              placeholder="Search by name or email..."
              style={{ width: "100%", padding: "10px 12px 10px 36px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }} />
          </div>
          <select value={filterReason} onChange={(e) => setFilterReason(e.target.value)}
            style={{ padding: "10px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}>
            <option value="">All Reasons</option>
            <option value="account_created">Account Created</option>
            <option value="event_attendance">Event Attendance</option>
            <option value="volunteer_checkin">Volunteer Check-in</option>
            <option value="event_share">Event Share</option>
            <option value="task_completed">Task Completed</option>
            <option value="cv_uploaded">CV Uploaded</option>
            <option value="referral">Referral</option>
            <option value="bonus">Bonus</option>
            <option value="deduction">Deduction</option>
          </select>
          {(filterReason || searchUser) && (
            <AnimatedButton variant="outline" onClick={() => { setFilterReason(""); setSearchUser(""); setFilterUser(""); }}
              style={{ padding: "9px 14px", borderRadius: "12px", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "4px" }}>
              <X size={13} /> Clear
            </AnimatedButton>
          )}
          <p style={{ fontSize: "0.8rem", color: "#9ca3af", marginLeft: "auto" }}>
            {filteredBySearch.length} of {totalCount} transactions
          </p>
        </motion.div>

        {/* Table */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #f0f0f0", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #f0f0f0", backgroundColor: "#f9fafb" }}>
                {["User", "Points", "Reason", "Note / Event", "Date"].map((h) => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.8rem", fontWeight: "600", color: "#6b7280" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} style={{ padding: "40px", textAlign: "center", color: "#9ca3af", fontSize: "0.875rem" }}>Loading...</td></tr>
              ) : filteredBySearch.length === 0 ? (
                <tr><td colSpan={5} style={{ padding: "40px", textAlign: "center", color: "#9ca3af", fontSize: "0.875rem" }}>No transactions found.</td></tr>
              ) : filteredBySearch.map((t, i) => (
                <motion.tr key={t.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  style={{ borderBottom: "1px solid #f5f5f5", transition: "background-color 0.15s" }}>
                  <td style={{ padding: "12px 16px" }}>
                    <p style={{ fontWeight: "600", fontSize: "0.875rem", color: "#0d0b08" }}>{t.user_name}</p>
                    <p style={{ fontSize: "0.72rem", color: "#9ca3af" }}>{t.user_email}</p>
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ fontSize: "1rem", fontWeight: "800", color: t.points >= 0 ? "#2e8673" : "#dc2626" }}>
                      {t.points >= 0 ? "+" : ""}{t.points}
                    </span>
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: "600", padding: "3px 10px", borderRadius: "20px", backgroundColor: "#f3f4f6", color: "#374151" }}>
                      {t.reason_label}
                    </span>
                  </td>
                  <td style={{ padding: "12px 16px", fontSize: "0.8rem", color: "#6b7280", maxWidth: "200px" }}>
                    <p style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {t.note || t.event_title || "—"}
                    </p>
                  </td>
                  <td style={{ padding: "12px 16px", fontSize: "0.8rem", color: "#9ca3af", whiteSpace: "nowrap" }}>
                    {formatDate(t.created_at)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </PageWrapper>
  );
}