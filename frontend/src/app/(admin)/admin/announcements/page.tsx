import { Plus, Edit, Trash2, Send } from "lucide-react";

const announcements = [
  { id: 1, title: "Summer Volunteer Program Applications Open", status: "active", date: "Mar 5", views: 342 },
  { id: 2, title: "MENA Club Wins Regional Award", status: "active", date: "Mar 1", views: 589 },
  { id: 3, title: "New Partnership with UNDP", status: "active", date: "Feb 25", views: 412 },
  { id: 4, title: "Updated Community Guidelines", status: "archived", date: "Feb 20", views: 267 },
];

const statusStyles: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  archived: "bg-gray-100 text-gray-600",
};

export default function AdminAnnouncements() {
  return (
    <div className="space-y-6">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Announcements</h1>
          <p className="text-gray-500">Create and manage announcements.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
          <Plus className="h-4 w-4" /> New Announcement
        </button>
      </div>

      {/* Create Form */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold mb-4">Create Announcement</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input placeholder="Announcement title" className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Content</label>
            <textarea rows={4} placeholder="Write your announcement..." className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
              <Send className="h-4 w-4" /> Publish
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
              Save Draft
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Title</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Views</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
              <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {announcements.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{a.title}</td>
                <td className="px-4 py-3 text-gray-500">{a.date}</td>
                <td className="px-4 py-3">{a.views}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${statusStyles[a.status]}`}>
                    {a.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-1">
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500 transition">
                      <Trash2 className="h-4 w-4" />
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