"use client";

import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const events = [
  { title: "Youth Leadership Summit", date: "Mar 25", location: "Riyadh", roles: ["Registration Desk", "Photography", "Logistics"], emoji: "🏛️" },
  { title: "Tech for Good Hackathon", date: "Apr 10", location: "Dubai", roles: ["Volunteer Lead", "Setup Crew", "Tech Support"], emoji: "💻" },
  { title: "Community Clean-up", date: "Apr 18", location: "Amman", roles: ["Team Captain", "Logistics", "Supplies"], emoji: "🌿" },
];

export default function VolunteerEvents() {
  const [selectedRoles, setSelectedRoles] = useState<Record<string, string>>({});

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Event Registration</h1>
        <p className="text-gray-500">Register for upcoming events and select your volunteer role.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e) => (
          <div key={e.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="h-28 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-4xl">
              {e.emoji}
            </div>
            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-semibold">{e.title}</h3>
                <div className="flex gap-3 mt-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{e.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{e.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {e.roles.map((r) => (
                  <span key={r} className="text-xs border border-gray-300 text-gray-600 px-2 py-0.5 rounded-full">
                    {r}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <select
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={selectedRoles[e.title] || ""}
                  onChange={(ev) => setSelectedRoles({ ...selectedRoles, [e.title]: ev.target.value })}
                >
                  <option value="">Select role</option>
                  {e.roles.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
                <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}