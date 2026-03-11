"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Users, Clock, Tag } from "lucide-react"

type Event = {
  id: number
  title: string
  category: string
  date: string
  location: string
  spots: number
  roles: string[]
  status: "Upcoming" | "Open" | "Closed"
  description: string
  duration: string
  image: string
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
    description: "A community-driven environmental initiative in collaboration with PPU. We planted 100 trees, hung awareness posters, cleaned the campus, painted facilities, and provided water stations for stray cats.",
    duration: "1 Day",
    image: "/events/bisawadina.jpg",
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
    description: "A warm Ramadan iftar gathering organized for international students, with home-cooked meals prepared by students' mothers. This event was held for two consecutive years to strengthen social bonds.",
    duration: "1 Evening",
    image: "/events/iftar.jpg",
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
    description: "A reading club for thinkers and book lovers, promoting culture through book discussions, text analysis workshops, and critical thinking sessions.",
    duration: "Weekly",
    image: "/events/reading.jpg",
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
    description: "A fun recreational day organized for Tawjihi students after their exams, aimed at relieving stress and boosting their morale.",
    duration: "1 Day",
    image: "/events/tawjihi.jpg",
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
    description: "Providing a study space for students and entrepreneurs in exchange for hosting workshops and community initiatives that benefit society.",
    duration: "Ongoing",
    image: "/events/feed.jpg",
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
    description: "A large forum bringing together all youth clubs at PPU, aiming to introduce students to club opportunities, develop skills, encourage community engagement, and build a collaborative youth community.",
    duration: "1 Day",
    image: "/events/afaq.jpg",
  },
]

const STATUS_COLORS = {
  Upcoming: "bg-gray-100 text-gray-700",
  Open: "bg-teal-100 text-teal-700",
  Closed: "bg-red-100 text-red-600",
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function EventDetailPage() {
  const { id } = useParams()
  const event = DUMMY_EVENTS.find((e) => e.id === Number(id))

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground text-lg">Event not found.</p>
        <Link href="/events">
          <button className="gradient-teal text-primary-foreground px-6 py-2 rounded-full text-sm">
            Back to Events
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/events">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Events
          </button>
        </Link>
      </div>

      {/* Event Image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 mt-6"
      >
        <div className="relative h-72 rounded-2xl overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none"
            }}
          />
          <div className="absolute inset-0 gradient-teal opacity-60" />
          <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${STATUS_COLORS[event.status]}`}>
            {event.status}
          </span>
        </div>
      </motion.div>

      {/* Event Details */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 pb-16"
      >
        {/* Left: Main Info */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground mb-2">
              {event.category}
            </span>
            <h1 className="text-3xl font-bold text-foreground">{event.title}</h1>
          </div>

          <p className="text-muted-foreground leading-relaxed">{event.description}</p>

          {/* Roles */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Available Roles</h3>
            <div className="flex flex-wrap gap-2">
              {event.roles.map((role) => (
                <span key={role} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Info Card */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4 h-fit">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>{event.spots} spots available</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            <span>{event.duration}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Tag className="h-4 w-4 text-primary" />
            <span>{event.category}</span>
          </div>

          <button
            disabled={event.status === "Closed"}
            className={`w-full mt-2 py-2 rounded-full text-sm font-medium transition-opacity ${
              event.status === "Closed"
                ? "bg-secondary text-muted-foreground cursor-not-allowed"
                : "gradient-teal text-primary-foreground hover:opacity-90"
            }`}
          >
            {event.status === "Closed" ? "Registration Closed" : "Register Now"}
          </button>
        </div>
      </motion.div>
    </div>
  )
}