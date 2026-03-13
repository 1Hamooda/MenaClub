"use client"

import { useState } from "react"
import { User, Lock, Globe, Bell, Settings } from "lucide-react"

export default function AdminSettingsPage() {
  const [notifications, setNotifications] = useState({
    newReg: true,
    eventApp: true,
    attendance: false,
  })
  const [autoApproveVol, setAutoApproveVol] = useState(true)
  const [requireApproval, setRequireApproval] = useState(true)

  const Toggle = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        value ? "bg-primary" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          value ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )

  return (
    <div className="flex flex-col gap-6 max-w-2xl">

      <div>
        <h1 className="text-2xl font-bold text-foreground">Admin Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and system preferences</p>
      </div>

      {/* Personal Info */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <User className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Personal Information</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
            <input
              type="text"
              defaultValue="Admin User"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
            <input
              type="email"
              defaultValue="admin@menaclub.org"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
        <button className="mt-4 bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          Save Changes
        </button>
      </div>

      {/* Change Password */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <Lock className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Change Password</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Current Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Confirm New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
        <button className="mt-4 bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          Update Password
        </button>
      </div>

      {/* User Management Settings */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <Settings className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">User Management Settings</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between rounded-lg border border-border/50 p-4">
            <div>
              <p className="text-sm font-medium text-foreground">Auto-approve Volunteers</p>
              <p className="text-xs text-muted-foreground">New volunteers get instant access</p>
            </div>
            <Toggle value={autoApproveVol} onChange={() => setAutoApproveVol(!autoApproveVol)} />
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/50 p-4">
            <div>
              <p className="text-sm font-medium text-foreground">Require Member Approval</p>
              <p className="text-xs text-muted-foreground">Members need admin approval to join</p>
            </div>
            <Toggle value={requireApproval} onChange={() => setRequireApproval(!requireApproval)} />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bell className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Notification Settings</h2>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { key: "newReg", label: "New Registration Alerts", desc: "Get notified when someone registers" },
            { key: "eventApp", label: "Event Application Alerts", desc: "Alerts for new event applications" },
            { key: "attendance", label: "Attendance Issue Alerts", desc: "Alerts for attendance problems" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <Toggle
                value={notifications[item.key as keyof typeof notifications]}
                onChange={() => setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key as keyof typeof notifications] }))}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <Globe className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Language</h2>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-lg text-sm font-medium bg-primary text-white">
            English
          </button>
          <button className="px-5 py-2 rounded-lg text-sm font-medium border border-border text-muted-foreground hover:bg-accent transition-colors">
            العربية
          </button>
        </div>
      </div>

    </div>
  )
}
