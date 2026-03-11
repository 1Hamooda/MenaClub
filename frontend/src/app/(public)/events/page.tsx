"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Users, MapPin } from "lucide-react"

type Event = {
  id: number
  title: string
  category: string
  date: string
  location: string
  spots: number
  roles: string[]
  status: "Upcoming" | "Open" | "Closed"
}

const DUMMY_EVENTS: Event[] = [
  {
    id: 1,
    title: "Bisawa3dina Environmental Initiative",
    category: "Community",
    date: "Feb 2023",
    location: "Palestine Polytechnic University",
    spots: 40,
    roles: ["Coordinator", "Volunteer"],
    status: "Closed",
  },
  {
    id: 2,
    title: "Iftar for International Students",
    category: "Social",
    date: "Ramadan 2024",
    location: "Palestine Polytechnic University",
    spots: 70,
    roles: ["Organizer", "Host"],
    status: "Closed",
  },
  {
    id: 3,
    title: "MENA Reads — Reading Club",
    category: "Workshop",
    date: "Ongoing",
    location: "Hebron",
    spots: 30,
    roles: ["Facilitator", "Speaker"],
    status: "Open",
  },
  {
    id: 4,
    title: "Tawjihi Celebration Day",
    category: "Social",
    date: "Summer 2024",
    location: "Hebron",
    spots: 50,
    roles: ["Coordinator", "Volunteer"],
    status: "Closed",
  },
  {
    id: 5,
    title: "Feed & Benefit Initiative",
    category: "Workshop",
    date: "Ongoing",
    location: "Hebron",
    spots: 35,
    roles: ["Mentor", "Presenter"],
    status: "Open",
  },
  {
    id: 6,
    title: "Afaq Forum — Youth Clubs Meetup",
    category: "Conference",
    date: "2025",
    location: "Palestine Polytechnic University",
    spots: 110,
    roles: ["Moderator", "Coordinator", "Usher"],
    status: "Upcoming",
  },
]

const CATEGORIES = ["All", "Conference", "Workshop", "Social", "Community"]

const STATUS_COLORS = {
  Upcoming: "bg-gray-100 text-gray-700",
  Open: "bg-teal-100 text-teal-700",
  Closed: "bg-red-100 text-red-600",
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function EventsPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredEvents = DUMMY_EVENTS.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === "All" || event.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">

      <div className="px-6 pt-10 pb-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Events</h1>
        <p className="mt-1 text-muted-foreground">Discover and join MENA Club initiatives</p>
      </div>

      <div className="px-6 max-w-6xl mx-auto flex flex-wrap items-center gap-3 mb-8">
        <div className="flex items-center border border-border rounded-full px-4 py-2 w-80 gap-2 bg-background">
          <span className="text-muted-foreground text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none text-sm w-full bg-transparent"
          />
        </div>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:border-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
        {filteredEvents.length === 0 ? (
          <p className="text-muted-foreground col-span-3 text-center py-20">No events found.</p>
        ) : (
          filteredEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="gradient-teal h-40 flex items-center justify-center relative">
                <Calendar className="h-12 w-12 text-white opacity-50" />
                <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${STATUS_COLORS[event.status]}`}>
                  {event.status}
                </span>
              </div>

              <div className="p-5">
                <span className="mb-2 inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                  {event.category}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{event.title}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {event.location}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {event.roles.map((role) => (
                    <span key={role} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                      {role}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" /> {event.spots} spots
                  </span>
                  <Link href={`/events/${event.id}`}>
                    <button className="gradient-teal text-primary-foreground text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}