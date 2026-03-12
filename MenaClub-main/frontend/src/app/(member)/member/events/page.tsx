"use client";

import { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  { id: 1, title: "Youth Leadership Summit 2026", date: "Mar 25", location: "Riyadh", spots: 50, roles: ["Coordinator", "Facilitator", "Media"], emoji: "🏛️" },
  { id: 2, title: "Tech for Good Hackathon", date: "Apr 10", location: "Dubai", spots: 30, roles: ["Developer", "Designer", "Presenter"], emoji: "💻" },
  { id: 3, title: "Cultural Exchange Night", date: "May 5", location: "Cairo", spots: 80, roles: ["Host", "Performer", "Organizer"], emoji: "🎭" },
  { id: 4, title: "MENA Debate Championship", date: "Jun 8", location: "Doha", spots: 40, roles: ["Debater", "Judge", "Timekeeper"], emoji: "🎤" },
];

export default function MemberEvents() {
  const [selectedRoles, setSelectedRoles] = useState<Record<number, string>>({});

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Browse Events</h1>
        <p className="text-gray-500">Find events and apply for roles that interest you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

            <div className="h-28 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-4xl">
              {event.emoji}
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <div className="flex gap-3 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{event.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{event.location}</span>
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{event.spots} spots</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Available Roles</p>
                <div className="flex flex-wrap gap-1.5">
                  {event.roles.map((r) => (
                    <span key={r} className="text-xs border border-gray-300 text-gray-600 px-2 py-0.5 rounded-full">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <select
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={selectedRoles[event.id] || ""}
                  onChange={(e) => setSelectedRoles({ ...selectedRoles, [event.id]: e.target.value })}
                >
                  <option value="">Select role</option>
                  {event.roles.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
                  Apply
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}