"use client"

import { useState } from "react"
import Link from "next/link"
import { User, Lock, Globe, Bell, Trash2, Calendar, CheckSquare, Award, Star, Briefcase } from "lucide-react"

const sidebarLinks = [
  { href: "/member", label: "Dashboard" },
  { href: "/member/my-events", label: "My Events" },
  { href: "/member/my-tasks", label: "My Tasks" },
  { href: "/member/certificates", label: "Certificates" },
  { href: "/member/points", label: "Points & Rewards" },
  { href: "/member/job-recommendations", label: "Job Recommendations" },
  { href: "/member/profile", label: "Profile" },
  { href: "/member/settings", label: "Settings" },
]

export default function MemberSettingsPage() {
  const [name, setName] = useState("Ahmed Al-Hassan")
  const [email, setEmail] = useState("ahmed@example.com")
  const [phone, setPhone] = useState("+970501234567")
  const [bio, setBio] = useState("Youth volunteer and tech enthusiast.")
  const [currentPass, setCurrentPass] = useState("")
  const [newPass, setNewPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [language, setLanguage] = useState("en")
  const [emailNotif, setEmailNotif] = useState(true)
  const [eventReminder, setEventReminder] = useState(true)
  const [jobAlert, setJobAlert] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [toast, setToast] = useState("")

  const save = (section: string) => {
    setToast(`${section} updated successfully!`)
    setTimeout(() => setToast(""), 3000)
  }

  return (
    <div className="flex min-h-screen bg-background">

      {/* ── Sidebar ── */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-border bg-card p-6 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-foreground mb-4">Member Panel</h2>
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </aside>

      {/* ── Main ── */}
      <main className="ml-64 flex-1 p-8 space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>

        {/* Toast */}
        {toast && (
          <div className="fixed top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg text-sm z-50">
            ✅ {toast}
          </div>
        )}

        {/* Personal Info */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
            <User className="h-5 w-5 text-primary" /> Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground">Full Name</label>
              <input value={name} onChange={e => setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Phone</label>
              <input value={phone} onChange={e => setPhone(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-muted-foreground">Bio</label>
              <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary" />
            </div>
          </div>
          <button onClick={() => save("Personal info")}
            className="mt-4 gradient-teal text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Save Changes
          </button>
        </div>

        {/* Password */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
            <Lock className="h-5 w-5 text-primary" /> Change Password
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-muted-foreground">Current Password</label>
              <input type="password" value={currentPass} onChange={e => setCurrentPass(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">New Password</label>
              <input type="password" value={newPass} onChange={e => setNewPass(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Confirm Password</label>
              <input type="password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary" />
            </div>
          </div>
          <button onClick={() => save("Password")}
            className="mt-4 gradient-teal text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Update Password
          </button>
        </div>

        {/* Language */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
            <Globe className="h-5 w-5 text-primary" /> Language
          </h2>
          <div className="flex gap-3">
            <button onClick={() => setLanguage("en")}
              className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all ${language === "en" ? "gradient-teal text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary"}`}>
              English
            </button>
            <button onClick={() => setLanguage("ar")}
              className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all ${language === "ar" ? "gradient-teal text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary"}`}>
              العربية
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
            <Bell className="h-5 w-5 text-primary" /> Notifications
          </h2>
          <div className="space-y-3">
            {[
              { label: "Email Notifications", state: emailNotif, set: setEmailNotif },
              { label: "Event Reminders", state: eventReminder, set: setEventReminder },
              { label: "Job Match Alerts", state: jobAlert, set: setJobAlert },
            ].map((n) => (
              <div key={n.label} className="flex items-center justify-between rounded-lg border border-border/50 p-3">
                <span className="text-sm text-foreground">{n.label}</span>
                <button
                  onClick={() => n.set(!n.state)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${n.state ? "bg-primary" : "bg-secondary"}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${n.state ? "translate-x-6" : "translate-x-1"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-xl border border-red-500/30 bg-card p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-red-500 mb-2">
            <Trash2 className="h-5 w-5" /> Danger Zone
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Once you delete your account, there is no going back.
          </p>
          {!showDelete ? (
            <button onClick={() => setShowDelete(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
              Delete Account
            </button>
          ) : (
            <div className="flex gap-3">
              <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                Confirm Delete
              </button>
              <button onClick={() => setShowDelete(false)}
                className="border border-border text-muted-foreground px-5 py-2 rounded-lg text-sm font-medium hover:border-primary transition-colors">
                Cancel
              </button>
            </div>
          )}
        </div>

      </main>
    </div>
  )
}
