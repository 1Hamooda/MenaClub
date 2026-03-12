import { Plus, Edit, Archive } from "lucide-react";

const events = [
  { id: 1, title: "Youth Leadership Summit", date: "Mar 25", location: "Riyadh", applicants: 85, status: "upcoming" },
  { id: 2, title: "Tech for Good Hackathon", date: "Apr 10", location: "Dubai", applicants: 62, status: "upcoming" },
  { id: 3, title: "Community Clean-up", date: "Feb 15", location: "Amman", applicants: 120, status: "completed" },
  { id: 4, title: "Cultural Exchange Night", date: "Dec 5", location: "Cairo", applicants: 95, status: "archived" },
];

const statusStyles: Record<string, string> = {
  upcoming: "bg-primary/10 text-primary",
  completed: "bg-green-100 text-green-700",
  archived: "bg-gray-100 text-gray-600",
};

export default function AdminEvents() {
  return (
    <div className="space-y-6">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Event Management</h1>
          <p className="text-gray-500">Create, edit, and manage events.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
          <Plus className="h-4 w-4" /> Create Event
        </button>
      </div>

      {/* Create Form */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold mb-4">New Event</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Event Title</label>
            <input placeholder="Event name" className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Date</label>
            <input type="date" className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Location</label>
            <input placeholder="City, Country" className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Max Participants</label>
            <input type="number" placeholder="50" className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea rows={3} placeholder="Describe the event..." className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">Save Event</button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">Cancel</button>
        </div>
      </div>

      {/* Event Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Event</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Location</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Applicants</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
              <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {events.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{e.title}</td>
                <td className="px-4 py-3 text-gray-500">{e.date}</td>
                <td className="px-4 py-3">{e.location}</td>
                <td className="px-4 py-3">{e.applicants}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${statusStyles[e.status]}`}>
                    {e.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-1">
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition">
                      <Archive className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}