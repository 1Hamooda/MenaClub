"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const announcements = [
  {
    id: 1,
    title: "Afaq Forum Registration Now Open",
    category: "Events",
    date: "Mar 1, 2026",
    content: "Registration for the Afaq Forum — Youth Clubs Meetup at PPU is now open. Don't miss this opportunity to connect with all youth clubs!",
    pinned: true,
  },
  {
    id: 2,
    title: "Feed & Benefit Initiative — New Sessions",
    category: "Workshop",
    date: "Feb 20, 2026",
    content: "New study sessions and workshops are available. Come learn, share your knowledge, and benefit the community.",
    pinned: false,
  },
  {
    id: 3,
    title: "MENA Reads — New Book Announced",
    category: "General",
    date: "Feb 15, 2026",
    content: "Our reading club has announced the next book for discussion. Join us for an enriching conversation and critical thinking session.",
    pinned: false,
  },
  {
    id: 4,
    title: "Volunteer Appreciation Week",
    category: "General",
    date: "Feb 10, 2026",
    content: "Join us in celebrating our amazing volunteers who make everything possible at MENA Club.",
    pinned: false,
  },
]

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10">
        <h1 className="mb-2 text-3xl font-bold">Announcements</h1>
        <p className="mb-8 text-muted-foreground">Stay updated with the latest news from MENA Club</p>

        <div className="space-y-4">
          {announcements.map((a, i) => (
            <Link key={i} href={`/announcements/${a.id}`}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`rounded-xl border p-6 cursor-pointer hover:shadow-md transition-shadow ${
                  a.pinned ? "border-primary/30 bg-accent" : "border-border bg-card"
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  {a.pinned && (
                    <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                      📌 Pinned
                    </span>
                  )}
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                    {a.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{a.date}</span>
                </div>
                <h2 className="mb-2 text-lg font-semibold">{a.title}</h2>
                <p className="text-muted-foreground">{a.content}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}