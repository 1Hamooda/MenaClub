"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home, Calendar, Bell, Briefcase, Users, BarChart3,
  FileText, Settings, LogOut, Menu, X, ChevronRight,
  ClipboardCheck, Award, Send, Key, Download
} from "lucide-react";

type Role = "member" | "volunteer" | "admin";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

const navConfig: Record<Role, NavItem[]> = {
  member: [
    { label: "Dashboard", href: "/member/dashboard", icon: Home },
    { label: "Browse Events", href: "/member/events", icon: Calendar },
    { label: "Notifications", href: "/member/notifications", icon: Bell, badge: "3" },
    { label: "AI Job Match", href: "/member/jobs", icon: Briefcase },
  ],
  volunteer: [
    { label: "Dashboard", href: "/volunteer/dashboard", icon: Home },
    { label: "Events", href: "/volunteer/events", icon: Calendar },
    { label: "Check-in", href: "/volunteer/checkin", icon: ClipboardCheck },
    { label: "Certificates", href: "/volunteer/certificates", icon: Award },
    { label: "Notifications", href: "/volunteer/notifications", icon: Bell, badge: "2" },
  ],
  admin: [
    { label: "Dashboard", href: "/admin/dashboard", icon: Home },
    { label: "Members", href: "/admin/users", icon: Users },
    { label: "Events", href: "/admin/events", icon: Calendar },
    { label: "Applications", href: "/admin/applications", icon: FileText },
    { label: "Announcements", href: "/admin/announcements", icon: Send },
    { label: "Notifications", href: "/admin/notifications", icon: Bell },
    { label: "Attendance", href: "/admin/attendance", icon: Key },
    { label: "Certificates", href: "/admin/certificates", icon: Download },
    { label: "Reports", href: "/admin/analytics", icon: BarChart3 },
  ],
};

const roleLabels: Record<Role, string> = {
  member: "Member",
  volunteer: "Volunteer",
  admin: "Admin",
};

export default function DashboardLayout({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const items = navConfig[role];

  return (
    <div className="min-h-screen flex bg-gray-100/30">

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">

          {/* Logo */}
          <div className="p-4 border-b flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="MENA Club" width={32} height={32} quality={200} unoptimized className="h-8 w-auto" />
            </Link>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Role Badge */}
          <div className="px-4 py-3">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
              {roleLabels[role]} Panel
            </span>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-primary/10 text-primary"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {isActive && <ChevronRight className="h-3 w-3" />}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Links */}
          <div className="p-3 border-t space-y-1">
            <Link
              href="/member/profile"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Link>
          </div>

        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Header */}
        <header className="sticky top-0 z-30 h-14 border-b bg-white/95 backdrop-blur flex items-center px-4 gap-3">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              AM
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>

      </div>
    </div>
  );
}