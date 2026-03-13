"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
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

export default function AnnouncementDetailPage() {
  const { id } = useParams()
  const announcement = announcements.find((a) => a.id === Number(id))

  if (!announcement) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Announcement not found.</p>
        <Link href="/announcements">
          <button className="gradient-teal text-primary-foreground px-6 py-2 rounded-full text-sm">
            Back to Announcements
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10 max-w-2xl">

        <Link href="/announcements">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Announcements
          </button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-xl border p-8 ${announcement.pinned ? "border-primary/30 bg-accent" : "border-border bg-card"}`}
        >
          <div className="mb-4 flex items-center gap-2">
            {announcement.pinned && (
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                📌 Pinned
              </span>
            )}
            <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
              {announcement.category}
            </span>
            <span className="text-xs text-muted-foreground">{announcement.date}</span>
          </div>

          <h1 className="text-2xl font-bold mb-4">{announcement.title}</h1>
          <p className="text-muted-foreground leading-relaxed">{announcement.content}</p>
        </motion.div>

      </div>
    </div>
  )
}